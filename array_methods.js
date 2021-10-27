const items = [
  {name: 'Bike', price: 100},
  {name: 'TV', price: 200},
  {name: 'Album', price: 10},
  {name: 'Book', price: 5},
  {name: 'Phone', price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25}
]

// filter
const filterItems = items.filter(i => i.price <= 100)
console.log(filterItems)

// map
const itemNames = items.map(item => item.name)
console.log(itemNames)

// find: find a single item in an array
const xxx = items.find(i => i.name === 'Book')
console.log(xxx)

// forEach
items.forEach(item => console.log(item.price))

//sum
const hasInexpensiveItems = items.some(i => i.price <= 100)
console.log(hasInexpensiveItems)

// every
const hasEveryInexpensiveItems = items.every(i => i.price <= 100)
console.log(hasEveryInexpensiveItems)

// reduce
const total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price
}, 0)
console.log(total)

const ww = [1,2,3,4,5]
//includes
const includesTwo = ww.includes(2)
console.log(includesTwo)


