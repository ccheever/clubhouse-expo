import users from "./users.json";

// Fake listData
export default users
  .map((user) => ({
    ...user,
    activityDate: Math.floor(Math.random() * 12) + 1,
  }))
  .sort((a, b) => a.activityDate - b.activityDate);
