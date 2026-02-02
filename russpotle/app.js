const STORAGE_KEY = 'russpotle';

let gameState = {
  currentGame: {
    date: null,
    targetArtistId: null,
    guesses: [],
    gameStatus: 'playing',
    guessCount: 0
  },
  stats: {
    played: 0,
    won: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    lastPlayed: null
  }
};

let targetArtist = null;

const searchInput = document.getElementById('searchInput');
const autocomplete = document.getElementById('autocomplete');
const guessesContainer = document.getElementById('guesses');
const messageContainer = document.getElementById('message');
const gameOverContainer = document.getElementById('gameOver');
const guessCountSpan = document.getElementById('guessCount');
const helpBtn = document.getElementById('helpBtn');
const statsBtn = document.getElementById('statsBtn');
const shareBtn = document.getElementById('shareBtn');
const helpModal = document.getElementById('helpModal');
const statsModal = document.getElementById('statsModal');

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getDailySeed() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return year * 10000 + month * 100 + day;
}

function getDailyArtist() {
  const seed = getDailySeed();
  const random = seededRandom(seed);
  const artistIndex = Math.floor(random * ARTISTS.length);
  return ARTISTS[artistIndex];
}

function getTodayString() {
  return new Date().toDateString();
}

function loadGameState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const today = getTodayString();

  if (saved) {
    gameState = JSON.parse(saved);

    if (gameState.currentGame.date === today) {
      targetArtist = ARTISTS.find(a => a.id === gameState.currentGame.targetArtistId);
      return gameState.currentGame.gameStatus !== 'playing';
    }
  }

  startNewGame();
  return false;
}

function saveGameState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
}

function startNewGame() {
  targetArtist = getDailyArtist();
  gameState.currentGame = {
    date: getTodayString(),
    targetArtistId: targetArtist.id,
    guesses: [],
    gameStatus: 'playing',
    guessCount: 0
  };
  saveGameState();
  searchInput.disabled = false;
  gameOverContainer.classList.add('hidden');
}

function compareArtists(guess, target) {
  const result = {
    genre: compareAttribute(guess.genre, target.genre, 'exact'),
    nationality: compareNationality(guess, target),
    gender: compareAttribute(guess.gender, target.gender, 'exact'),
    debut_year: compareDebutYear(guess.debut_year, target.debut_year),
    members: compareAttribute(guess.members, target.members, 'exact'),
    popularity: comparePopularity(guess.popularity, target.popularity)
  };

  return result;
}

function compareAttribute(guessValue, targetValue, type) {
  const match = guessValue === targetValue;
  return {
    value: guessValue,
    match: match ? 'exact' : 'none'
  };
}

function compareNationality(guess, target) {
  if (guess.nationality === target.nationality) {
    return {
      value: guess.nationality,
      match: 'exact'
    };
  }
  if (guess.region === target.region) {
    return {
      value: guess.nationality,
      match: 'close',
      hint: 'Same region'
    };
  }
  return {
    value: guess.nationality,
    match: 'none'
  };
}

function compareDebutYear(guessYear, targetYear) {
  const diff = Math.abs(guessYear - targetYear);
  if (diff === 0) {
    return {
      value: guessYear,
      match: 'exact'
    };
  }
  if (diff <= 5) {
    return {
      value: guessYear,
      match: 'close',
      hint: `${diff} year${diff > 1 ? 's' : ''} away`
    };
  }
  return {
    value: guessYear,
    match: 'none'
  };
}

function comparePopularity(guessPop, targetPop) {
  const diff = Math.abs(guessPop - targetPop);
  if (diff === 0) {
    return {
      value: guessPop,
      match: 'exact'
    };
  }
  if (diff <= 50) {
    return {
      value: guessPop,
      match: 'close',
      hint: `${diff} spots away`
    };
  }
  return {
    value: guessPop,
    match: 'none'
  };
}

function renderComparison(comparison) {
  const attributes = [
    { key: 'genre', label: 'Genre' },
    { key: 'nationality', label: 'Nationality' },
    { key: 'gender', label: 'Gender' },
    { key: 'debut_year', label: 'Debut' },
    { key: 'members', label: 'Members' },
    { key: 'popularity', label: 'Popularity' }
  ];

  return attributes.map(attr => {
    const result = comparison[attr.key];
    const matchClass = result.match === 'exact' ? 'match-exact' :
                      result.match === 'close' ? 'match-close' : 'match-none';
    const hint = result.hint ? `<span class="close-hint">(${result.hint})</span>` : '';

    return `
      <div class="attribute ${matchClass}">
        <span class="attribute-label">${attr.label}</span>
        <span class="attribute-value">${result.value}${hint}</span>
      </div>
    `;
  }).join('');
}

function addGuess(artist) {
  const comparison = compareArtists(artist, targetArtist);

  gameState.currentGame.guesses.push({
    artist: artist,
    comparison: comparison
  });
  gameState.currentGame.guessCount++;

  const guessCard = document.createElement('div');
  guessCard.className = 'guess-card';
  guessCard.innerHTML = `
    <div class="guess-header">
      <span class="guess-artist">${artist.name}</span>
    </div>
    <div class="guess-attributes">
      ${renderComparison(comparison)}
    </div>
  `;

  guessesContainer.appendChild(guessCard);
  guessCountSpan.textContent = gameState.currentGame.guessCount;
  searchInput.value = '';
  autocomplete.classList.add('hidden');

  if (artist.id === targetArtist.id) {
    endGame(true);
  } else if (gameState.currentGame.guessCount >= 10) {
    endGame(false);
  }

  saveGameState();
}

function endGame(won) {
  gameState.currentGame.gameStatus = won ? 'won' : 'lost';

  const today = getTodayString();
  if (gameState.stats.lastPlayed !== today) {
    gameState.stats.played++;
    gameState.stats.lastPlayed = today;

    if (won) {
      gameState.stats.won++;
      gameState.stats.currentStreak++;
      gameState.stats.maxStreak = Math.max(gameState.stats.maxStreak, gameState.stats.currentStreak);

      const guessIndex = Math.min(gameState.currentGame.guessCount - 1, 9);
      gameState.stats.guessDistribution[guessIndex]++;
    } else {
      gameState.stats.currentStreak = 0;
    }
  }

  saveGameState();

  searchInput.disabled = true;
  gameOverContainer.classList.remove('hidden');

  const gameOverTitle = document.getElementById('gameOverTitle');
  const targetArtistDiv = document.getElementById('targetArtist');
  const nextGameTime = document.getElementById('nextGameTime');

  if (won) {
    gameOverTitle.textContent = '🎉 You Won!';
    showMessage('Correct! 🎉', 'success');
  } else {
    gameOverTitle.textContent = '😔 Game Over';
    showMessage(`The artist was ${targetArtist.name}`, 'error');
  }

  targetArtistDiv.innerHTML = `
    <h3>Today's Artist</h3>
    <div class="artist-name">${targetArtist.name}</div>
    <div class="artist-genre">${targetArtist.genre} • ${targetArtist.nationality} • ${targetArtist.debut_year}</div>
  `;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const hoursLeft = Math.floor((tomorrow - new Date()) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((tomorrow - new Date()) / (1000 * 60)) % 60;

  nextGameTime.innerHTML = `Next artist in <strong>${hoursLeft}h ${minutesLeft}m</strong>`;
}

function showMessage(text, type) {
  messageContainer.textContent = text;
  messageContainer.className = `message ${type}`;
  messageContainer.classList.remove('hidden');

  setTimeout(() => {
    messageContainer.classList.add('hidden');
  }, 3000);
}

function filterArtists(query) {
  const q = query.toLowerCase().trim();

  if (!q) return [];

  return ARTISTS.filter(artist => {
    const nameMatch = artist.name.toLowerCase().includes(q) ||
                     artist.name_ru.toLowerCase().includes(q);
    return nameMatch;
  }).slice(0, 8);
}

function renderAutocomplete(artists) {
  if (artists.length === 0) {
    autocomplete.classList.add('hidden');
    return;
  }

  autocomplete.innerHTML = artists.map(artist => `
    <div class="autocomplete-item" data-id="${artist.id}">
      <div class="artist-name">${artist.name}</div>
      <div class="artist-genre">${artist.genre} • ${artist.nationality}</div>
    </div>
  `).join('');

  autocomplete.classList.remove('hidden');

  autocomplete.querySelectorAll('.autocomplete-item').forEach(item => {
    item.addEventListener('click', () => {
      const artistId = parseInt(item.dataset.id);
      const artist = ARTISTS.find(a => a.id === artistId);
      if (artist) {
        addGuess(artist);
      }
    });
  });
}

function handleSearch(e) {
  const query = e.target.value;
  const filtered = filterArtists(query);
  renderAutocomplete(filtered);
}

function shareResults() {
  const emojis = ['⬜', '🟨', '🟩'];
  const won = gameState.currentGame.gameStatus === 'won';
  const guesses = gameState.currentGame.guessCount;

  let result = `Russpotle ${getTodayString()}\n`;
  result += won ? `${guesses}/10\n` : 'X/10\n';

  gameState.currentGame.guesses.forEach(guess => {
    const attributes = [
      guess.comparison.genre.match,
      guess.comparison.nationality.match,
      guess.comparison.gender.match,
      guess.comparison.debut_year.match,
      guess.comparison.members.match,
      guess.comparison.popularity.match
    ];

    attributes.forEach(attr => {
      const matchIndex = attr === 'exact' ? 2 : attr === 'close' ? 1 : 0;
      result += emojis[matchIndex];
    });
    result += '\n';
  });

  result += '\nhttps://russpotle.com';

  navigator.clipboard.writeText(result).then(() => {
    showMessage('Results copied to clipboard!', 'success');
  }).catch(() => {
    showMessage('Failed to copy results', 'error');
  });
}

function updateStats() {
  document.getElementById('statPlayed').textContent = gameState.stats.played;
  document.getElementById('statWinPct').textContent = gameState.stats.played > 0
    ? Math.round((gameState.stats.won / gameState.stats.played) * 100)
    : 0;
  document.getElementById('statStreak').textContent = gameState.stats.currentStreak;
  document.getElementById('statMaxStreak').textContent = gameState.stats.maxStreak;

  const distribution = document.getElementById('distribution');
  const maxCount = Math.max(...gameState.stats.guessDistribution, 1);

  distribution.innerHTML = gameState.stats.guessDistribution.map((count, i) => {
    const percentage = (count / maxCount) * 100;
    return `
      <div class="distribution-bar">
        <span class="distribution-label">${i + 1}-${i + 2}</span>
        <div class="distribution-graph">
          <div class="distribution-fill" style="width: ${percentage}%"></div>
          <span class="distribution-count">${count || ''}</span>
        </div>
      </div>
    `;
  }).join('');
}

function openModal(modal) {
  modal.classList.remove('hidden');
  if (modal === statsModal) {
    updateStats();
  }
}

function closeModal(modal) {
  modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  loadGameState();

  searchInput.addEventListener('input', handleSearch);

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstItem = autocomplete.querySelector('.autocomplete-item');
      if (firstItem) {
        firstItem.click();
      }
    } else if (e.key === 'Escape') {
      autocomplete.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#searchContainer')) {
      autocomplete.classList.add('hidden');
    }
  });

  helpBtn.addEventListener('click', () => openModal(helpModal));
  statsBtn.addEventListener('click', () => openModal(statsModal));
  shareBtn.addEventListener('click', shareResults);

  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(helpModal);
      closeModal(statsModal);
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal(e.target);
    }
  });
});