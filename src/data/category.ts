export const categories = [
  {
    id: 1,
    name: '家具',
    description: '北欧デザインの家具です。'
  },
  {
    id: 2,
    name: '家電',
    description: '北欧デザインの家電です。'
  },
  {
    id: 3,
    name: '調理器具',
    description: '北欧デザインの調理器具です。'
  }
]

export const items: { [key: number]: { id: number; name: string; price: number; description: string }[] } = {
  1: [
    {
      id: 1,
      name: 'ダイニングテーブル',
      price: 30000,
      description: '丸みのあるダイニングテーブルです。'
    },
    {
      id: 2,
      name: 'チェア',
      price: 20000,
      description: '落ち着いたデザインの木製チェアです。'
    },
    {
      id: 3,
      name: 'レザーソファ',
      price: 54000,
      description: '上質なブラックの色合いが特徴な2人掛けソファです。'
    }
  ],
  2: [
    {
      id: 21,
      name: 'テレビ',
      price: 80000,
      description: '40型、フルハイビジョン対応、LED液晶（HDD内蔵）'
    },
    {
      id: 22,
      name: '洗濯機',
      price: 69800,
      description: '容量6kg、自動洗剤投入、全自動洗濯機'
    },
    {
      id: 23,
      name: '冷蔵庫',
      price: 130000,
      description: '大容量500L、観音開き、真ん中野菜室に対応'
    }
  ],
  3: [
    {
      id: 31,
      name: 'フライパン',
      price: 12000,
      description: 'フライパン 28cm IH ダイヤモンドコートフライパン'
    },
    {
      id: 32,
      name: '鍋',
      price: 15000,
      description: '無加水鍋 24cm 深型 IH対応'
    }
  ]
}
