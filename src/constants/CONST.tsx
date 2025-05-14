

  export const currencies: ItemsOption<'usd' | 'eur' | 'uah'>[] = [
    { code: 'usd', label: 'USD', value: "$", fix: "1" },
    { code: 'eur', label: 'EUR', value: "€", fix: "1.2"  },
    { code: 'uah', label: 'UAH', value: "₴", fix: "45"  },
  ];

  export const lunguages: ItemsOption<'uk' | 'ua' | 'eu'>[] = [
    { code: 'uk', label: 'UK', img: "/images/user-profile-circle.1.svg" },
    { code: 'ua', label: 'UA', img: "/images/ukr_flag.svg" },
    { code: 'eu', label: 'EU', img: "/images/european-union-round-flag.svg" },
  ];

  export interface ItemsOption<T extends string = string> {
    code: T;
    label: string;
    value?: string;
    img?: string
    fix?: string
  }
  
export  interface ItemsSelectorProps<T extends string = string> {
    options: ItemsOption<T>[];
    selected: T;
    onChange: (code: T) => void;
  }
export  interface IconProps<T extends string = string> {
    options: ItemsOption<T>[];
    selected: T;
  }

export const itemsMenu = [
  {link: '/login',
    name: "Login",
    style_name: "narrow"
  },
  {link: '/registration',
    name: "Registration",
    style_name: "narrow"
  },
  {link: '/orders',
    name: "Orders",
    style_name: "great"
  },
]

export const itemsForLogin = [
  {url: '/images/google.svg',
    alt: "Google",
  },
  {url: '/images/apple.svg',
    alt: "Apple",
  },
  {url: '/images/facebook.svg',
    alt: "Facebook",
  },
  {url: '/images/discord.svg',
    alt: "Discord",
  },
  {url: '/images/telegram.svg',
    alt: "Telegram",
  },
]

export const transactionData = [
  {id: "12345",
  date: "12.05.2005",
  status: "Success",
  game_name: "Gregory",
  game_id: "12345678",
  balance: "138.99"
  },
  {id: "12346",
  date: "12.05.2005",
  status: "Unsuccess",
  game_name: "Gregory",
  game_id: "12345678",
  balance: "138.99"
  },
  {id: "12347",
  date: "12.05.2005",
  status: "Success",
  game_name: "Gregory",
  game_id: "12345678",
  balance: "138.99"
  },
  {id: "12348",
  date: "12.05.2005",
  status: "Pending",
  game_name: "Gregory",
  game_id: "12345678",
  balance: "138.99"
  },
]