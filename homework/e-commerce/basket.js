function loadFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const basketBox = document.getElementById("basket-box");

    basketBox.innerHTML = "";

    if (products.length > 0) {
        products.forEach(product => {
            basketBox.innerHTML += `
                <div class="card">
                    <div class="image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="body">
                        <div class="title"><h3>Title: ${product.title}</h3></div>
                        <div class="price">Price: $${product.price}</div>
                        <button button onclick = "clearBasket()" > Səbəti Təmizlə</button >
                    </div>
                </div>
            `;
        });
    } else {
        basketBox.innerHTML = "<p>Səbət boşdur.</p>";
    }
}

function clearBasket() {
    localStorage.removeItem("selectedProducts");
    loadFromLocalStorage();
}

loadFromLocalStorage();
