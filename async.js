function createUser(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: (Math.random() * 100).toFixed(), name });
    }, 600)
  });
}

function addGroup(user, { id: groupId, title }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user.groupId === groupId ? user : { ...user, groupId });
    }, 600)
  });
}

function addSelectedGroupToUsers(users, group) {
  return Promise.all(users.map(user => (
    user.id ? addGroup(user, group) : createUser(user.name).then(user => addGroup(user, group))
  )));
}
