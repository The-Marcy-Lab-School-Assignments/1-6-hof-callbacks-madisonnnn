const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!(callback(value))) return false;
  }
  return true;
};
/** FEEDBACK: This test is not passing because you are affecting the original array or objects. What do you need to do before the sort to make a copy of the array?  */
const sortUsersBy = (users, sortingFunction) => {
  const newUsers = users.sort(sortingFunction);
  return newUsers
};

const logEachName = (names) => {
  names.forEach((val, idx, arr) => console.log(val, idx, arr));
};

const logEachUserBio = (users) => {
  users.forEach((user) => console.log(user.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
