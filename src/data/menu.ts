import type { Menu } from '@/types'

//串とん以外のフードメニュー
export const foodMenu: Menu = {
  id: 'foods',
  title: 'フードメニュー',
  content: {
    type: 'food',
    items: [
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
  },
}

//串とんメニュー
export const kushiMenu: Menu = {
  id: 'kushi',
  title: '串とん',
  content: {
    type: 'food',
    items: [
      {
        name: '豚バラ',
      },
      {
        name: '豚タン',
      },
      {
        name: '豚テッチャン',
      },
      {
        name: '豚ハラミ',
      },
      {
        name: 'コブクロ',
      },
      {
        name: 'カシラ',
      },
      {
        name: 'ハツ',
      },
      {
        name: 'レバー',
      },
      {
        name: 'ネック',
      },
      {
        name: '？',
      },
      {
        name: '自家製つくね',
      },
      {
        name: '激辛ソーセージ',
      },
      {
        name: 'アスパラベーコン',
      },
      {
        name: 'チーズベーコン',
      },
    ],
  },
}

export const DrinkMenu: Menu = {
  id: 'drink',
  title: 'ドリンクメニュー',
  content: {
    type: 'drink',
    brands: [
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
  },
}
