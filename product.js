const products = [
    { id: 1, name: "Product 1", price: 10, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 15, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 20, img: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: 25, img: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: 30, img: "https://via.placeholder.com/150" }
];

function loadProducts() {
    let list = document.getElementById('products');
    list.innerHTML = "";
    products.forEach(p => {
        let html = `
            <div class="product">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>$${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
        list.innerHTML += html;
    });
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let list = document.getElementById('cartItems');
    if (cart.length === 0) {
        list.innerHTML = "Cart is empty";
        return;
    }
    list.innerHTML = "";
    cart.forEach(item => {
        list.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}