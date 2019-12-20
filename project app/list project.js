
const connect = require ("./assets/data/db")
const project = require("./assets/data/project.model")
array = [
  {
    href: "https://www.datacamp.com//projects/684",
    name: "TV, Halftime Shows, and the Big Game",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/33",
    name: "Introduction to DataCamp Projects",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/10",
    name: "Exploring 67 years of LEGO",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/20",
    name: "Dr. Semmelweis and the Discovery of Handwashing",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/82",
    name: "Exploring the Bitcoin Cryptocurrency Market",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/76",
    name: "A Network Analysis of Game of Thrones",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/66",
    name: "Risk and Returns: The Sharpe Ratio",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/111",
    name: "Exploring the Evolution of Linux",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/558",
    name: "Predicting Credit Card Approvals",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/158",
    name: "The Hottest Topics in Machine Learning",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/250",
    name: "A New Era of Data Analysis in Baseball",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/374",
    name: "Naïve Bees: Image Loading and Processing",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/38",
    name: "Word Frequency in Moby Dick",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/400",
    name: "Generating Keywords for Google Ads",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/97",
    name: "Name Game: Gender Prediction using Sound",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/449",
    name: "Classify Song Genres from Audio Data",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/184",
    name: "Mobile Games A/B Testing with Cookie Cats",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/132",
    name: "Recreating John Snow's Ghost Map",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/611",
    name: "Extract Stock Sentiment from News Headlines",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/412",
    name: "Naïve Bees: Predict Species from Images",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/475",
    name: "Who Is Drunk and When in Ames, Iowa?",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/555",
    name: "Naïve Bees: Deep Learning with Images",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/441",
    name: "A Visual History of Nobel Prize Winners",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/141",
    name: "Bad passwords and the NIST guidelines",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/479",
    name: "Do Left-handed People Really Die Young?",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/509",
    name: "ASL Recognition with Deep Learning",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/462",
    name: "Reducing Traffic Mortality in the USA",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/163",
    name: "The GitHub History of the Scala Language",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/648",
    name: "Find Movie Similarity from Plot Summaries",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/504",
    name: "Which Debts Are Worth the Bank's Effort?",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/619",
    name: "The Android App Market on Google Play",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/646",
    name: "Give Life: Predict Blood Donations",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/607",
    name: "Book Recommendations from Charles Darwin",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/727",
    name: "Analyze Your Runkeeper Fitness Data",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/538",
    name: "Up and Down With the Kardashians",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/695",
    name: "Comparing Cosmetics by Ingredients",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/740",
    name: "Disney Movies and Box Office Success",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/467",
    name: "Who's Tweeting? Trump or Trudeau?",
    done: false
  },
  {
    href: "https://www.datacamp.com//projects/760",
    name: "Real-time Insights from Social Media Data",
    done: false
  }
];


const start = async ()=>{
  await connect()
  project.create(array)
}

start()
