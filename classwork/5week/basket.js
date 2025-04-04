function loadFromLocalStorage() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
        const basketBox = document.getElementById("basket-box");

        basketBox.innerHTML = `
            <div class="card">
                <div class="image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="body">
                    <div class="title"><h3>Title: ${product.title}</h3></div>
                    <div class="price">Price: $${product.price}</div>
                </div>
                <button onclick="clearBasket()">Səbəti Təmizlə</button>
            </div>
        `;
    } else {
        document.getElementById("basket-box").innerHTML = "<p>Səbət boşdur.</p>";
    }
}

function clearBasket() {
    localStorage.removeItem("selectedProduct");
    loadFromLocalStorage(); 
}

loadFromLocalStorage();
