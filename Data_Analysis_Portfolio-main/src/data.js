const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Into The Spider-Verse",
    description: "Data visualization and analysis dashboard for Into the Spider-Verse.",
    image: `${base}breast_cancer.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Nobody-KnowsBetter/into-the-spider-verse",
    live: "https://public.tableau.com/app/profile/himank.kaushik/viz/into-thespider-verse/Dashboard1"
  },
  {
    name: "Weather Info",
    description: "Graphical view of weather information.",
    image: `${base}diabetic_readmission.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Nobody-KnowsBetter/Weather-info",
    live: "https://public.tableau.com/app/profile/himank.kaushik/viz/weather-info/Graphicalview"
  },
  {
    name: "Netflix Dashboard",
    description: "An interactive dashboard visualizing Netflix data and trends.",
    image: `${base}dva_project.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Nobody-KnowsBetter/Netflix-dashboard",
    live: "https://public.tableau.com/app/profile/himank.kaushik/viz/netflixdashboard_17774558725110/Netflix"
  },
  {
    name: "Pokemon Dashboard",
    description: "Dashboard presenting detailed Pokemon information and stats.",
    image: `${base}dva_project.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Nobody-KnowsBetter/Pokemon-Dasboard",
    live: "https://public.tableau.com/app/profile/himank.kaushik/viz/PokemonDashboard_17774531930860/PokemonInfo"
  }
]

export default projects
