// Predictions
//==============
// 1. Highest enjoyment activity: Drawing
// 2. Dominant category: creative
// 3. Time-of-day pattern: Evening activities will have higher enjoyment

// Weekly Activity Data
//=======================

const myWeek = [
  {
    day: "Monday",
    activity: "Walking",
    category: "physical",
    hoursSpent: 1,
    enjoyment: 7,
    timeOfDay: "morning"
  },
  {
    day: "Tuesday",
    activity: "Drawing",
    category: "creative",
    hoursSpent: 1.5,
    enjoyment: 9,
    timeOfDay: "evening"
  },
  {
    day: "Wednesday",
    activity: "Cooking",
    category: "creative",
    hoursSpent: 1,
    enjoyment: 8,
    timeOfDay: "evening"
  },
  {
    day: "Thursday",
    activity: "Meeting friends",
    category: "social",
    hoursSpent: 2,
    enjoyment: 6,
    timeOfDay: "evening"
  },
  {
    day: "Friday",
    activity: "Yoga",
    category: "physical",
    hoursSpent: 1,
    enjoyment: 8,
    timeOfDay: "morning"
  },
  {
    day: "Saturday",
    activity: "Watching a movie",
    category: "social",
    hoursSpent: 2.5,
    enjoyment: 7,
    timeOfDay: "evening"
  },
  {
    day: "Sunday",
    activity: "Reading",
    category: "creative",
    hoursSpent: 1,
    enjoyment: 9,
    timeOfDay: "afternoon"
  }
];

// Analysis Functions
// ===============================

// 1. Total hours spent on physical activities
const totalPhysicalHours = myWeek
  .filter(act => act.category === "physical")
  .reduce((sum, act) => sum + act.hoursSpent, 0);

console.log("Total hours spent on physical activities:", totalPhysicalHours);

// 2. Average enjoyment for evening activities
const eveningActivities = myWeek.filter(
  act => act.timeOfDay === "evening"
);

const avgEveningEnjoyment =
  eveningActivities.reduce((sum, act) => sum + act.enjoyment, 0) /
  eveningActivities.length;

console.log("Average evening enjoyment:", avgEveningEnjoyment.toFixed(1));

// 3. Most common activity category
const categoryCounts = myWeek.reduce((counts, act) => {
  counts[act.category] = (counts[act.category] || 0) + 1;
  return counts;
}, {});

const mostCommonCategory = Object.keys(categoryCounts).reduce((a, b) =>
  categoryCounts[a] > categoryCounts[b] ? a : b
);

console.log("Most common category:", mostCommonCategory);

// 4. Low-effort, high-enjoyment activities
const lowEffortHighEnjoyment = myWeek
  .filter(act => act.hoursSpent <= 1 && act.enjoyment >= 8)
  .map(act => act.activity);

console.log(
  "Low-effort, high-enjoyment activities:",
  lowEffortHighEnjoyment
);

