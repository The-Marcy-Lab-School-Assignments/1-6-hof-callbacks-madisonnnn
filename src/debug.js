const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!(callback(value))) return false;
  }
  return true;
};
/** FEEDBACK: Great job!  */
const sortUsersBy = ([...users], sortingFunction) => {
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
