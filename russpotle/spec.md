# Russpotle - Russian Artist Guessing Game

## Overview
A Wordle-inspired daily guessing game where players identify Russian music artists in 10 tries. Pure client-side implementation using HTML, CSS, and JavaScript with no backend dependencies.

## Game Mechanics

### Core Gameplay
- **Objective**: Guess the mystery Russian artist in 10 attempts
- **Daily Challenge**: One new artist per day (resets at midnight)
- **Dataset**: 100 Russian artists across various genres and eras

### Feedback System

After each guess, players receive color-coded feedback on 6 attributes:

| Attribute | Exact Match (Green) | Close Match (Yellow) | No Match (Gray) |
|-----------|-------------------|---------------------|----------------|
| **Genre** | Exact genre | - | Different genre |
| **Nationality** | Exact country/region | Same region* | Different region |
| **Gender** | Exact gender | - | Different gender |
| **Debut Year** | Exact year | Within 5 years | More than 5 years |
| **Members** | Exact count | - | Different count |
| **Popularity** | Exact rank | Within 50 spots | More than 50 spots |

*For Russian artists, regions can be: Russia, Ukraine, Belarus, Kazakhstan, Other Post-Soviet, International

### Genre Categories
Pop, Rock, Hip-Hop, Electronic, Folk, Alternative, Jazz, Classical, Reggae, Chanson, Shanson, Other

### Gender Categories
Male, Female, Group (Mixed), Non-binary

### Popularity Ranking
Artists ranked 1-100 based on streaming popularity, cultural impact, and recognition

## Technical Architecture

### Technology Stack
- **HTML5** - Structure
- **CSS3** - Styling (dark theme default)
- **Vanilla JavaScript** - Game logic
- **LocalStorage** - State persistence

### Data Structure

#### Artist Dataset (JSON)
```json
{
  "id": 1,
  "name": "Artist Name",
  "name_ru": "Имя Артиста",
  "image": "images/artist.jpg",
  "genre": "Pop",
  "nationality": "Russia",
  "region": "Russia",
  "gender": "Female",
  "debut_year": 2010,
  "members": 1,
  "popularity": 15,
  "spotify_url": "https://...",
  "yandex_music_url": "https://...",
  "vk_music_url": "https://..."
}
```

#### Game State (LocalStorage)
```json
{
  "currentGame": {
    "date": "2026-02-02",
    "targetArtistId": 42,
    "guesses": [],
    "gameStatus": "playing", // playing, won, lost
    "guessCount": 0
  },
  "stats": {
    "played": 25,
    "won": 20,
    "currentStreak": 5,
    "maxStreak": 10,
    "guessDistribution": [0, 5, 8, 4, 2, 1, 0, 0, 0, 0],
    "lastPlayed": "2026-02-01"
  }
}
```

### Core Functions

#### 1. Daily Artist Selection
```javascript
function getDailyArtist() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + 
               (today.getMonth() + 1) * 100 + 
               today.getDate();
  
  // Simple seeded random
  const random = seededRandom(seed);
  const artistIndex = Math.floor(random * ARTISTS.length);
  return ARTISTS[artistIndex];
}
```

#### 2. Attribute Comparison
```javascript
function compareArtists(guess, target) {
  return {
    genre: {
      value: guess.genre,
      match: guess.genre === target.genre ? 'exact' : 'none'
    },
    nationality: {
      value: guess.nationality,
      match: guess.nationality === target.nationality ? 'exact' : 
             guess.region === target.region ? 'close' : 'none'
    },
    gender: {
      value: guess.gender,
      match: guess.gender === target.gender ? 'exact' : 'none'
    },
    debut_year: {
      value: guess.debut_year,
      match: guess.debut_year === target.debut_year ? 'exact' :
             Math.abs(guess.debut_year - target.debut_year) <= 5 ? 'close' : 'none'
    },
    members: {
      value: guess.members,
      match: guess.members === target.members ? 'exact' : 'none'
    },
    popularity: {
      value: guess.popularity,
      match: guess.popularity === target.popularity ? 'exact' :
             Math.abs(guess.popularity - target.popularity) <= 50 ? 'close' : 'none'
    }
  };
}
```

#### 3. Game State Management
```javascript
function loadGame() {
  const saved = localStorage.getItem('russpotle');
  const today = new Date().toDateString();
  
  if (saved) {
    const data = JSON.parse(saved);
    if (data.currentGame.date === today) {
      return data;
    }
  }
  
  return startNewGame();
}

function saveGameState(state) {
  localStorage.setItem('russpotle', JSON.stringify(state));
}
```

## UI Components

### Main Game Screen
```
┌─────────────────────────────────────┐
│  Russpotle  [?]  [Stats]  [Settings]│
├─────────────────────────────────────┤
│                                     │
│           [Search Box]              │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Viktor Tsoi                 │   │
│  │ Genre: Rock ✓               │   │
│  │ Nationality: Russia ✓        │   │
│  │ Gender: Male ✓              │   │
│  │ Debut: 1981 (within 5) ~    │   │
│  │ Members: 4 ✓                │   │
│  │ Popularity: 12 (close) ~    │   │
│  └─────────────────────────────┘   │
│                                     │
│  Guesses: 3/10                      │
└─────────────────────────────────────┘
```

### Color Scheme
- **Exact Match** (Green): `#538d4e`
- **Close Match** (Yellow): `#b59f3b`
- **No Match** (Gray): `#3a3a3c`
- **Background**: `#121212`
- **Text**: `#ffffff`

### Search/ autocomplete
- Filter artists as user types
- Show matching results in dropdown
- Support Cyrillic and Latin input
- Fuzzy matching for transliteration

## Required Files

```
russpotle/
├── index.html          # Main game page
├── styles.css          # Game styling
├── app.js              # Game logic
├── data/
│   └── artists.js      # Artist dataset (embedded)
├── images/
│   └── [artist images] # Artist images (100x100)
└── icons/
    └── [ui icons]      # UI icons
```

## Dataset Requirements

### Artist Selection Criteria
1. **Cultural Impact**: Significant influence on Russian/Soviet music
2. **Time Period**: From Soviet era (1960s) to present (2020s)
3. **Genre Diversity**: Multiple genres represented
4. **Geographic Coverage**: Artists from across post-Soviet space
5. **Recognition**: Well-known to Russian-speaking audience

### Minimum Dataset: 100 Artists
- Soviet era classics (20-30)
- 1990s-2000s pop/rock (20-30)
- Modern artists (2010s-present) (20-30)
- Various genres represented
- Solo artists and groups

### Required Metadata for Each Artist
- Name (Russian and English)
- Genre
- Nationality/Country of origin
- Region
- Gender
- Debut year (first album/mixtape/EP)
- Number of members (1 for solo, actual count for groups)
- Popularity rank (1-100)
- Image URL
- Streaming platform links (optional)

## Features

### Core Features
- [x] Daily artist selection
- [x] 10 guesses per game
- [x] Attribute comparison with visual feedback
- [x] Autocomplete search
- [x] Game state persistence
- [x] Stats tracking (wins, streaks, distribution)

### Optional Features
- [ ] Previous day results
- [ ] Share results (copy to clipboard)
- [ ] Dark/light theme toggle
- [ ] Sound effects
- [ ] Animations for reveal
- [ ] Practice mode (unlimited guesses)
- [ ] Artist info modal

## Implementation Priority

1. **Phase 1**: Core game mechanics
   - Dataset creation
   - Daily selection
   - Comparison logic
   - Basic UI

2. **Phase 2**: Enhanced UX
   - Autocomplete search
   - Visual feedback animations
   - Stats tracking

3. **Phase 3**: Polish
   - Responsive design
   - Accessibility
   - Performance optimization

## Notes

### Differences from Original Spotle
- **Dataset**: Russian artists instead of international
- **No backend**: Pure client-side (localStorage instead of Supabase)
- **Regions**: Adapted for post-Soviet geography
- **Platforms**: Links to Yandex Music, VK Music instead of Spotify/SoundCloud

### Localization Considerations
- Support Cyrillic search
- Transliteration support (e.g., "Tsoi" = "Цой")
- Russian UI option
- Cultural context for genres (e.g., "Chanson" vs "Shanson")

### Performance Considerations
- Embed dataset directly in JS (~50-100KB for 100 artists)
- Lazy load images
- Debounce search input
- Use CSS transforms for animations