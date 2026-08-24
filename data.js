/* ==========================================================================
   AKI — данные каталога
   Добавление нового товара = один объект в нужном массиве ниже.
   Обязательные поля: id, name, price, img. Остальные — опциональны.
   ========================================================================== */

const COLLECTIONS = [
  {
    key: "home",
    number: "01",
    title: "HOME",
    subtitle: "Организация и уют в каждом доме",
    tagline: "Уют. Стиль. Гармония.",
    icon: "home",
    banner: "assets/hero/home_lifestyle.jpg",
    features: [
      { icon: "shield", text: "Прочный и надёжный" },
      { icon: "leaf", text: "Экологичный PLA пластик" },
      { icon: "sparkle", text: "Стиль в каждой детали" },
      { icon: "heart", text: "Создано с заботой" }
    ]
  },
  {
    key: "work",
    number: "02",
    title: "WORK",
    subtitle: "Организация и продуктивность в каждом рабочем пространстве",
    tagline: "Порядок. Фокус. Продуктивность.",
    icon: "briefcase",
    banner: "assets/hero/work.jpg",
    features: [
      { icon: "shield", text: "Прочный и надёжный" },
      { icon: "leaf", text: "Экологичный PLA пластик" },
      { icon: "gift", text: "Идеально для офиса и дома" },
      { icon: "sparkle", text: "Стиль и порядок каждый день" }
    ]
  },
  {
    key: "kitchen",
    number: "03",
    title: "KITCHEN",
    subtitle: "Организация и порядок на вашей кухне",
    tagline: "Практично. Аккуратно. Каждый день.",
    icon: "kitchen",
    banner: "assets/hero/kitchen.jpg",
    features: [
      { icon: "leaf", text: "Прочные материалы" },
      { icon: "shield", text: "Надёжные и долговечные" },
      { icon: "sparkle", text: "Удобные и практичные" },
      { icon: "gift", text: "Идеально для кухни и дома" }
    ]
  },
  {
    key: "gaming",
    number: "04",
    title: "GAMING",
    subtitle: "Удобство, порядок и комфорт для настоящих геймеров",
    tagline: "Игровое пространство.",
    icon: "gaming",
    banner: "assets/hero/gaming.jpg",
    features: [
      { icon: "shield", text: "Надёжные материалы" },
      { icon: "layers", text: "3D печать премиум качества" },
      { icon: "gaming", text: "Стильный дизайн для геймеров" },
      { icon: "gift", text: "Отличный подарок для игроков" }
    ]
  },
  {
    key: "beauty",
    number: "05",
    title: "BEAUTY",
    subtitle: "Красота и уход",
    tagline: "Порядок. Эстетика. Вдохновение.",
    icon: "beauty",
    banner: "assets/hero/beauty.jpg",
    features: [
      { icon: "diamond", text: "Стильный дизайн" },
      { icon: "leaf", text: "Качественные материалы" },
      { icon: "box", text: "Удобное хранение" },
      { icon: "heart", text: "Для твоей красоты" }
    ]
  }
];

const PRODUCTS = {
  home: [
    { id: "h01", name: "Большой бокс для хранения", price: 3500, badge: "new", desc: "Вместительный бокс для хранения вещей. Прочный, лёгкий и стильный.", img: "assets/products/p04_TL.jpg" },
    { id: "h02", name: "Малый бокс для хранения", price: 2200, badge: "top", desc: "Компактный бокс для мелочей и аксессуаров.", img: "assets/products/p04_TR.jpg" },
    { id: "h03", name: "Декоративный набор — японский ваби-саби стиль", price: 4000, badge: "new", desc: "Минималистичный набор из 3 штук, идеально подходит для декоративных композиций.", img: "assets/products/p04_BL.jpg" },
    { id: "h04", name: "Чаша в стиле джапанди", price: 2500, badge: "top", desc: "Минималистичная декоративная чаша в стиле Japandi для хранения мелочей и декора.", img: "assets/products/p04_BR.jpg" },

    { id: "h05", name: "Органайзер для ключей и кошелька", price: 2000, badge: "top", desc: "Удобное хранение ключей, кошелька и мелочей. Изящный и лаконичный дизайн.", img: "assets/products/p05_TL.jpg" },
    { id: "h06", name: "Подставка для пультов", price: 1800, badge: "new", desc: "Компактное решение для хранения пультов от техники.", img: "assets/products/p05_TR.jpg" },
    { id: "h07", name: "Минималистичный чехол для коробки с салфетками", price: 4000, badge: "top", desc: "Добавляет уюта и порядка в любое пространство.", img: "assets/products/p05_BL.jpg" },
    { id: "h08", name: "Современная модель для приборов", price: 3500, badge: "sale", desc: "Стильная и функциональная модель для хранения столовых приборов.", img: "assets/products/p05_BR.jpg" },

    { id: "h09", name: "Вешалка для рюкзака и сумок", price: 800, badge: "new", desc: "Удобное решение для хранения рюкзаков и сумок. Подходит для дома, офиса и учебных заведений.", img: "assets/products/p06_TL.jpg" },
    { id: "h10", name: "Соединитель для вешалок", price: 1000, badge: "top", priceNote: "за 4 штуки", desc: "Удобное решение для вертикального хранения одежды. Экономит пространство в шкафу.", img: "assets/products/p06_TR.jpg" },
    { id: "h11", name: "Современный подсвечник для чайных свечей", price: 2500, badge: "new", priceNote: "за 3 штуки", desc: "Стильный набор из 3 подсвечников для чайных свечей. Добавит уюта и атмосферы в любой интерьер.", img: "assets/products/p06_BL.jpg" },
    { id: "h12", name: "Подсвечник в римском стиле", price: 1400, badge: "top", desc: "Элегантный подсвечник в римском стиле добавит изысканности и уюта в интерьер.", img: "assets/products/p06_BR.jpg" },

    { id: "h13", name: "Современная ваза в стиле джапанди", price: 5000, badge: "top", priceNote: "за 3 штуки", desc: "Минималистичный набор из 3 ваз, идеально подходит для декоративных композиций.", img: "assets/products/p07_TL.jpg" },
    { id: "h14", name: "Японди ваза", price: 2000, badge: "sale", desc: "Минималистичная ваза в стиле Japandi. Добавит гармонии и уюта в любой интерьер.", img: "assets/products/p07_TR.jpg" },
    { id: "h15", name: "Современный ребристый горшок для растений Japandi", price: 3000, badge: "new", desc: "Стильный ребристый горшок для домашних растений в актуальном дизайне.", img: "assets/products/p07_BL.jpg" },
    { id: "h16", name: "Милый горшок для растений", price: 1500, badge: "new", desc: "Компактный горшок с изящными изгибами, идеален для комнатных растений.", img: "assets/products/p07_BR.jpg" },

    { id: "h17", name: "Держатель-органайзер для ватных палочек и дисков", price: 2500, badge: "top", desc: "Удобное хранение ватных палочек и дисков в вашей ванной комнате.", img: "assets/products/p08_TL.jpg" },
    { id: "h18", name: "Держатель-органайзер для ватных палочек и дисков", price: 1600, badge: "sale", desc: "Стильный и функциональный органайзер для ватных дисков и палочек.", img: "assets/products/p08_TR.jpg" },
    { id: "h19", name: "Держатель-органайзер для ватных палочек и дисков", price: 2300, badge: "new", desc: "Компактный и элегантный органайзер для вашей ванной комнаты.", img: "assets/products/p08_BL.jpg" },
    { id: "h20", name: "Держатель-органайзер для ватных палочек и дисков", price: 2500, badge: "new", desc: "Практичное решение в стильном современном дизайне.", img: "assets/products/p08_BR.jpg" },

    { id: "h21", name: "Самоотводящаяся мыльница", price: 1500, badge: "new", desc: "Современная мыльница с системой самоотвода, дольше сохраняет мыло сухим.", img: "assets/products/p09_TL.jpg" },
    { id: "h22", name: "Самосливная мыльница", price: 1200, badge: "top", desc: "Вода не задерживается, и мыло остаётся сухим и долговечным.", img: "assets/products/p09_TR.jpg" },
    { id: "h23", name: "Мыльница-дренажный лоток", price: 2500, badge: "new", desc: "Эстетичная мыльница с дренажной конструкцией. Продлевает срок службы мыла.", img: "assets/products/p09_BL.jpg" },
    { id: "h24", name: "Самосливная мыльница", price: 1500, badge: "sale", desc: "Практичное самосливное решение с дренажом. Мыло быстрее высыхает.", img: "assets/products/p09_BR.jpg" },

    { id: "h25", name: "Органайзер для волос, макияжа и косметики, штабелируемый", price: 8500, badge: "new", desc: "Просторный органайзер для хранения мелочей, аксессуаров и косметики, штабелируемый.", img: "assets/products/p10_TL.jpg" },
    { id: "h26", name: "Минималистичный органайзер для ванной комнаты", price: 6000, badge: "top", desc: "Органайзер с секциями, помогает поддерживать порядок и чистоту.", img: "assets/products/p10_TR.jpg" },
    { id: "h27", name: "Современный органайзер для ванной", price: 3600, badge: "new", desc: "Стильный и вместительный органайзер для ванной комнаты.", img: "assets/products/p10_BL.jpg" },
    { id: "h28", name: "Стёганая корзина-органайзер для ванной", price: 2200, badge: "sale", desc: "С нежной и приятной текстурой, помогает поддерживать порядок и чистоту.", img: "assets/products/p10_BR.jpg" },

    { id: "h29", name: "Держатель для зубных щёток и зубной пасты", price: 2000, badge: "top", desc: "Экономит место на раковине, удобное хранение щёток и пасты.", img: "assets/products/p11_TL.jpg" },
    { id: "h30", name: "Держатель для зубных щёток", price: 2500, badge: "new", desc: "Держатель с секциями для нескольких зубных щёток.", img: "assets/products/p11_TR.jpg" },
    { id: "h31", name: "Стакан для зубных щёток", price: 1500, badge: "new", desc: "Стильный и практичный стакан для зубных щёток.", img: "assets/products/p11_BL.jpg" },
    { id: "h32", name: "Подставка для зубных щёток", price: 2000, badge: "top", desc: "Оригинальная и аккуратная подставка в форме кота.", img: "assets/products/p11_BR.jpg" },

    { id: "h33", name: "Мусорное ведро Japandi с нажимной крышкой", price: 5500, badge: "top", desc: "Размеры 240×174 мм. Стиль Japandi для дома.", img: "assets/products/p12_TL.jpg" },
    { id: "h34", name: "Настольная мусорная корзина", price: 2700, badge: "sale", desc: "Размеры 125×125×150 мм.", img: "assets/products/p12_TR.jpg" },
    { id: "h35", name: "Настольная мусорная корзина", price: 4000, badge: "new", desc: "Размеры 125×125×150 мм. Объём 1,0 литра.", img: "assets/products/p12_BL.jpg" },
    { id: "h36", name: "Настольная мусорная корзина", price: 4000, badge: "top", desc: "Размеры 125×125×150 мм. Объём 1,0 литра.", img: "assets/products/p12_BR.jpg" },

    { id: "h37", name: "Держатель для ватных палочек в виде гриба", price: 1700, badge: "new", desc: "Забавный и практичный держатель для ватных палочек.", img: "assets/products/p13_TL.jpg" },
    { id: "h38", name: "Выдавливатель пасты", price: 1200, badge: "new", desc: "Удобно выдавливает пасту без остатка и лишнего беспорядка.", img: "assets/products/p13_TR.jpg" },
    { id: "h39", name: "Держатель для зубной щётки", price: 1800, badge: "top", desc: "Изящный держатель, освобождающий место на раковине.", img: "assets/products/p13_BL.jpg" },
    { id: "h40", name: "Крючок для стекла душевой", price: 900, badge: "new", desc: "Прочный крючок для душевой без сверления и монтажа.", img: "assets/products/p13_BR.jpg" }
  ],

  work: [
    { id: "w01", name: "Подставка для iPad и планшетов", price: 4000, badge: "new", desc: "Стильная и эргономичная подставка. Подходит для работы, видеозвонков, учёбы и рисования.", img: "assets/products/p15_TL.jpg" },
    { id: "w02", name: "Органайзер для офисного стола со встроенным держателем для телефона", price: 3700, badge: "new", desc: "Хранение канцелярии, смартфона и мелких аксессуаров в одном месте.", img: "assets/products/p15_TR.jpg" },
    { id: "w03", name: "Настольный органайзер", price: 4000, badge: "new", desc: "Многоуровневый органайзер для канцелярии, гаджетов и повседневных аксессуаров.", img: "assets/products/p15_BL.jpg" },
    { id: "w04", name: "Подставка для телефона", price: 1500, badge: "top", desc: "Компактная и устойчивая подставка для смартфона. Идеальна для видеозвонков.", img: "assets/products/p15_BR.jpg" },

    { id: "w05", name: "Модульная система органайзера для стола", price: 4000, badge: "new", desc: "Современный модульный органайзер для инструментов и аксессуаров.", img: "assets/products/p16_TL.jpg" },
    { id: "w06", name: "Современная подставка для телефона на стол", price: 1700, badge: "sale", desc: "Минималистичная подставка для смартфона на рабочем столе.", img: "assets/products/p16_TR.jpg" },
    { id: "w07", name: "Органайзер для стола с подставкой для ручек и блокнота", price: 2500, badge: "top", desc: "Практичный органайзер с местом для ручек и блокнота.", img: "assets/products/p16_BL.jpg" },
    { id: "w08", name: "Подставка для карандашей в стиле джапанди", price: 2500, badge: "new", desc: "Лаконичная подставка для карандашей и канцелярии.", img: "assets/products/p16_BR.jpg" },

    { id: "w09", name: "Настольный органайзер Burrow", price: 3700, badge: "new", desc: "Стильный и функциональный органайзер для рабочего стола.", img: "assets/products/p17_TL.jpg" },
    { id: "w10", name: "Настольный органайзер", price: 2000, badge: "sale", desc: "Компактный органайзер для канцелярии и мелочей.", img: "assets/products/p17_TR.jpg" },
    { id: "w11", name: "Подставка для очков «Арт-лицо»", price: 1500, badge: "top", desc: "Оригинальная подставка для очков в виде лица.", img: "assets/products/p17_BL.jpg" },
    { id: "w12", name: "Мини настольная мусорная корзина", price: 2200, badge: "new", desc: "Компактная мусорная корзина для рабочего стола.", img: "assets/products/p17_BR.jpg" }
  ],

  kitchen: [
    { id: "k01", name: "Мини-зажим для пакетов", price: 1000, badge: "top", priceNote: "за 8 штук", desc: "Надёжно фиксирует и сохраняет свежесть продуктов.", img: "assets/products/p19_TL.jpg" },
    { id: "k02", name: "Органайзер для полки", price: 2500, badge: "new", desc: "Порядок и удобство хранения на вашей кухне.", img: "assets/products/p19_TR.jpg" },
    { id: "k03", name: "Компактная полка для чашек", price: 2500, badge: "new", desc: "Экономит место и помогает поддерживать порядок.", img: "assets/products/p19_BL.jpg" },
    { id: "k04", name: "Диспенсер для фольги", price: 3000, badge: "new", desc: "Удобная и аккуратная система хранения и отрезания фольги.", img: "assets/products/p19_BR.jpg" },

    { id: "k05", name: "Держатель для продуктовых сумок", price: 1600, badge: "top", desc: "Удобное хранение пакетов и быстрый доступ к ним.", img: "assets/products/p20_TL.jpg" },
    { id: "k06", name: "Органайзер для кухонных пакетов", price: 2400, badge: "new", desc: "Компактное хранение пакетов, поддерживает порядок на кухне.", img: "assets/products/p20_TR.jpg" },
    { id: "k07", name: "Подставка для кухонных принадлежностей с тремя отделениями", price: 3990, badge: "new", desc: "Удобное разделение по секциям для разных приборов.", img: "assets/products/p20_BL.jpg" },
    { id: "k08", name: "Рифлёная подставка для кухонных принадлежностей", price: 3700, badge: "new", desc: "Стильная рифлёная подставка для хранения приборов.", img: "assets/products/p20_BR.jpg" },

    { id: "k09", name: "Органайзер для чайных пакетиков", price: 2500, badge: "new", desc: "Компактное хранение и быстрый доступ к чаю.", img: "assets/products/p21_TL.jpg" },
    { id: "k10", name: "Зажим для сыпучих пакетов", price: 1500, badge: "new", desc: "Надёжно фиксирует упаковку и сохраняет свежесть продуктов.", img: "assets/products/p21_TR.jpg" },
    { id: "k11", name: "Диспенсер для мусорных пакетов", price: 1800, badge: "new", desc: "Удобное хранение и быстрый доступ к мусорным пакетам.", img: "assets/products/p21_BL.jpg" },
    { id: "k12", name: "Органайзер для раковины с держателем для тряпок", price: 3500, badge: "top", desc: "Порядок и чистота возле мойки каждый день.", img: "assets/products/p21_BR.jpg" },

    { id: "k13", name: "Компактная полка для кофейных кружек", price: 2500, badge: "new", desc: "Экономит место и позволяет поддерживать порядок.", img: "assets/products/p22_TL.jpg" },
    { id: "k14", name: "Держатель для кухонных рулонов", price: 2200, badge: "top", priceNote: "за 2 штуки", desc: "Удобно для бумажных полотенец, плёнки и фольги.", img: "assets/products/p22_TR.jpg" },
    { id: "k15", name: "Современная подставка для салфеток", price: 2000, badge: "new", desc: "Стильная подставка для хранения салфеток на кухне.", img: "assets/products/p22_BL.jpg" },
    { id: "k16", name: "Органайзер на дверцу шкафа", price: 900, badge: "new", desc: "Хранение крышек для сковородок на дверце шкафа.", img: "assets/products/p22_BR.jpg" },

    { id: "k17", name: "Органайзер для кухонного шкафа", price: 2000, badge: "new", desc: "Вертикальное хранение тарелок в шкафу.", img: "assets/products/p23_TL.jpg" },
    { id: "k18", name: "Крючок для дверцы кухонного шкафа", price: 700, badge: "top", priceNote: "за 2 штуки", desc: "Крепление на дверцу шкафа, экономит место.", img: "assets/products/p23_TR.jpg" },
    { id: "k19", name: "Вертикальная подставка для тарелок", price: 2000, badge: "new", priceNote: "от 2 000 ₸", desc: "Удобное вертикальное хранение тарелок.", img: "assets/products/p23_BL.jpg" },
    { id: "k20", name: "Стильная миска для фисташек", price: 3000, badge: "top", desc: "Миска с отделением для скорлупы — идеальна для подачи снеков.", img: "assets/products/p23_BR.jpg" },

    { id: "k21", name: "Детский замок безопасности", price: 1400, badge: "new", desc: "Замок для двери, шкафа и ящика.", img: "assets/products/p24_TL.jpg" },
    { id: "k22", name: "Диспенсер для яиц", price: 3500, badge: "new", priceNote: "на 10 штук", desc: "Хранение яиц с удобным доступом.", img: "assets/products/p24_TR.jpg" },
    { id: "k23", name: "Держатель для продуктовых сумок", price: 900, badge: "new", desc: "Компактное хранение пакетов на кухне.", img: "assets/products/p24_BL.jpg" },
    { id: "k24", name: "Гироскопический подстаканник для коляски", price: 2500, badge: "new", desc: "Надёжно удерживает напиток в вертикальном положении.", img: "assets/products/p24_BR.jpg" }
  ],

  gaming: [
    { id: "g01", name: "Модульная подставка для наушников", price: 2300, badge: "new", desc: "Стильная и устойчивая конструкция с модульным дизайном.", img: "assets/products/p26_TL.jpg" },
    { id: "g02", name: "Подставка для наушников / держатель гарнитуры", price: 2900, badge: "new", desc: "Современный дизайн с красным акцентом для вашего игрового пространства.", img: "assets/products/p26_TR.jpg" },
    { id: "g03", name: "Настольный держатель для наушников", price: 1800, badge: "top", desc: "Практичное крепление на край стола для наушников и кабелей.", img: "assets/products/p26_BL.jpg" },
    { id: "g04", name: "Современная подставка для наушников", price: 3100, badge: "new", desc: "Минималистичный дизайн с мягкими формами впишется в любой интерьер.", img: "assets/products/p26_BR.jpg" },

    { id: "g05", name: "Дорожный держатель для зарядки Apple Watch", price: 1200, badge: "top", desc: "Удобно фиксирует зарядное устройство и защищает кабель.", img: "assets/products/p27_TL.jpg" },
    { id: "g06", name: "Зарядная подставка для Apple Watch", price: 1300, badge: "new", desc: "Надёжная подставка для зарядки с аккуратной укладкой кабеля.", img: "assets/products/p27_TR.jpg" },
    { id: "g07", name: "Подставка для наушников «Кактус»", price: 5000, badge: "top", desc: "Оригинальный дизайн в форме кактуса для наушников и часов.", img: "assets/products/p27_BL.jpg" },
    { id: "g08", name: "Держатель для двух контроллеров PS5", price: 2500, badge: "new", desc: "Надёжное вертикальное хранение двух контроллеров.", img: "assets/products/p27_BR.jpg" },

    { id: "g09", name: "Универсальная подставка для контроллеров Xbox, PS5", price: 3500, badge: "new", desc: "Надёжное хранение контроллеров. Стильный дизайн для игрового стола.", img: "assets/products/p28_TL.jpg" },
    { id: "g10", name: "Держатель контроллера PS5", price: 2700, badge: "top", desc: "Яркий и оригинальный держатель, надёжно фиксирует контроллер.", img: "assets/products/p28_TR.jpg" },
    { id: "g11", name: "Зажим для кабеля сбоку стола", price: 1200, badge: "new", desc: "Фиксируется сбоку стола, предотвращает спутывание проводов.", img: "assets/products/p28_BL.jpg" },
    { id: "g12", name: "Хранение USB и SD-карт", price: 1200, badge: "new", desc: "Компактный органайзер для быстрого доступа к накопителям.", img: "assets/products/p28_BR.jpg" },

    { id: "g13", name: "Подставка для кружки", price: 3200, badge: "top", desc: "Удобная подставка для кружки с местом для сладостей.", img: "assets/products/p29_TL.jpg" },
    { id: "g14", name: "Настольное крепление для подстаканника", price: 3200, badge: "top", desc: "Надёжное крепление на столешницу, экономит место.", img: "assets/products/p29_TR.jpg" },
    { id: "g15", name: "Современная подставка для телефона на стол", price: 2500, badge: "top", desc: "Эргономичная подставка с удобным углом обзора.", img: "assets/products/p29_BL.jpg" },
    { id: "g16", name: "Прочная подставка для клавиатуры", price: 1500, badge: "sale", desc: "Обеспечивает удобный наклон клавиатуры на столе.", img: "assets/products/p29_BR.jpg" }
  ],

  beauty: [
    { id: "b01", name: "Подставка для кистей — бантик", price: 2500, badge: "top", desc: "Элегантный органайзер для кистей и аксессуаров. Удобно, стильно и эстетично.", img: "assets/products/p31_TL.jpg" },
    { id: "b02", name: "Эстетичный стёганый органайзер для макияжа", price: 3700, badge: "new", desc: "Вместительный органайзер для косметики и аксессуаров. Идеальный порядок на туалетном столике.", img: "assets/products/p31_TR.jpg" },
    { id: "b03", name: "Эстетичный стёганый органайзер для макияжа", price: 1700, badge: "new", desc: "Компактный органайзер для кистей и косметики. Утончённый дизайн.", img: "assets/products/p31_BL.jpg" },
    { id: "b04", name: "Современный стёганый органайзер", price: 2500, badge: "top", desc: "Стильный органайзер для косметики и аксессуаров.", img: "assets/products/p31_BR.jpg" },

    { id: "b05", name: "Органайзер для макияжа, парфюмерии и украшений", price: 3800, badge: "top", desc: "Компактный стильный органайзер, держит всё необходимое под рукой.", img: "assets/products/p32_TL.jpg" },
    { id: "b06", name: "Органайзер для макияжа, парфюмерии и украшений", price: 3800, badge: "top", desc: "Органайзер в скульптурной форме буквы Т для косметики и украшений.", img: "assets/products/p32_TR.jpg" },
    { id: "b07", name: "Органайзер для макияжа, парфюмерии и украшений", price: 3800, badge: "top", desc: "Функциональный деревянный органайзер в стильном исполнении.", img: "assets/products/p32_BL.jpg" },
    { id: "b08", name: "Геометрическая многоярусная станция для макияжа", price: 5500, badge: "new", desc: "Многоярусная станция для косметики и всего необходимого.", img: "assets/products/p32_BR.jpg" },

    { id: "b09", name: "Мини настольная мусорная корзина", price: 2200, badge: "sale", desc: "Компактная стильная корзина для мелкого мусора на туалетном столике.", img: "assets/products/p33_TL.jpg" },
    { id: "b10", name: "Минималистичный 3-ярусный органайзер", price: 4000, badge: "new", desc: "Трёхуровневый органайзер для косметики, парфюмерии и аксессуаров.", img: "assets/products/p33_TR.jpg" },
    { id: "b11", name: "Подставка для Дайсона", price: 7500, badge: "top", desc: "Удобная подставка для фена Dyson и насадок.", img: "assets/products/p33_BL.jpg" },
    { id: "b12", name: "Подставка для кистей — бант", price: 2700, badge: "new", desc: "Очаровательная подставка для кистей, добавляет изящности пространству.", img: "assets/products/p33_BR.jpg" },

    { id: "b13", name: "Модульный органайзер для косметики", price: 3700, badge: "top", desc: "Вместительный органайзер для аксессуаров, поддерживает порядок на столике.", img: "assets/products/p34_TL.jpg" },
    { id: "b14", name: "Подставка для резинок для волос", price: 1000, badge: "new", desc: "Удобная компактная подставка для резинок.", img: "assets/products/p34_TR.jpg" },
    { id: "b15", name: "Подставка для резинок для волос", price: 2000, badge: "new", desc: "Элегантная подставка для резинок и мелких аксессуаров.", img: "assets/products/p34_BL.jpg" },
    { id: "b16", name: "Органайзер для косметики", price: 2500, badge: "top", desc: "Компактный органайзер для косметики и мелких аксессуаров.", img: "assets/products/p34_BR.jpg" },

    { id: "b17", name: "Тонкая подставка для украшений", price: 1700, badge: "sale", desc: "Хранение цепочек, браслетов и колец — компактно и устойчиво.", img: "assets/products/p35_TL.jpg" },
    { id: "b18", name: "Органайзер 2 уровня для косметики и аксессуаров", price: 3800, badge: "top", desc: "Двухуровневое удобство хранения. Эстетика и порядок на столике.", img: "assets/products/p35_TR.jpg" },
    { id: "b19", name: "Подставка-дерево для украшений", price: 2200, badge: "top", desc: "Хранение колец, цепочек и серёжек — украшение и функциональность.", img: "assets/products/p35_BL.jpg" },
    { id: "b20", name: "Элегантная и аккуратная подставка для украшений", price: 1500, badge: "sale", desc: "Многоуровневая подставка для серёг, колец и браслетов.", img: "assets/products/p35_BR.jpg" }
  ]
};
