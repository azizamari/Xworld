//variables

// const cartBtn=document.querySelector('.cart-btn');
// const closeCartBtn=document.querySelector('.close-cart');
// const clearCartBtn=document.querySelector('.clear-cart');
// const cartDOM=document.querySelector('.cart');
// const cartOverlay=document.querySelector('.cart-overlay');
const cartItmes=document.querySelector('.cart-items');
// const cartTotal=document.querySelector('.cart-total');
const cartContent=document.querySelector('.cart-content');
const productsDOM=document.querySelector('.products-center');

// //local storage
// class storage{

// }
let products=
[
    new Item("1","NZXT H710i",169.99,"./images/product1.png"),
    new Item("2","NZXT H710i",169.99,"./images/product2.png"),
    new Item("3","NZXT H710i",169.99,"./images/product3.png"),
    new Item("4","NZXT H710i",169.99,"./images/product4.png"),
    new Item("5","NZXT H710i",169.99,"./images/product5.png"),
    new Item("6","NZXT H710i",169.99,"./images/product6.png"),
    new Item("7","NZXT H710i",169.99,"./images/product7.png"),
    new Item("8","NZXT H710i",169.99,"./images/product8.png"),
]
let cartItems=[0,0,0,0,0,0,0,0];
function addItem(num){
    cartItmes.innerHTML++;
    addProduct(num);
}
function addProduct(id){
    cartItems[id-1]+=1;
    cartContent.innerHTML="";
    for(i=0;i<9;i++) {
        if(this.cartItems[i]>0){
            cartContent.innerHTML+=`
                    <div class="cart-item">
                        <img src="${products[i].path}" alt="product">
                        <div>
                            <h4>${products[i].name}</h4>
                            <h5>$${products[i].price}</h5>
                            <span class="remove-item">remove</span>
                        </div>
                        <div>
                            <i class="fas fa-chevron-up"></i>
                            <p class="item-amount">${this.cartItems[i]}</p>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>`;
        }
    }
} 

class Item{
    constructor(id,name,price,path) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.path = path;
    }
}
