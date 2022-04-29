let btnmobile=document.querySelector('.burger');
let containermobile = document.querySelector('.container-mobile');
let btnclosemobile = document.querySelector('#btn-close-mobile');
let imgProduct = document.querySelectorAll('#img-product');
let imgProductMain = document.querySelector('#img-product-main');
let imgProductMainBox = document.querySelector('#img-product-main-box');
let lightbox = document.querySelector('.lightbox');
let close = document.querySelector('.close');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let number = document.querySelector('.number');
qty=0;
let addToCart = document.querySelector('.addtocart');
let cartDescription = document.querySelector('.cart-description');
let cart = document.querySelector('.cart');
let cartbox = document.querySelector('.cart-box');
let trash = document.querySelector('#trash');
let notification = document.querySelector('.notification');
let empty = document.querySelector('#empty');
let notEmpty = document.querySelector('.cart-box-detail');


trash.addEventListener('click', () => {
    newDescriptionCart =  '<p>Your cart is empty</p>';
    cartDescription.innerHTML=newDescriptionCart; 
})

cart.addEventListener('click', ()=> {
    cartbox.classList.toggle('active');
})


btnmobile.addEventListener('click', () => {
    containermobile.classList.add('active');
})

btnclosemobile.addEventListener('click', () => {
    containermobile.classList.remove('active');
})

/* 
imgProduct.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.classList.add('showlight');
    })
});
*/

imgProductMain.addEventListener('click', () => {
    lightbox.classList.add('showlight');
})

close.addEventListener('click', () => {
    lightbox.classList.remove('showlight')
})


imgProduct.forEach(item => {
    item.addEventListener('click', () => {
        imgProduct.forEach(rem => {
          rem.classList.remove('selected')  
        })
        imgProductMain.src=item.getAttribute('related-image');
        imgProductMainBox.src=item.getAttribute('related-image');
        item.classList.add('selected');
        
    })
});

plus.addEventListener('click', () =>{
    qty++;
    number.innerHTML=qty;
})
minus.addEventListener('click', () => {
    if (qty>0) {
        qty--;
        number.innerHTML=qty;
    }
})

addToCart.addEventListener('click', () => {
    newDescriptionCart = '<div class="cart-box-detail"><img src="./images/image-product-1-thumbnail.jpg" class="image-cart"><p class="description">Fall Limited Edition Sneakers<br>$ 125,00 x <span>' + qty + '</span> <span class="cart-price">$ '+ 125*qty +'</span></p><img src="./images/icon-delete.svg" alt="" id="trash"></div><div class="checkout"><button>Checkout</button></div>'
    cartDescription.innerHTML=newDescriptionCart;
    cartbox.classList.add('active');
    notification.innerHTML=qty;
    notification.classList.add('visible');
    setTimeout(() => cartbox.classList.remove('active'), 3000);
})
   