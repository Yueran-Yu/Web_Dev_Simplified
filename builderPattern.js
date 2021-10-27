class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street

  }
}

class User {
  constructor(name, {age, phone='8668675757', address} = {}) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

const user = new User('Bob', {age: 10, address: new Address('1', 'main')})
console.log(user)

