const artists = [
    {
        "name": "Macan",
        "nameRu": "Макан",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 1,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Anna Asti",
        "nameRu": "Анна Асти",
        "debut": 2022,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 2,
        "origin": "Черкассы",
        "region": "СНГ / Мир"
    },
    {
        "name": "Miyagi & Andy Panda",
        "nameRu": "Miyagi & Эндшпиль",
        "debut": 2015,
        "members": 2,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 3,
        "origin": "Владикавказ",
        "region": "Юг"
    },
    {
        "name": "Basta",
        "nameRu": "Баста",
        "debut": 1997,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 4,
        "origin": "Ростов-на-Дону",
        "region": "Юг"
    },
    {
        "name": "Instasamka",
        "nameRu": "Инстасамка",
        "debut": 2019,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 5,
        "origin": "Тобольск",
        "region": "Сибирь"
    },
    {
        "name": "Jony",
        "nameRu": "Джони",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 6,
        "origin": "Баку",
        "region": "СНГ / Мир"
    },
    {
        "name": "SHAMAN",
        "nameRu": "Шаман",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 7,
        "origin": "Новомосковск",
        "region": "Центр"
    },
    {
        "name": "Klava Koka",
        "nameRu": "Клава Кока",
        "debut": 2015,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 8,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "Egor Kreed",
        "nameRu": "Егор Крид",
        "debut": 2011,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 9,
        "origin": "Пенза",
        "region": "Поволжье"
    },
    {
        "name": "Mari Kraymbrery",
        "nameRu": "Мари Краймбрери",
        "debut": 2012,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 10,
        "origin": "Кривой Рог",
        "region": "СНГ / Мир"
    },
    {
        "name": "Zivert",
        "nameRu": "Зиверт",
        "debut": 2017,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 11,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Markul",
        "nameRu": "Маркул",
        "debut": 2011,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 12,
        "origin": "Рига",
        "region": "СНГ / Мир"
    },
    {
        "name": "Little Big",
        "nameRu": "Литтл Биг",
        "debut": 2013,
        "members": 4,
        "gender": "Mixed",
        "genre": "Электроника",
        "rank": 13,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Morgenstern",
        "nameRu": "Моргенштерн",
        "debut": 2017,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 14,
        "origin": "Уфа",
        "region": "Поволжье"
    },
    {
        "name": "Scriptonite",
        "nameRu": "Скриптонит",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 15,
        "origin": "Павлодар",
        "region": "СНГ / Мир"
    },
    {
        "name": "Oxxxymiron",
        "nameRu": "Оксимирон",
        "debut": 2008,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 16,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Zemfira",
        "nameRu": "Земфира",
        "debut": 1998,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 17,
        "origin": "Уфа",
        "region": "Поволжье"
    },
    {
        "name": "Viktor Tsoi (Kino)",
        "nameRu": "Виктор Цой (Кино)",
        "debut": 1981,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 18,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Bi-2",
        "nameRu": "Би-2",
        "debut": 1988,
        "members": 2,
        "gender": "Male",
        "genre": "Рок",
        "rank": 19,
        "origin": "Бобруйск",
        "region": "СНГ / Мир"
    },
    {
        "name": "Mumiy Troll",
        "nameRu": "Мумий Тролль",
        "debut": 1983,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 20,
        "origin": "Владивосток",
        "region": "Дальний Восток"
    },
    {
        "name": "Sergey Lazarev",
        "nameRu": "Сергей Лазарев",
        "debut": 2005,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 21,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Dima Bilan",
        "nameRu": "Дима Билан",
        "debut": 2000,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 22,
        "origin": "Усть-Джегута",
        "region": "Юг"
    },
    {
        "name": "Polina Gagarina",
        "nameRu": "Полина Гагарина",
        "debut": 2003,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 23,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Timati",
        "nameRu": "Тимати",
        "debut": 2004,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 24,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "L'One",
        "nameRu": "L'One",
        "debut": 2005,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 25,
        "origin": "Красноярск",
        "region": "Сибирь"
    },
    {
        "name": "Pharaoh",
        "nameRu": "Фараон",
        "debut": 2012,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 26,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Slava Marlow",
        "nameRu": "Слава Марлоу",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 27,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Hammali & Navai",
        "nameRu": "Hammali & Navai",
        "debut": 2016,
        "members": 2,
        "gender": "Male",
        "genre": "Поп",
        "rank": 28,
        "origin": "Баку",
        "region": "СНГ / Мир"
    },
    {
        "name": "Artik & Asti",
        "nameRu": "Artik & Asti",
        "debut": 2010,
        "members": 2,
        "gender": "Mixed",
        "genre": "Поп",
        "rank": 29,
        "origin": "Киев",
        "region": "СНГ / Мир"
    },
    {
        "name": "Mot",
        "nameRu": "Мот",
        "debut": 2006,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 30,
        "origin": "Крымск",
        "region": "Юг"
    },
    {
        "name": "Guf",
        "nameRu": "Гуф",
        "debut": 2000,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 31,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Noize MC",
        "nameRu": "Нойз МС",
        "debut": 2003,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 32,
        "origin": "Ярцево",
        "region": "Центр"
    },
    {
        "name": "IC3PEAK",
        "nameRu": "Айспик",
        "debut": 2013,
        "members": 2,
        "gender": "Mixed",
        "genre": "Электроника",
        "rank": 33,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Serebro",
        "nameRu": "Серебро",
        "debut": 2006,
        "members": 3,
        "gender": "Female",
        "genre": "Поп",
        "rank": 34,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Leningrad",
        "nameRu": "Ленинград",
        "debut": 1997,
        "members": 10,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 35,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Boulevard Depo",
        "nameRu": "Бульвар Депо",
        "debut": 2009,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 36,
        "origin": "Уфа",
        "region": "Поволжье"
    },
    {
        "name": "Face",
        "nameRu": "Фейс",
        "debut": 2015,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 37,
        "origin": "Уфа",
        "region": "Поволжье"
    },
    {
        "name": "Scally Milano",
        "nameRu": "Скамли Милано",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 38,
        "origin": "Березники",
        "region": "Урал"
    },
    {
        "name": "Big Baby Tape",
        "nameRu": "Биг Бейби Тейп",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 39,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Kislak",
        "nameRu": "Кисляк",
        "debut": 2020,
        "members": 1,
        "gender": "Male",
        "genre": "Инди",
        "rank": 40,
        "origin": "Саратов",
        "region": "Поволжье"
    },
    {
        "name": "Valery Meladze",
        "nameRu": "Валерий Меладзе",
        "debut": 1993,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 41,
        "origin": "Батуми",
        "region": "СНГ / Мир"
    },
    {
        "name": "Grigory Leps",
        "nameRu": "Григорий Лепс",
        "debut": 1995,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 42,
        "origin": "Сочи",
        "region": "Юг"
    },
    {
        "name": "Philipp Kirkorov",
        "nameRu": "Филипп Киркоров",
        "debut": 1985,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 43,
        "origin": "Варна",
        "region": "СНГ / Мир"
    },
    {
        "name": "Alla Pugacheva",
        "nameRu": "Алла Пугачева",
        "debut": 1965,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 44,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Lolita",
        "nameRu": "Лолита",
        "debut": 1985,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 45,
        "origin": "Мукачево",
        "region": "СНГ / Мир"
    },
    {
        "name": "Valery Leontiev",
        "nameRu": "Валерий Леонтьев",
        "debut": 1971,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 46,
        "origin": "Усть-Уса",
        "region": "Север"
    },
    {
        "name": "Lyube",
        "nameRu": "Любэ",
        "debut": 1989,
        "members": 6,
        "gender": "Male",
        "genre": "Рок",
        "rank": 47,
        "origin": "Люберцы",
        "region": "Центр"
    },
    {
        "name": "Manizha",
        "nameRu": "Манижа",
        "debut": 2003,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 48,
        "origin": "Душанбе",
        "region": "СНГ / Мир"
    },
    {
        "name": "Gone.Fludd",
        "nameRu": "Gone.Fludd",
        "debut": 2015,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 49,
        "origin": "Тучково",
        "region": "Центр"
    },
    {
        "name": "Xcho",
        "nameRu": "Xcho",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 50,
        "origin": "Ванадзор",
        "region": "СНГ / Мир"
    },
    {
        "name": "Korol i Shut",
        "nameRu": "Король и Шут",
        "debut": 1988,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 51,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "DDT",
        "nameRu": "ДДТ",
        "debut": 1980,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 52,
        "origin": "Уфа",
        "region": "Поволжье"
    },
    {
        "name": "Aquarium",
        "nameRu": "Аквариум",
        "debut": 1972,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 53,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Aria",
        "nameRu": "Ария",
        "debut": 1985,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 54,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Agatha Christie",
        "nameRu": "Агата Кристи",
        "debut": 1985,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 55,
        "origin": "Асбест",
        "region": "Урал"
    },
    {
        "name": "Splean",
        "nameRu": "Сплин",
        "debut": 1994,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 56,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Nautilus Pompilius",
        "nameRu": "Наутилус Помпилиус",
        "debut": 1982,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 57,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "Mashina Vremeni",
        "nameRu": "Машина Времени",
        "debut": 1969,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 58,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Sektor Gaza",
        "nameRu": "Сектор Газа",
        "debut": 1987,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 59,
        "origin": "Воронеж",
        "region": "Центр"
    },
    {
        "name": "Grazhdanskaya Oborona",
        "nameRu": "Гражданская Оборона",
        "debut": 1984,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 60,
        "origin": "Омск",
        "region": "Сибирь"
    },
    {
        "name": "Chaif",
        "nameRu": "Чайф",
        "debut": 1985,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 61,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "Piknik",
        "nameRu": "Пикник",
        "debut": 1978,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 62,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Bravo",
        "nameRu": "Браво",
        "debut": 1983,
        "members": 5,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 63,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Nochnye Snaipery",
        "nameRu": "Ночные Снайперы",
        "debut": 1993,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 64,
        "origin": "Магадан",
        "region": "Дальний Восток"
    },
    {
        "name": "Ruki Vverkh!",
        "nameRu": "Руки Вверх!",
        "debut": 1995,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 65,
        "origin": "Самара",
        "region": "Поволжье"
    },
    {
        "name": "Ivanushki International",
        "nameRu": "Иванушки International",
        "debut": 1995,
        "members": 3,
        "gender": "Male",
        "genre": "Поп",
        "rank": 66,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "VIA Gra",
        "nameRu": "ВИА Гра",
        "debut": 2000,
        "members": 3,
        "gender": "Female",
        "genre": "Поп",
        "rank": 67,
        "origin": "Киев",
        "region": "СНГ / Мир"
    },
    {
        "name": "t.A.T.u.",
        "nameRu": "Тату",
        "debut": 1999,
        "members": 2,
        "gender": "Female",
        "genre": "Поп",
        "rank": 68,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Glukoza",
        "nameRu": "Глюк'oZa",
        "debut": 2002,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 69,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Nyusha",
        "nameRu": "Нюша",
        "debut": 2007,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 70,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Iowa",
        "nameRu": "Айова",
        "debut": 2009,
        "members": 3,
        "gender": "Mixed",
        "genre": "Поп",
        "rank": 71,
        "origin": "Могилёв",
        "region": "СНГ / Мир"
    },
    {
        "name": "Gradusy",
        "nameRu": "Градусы",
        "debut": 2008,
        "members": 4,
        "gender": "Male",
        "genre": "Поп",
        "rank": 72,
        "origin": "Ставрополь",
        "region": "Юг"
    },
    {
        "name": "Quest Pistols",
        "nameRu": "Quest Pistols",
        "debut": 2007,
        "members": 3,
        "gender": "Male",
        "genre": "Поп",
        "rank": 73,
        "origin": "Киев",
        "region": "СНГ / Мир"
    },
    {
        "name": "Yolka",
        "nameRu": "Ёлка",
        "debut": 2004,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 74,
        "origin": "Ужгород",
        "region": "СНГ / Мир"
    },
    {
        "name": "Mary Gu",
        "nameRu": "Мэри Гу",
        "debut": 2018,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 75,
        "origin": "Похвистнево",
        "region": "Поволжье"
    },
    {
        "name": "Ramil'",
        "nameRu": "Рамиль",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 76,
        "origin": "Нижний Новгород",
        "region": "Поволжье"
    },
    {
        "name": "Eldzhey",
        "nameRu": "Элджей",
        "debut": 2014,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 77,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Feduk",
        "nameRu": "Федук",
        "debut": 2010,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 78,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Kizaru",
        "nameRu": "Кизару",
        "debut": 2014,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 79,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "OG Buda",
        "nameRu": "ОДжи Буда",
        "debut": 2017,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 80,
        "origin": "Тюмень",
        "region": "Сибирь"
    },
    {
        "name": "Soda Luv",
        "nameRu": "Сода Лав",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 81,
        "origin": "Мытищи",
        "region": "Центр"
    },
    {
        "name": "Mayot",
        "nameRu": "Майот",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 82,
        "origin": "Тюмень",
        "region": "Сибирь"
    },
    {
        "name": "Toxi$",
        "nameRu": "Токсис",
        "debut": 2017,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 83,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Friendly Thug 52 NGG",
        "nameRu": "Friendly Thug 52 NGG",
        "debut": 2021,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 84,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Alblak 52",
        "nameRu": "Алблак 52",
        "debut": 2021,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 85,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Saluki",
        "nameRu": "Салуки",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 86,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "10age",
        "nameRu": "Тенэйдж",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 87,
        "origin": "Белгород",
        "region": "Центр"
    },
    {
        "name": "Konfuz",
        "nameRu": "Конфуз",
        "debut": 2020,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 88,
        "origin": "Ереван",
        "region": "СНГ / Мир"
    },
    {
        "name": "Guma",
        "nameRu": "Гума",
        "debut": 2020,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 89,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Galibri & Mavik",
        "nameRu": "Галибри и Мавик",
        "debut": 2020,
        "members": 2,
        "gender": "Male",
        "genre": "Поп",
        "rank": 90,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Dabro",
        "nameRu": "Дабро",
        "debut": 2013,
        "members": 2,
        "gender": "Male",
        "genre": "Поп",
        "rank": 91,
        "origin": "Курахово",
        "region": "СНГ / Мир"
    },
    {
        "name": "Niletto",
        "nameRu": "Нилетто",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 92,
        "origin": "Тюмень",
        "region": "Сибирь"
    },
    {
        "name": "Gayazov$ Brother$",
        "nameRu": "Братья Гаязовы",
        "debut": 2013,
        "members": 2,
        "gender": "Male",
        "genre": "Поп",
        "rank": 93,
        "origin": "Казань",
        "region": "Поволжье"
    },
    {
        "name": "Cream Soda",
        "nameRu": "Крем Сода",
        "debut": 2012,
        "members": 2,
        "gender": "Mixed",
        "genre": "Электроника",
        "rank": 94,
        "origin": "Ярославль",
        "region": "Центр"
    },
    {
        "name": "Shortparis",
        "nameRu": "Шортпарис",
        "debut": 2012,
        "members": 5,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 95,
        "origin": "Новокузнецк",
        "region": "Сибирь"
    },
    {
        "name": "Dolphin",
        "nameRu": "Дельфин",
        "debut": 1991,
        "members": 1,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 96,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "5'nizza",
        "nameRu": "Пятница",
        "debut": 2000,
        "members": 2,
        "gender": "Male",
        "genre": "Инди",
        "rank": 97,
        "origin": "Харьков",
        "region": "СНГ / Мир"
    },
    {
        "name": "A-Studio",
        "nameRu": "А-Студио",
        "debut": 1982,
        "members": 4,
        "gender": "Mixed",
        "genre": "Поп",
        "rank": 98,
        "origin": "Алматы",
        "region": "СНГ / Мир"
    },
    {
        "name": "Chai Vdvoyom",
        "nameRu": "Чай Вдвоём",
        "debut": 1994,
        "members": 2,
        "gender": "Male",
        "genre": "Поп",
        "rank": 99,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Diskoteka Avariya",
        "nameRu": "Дискотека Авария",
        "debut": 1990,
        "members": 3,
        "gender": "Male",
        "genre": "Поп",
        "rank": 100,
        "origin": "Иваново",
        "region": "Центр"
    },
    {
        "name": "Otpetye Moshenniki",
        "nameRu": "Отпетые Мошенники",
        "debut": 1996,
        "members": 3,
        "gender": "Male",
        "genre": "Поп",
        "rank": 101,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Hi-Fi",
        "nameRu": "Хай-Фай",
        "debut": 1998,
        "members": 3,
        "gender": "Mixed",
        "genre": "Поп",
        "rank": 102,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Demo",
        "nameRu": "Демо",
        "debut": 1999,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 103,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Virus",
        "nameRu": "Вирус",
        "debut": 1999,
        "members": 3,
        "gender": "Mixed",
        "genre": "Поп",
        "rank": 104,
        "origin": "Зеленоград",
        "region": "Центр"
    },
    {
        "name": "Propaganda",
        "nameRu": "Пропаганда",
        "debut": 2001,
        "members": 3,
        "gender": "Female",
        "genre": "Поп",
        "rank": 105,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Reflex",
        "nameRu": "Рефлекс",
        "debut": 1999,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 106,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Fabrika",
        "nameRu": "Фабрика",
        "debut": 2002,
        "members": 3,
        "gender": "Female",
        "genre": "Поп",
        "rank": 107,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Korni",
        "nameRu": "Корни",
        "debut": 2002,
        "members": 4,
        "gender": "Male",
        "genre": "Поп",
        "rank": 108,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Julia Savicheva",
        "nameRu": "Юлия Савичева",
        "debut": 2003,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 109,
        "origin": "Курган",
        "region": "Урал"
    },
    {
        "name": "Stas Mikhailov",
        "nameRu": "Стас Михайлов",
        "debut": 1992,
        "members": 1,
        "gender": "Male",
        "genre": "Шансон",
        "rank": 110,
        "origin": "Сочи",
        "region": "Юг"
    },
    {
        "name": "Elena Vaenga",
        "nameRu": "Елена Ваенга",
        "debut": 2003,
        "members": 1,
        "gender": "Female",
        "genre": "Шансон",
        "rank": 111,
        "origin": "Североморск",
        "region": "Север"
    },
    {
        "name": "Sergey Trofimov",
        "nameRu": "Сергей Трофимов",
        "debut": 1994,
        "members": 1,
        "gender": "Male",
        "genre": "Шансон",
        "rank": 112,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Mikhail Krug",
        "nameRu": "Михаил Круг",
        "debut": 1992,
        "members": 1,
        "gender": "Male",
        "genre": "Шансон",
        "rank": 113,
        "origin": "Тверь",
        "region": "Центр"
    },
    {
        "name": "Alexander Rosenbaum",
        "nameRu": "Александр Розенбаум",
        "debut": 1980,
        "members": 1,
        "gender": "Male",
        "genre": "Шансон",
        "rank": 114,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Ani Lorak",
        "nameRu": "Ани Лорак",
        "debut": 1995,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 115,
        "origin": "Кицмань",
        "region": "СНГ / Мир"
    },
    {
        "name": "Loboda",
        "nameRu": "Лобода",
        "debut": 2004,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 116,
        "origin": "Ирпень",
        "region": "СНГ / Мир"
    },
    {
        "name": "Max Barskih",
        "nameRu": "Макс Барских",
        "debut": 2008,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 117,
        "origin": "Херсон",
        "region": "СНГ / Мир"
    },
    {
        "name": "Vera Brezhneva",
        "nameRu": "Вера Брежнева",
        "debut": 2010,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 118,
        "origin": "Днепродзержинск",
        "region": "СНГ / Мир"
    },
    {
        "name": "Konstantin Meladze",
        "nameRu": "Константин Меладзе",
        "debut": 1993,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 119,
        "origin": "Батуми",
        "region": "СНГ / Мир"
    },
    {
        "name": "Valeriya",
        "nameRu": "Валерия",
        "debut": 1992,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 120,
        "origin": "Аткарск",
        "region": "Поволжье"
    },
    {
        "name": "Kristina Orbakaite",
        "nameRu": "Кристина Орбакайте",
        "debut": 1992,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 121,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Natasha Koroleva",
        "nameRu": "Наташа Королёва",
        "debut": 1990,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 122,
        "origin": "Киев",
        "region": "СНГ / Мир"
    },
    {
        "name": "Leonid Agutin",
        "nameRu": "Леонид Агутин",
        "debut": 1992,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 123,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Anzhelika Varum",
        "nameRu": "Анжелика Варум",
        "debut": 1991,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 124,
        "origin": "Львов",
        "region": "СНГ / Мир"
    },
    {
        "name": "Igor Nikolaev",
        "nameRu": "Игорь Николаев",
        "debut": 1986,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 125,
        "origin": "Холмск",
        "region": "Дальний Восток"
    },
    {
        "name": "Oleg Gazmanov",
        "nameRu": "Олег Газманов",
        "debut": 1989,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 126,
        "origin": "Гусев",
        "region": "Северо-Запад"
    },
    {
        "name": "Lev Leshchenko",
        "nameRu": "Лев Лещенко",
        "debut": 1959,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 127,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Iosif Kobzon",
        "nameRu": "Иосиф Кобзон",
        "debut": 1958,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 128,
        "origin": "Часов Яр",
        "region": "СНГ / Мир"
    },
    {
        "name": "Yuri Shatunov",
        "nameRu": "Юрий Шатунов",
        "debut": 1986,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 129,
        "origin": "Кумертау",
        "region": "Поволжье"
    },
    {
        "name": "Laskoviy May",
        "nameRu": "Ласковый май",
        "debut": 1986,
        "members": 3,
        "gender": "Male",
        "genre": "Поп",
        "rank": 130,
        "origin": "Оренбург",
        "region": "Поволжье"
    },
    {
        "name": "Mirage",
        "nameRu": "Мираж",
        "debut": 1986,
        "members": 2,
        "gender": "Female",
        "genre": "Поп",
        "rank": 131,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Kombinaciya",
        "nameRu": "Комбинация",
        "debut": 1988,
        "members": 5,
        "gender": "Female",
        "genre": "Поп",
        "rank": 132,
        "origin": "Саратов",
        "region": "Поволжье"
    },
    {
        "name": "Na-Na",
        "nameRu": "На-На",
        "debut": 1989,
        "members": 4,
        "gender": "Male",
        "genre": "Поп",
        "rank": 133,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Kar-Man",
        "nameRu": "Кар-Мэн",
        "debut": 1989,
        "members": 2,
        "gender": "Male",
        "genre": "Поп",
        "rank": 134,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Technology",
        "nameRu": "Технология",
        "debut": 1990,
        "members": 4,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 135,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Linda",
        "nameRu": "Линда",
        "debut": 1993,
        "members": 1,
        "gender": "Female",
        "genre": "Инди",
        "rank": 136,
        "origin": "Кентау",
        "region": "СНГ / Мир"
    },
    {
        "name": "Maxim",
        "nameRu": "МакSим",
        "debut": 2005,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 137,
        "origin": "Казань",
        "region": "Поволжье"
    },
    {
        "name": "Slot",
        "nameRu": "Слот",
        "debut": 2002,
        "members": 5,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 138,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Luna",
        "nameRu": "Луна",
        "debut": 2016,
        "members": 1,
        "gender": "Female",
        "genre": "Инди",
        "rank": 139,
        "origin": "Киев",
        "region": "СНГ / Мир"
    },
    {
        "name": "25/17",
        "nameRu": "25/17",
        "debut": 2002,
        "members": 2,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 140,
        "origin": "Омск",
        "region": "Сибирь"
    },
    {
        "name": "Grot",
        "nameRu": "Грот",
        "debut": 2009,
        "members": 2,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 141,
        "origin": "Омск",
        "region": "Сибирь"
    },
    {
        "name": "Kasta",
        "nameRu": "Каста",
        "debut": 1997,
        "members": 4,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 142,
        "origin": "Ростов-на-Дону",
        "region": "Юг"
    },
    {
        "name": "Triagrutrika",
        "nameRu": "Триагрутрика",
        "debut": 2004,
        "members": 4,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 143,
        "origin": "Челябинск",
        "region": "Урал"
    },
    {
        "name": "Ak-47",
        "nameRu": "Ак-47",
        "debut": 2004,
        "members": 2,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 144,
        "origin": "Берёзовский",
        "region": "Урал"
    },
    {
        "name": "Vitya Ak",
        "nameRu": "Витя АК",
        "debut": 2004,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 145,
        "origin": "Берёзовский",
        "region": "Урал"
    },
    {
        "name": "Bad Balance",
        "nameRu": "Бад Бэланс",
        "debut": 1989,
        "members": 3,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 146,
        "origin": "Донецк",
        "region": "СНГ / Мир"
    },
    {
        "name": "Legalize",
        "nameRu": "Лигалайз",
        "debut": 1993,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 147,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Decl",
        "nameRu": "Децл",
        "debut": 1999,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 148,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Pika",
        "nameRu": "Пика",
        "debut": 2011,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 149,
        "origin": "Ростов-на-Дону",
        "region": "Юг"
    },
    {
        "name": "Truwer",
        "nameRu": "Трувер",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 150,
        "origin": "Павлодар",
        "region": "СНГ / Мир"
    },
    {
        "name": "104",
        "nameRu": "104",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 151,
        "origin": "Павлодар",
        "region": "СНГ / Мир"
    },
    {
        "name": "Niman",
        "nameRu": "Ниман",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 152,
        "origin": "Павлодар",
        "region": "СНГ / Мир"
    },
    {
        "name": "M'Dee",
        "nameRu": "М'Ди",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 153,
        "origin": "Алматы",
        "region": "СНГ / Мир"
    },
    {
        "name": "Dose",
        "nameRu": "Доуз",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 154,
        "origin": "Павлодар",
        "region": "СНГ / Мир"
    },
    {
        "name": "Slava KPSS",
        "nameRu": "Слава КПСС",
        "debut": 2012,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 155,
        "origin": "Хабаровск",
        "region": "Дальний Восток"
    },
    {
        "name": "Zamay",
        "nameRu": "Замай",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 156,
        "origin": "Бишкек",
        "region": "СНГ / Мир"
    },
    {
        "name": "Rickey F",
        "nameRu": "Рики Ф",
        "debut": 2012,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 157,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Booker",
        "nameRu": "Букер",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 158,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Jubilee",
        "nameRu": "Джубили",
        "debut": 2010,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 159,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "ST",
        "nameRu": "ST",
        "debut": 2006,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 160,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Ptaha",
        "nameRu": "Птаха",
        "debut": 1996,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 161,
        "origin": "Баку",
        "region": "СНГ / Мир"
    },
    {
        "name": "Slim",
        "nameRu": "Слим",
        "debut": 1996,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 162,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Loc-Dog",
        "nameRu": "Лок-Дог",
        "debut": 2006,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 163,
        "origin": "Электросталь",
        "region": "Центр"
    },
    {
        "name": "Kravts",
        "nameRu": "Кравц",
        "debut": 2009,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 164,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Pizza",
        "nameRu": "Пицца",
        "debut": 2010,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 165,
        "origin": "Уфа",
        "region": "Поволжье"
    },
    {
        "name": "Burito",
        "nameRu": "Бурито",
        "debut": 1999,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 166,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "MBAND",
        "nameRu": "MBAND",
        "debut": 2014,
        "members": 4,
        "gender": "Male",
        "genre": "Поп",
        "rank": 167,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "T-Fest",
        "nameRu": "Ти-Фест",
        "debut": 2014,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 168,
        "origin": "Черновцы",
        "region": "СНГ / Мир"
    },
    {
        "name": "Matrang",
        "nameRu": "Матранг",
        "debut": 2012,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 169,
        "origin": "Владикавказ",
        "region": "Юг"
    },
    {
        "name": "Cygo",
        "nameRu": "Cygo",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 170,
        "origin": "Могилёв",
        "region": "СНГ / Мир"
    },
    {
        "name": "Rasa",
        "nameRu": "Rasa",
        "debut": 2017,
        "members": 2,
        "gender": "Mixed",
        "genre": "Поп",
        "rank": 171,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Grivina",
        "nameRu": "Гривина",
        "debut": 2017,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 172,
        "origin": "Ташкент",
        "region": "СНГ / Мир"
    },
    {
        "name": "Zomb",
        "nameRu": "Зомб",
        "debut": 2012,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 173,
        "origin": "Барнаул",
        "region": "Сибирь"
    },
    {
        "name": "Luxor",
        "nameRu": "Люксор",
        "debut": 2012,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 174,
        "origin": "Улан-Удэ",
        "region": "Сибирь"
    },
    {
        "name": "Kavabanga Depo Kolibri",
        "nameRu": "Кавабанга Депо Колибри",
        "debut": 2010,
        "members": 3,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 175,
        "origin": "Харьков",
        "region": "СНГ / Мир"
    },
    {
        "name": "Lx24",
        "nameRu": "Lx24",
        "debut": 2013,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 176,
        "origin": "Орск",
        "region": "Урал"
    },
    {
        "name": "Elman",
        "nameRu": "Эльман",
        "debut": 2017,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 177,
        "origin": "Сумгаит",
        "region": "СНГ / Мир"
    },
    {
        "name": "Andro",
        "nameRu": "Андро",
        "debut": 2016,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 178,
        "origin": "Киев",
        "region": "СНГ / Мир"
    },
    {
        "name": "Gafur",
        "nameRu": "Гафур",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 179,
        "origin": "Ташкент",
        "region": "СНГ / Мир"
    },
    {
        "name": "Bahh Tee",
        "nameRu": "Бах Ти",
        "debut": 2005,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 180,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Seville",
        "nameRu": "Севиль",
        "debut": 2014,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 181,
        "origin": "Симферополь",
        "region": "Юг"
    },
    {
        "name": "Mirele",
        "nameRu": "Мирель",
        "debut": 2016,
        "members": 1,
        "gender": "Female",
        "genre": "Инди",
        "rank": 182,
        "origin": "Ростов-на-Дону",
        "region": "Юг"
    },
    {
        "name": "Kedr Livanskiy",
        "nameRu": "Кедр Ливанский",
        "debut": 2015,
        "members": 1,
        "gender": "Female",
        "genre": "Электроника",
        "rank": 183,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Kate NV",
        "nameRu": "Кейт ЭнВи",
        "debut": 2013,
        "members": 1,
        "gender": "Female",
        "genre": "Электроника",
        "rank": 184,
        "origin": "Казань",
        "region": "Поволжье"
    },
    {
        "name": "Ivan Dorn",
        "nameRu": "Иван Дорн",
        "debut": 2007,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 185,
        "origin": "Челябинск",
        "region": "Урал"
    },
    {
        "name": "Monatik",
        "nameRu": "Монатик",
        "debut": 2008,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 186,
        "origin": "Луцк",
        "region": "СНГ / Мир"
    },
    {
        "name": "Vanya Dmitrienko",
        "nameRu": "Ваня Дмитриенко",
        "debut": 2020,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 187,
        "origin": "Красноярск",
        "region": "Сибирь"
    },
    {
        "name": "Khabib",
        "nameRu": "Хабиб",
        "debut": 2017,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 188,
        "origin": "Казань",
        "region": "Поволжье"
    },
    {
        "name": "Milana Khametova",
        "nameRu": "Милана Хаметова",
        "debut": 2021,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 189,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Egor Ship",
        "nameRu": "Егор Шип",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 190,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Danya Milokhin",
        "nameRu": "Даня Милохин",
        "debut": 2020,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 191,
        "origin": "Оренбург",
        "region": "Поволжье"
    },
    {
        "name": "Artur Babich",
        "nameRu": "Артур Бабич",
        "debut": 2020,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 192,
        "origin": "Кривой Рог",
        "region": "СНГ / Мир"
    },
    {
        "name": "Anya Pokrov",
        "nameRu": "Аня Покров",
        "debut": 2020,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 193,
        "origin": "Волгоград",
        "region": "Юг"
    },
    {
        "name": "MIA BOYKA",
        "nameRu": "MIA BOYKA",
        "debut": 2019,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 194,
        "origin": "Ивангород",
        "region": "Северо-Запад"
    },
    {
        "name": "Goro",
        "nameRu": "Goro",
        "debut": 2021,
        "members": 1,
        "gender": "Male",
        "genre": "Хип-хоп",
        "rank": 195,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Amirchik",
        "nameRu": "Амирчик",
        "debut": 2021,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 196,
        "origin": "Бишкек",
        "region": "СНГ / Мир"
    },
    {
        "name": "Janaga",
        "nameRu": "Janaga",
        "debut": 2017,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 197,
        "origin": "Ереван",
        "region": "СНГ / Мир"
    },
    {
        "name": "Tenca",
        "nameRu": "Tenca",
        "debut": 2018,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 198,
        "origin": "Алматы",
        "region": "СНГ / Мир"
    },
    {
        "name": "Hensy",
        "nameRu": "Hensy",
        "debut": 2019,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 199,
        "origin": "Смоленск",
        "region": "Центр"
    },
    {
        "name": "Soso Pavliashvili",
        "nameRu": "Сосо Павлиашвили",
        "debut": 1989,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 201,
        "origin": "Тбилиси",
        "region": "СНГ / Мир"
    },
    {
        "name": "Tamara Gverdtsiteli",
        "nameRu": "Тамара Гвердцители",
        "debut": 1981,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 202,
        "origin": "Тбилиси",
        "region": "СНГ / Мир"
    },
    {
        "name": "Larisa Dolina",
        "nameRu": "Лариса Долина",
        "debut": 1971,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 203,
        "origin": "Баку",
        "region": "СНГ / Мир"
    },
    {
        "name": "Nadezhda Babkina",
        "nameRu": "Надежда Бабкина",
        "debut": 1974,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 204,
        "origin": "Чёрный Яр",
        "region": "Поволжье"
    },
    {
        "name": "Nadezhda Kadysheva",
        "nameRu": "Надежда Кадышева",
        "debut": 1988,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 205,
        "origin": "Горки",
        "region": "Поволжье"
    },
    {
        "name": "Nikolay Baskov",
        "nameRu": "Николай Басков",
        "debut": 1999,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 206,
        "origin": "Балашиха",
        "region": "Центр"
    },
    {
        "name": "Jasmine",
        "nameRu": "Жасмин",
        "debut": 1999,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 207,
        "origin": "Дербент",
        "region": "Юг"
    },
    {
        "name": "Alsou",
        "nameRu": "Алсу",
        "debut": 1998,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 208,
        "origin": "Бугульма",
        "region": "Поволжье"
    },
    {
        "name": "Dmitry Malikov",
        "nameRu": "Дмитрий Маликов",
        "debut": 1988,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 209,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Vladimir Presnyakov",
        "nameRu": "Владимир Пресняков",
        "debut": 1986,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 210,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "Valery Syutkin",
        "nameRu": "Валерий Сюткин",
        "debut": 1982,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 211,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Evgeny Margulis",
        "nameRu": "Евгений Маргулис",
        "debut": 1975,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 212,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Sergey Galanin",
        "nameRu": "Сергей Галанин",
        "debut": 1982,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 213,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Garik Sukachov",
        "nameRu": "Гарик Сукачёв",
        "debut": 1977,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 214,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Alexander Marshall",
        "nameRu": "Александр Маршал",
        "debut": 1980,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 215,
        "origin": "Кореновск",
        "region": "Юг"
    },
    {
        "name": "Nikolay Noskov",
        "nameRu": "Николай Носков",
        "debut": 1981,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 216,
        "origin": "Гжатск",
        "region": "Центр"
    },
    {
        "name": "Alexander Serov",
        "nameRu": "Александр Серов",
        "debut": 1976,
        "members": 1,
        "gender": "Male",
        "genre": "Поп",
        "rank": 217,
        "origin": "Ковалёвка",
        "region": "СНГ / Мир"
    },
    {
        "name": "Vyacheslav Butusov",
        "nameRu": "Вячеслав Бутусов",
        "debut": 1982,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 218,
        "origin": "Красноярск",
        "region": "Сибирь"
    },
    {
        "name": "Boris Grebenshchikov",
        "nameRu": "Борис Гребенщиков",
        "debut": 1972,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 219,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Yuri Shevchuk",
        "nameRu": "Юрий Шевчук",
        "debut": 1980,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 220,
        "origin": "Ягодное",
        "region": "Дальний Восток"
    },
    {
        "name": "Konstantin Kinchev",
        "nameRu": "Константин Кинчев",
        "debut": 1984,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 221,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Sergey Shnurov",
        "nameRu": "Сергей Шнуров",
        "debut": 1997,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 222,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Diana Arbenina",
        "nameRu": "Диана Арбенина",
        "debut": 1993,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 223,
        "origin": "Воложин",
        "region": "СНГ / Мир"
    },
    {
        "name": "Svetlana Surganova",
        "nameRu": "Светлана Сурганова",
        "debut": 1993,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 224,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Pelageya",
        "nameRu": "Пелагея",
        "debut": 1996,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 225,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Helavisa",
        "nameRu": "Хелависа",
        "debut": 1998,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 226,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Melnitsa",
        "nameRu": "Мельница",
        "debut": 1999,
        "members": 6,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 227,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Inna Zhelannaya",
        "nameRu": "Инна Желанная",
        "debut": 1985,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 228,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Yuta",
        "nameRu": "Юта",
        "debut": 2000,
        "members": 1,
        "gender": "Female",
        "genre": "Поп",
        "rank": 229,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "Chicherina",
        "nameRu": "Чичерина",
        "debut": 1997,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 230,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "Mara",
        "nameRu": "Мара",
        "debut": 2003,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 231,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Butch",
        "nameRu": "Буч",
        "debut": 2001,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 232,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Total",
        "nameRu": "Тотал",
        "debut": 2000,
        "members": 5,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 233,
        "origin": "Курган",
        "region": "Урал"
    },
    {
        "name": "Smyslovye Gallyutsinatsii",
        "nameRu": "Смысловые Галлюцинации",
        "debut": 1989,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 234,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "7B",
        "nameRu": "7Б",
        "debut": 2001,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 235,
        "origin": "Таллин",
        "region": "СНГ / Мир"
    },
    {
        "name": "Jane Air",
        "nameRu": "Jane Air",
        "debut": 2002,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 236,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Animal Jazz",
        "nameRu": "Animal ДжаZ",
        "debut": 2000,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 237,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Lumen",
        "nameRu": "Lumen",
        "debut": 1998,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 238,
        "origin": "Уфа",
        "region": "Поволжье"
    },
    {
        "name": "Amatory",
        "nameRu": "Amatory",
        "debut": 2001,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 239,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Stigmata",
        "nameRu": "Stigmata",
        "debut": 2003,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 240,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Psycho",
        "nameRu": "Психея",
        "debut": 1996,
        "members": 6,
        "gender": "Male",
        "genre": "Рок",
        "rank": 241,
        "origin": "Курган",
        "region": "Урал"
    },
    {
        "name": "5diez",
        "nameRu": "#####",
        "debut": 2001,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 242,
        "origin": "Витебск",
        "region": "СНГ / Мир"
    },
    {
        "name": "TRACKTOR BOWLING",
        "nameRu": "TRACKTOR BOWLING",
        "debut": 1996,
        "members": 5,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 243,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Louna",
        "nameRu": "Louna",
        "debut": 2008,
        "members": 5,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 244,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Arkona",
        "nameRu": "Аркона",
        "debut": 2002,
        "members": 5,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 245,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Alkonost",
        "nameRu": "Алконост",
        "debut": 1995,
        "members": 5,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 246,
        "origin": "Набережные Челны",
        "region": "Поволжье"
    },
    {
        "name": "Grai",
        "nameRu": "Грай",
        "debut": 2005,
        "members": 6,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 247,
        "origin": "Набережные Челны",
        "region": "Поволжье"
    },
    {
        "name": "Butterfly Temple",
        "nameRu": "Butterfly Temple",
        "debut": 1995,
        "members": 6,
        "gender": "Male",
        "genre": "Рок",
        "rank": 248,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Catharsis",
        "nameRu": "Catharsis",
        "debut": 1996,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 249,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Epidemia",
        "nameRu": "Эпидемия",
        "debut": 1991,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 250,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Master",
        "nameRu": "Мастер",
        "debut": 1987,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 251,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Black Obelisk",
        "nameRu": "Чёрный Обелиск",
        "debut": 1986,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 252,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Korroziya Metalla",
        "nameRu": "Коррозия Металла",
        "debut": 1984,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 253,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Gorki Park",
        "nameRu": "Парк Горького",
        "debut": 1987,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 254,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Kruiz",
        "nameRu": "Круиз",
        "debut": 1980,
        "members": 3,
        "gender": "Male",
        "genre": "Рок",
        "rank": 255,
        "origin": "Тамбов",
        "region": "Центр"
    },
    {
        "name": "Autograph",
        "nameRu": "Автограф",
        "debut": 1979,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 256,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Alliance",
        "nameRu": "Альянс",
        "debut": 1981,
        "members": 4,
        "gender": "Male",
        "genre": "Поп",
        "rank": 257,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Forum",
        "nameRu": "Форум",
        "debut": 1983,
        "members": 5,
        "gender": "Male",
        "genre": "Поп",
        "rank": 258,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Secret",
        "nameRu": "Секрет",
        "debut": 1983,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 259,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Brigada S",
        "nameRu": "Бригада С",
        "debut": 1984,
        "members": 8,
        "gender": "Male",
        "genre": "Рок",
        "rank": 260,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Center",
        "nameRu": "Центр",
        "debut": 1980,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 261,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Sound of Mu",
        "nameRu": "Звуки Му",
        "debut": 1983,
        "members": 5,
        "gender": "Male",
        "genre": "Рок",
        "rank": 262,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Strange Games",
        "nameRu": "Странные Игры",
        "debut": 1982,
        "members": 6,
        "gender": "Male",
        "genre": "Рок",
        "rank": 263,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "AVIA",
        "nameRu": "АВИА",
        "debut": 1985,
        "members": 6,
        "gender": "Male",
        "genre": "Рок",
        "rank": 264,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Auction",
        "nameRu": "АукцЫон",
        "debut": 1978,
        "members": 8,
        "gender": "Male",
        "genre": "Рок",
        "rank": 265,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Nol",
        "nameRu": "Ноль",
        "debut": 1985,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 266,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Kalinov Most",
        "nameRu": "Калинов Мост",
        "debut": 1986,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 267,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Televizor",
        "nameRu": "Телевизор",
        "debut": 1984,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 268,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Objection",
        "nameRu": "Объект Насмешек",
        "debut": 1985,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 269,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Zoopark",
        "nameRu": "Зоопарк",
        "debut": 1981,
        "members": 4,
        "gender": "Male",
        "genre": "Рок",
        "rank": 270,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Mike Naumenko",
        "nameRu": "Майк Науменко",
        "debut": 1978,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 271,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Alexander Bashlachev",
        "nameRu": "Александр Башлачёв",
        "debut": 1983,
        "members": 1,
        "gender": "Male",
        "genre": "Рок",
        "rank": 272,
        "origin": "Череповец",
        "region": "Северо-Запад"
    },
    {
        "name": "Yanka Dyagileva",
        "nameRu": "Янка Дягилева",
        "debut": 1987,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 273,
        "origin": "Новосибирск",
        "region": "Сибирь"
    },
    {
        "name": "Venya D'rkin",
        "nameRu": "Веня Д'ркин",
        "debut": 1991,
        "members": 1,
        "gender": "Male",
        "genre": "Инди",
        "rank": 274,
        "origin": "Должанск",
        "region": "СНГ / Мир"
    },
    {
        "name": "Umka",
        "nameRu": "Умка",
        "debut": 1986,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 275,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Olga Arefeva",
        "nameRu": "Ольга Арефьева",
        "debut": 1987,
        "members": 1,
        "gender": "Female",
        "genre": "Рок",
        "rank": 276,
        "origin": "Верхняя Салда",
        "region": "Урал"
    },
    {
        "name": "Rada i Ternovnik",
        "nameRu": "Рада и Терновник",
        "debut": 1991,
        "members": 4,
        "gender": "Female",
        "genre": "Рок",
        "rank": 277,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Messer Chups",
        "nameRu": "Messer Chups",
        "debut": 1998,
        "members": 3,
        "gender": "Mixed",
        "genre": "Электроника",
        "rank": 278,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Kim i Buran",
        "nameRu": "Ким и Буран",
        "debut": 2004,
        "members": 4,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 279,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Messer fur Frau Muller",
        "nameRu": "Нож для фрау Мюллер",
        "debut": 1991,
        "members": 2,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 280,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Oleg Kostrow",
        "nameRu": "Олег Костров",
        "debut": 1991,
        "members": 1,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 281,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Igor Vdovin",
        "nameRu": "Игорь Вдовин",
        "debut": 1991,
        "members": 1,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 282,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Andrei Samsonov",
        "nameRu": "Андрей Самсонов",
        "debut": 1990,
        "members": 1,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 283,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "NetSlov",
        "nameRu": "НетСлов",
        "debut": 1995,
        "members": 2,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 284,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Volga",
        "nameRu": "Волга",
        "debut": 1997,
        "members": 4,
        "gender": "Mixed",
        "genre": "Электроника",
        "rank": 285,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Theodor Bastard",
        "nameRu": "Theodor Bastard",
        "debut": 1996,
        "members": 5,
        "gender": "Mixed",
        "genre": "Инди",
        "rank": 286,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Ole Lukkoye",
        "nameRu": "Оле Лукойе",
        "debut": 1989,
        "members": 5,
        "gender": "Mixed",
        "genre": "Инди",
        "rank": 287,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Moon Far Away",
        "nameRu": "Moon Far Away",
        "debut": 1995,
        "members": 4,
        "gender": "Mixed",
        "genre": "Инди",
        "rank": 288,
        "origin": "Архангельск",
        "region": "Север"
    },
    {
        "name": "Caprice",
        "nameRu": "Caprice",
        "debut": 1996,
        "members": 6,
        "gender": "Mixed",
        "genre": "Классика",
        "rank": 289,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Fleur",
        "nameRu": "Fleur",
        "debut": 2000,
        "members": 2,
        "gender": "Female",
        "genre": "Инди",
        "rank": 290,
        "origin": "Одесса",
        "region": "СНГ / Мир"
    },
    {
        "name": "Alai Oli",
        "nameRu": "Alai Oli",
        "debut": 2004,
        "members": 5,
        "gender": "Female",
        "genre": "Инди",
        "rank": 291,
        "origin": "Екатеринбург",
        "region": "Урал"
    },
    {
        "name": "Non Cadenza",
        "nameRu": "Non Cadenza",
        "debut": 2004,
        "members": 5,
        "gender": "Female",
        "genre": "Джаз",
        "rank": 292,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    },
    {
        "name": "Guru Groove Foundation",
        "nameRu": "Guru Groove Foundation",
        "debut": 2009,
        "members": 6,
        "gender": "Female",
        "genre": "Джаз",
        "rank": 293,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Therr Maitz",
        "nameRu": "Therr Maitz",
        "debut": 2004,
        "members": 6,
        "gender": "Male",
        "genre": "Инди",
        "rank": 294,
        "origin": "Магадан",
        "region": "Дальний Восток"
    },
    {
        "name": "Tesla Boy",
        "nameRu": "Tesla Boy",
        "debut": 2008,
        "members": 4,
        "gender": "Male",
        "genre": "Электроника",
        "rank": 295,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "On-The-Go",
        "nameRu": "On-The-Go",
        "debut": 2007,
        "members": 5,
        "gender": "Male",
        "genre": "Инди",
        "rank": 296,
        "origin": "Тольятти",
        "region": "Поволжье"
    },
    {
        "name": "Pompeya",
        "nameRu": "Pompeya",
        "debut": 2006,
        "members": 4,
        "gender": "Male",
        "genre": "Инди",
        "rank": 297,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Motorama",
        "nameRu": "Motorama",
        "debut": 2005,
        "members": 3,
        "gender": "Male",
        "genre": "Рок",
        "rank": 298,
        "origin": "Ростов-на-Дону",
        "region": "Юг"
    },
    {
        "name": "Manicure",
        "nameRu": "Manicure",
        "debut": 2007,
        "members": 3,
        "gender": "Male",
        "genre": "Рок",
        "rank": 299,
        "origin": "Москва",
        "region": "Центр"
    },
    {
        "name": "Pinkshinyultrablast",
        "nameRu": "Pinkshinyultrablast",
        "debut": 2007,
        "members": 3,
        "gender": "Mixed",
        "genre": "Рок",
        "rank": 300,
        "origin": "Санкт-Петербург",
        "region": "Северо-Запад"
    }
];

let targetArtist = null;
let attempts = 0;
const maxAttempts = 10;
let guessedNames = [];

// Initialize Game
function init() {
    // Select artist of the day
    const seed = getDaySeed();
    targetArtist = artists[seed % artists.length];
    console.log("Hint:", targetArtist.nameRu || targetArtist.name); // For testing

    setupSearch();
}

function getDaySeed() {
    const now = new Date();
    return Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
}

function setupSearch() {
    const input = document.getElementById('artist-search');
    const list = document.getElementById('autocomplete-list');

    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        list.innerHTML = '';
        if (!val) return;

        const matches = artists
            .filter(a => {
                const combined = (a.name + " " + (a.nameRu || "")).toLowerCase();
                return combined.includes(val) && !guessedNames.includes(a.name);
            })
            .slice(0, 5);

        matches.forEach(match => {
            const div = document.createElement('div');
            // Display both if they are different
            const primaryName = match.nameRu || match.name;
            if (match.nameRu && match.nameRu.toLowerCase() !== match.name.toLowerCase()) {
                div.textContent = `${match.nameRu} (${match.name})`;
            } else {
                div.textContent = primaryName;
            }

            div.addEventListener('click', () => {
                input.value = '';
                list.innerHTML = '';
                submitGuess(match);
            });
            list.appendChild(div);
        });
    });
}

function submitGuess(guess) {
    if (attempts >= maxAttempts) return;

    attempts++;
    guessedNames.push(guess.name);
    document.getElementById('attempt-count').textContent = attempts;

    renderRow(guess);

    if (guess.name === targetArtist.name) {
        endGame(true);
    } else if (attempts === maxAttempts) {
        endGame(false);
    }
}

function renderRow(guess) {
    const tbody = document.getElementById('results-body');
    const row = document.createElement('tr');

    // Name - Display Russian primarily if available
    const nameCell = document.createElement('td');
    nameCell.textContent = guess.nameRu || guess.name;
    nameCell.className = 'name-cell';
    row.appendChild(nameCell);

    // Debut
    row.appendChild(createCell(guess.debut, targetArtist.debut, 'year'));

    // Members
    row.appendChild(createCell(guess.members, targetArtist.members, 'members'));

    // Gender - Translate for UI
    const genderRu = {
        'Male': 'Муж',
        'Female': 'Жен',
        'Mixed': 'Смеш',
        'Nonbinary': 'НБ'
    };
    row.appendChild(createCell(genderRu[guess.gender] || guess.gender, genderRu[targetArtist.gender] || targetArtist.gender, 'exact'));

    // Genre
    row.appendChild(createCell(guess.genre, targetArtist.genre, 'exact'));

    // Origin/Region
    row.appendChild(createCell(guess.origin, targetArtist.origin, 'origin', guess.region));

    tbody.prepend(row);
}

function createCell(guessVal, targetVal, type, region = null) {
    const td = document.createElement('td');
    td.textContent = guessVal;

    let status = 'incorrect';
    let indicator = '';

    if (type === 'exact') {
        if (guessVal === targetVal) status = 'correct';
    } else if (type === 'year') {
        if (guessVal === targetVal) {
            status = 'correct';
        } else if (Math.abs(guessVal - targetVal) <= 5) {
            status = 'close';
        }
        indicator = guessVal < targetVal ? ' ↑' : ' ↓';
    } else if (type === 'members') {
        if (guessVal === targetVal) status = 'correct';
    } else if (type === 'origin') {
        if (guessVal === targetVal) {
            status = 'correct';
        } else if (region === targetArtist.region) {
            status = 'close';
        }
    }

    td.className = status;
    if (indicator) {
        const span = document.createElement('span');
        span.className = 'indicator';
        span.textContent = indicator;
        td.appendChild(span);
    }

    return td;
}

function endGame(won) {
    const modal = document.getElementById('game-over-modal');
    const title = document.getElementById('modal-title');
    const msg = document.getElementById('modal-message');

    modal.classList.remove('hidden');
    title.textContent = won ? "Победа! 🎉" : "Игра окончена";
    const finalName = targetArtist.nameRu || targetArtist.name;
    msg.textContent = won
        ? `Вы угадали артиста ${finalName} с ${attempts}-й попытки!`
        : `Загаданным артистом был: ${finalName}`;
}

init();
