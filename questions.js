const QUESTIONS_DATA = {
    en: [
        {
            question: "Which film won the Academy Award for Best Picture in 1994?",
            answers: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "The Lion King"],
            correct: 0
        },
        {
            question: "Who directed the movie 'Inception'?",
            answers: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Ridley Scott"],
            correct: 1
        },
        {
            question: "What is the highest-grossing film of all time (not adjusted for inflation)?",
            answers: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"],
            correct: 1
        },
        {
            question: "In 'The Godfather', what is the name of the Corleone family patriarch?",
            answers: ["Michael", "Sonny", "Vito", "Fredo"],
            correct: 2
        },
        {
            question: "Which actress played Clarice Starling in 'The Silence of the Lambs'?",
            answers: ["Sigourney Weaver", "Jodie Foster", "Meryl Streep", "Susan Sarandon"],
            correct: 1
        },
        {
            question: "What year was the original 'Star Wars' film released?",
            answers: ["1975", "1977", "1979", "1980"],
            correct: 1
        },
        {
            question: "Who played Jack Dawson in 'Titanic'?",
            answers: ["Brad Pitt", "Matt Damon", "Leonardo DiCaprio", "Tom Cruise"],
            correct: 2
        },
        {
            question: "Which film features the quote 'Here's looking at you, kid'?",
            answers: ["Gone with the Wind", "Casablanca", "The Maltese Falcon", "Citizen Kane"],
            correct: 1
        },
        {
            question: "What is the name of the fictional continent in 'Black Panther'?",
            answers: ["Zamunda", "Wakanda", "Genovia", "Latveria"],
            correct: 1
        },
        {
            question: "Who directed 'Schindler's List'?",
            answers: ["Steven Spielberg", "Francis Ford Coppola", "Stanley Kubrick", "Roman Polanski"],
            correct: 0
        },
        {
            question: "In which film does Tom Hanks say 'Life is like a box of chocolates'?",
            answers: ["Cast Away", "The Green Mile", "Forrest Gump", "Big"],
            correct: 2
        },
        {
            question: "What is the name of the kingdom in 'Frozen'?",
            answers: ["Corona", "Arendelle", "DunBroch", "Agrabah"],
            correct: 1
        },
        {
            question: "Which actor played The Joker in 'The Dark Knight'?",
            answers: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
            correct: 2
        },
        {
            question: "What movie features the song 'My Heart Will Go On'?",
            answers: ["Ghost", "Titanic", "The Bodyguard", "Pretty Woman"],
            correct: 1
        },
        {
            question: "In 'The Matrix', what color pill does Neo take?",
            answers: ["Blue", "Red", "Green", "Yellow"],
            correct: 1
        },
        {
            question: "Which Pixar film features a rat who dreams of becoming a chef?",
            answers: ["Finding Nemo", "Up", "Ratatouille", "WALL-E"],
            correct: 2
        },
        {
            question: "Who played Wolverine in the X-Men film series?",
            answers: ["Russell Crowe", "Hugh Jackman", "Christian Bale", "Liam Neeson"],
            correct: 1
        },
        {
            question: "What is the name of the hotel in 'The Shining'?",
            answers: ["Bates Motel", "The Overlook Hotel", "Hotel & Lodge", "The Stanley Hotel"],
            correct: 1
        },
        {
            question: "Which 1999 film stars Brad Pitt and Edward Norton?",
            answers: ["Se7en", "Fight Club", "Snatch", "12 Monkeys"],
            correct: 1
        },
        {
            question: "What is Indiana Jones' real first name?",
            answers: ["Henry", "John", "James", "William"],
            correct: 0
        },
        {
            question: "Which film features the character 'Hannibal Lecter'?",
            answers: ["Psycho", "The Silence of the Lambs", "Se7en", "American Psycho"],
            correct: 1
        },
        {
            question: "Who directed 'Jurassic Park'?",
            answers: ["James Cameron", "George Lucas", "Steven Spielberg", "Michael Bay"],
            correct: 2
        },
        {
            question: "What is the name of the spacecraft in 'Alien'?",
            answers: ["Nostromo", "Sulaco", "Prometheus", "Covenant"],
            correct: 0
        },
        {
            question: "Which actor voiced Woody in 'Toy Story'?",
            answers: ["Tim Allen", "Tom Hanks", "Billy Crystal", "Robin Williams"],
            correct: 1
        },
        {
            question: "In which city does 'The Dark Knight' take place?",
            answers: ["New York", "Metropolis", "Gotham City", "Star City"],
            correct: 2
        },
        {
            question: "What is the name of the island in 'Jurassic Park'?",
            answers: ["Skull Island", "Isla Nublar", "Isla Sorna", "Monster Island"],
            correct: 1
        },
        {
            question: "Who played the T-800 in 'The Terminator'?",
            answers: ["Sylvester Stallone", "Arnold Schwarzenegger", "Jean-Claude Van Damme", "Dolph Lundgren"],
            correct: 1
        },
        {
            question: "What is Darth Vader's real name?",
            answers: ["Luke Skywalker", "Anakin Skywalker", "Obi-Wan Kenobi", "Han Solo"],
            correct: 1
        },
        {
            question: "Which film won the first Academy Award for Best Picture?",
            answers: ["Wings", "Sunrise", "The Jazz Singer", "Metropolis"],
            correct: 0
        },
        {
            question: "In 'The Lord of the Rings', what is the name of Gandalf's horse?",
            answers: ["Brego", "Shadowfax", "Asfaloth", "Bill the Pony"],
            correct: 1
        }
    ],
    ru: [
        {
            question: "Какой фильм получил премию «Оскар» за лучший фильм в 1994 году?",
            answers: ["Форрест Гамп", "Криминальное чтиво", "Побег из Шоушенка", "Король Лев"],
            correct: 0
        },
        {
            question: "Кто режиссёр фильма «Начало»?",
            answers: ["Стивен Спилберг", "Кристофер Нолан", "Мартин Скорсезе", "Ридли Скотт"],
            correct: 1
        },
        {
            question: "Какой фильм является самым кассовым за всё время (без учёта инфляции)?",
            answers: ["Мстители: Финал", "Аватар", "Титаник", "Звёздные войны: Пробуждение силы"],
            correct: 1
        },
        {
            question: "Как зовут главу семьи Корлеоне в фильме «Крёстный отец»?",
            answers: ["Майкл", "Сонни", "Вито", "Фредо"],
            correct: 2
        },
        {
            question: "Какая актриса сыграла Кларису Старлинг в фильме «Молчание ягнят»?",
            answers: ["Сигурни Уивер", "Джоди Фостер", "Мерил Стрип", "Сьюзан Сарандон"],
            correct: 1
        },
        {
            question: "В каком году вышли первые «Звёздные войны»?",
            answers: ["1975", "1977", "1979", "1980"],
            correct: 1
        },
        {
            question: "Кто сыграл Джека Доусона в «Титанике»?",
            answers: ["Брэд Питт", "Мэтт Дэймон", "Леонардо ДиКаприо", "Том Круз"],
            correct: 2
        },
        {
            question: "В каком фильме звучит фраза «Вот смотрю на тебя, детка»?",
            answers: ["Унесённые ветром", "Касабланка", "Мальтийский сокол", "Гражданин Кейн"],
            correct: 1
        },
        {
            question: "Как называется вымышленная страна в фильме «Чёрная Пантера»?",
            answers: ["Замунда", "Ваканда", "Дженовия", "Латверия"],
            correct: 1
        },
        {
            question: "Кто режиссёр фильма «Список Шиндлера»?",
            answers: ["Стивен Спилберг", "Фрэнсис Форд Коппола", "Стэнли Кубрик", "Роман Полански"],
            correct: 0
        },
        {
            question: "В каком фильме Том Хэнкс говорит «Жизнь — как коробка шоколадных конфет»?",
            answers: ["Изгой", "Зелёная миля", "Форрест Гамп", "Большой"],
            correct: 2
        },
        {
            question: "Как называется королевство в мультфильме «Холодное сердце»?",
            answers: ["Корона", "Эренделл", "Данброх", "Аграба"],
            correct: 1
        },
        {
            question: "Какой актёр сыграл Джокера в фильме «Тёмный рыцарь»?",
            answers: ["Джек Николсон", "Джаред Лето", "Хит Леджер", "Хоакин Феникс"],
            correct: 2
        },
        {
            question: "В каком фильме звучит песня «My Heart Will Go On»?",
            answers: ["Привидение", "Титаник", "Телохранитель", "Красотка"],
            correct: 1
        },
        {
            question: "Таблетку какого цвета выбирает Нео в «Матрице»?",
            answers: ["Синюю", "Красную", "Зелёную", "Жёлтую"],
            correct: 1
        },
        {
            question: "В каком мультфильме Pixar крыса мечтает стать поваром?",
            answers: ["В поисках Немо", "Вверх", "Рататуй", "ВАЛЛ-И"],
            correct: 2
        },
        {
            question: "Кто сыграл Росомаху в серии фильмов «Люди Икс»?",
            answers: ["Рассел Кроу", "Хью Джекман", "Кристиан Бэйл", "Лиам Нисон"],
            correct: 1
        },
        {
            question: "Как называется отель в фильме «Сияние»?",
            answers: ["Мотель Бейтса", "Отель «Оверлук»", "Отель и Лодж", "Отель «Стэнли»"],
            correct: 1
        },
        {
            question: "В каком фильме 1999 года снялись Брэд Питт и Эдвард Нортон?",
            answers: ["Семь", "Бойцовский клуб", "Большой куш", "12 обезьян"],
            correct: 1
        },
        {
            question: "Какое настоящее имя у Индианы Джонса?",
            answers: ["Генри", "Джон", "Джеймс", "Уильям"],
            correct: 0
        },
        {
            question: "В каком фильме появляется персонаж Ганнибал Лектер?",
            answers: ["Психо", "Молчание ягнят", "Семь", "Американский психопат"],
            correct: 1
        },
        {
            question: "Кто режиссёр фильма «Парк Юрского периода»?",
            answers: ["Джеймс Кэмерон", "Джордж Лукас", "Стивен Спилберг", "Майкл Бэй"],
            correct: 2
        },
        {
            question: "Как называется космический корабль в фильме «Чужой»?",
            answers: ["Ностромо", "Сулако", "Прометей", "Завет"],
            correct: 0
        },
        {
            question: "Какой актёр озвучил Вуди в мультфильме «История игрушек»?",
            answers: ["Тим Аллен", "Том Хэнкс", "Билли Кристал", "Робин Уильямс"],
            correct: 1
        },
        {
            question: "В каком городе происходит действие фильма «Тёмный рыцарь»?",
            answers: ["Нью-Йорк", "Метрополис", "Готэм-сити", "Стар-сити"],
            correct: 2
        },
        {
            question: "Как называется остров в «Парке Юрского периода»?",
            answers: ["Остров Черепа", "Исла Нублар", "Исла Сорна", "Остров Монстров"],
            correct: 1
        },
        {
            question: "Кто сыграл T-800 в фильме «Терминатор»?",
            answers: ["Сильвестр Сталлоне", "Арнольд Шварценеггер", "Жан-Клод Ван Дамм", "Дольф Лундгрен"],
            correct: 1
        },
        {
            question: "Как настоящее имя Дарта Вейдера?",
            answers: ["Люк Скайуокер", "Энакин Скайуокер", "Оби-Ван Кеноби", "Хан Соло"],
            correct: 1
        },
        {
            question: "Какой фильм получил первый «Оскар» за лучший фильм?",
            answers: ["Крылья", "Восход солнца", "Певец джаза", "Метрополис"],
            correct: 0
        },
        {
            question: "Как зовут коня Гэндальфа во «Властелине колец»?",
            answers: ["Брего", "Светозар", "Асфалот", "Пони Билл"],
            correct: 1
        }
    ]
};
