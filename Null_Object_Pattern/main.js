class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  hasAccess() {
    return this.name === 'Bob'
  }
}

class NullUser {
  constructor() {
    this.id = -1
    this.name = 'Guest'
  }

  hasAccess() {
    return false
  }
}

const users = [
  new User(1, 'Bob'),
  new User(2, 'John')
]

function getUser(id) {
  const user = users.find(user => user.id === id)
  if(user === null){
    return new NullUser()
  }else{
    return user
  }
}

function printUser(id) {
  const user = getUser(id)

  /**
   * we need to explicitly tell the console.log to print "Guest" if the user does not have a name.
   * This is problematic since we need to remember to always put this
   */

  // let name = 'Guest'
  // if (user != null && user.name != null) {
  //   name = user.name
  // }

  console.log('Hello' + user.name);
  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log('You have access');
  } else {
    console.log('You are not allowed here');
  }
}

