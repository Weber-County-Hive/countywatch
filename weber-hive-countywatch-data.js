// weber-hive-countywatch-data.js
// One entry per county. Add a new county? Add one object here.
// "official" is the county's confirmed root website — from there, readers
// navigate to meetings/agendas/records themselves.
// "coverage" is a list of your own published pieces relevant to that county —
// leave it empty ([]) for counties you haven't published on yet.

const COUNTIES = [
  {
    name: "Weber County",
    seat: "Ogden",
    region: "Wasatch Front",
    official: "https://webercountyutah.gov/",
    coverage: [
      { title: "PIDs: What is the Real Cost?", url: "https://weber-county-hive.github.io/PIDS-Utah/" },
      { title: "Surveillance / Flock cameras", url: "https://weber-county-hive.github.io/Surveillance/" },
    ],
  },
  {
    name: "Wasatch County",
    seat: "Heber City",
    region: "Wasatch Back",
    official: "https://www.wasatchcounty.gov/",
    coverage: [
      { title: "Follow the Deed: The Chain Behind Wasatch Highlands", url: "https://weber-county-hive.github.io/followthedeed/weber-hive-philo-wasatch-highlands.html" },
      { title: "One Vote, Four Checks (SB 258 / HB 510)", url: "https://weber-county-hive.github.io/Bill-Tracker/" },
      { title: "Unelected Power: Steve Waldrip", url: "https://weber-county-hive.github.io/Unelected-Power/" },
    ],
  },
  {
    name: "Summit County",
    seat: "Coalville",
    region: "Wasatch Back",
    official: "https://www.summitcountyutah.gov/",
    coverage: [
      { title: "One Vote, Four Checks (SB 258 / HB 510)", url: "https://weber-county-hive.github.io/Bill-Tracker/" },
    ],
  },
  {
    name: "Davis County",
    seat: "Farmington",
    region: "Wasatch Front",
    official: "https://www.daviscountyutah.gov/",
    coverage: [
      { title: "Two Deals to Watch in Syracuse: Costco/Gateway PID & the Shadow Point gym rebate", url: "weber-hive-countywatch-davis-syracuse.html" },
    ],
  },
  {
    name: "Salt Lake County",
    seat: "Salt Lake City",
    region: "Wasatch Front",
    official: "https://slco.org/",
    coverage: [
      { title: "Follow the Deed: North Temple Landfill / SITLA precedent", url: "https://weber-county-hive.github.io/followthedeed/" },
    ],
  },
  {
    name: "Box Elder County",
    seat: "Brigham City",
    region: "Northern Utah",
    official: "https://www.boxeldercounty.org/",
    coverage: [
      { title: "Data Centers: Stratos / Box Elder", url: "https://webercountyhive-coder.github.io/Data-Centers/" },
    ],
  },
  {
    name: "Utah County",
    seat: "Provo",
    region: "Utah Valley",
    official: "https://www.utahcounty.gov/",
    coverage: [
      { title: "PIDs: What is the Real Cost? (Utah County PID calculator)", url: "https://weber-county-hive.github.io/PIDS-Utah/" },
    ],
  },
];
