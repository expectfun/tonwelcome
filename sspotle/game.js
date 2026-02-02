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
