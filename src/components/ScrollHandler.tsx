import { useEffect } from "react"

interface ScrollHandlerProps {
  menuSectionId: string
  offsetPx: number
}

const menuTitles = {
  food: "#一品料理",
  yakiton: "#やきとん",
  sake: "#日本酒",
  drink: "#ドリンク",
}

/**
 * スクロール挙動をカスタマイズするコンポーネント
 */
export const ScrollHandler: React.FC<ScrollHandlerProps> = ({ menuSectionId, offsetPx }) => {
  useEffect(() => {
    const menuTitleValues = Object.values(menuTitles)

    // クリック時のスクロール制御
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // アンカー要素を探す（クリックされた要素自体、または親要素）
      let anchorElement: HTMLElement | null = target
      while (anchorElement && anchorElement.tagName !== "A") {
        anchorElement = anchorElement.parentElement
      }

      // アンカー要素が見つかった場合の処理
      if (anchorElement && anchorElement.tagName === "A") {
        const href = anchorElement.getAttribute("href")

        // hrefが'#'で始まるハッシュリンクの場合
        if (href && href.startsWith("#")) {
          const hrefWithoutHash = href.substring(1) // '#' を除去

          // メニューセクションへのリンクかどうかをチェック
          if (menuTitleValues.includes(hrefWithoutHash)) {
            e.preventDefault()

            const targetElement = document.querySelector(href)
            if (targetElement) {
              // ターゲット要素の位置を取得
              const elementPosition = targetElement.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.scrollY - offsetPx

              // スムーズスクロール
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              })
            }
          }
        }
      }
    }

    // クリックイベントリスナーを設定
    document.addEventListener("click", handleLinkClick)

    // クリーンアップ関数
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [menuSectionId, offsetPx])

  // このコンポーネントは何もレンダリングしない
  return null
}
