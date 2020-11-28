if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  const removeCartItemButtons = document.querySelectorAll('.btn-danger')
  //  const removeCartItemButtons = document.getElementsByClassName('btn-danger')
  console.log(removeCartItemButtons);
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  const quantityInputsChanges = document.querySelectorAll('.cart-quantity-input')
  for (let i = 0; i < quantityInputsChanges.length; i++) {
    const input = quantityInputsChanges[i]
    input.addEventListener('change', quantityChanged)

  }

  const addToCartButtons = document.querySelectorAll('.shop-item-button')
  for (let i = 0; i < addToCartButtons.length; i++) {
    const addBtn = addToCartButtons[i]
    addBtn.addEventListener('click', addItemToCartClicked)
  }


 document.querySelector('.btn-purchase').addEventListener('click',purchaseClicked)
}

function purchaseClicked(){
alert('Thank you for your purchase')
const cartItems = document.querySelector('.cart-items')
const total = document.querySelector('.cart-total-price')
while(cartItems.hasChildNodes())
{
  cartItems.removeChild(cartItems.firstChild)
}
total.textContent = '$0'
}

function removeCartItem(e) {
  let btn = e.target
  btn.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(e) {
  const input = e.target
  if (isNaN(input.value) || input.value <= 0 || input.value >= 99) {
    input.value = 1
  }
  updateCartTotal()
}

function addItemToCartClicked(e) {
  // two situations: one already exists in cart, anther totally brand new
  // get image, name, price
  // put them into a html element
  const button = e.target
  let shopItem = button.parentElement.parentElement
  const title = shopItem.querySelector('.shop-item-title').innerText
  const price = shopItem.querySelector('.shop-item-price').innerText
  const image = shopItem.querySelector('.shop-item-image').src
  addItemToCart(image, title, price)
  updateCartTotal()
}

function addItemToCart(image, title, price) {
  const cartRow = document.createElement('div')
  const cartItems = document.querySelector('.cart-items')
  const cartItemNames = cartItems.querySelectorAll('.cart-item-title')

  for(let i = 0; i < cartItemNames.length; i++){
    if(cartItemNames[i].innerText===title){
      const messageBox = document.querySelector('.messageBox')
      messageBox.classList.remove('hiddenItem')
      messageBox.innerText = `This item is already added to the cart.`
      setTimeout(()=> messageBox.classList.add('hiddenItem'), 3000)

      return
    }
  }

  const cartRowContents = `<div class="cart-item cart-column">
      <img src="${image}" alt="" class="cart-item-image" width="100" height="100">
      <div class="cart-item-title">${title}</div>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input type="number" class="cart-quantity-input" value="1">
      <button class="btn btn-danger" type="button">Remove</button>
  </div>`
  cartRow.classList.add('cart-row')
  cartRow.innerHTML = cartRowContents

  cartItems.append(cartRow)
  // 因为在初始化 ready()方法不可能循环新添加的 cart item，所以 addItemToCart() 方法需要手动添加触发一下  remove 和  quantity change 方法
  cartRow.querySelector('.btn-danger').addEventListener('click', removeCartItem)
  cartRow.querySelector('.cart-quantity-input').addEventListener('change',quantityChanged)
  updateCartTotal()
}


function updateCartTotal() {
  const cartItemContainer = document.querySelector('.cart-items')
  const cartRows = cartItemContainer.querySelectorAll('.cart-row')
  const totalTag = document.querySelector('.cart-total-price')
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i]
    const price = parseFloat(cartRow.querySelector('.cart-price').textContent.replace('$', ''))
    const quantity = parseInt(cartRow.querySelector('.cart-quantity-input').value)
    total += (price * quantity)
  }
  total = Math.round(total * 100) / 100
  totalTag.textContent = `$ ${total}`
}

