const authorizeRequest = require('./utils/authorizeRequest');

// Assuming weatherData is available within the scope
const fifa_worldcup_qatar_2022_summary = {
    "TournamentDetails": {
        "HostCountry": "Qatar",
        "Dates": "20 November – 18 December",
        "Teams": {
            "Total": 32,
            "FromConfederations": 5
        },
        "Venues": {
            "Total": 8,
            "HostCities": 5
        }
    },
    "FinalPositions": {
        "Champions": {
            "Country": "Argentina",
            "TitleCount": "3rd title"
        },
        "RunnersUp": "France",
        "ThirdPlace": "Croatia",
        "FourthPlace": "Morocco"
    },
    "TournamentStatistics": {
        "MatchesPlayed": 64,
        "GoalsScored": {
            "Total": 172,
            "PerMatch": "2.69"
        },
        "Attendance": {
            "Total": 3404252,
            "PerMatch": 53191
        },
        "TopScorer": {
            "Country": "France",
            "Player": "Kylian Mbappé",
            "Goals": 8
        },
        "BestPlayer": {
            "Country": "Argentina",
            "Player": "Lionel Messi"
        },
        "BestYoungPlayer": {
            "Country": "Argentina",
            "Player": "Enzo Fernández"
        },
        "BestGoalkeeper": {
            "Country": "Argentina",
            "Player": "Emiliano Martínez"
        },
        "FairPlayAward": "England"
    }
}


module.exports = (req, res) => {
  // API Key checking
  if (!authorizeRequest(req, res)) {
    return;
  }
  res.status(200).json(fifa_worldcup_qatar_2022_summary);
};
