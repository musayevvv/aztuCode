async function getData() {
    const url = "https://fakestoreapi.com/products";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.error(error.message);
    }
}


function displayProducts(products) {
    const cardBox = document.getElementById("card-box")

    cardBox.innerHTML = ""


    products.forEach(product => {
        cardBox.innerHTML += ` <div class="card">
            <div class="image"><img src="${product.image}" alt=""></div>
            <div class="body">
                <div class="card-title"><p>${product.title}</p></div>
                <div class="stars">
                    <i class="fa-solid fa-star" style="color: #000000;"></i>
                    <i class="fa-solid fa-star" style="color: #000000;"></i>
                    <i class="fa-solid fa-star" style="color: #000000;"></i>
                    <i class="fa-solid fa-star" style="color: #000000;"></i>
                    <i class="fa-solid fa-star-half-stroke" style="color: #000000;"></i>
                </div>
                <div class="price-box">
                    <div class="price">$${product.price}</div>  
                    <div class="colors">
                        <div class="color red"></div>
                        <div class="color blue"></div>
                        <div class="color green"></div>
                    </div>
                </div>           
            </div>
            <button data-id="${product.id}" class="btn">BUY NOW</button>
        </div>`
    });


    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            saveToLocalStorage(productId, products);
        })
    })

}

function saveToLocalStorage(id, products) {
    const selectedProduct = products.find(product => product.id == id)
    if (selectedProduct) {
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
        window.location.href = "basket.html";
    }
}

getData();
