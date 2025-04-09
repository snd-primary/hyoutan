import type { DrinkMenu, FoodMenu, SakeMenu } from '@/types/menu.ts'

export const menuTitles = {
  foods: '一品料理',
  yakiton: 'やきとん',
  sake: '日本酒',
  drink: 'お飲み物',
}

//串とん以外のフードメニュー
export const foods: FoodMenu = {
  title: menuTitles.foods,
  contents: [
    {
      name: '牛すじ煮込み',
      price: 600,
    },
    {
      name: '明太じゃがバター',
      price: 700,
    },
    {
      name: 'スペアリブ',
      price: 600,
    },
    {
      name: 'カキフライ',
      price: 750,
    },
    {
      name: 'ぶりかま焼',
      price: 550,
    },
    {
      name: '海くらげ',
      price: 400,
    },
    {
      name: '豚足',
      price: 350,
    },
    {
      name: '豚たん唐揚げ',
      price: 750,
    },
    {
      name: 'アジフライ',
      price: 700,
    },
    {
      name: 'フライドポテト',
      price: 500,
    },
    {
      name: 'Bigソーセージ',
      price: 330,
    },
    {
      name: 'オムライス風',
      price: 1000,
    },
    {
      name: 'おやじの気まぐれパスタor丼',
      price: 1000,
    },
    {
      name: '漬物盛り合わせ',
      price: 400,
    },
    {
      name: 'おにぎり',
      price: 250,
    },
  ],
}

//串とんメニュー
export const yakiton: FoodMenu = {
  title: menuTitles.yakiton,
  contents: [
    {
      name: '豚バラ',
      description: 'ジューシーな脂と柔らかい肉質が特徴の定番部位',
    },
    {
      name: '豚タン',
      description: 'コリコリとした食感が楽しめる希少部位',
    },
    {
      name: '豚テッチャン',
      description: '弾力のある食感と旨味が詰まった小腸部位',
    },
    {
      name: '豚ハラミ',
      description: '横隔膜の部位で柔らかく濃厚な旨味が特徴',
    },
    {
      name: 'コブクロ',
      description: '豚の子宮。独特の食感と風味が楽しめる珍味',
    },
    {
      name: 'カシラ',
      description: '豚の頬肉で濃厚な味と適度な歯ごたえが魅力',
    },
    {
      name: 'ハツ',
      description: '豚の心臓。程よい弾力と濃厚な味わい',
    },
    {
      name: 'レバー',
      description: '鉄分豊富な豚レバー。滑らかな舌触りが特徴',
    },
    {
      name: 'ネック',
      description: '首周りの肉で旨味が強く、独特の食感を楽しめる',
    },
    {
      name: 'ノド',
      description: '程よい歯ごたえと独特の風味がある喉の部分',
    },
    {
      name: '自家製つくね',
      description: '挽き肉と秘伝のスパイスで作る、ふっくら食感のつくね',
    },
    {
      name: '激辛ソーセージ',
      description: '辛さ好きにはたまらない特製唐辛子入りソーセージ',
    },
    {
      name: 'アスパラベーコン',
      description: '新鮮なアスパラをベーコンで巻いた人気の一品',
    },
    {
      name: 'チーズベーコン',
      description: 'とろけるチーズとベーコンの相性抜群の組み合わせ',
    },
  ],
}

//ドリンク(日本酒以外)
export const drink: DrinkMenu = {
  title: menuTitles.drink,
  contents: [
    {
      category: 'ハイボール',
      items: [
        { name: '角ハイボール', price: 500 },
        { name: '角瓶ボトルキープ', price: 4500 },
        { name: 'サントリーハイボール', price: 550 },
      ],
    },
    {
      category: 'ビール',
      items: [
        { name: 'バイエル', price: 580 },
        { name: 'サッポロ黒ラベル', price: 600 },
        { name: 'アサヒスーパードライ', price: 600 },
        { name: 'キリン一番搾り', price: 600 },
      ],
    },
    {
      category: 'サワー・レモンサワー',
      items: [
        { name: 'レモンサワー', price: 450 },
        { name: 'こだわり酒場のレモンサワー', price: 450 },
        { name: 'ライムサワー', description: '各種', price: 450 },
        { name: '巨峰サワー', price: 450 },
        { name: 'カルピスサワー', price: 450 },
      ],
    },
    {
      category: '梅酒・焼酎',
      items: [
        { name: '梅酒', price: 500 },
        { name: '焼酎', description: '各種', price: 550 },
      ],
    },
    {
      category: 'ソフトドリンク',
      items: [
        { name: 'コーラ', price: 400 },
        { name: 'ジンジャーエール', price: 400 },
        { name: 'オレンジ', price: 400 },
        { name: 'ウーロン茶', price: 400 },
        { name: 'カルピス', price: 400 },
        { name: '黒烏龍茶', price: 400 },
        { name: '緑茶', price: 400 },
      ],
    },
    {
      category: '日本酒',
      items: [
        { name: '八海山', price: 650 },
        { name: '大吟醸', price: 1000 },
        { name: '越乃寒梅', price: 1000 },
        { name: '三重', price: 1000 },
        { name: '佐々木', price: 650 },
        { name: '越の誉', price: 550 },
        { name: '雪の舞', price: 550 },
        { name: '獺祭', price: 1200 },
      ],
    },
  ],
}

//日本酒
export const sake: SakeMenu = {
  title: menuTitles.sake,
  contents: [
    {
      brand: '黒竜',
      prefecture: '福井',
      items: [
        { name: '純米吟醸', price: 440 },
        { name: '季節酒秋あがり', price: 580 },
        { name: '大吟醸', price: 935 },
      ],
    },
    {
      brand: '九頭竜',
      prefecture: '福井',
      items: [
        { name: '逸品', price: 385 },
        { name: '吟醸', price: 440 },
      ],
    },
    {
      brand: '新政',
      prefecture: '秋田',
      items: [
        { name: 'No6X', price: 935 },
        { name: 'No6S', price: 925 },
        { name: 'No6R', price: 660 },
        { name: 'コスモス', price: 770 },
        { name: '陽乃島', price: 770 },
        { name: 'エクリュ -生成-', price: 660 },
        { name: '亜麻猫', price: 660 },
      ],
    },
    {
      brand: '飛露喜',
      prefecture: '福島',
      items: [
        { name: '特別純米生詰', price: 605 },
        { name: '純米吟醸', price: 748 },
        { name: '純米大吟醸', price: 990 },
      ],
    },
    {
      brand: 'くどき上手',
      prefecture: '山形',
      items: [
        { name: '純米大吟醸Jr.ジューシー辛口', price: 495 },
        { name: '純米大吟醸Jr.愛山', price: 693 },
      ],
    },
    {
      brand: '鳳凰美田',
      prefecture: '栃木',
      items: [{ name: '純米酒', price: 528 }],
    },
    {
      brand: '楯野川',
      prefecture: '山形',
      items: [{ name: '純米大吟醸', price: 440 }],
    },
    {
      brand: '田酒',
      prefecture: '青森',
      items: [{ name: '特別純米酒', price: 440 }],
    },
    {
      brand: '紀土',
      prefecture: '和歌山',
      items: [{ name: '純米吟醸', price: 440 }],
    },
    {
      brand: '写楽',
      prefecture: '福島',
      items: [{ name: '純米酒', price: 440 }],
    },
    {
      brand: '仙禽',
      prefecture: '栃木',
      items: [{ name: 'モダン無垢', price: 440 }],
    },
    {
      brand: '獺祭',
      prefecture: '山口',
      items: [{ name: '純米大吟醸45', price: 440 }],
    },
    {
      brand: '宮泉',
      prefecture: '福島',
      items: [{ name: '純米酒', price: 385 }],
    },
    {
      brand: '出羽桜',
      prefecture: '山形',
      items: [{ name: '霊女沖大吟醸', price: 495 }],
    },
    {
      brand: 'AKABU',
      prefecture: '岩手',
      items: [{ name: '純米酒', price: 385 }],
    },
    {
      brand: '川中島幻舞',
      prefecture: '長野',
      items: [{ name: '吟醸', price: 528 }],
    },
  ],
}
