
let images = [
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/17/55/82/15/82/01/13/59/25/69/34896121962764060573.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/01/86/76/85/22/50/16/32/37/29/55751795327733119666.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/02/27/69/58/14/64/40/92/96/53/82/12664286875686488180.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/05/57/05/78/95/77/02/00/07/89/16342145368588597078.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/19/85/65/95/41/88/89/46/96/24/73288163473886695032.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/17/86/37/92/17/59/88/33/09/49/27383679189344272499.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/18/76/54/70/12/67/54/90/82/98/76885644663890134724.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/21/75/85/16/07/54/04/63/78/60/31917793634442591401.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/20/90/48/50/79/37/92/11/02/69/85427327991070541172.jpg",
  "https://n11scdn.akamaized.net/a1/1180_440/25/03/20/55/81/89/84/88/89/63/86/14/66790608422828523975.jpg",
];

function createCarousel(images) {
  let carouselIndicators = document.getElementById('carouselIndicators');
  let carouselInner = document.getElementById('carouselInner');

  images.forEach((image, index) => {
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-target', '#carouselExampleIndicators');
    button.setAttribute('data-bs-slide-to', index);
    if (index === 0) button.classList.add('active');
    button.setAttribute('aria-label', `Slide ${index + 1}`);
    carouselIndicators.appendChild(button);

    let divItem = document.createElement('div');
    divItem.classList.add('carousel-item');
    if (index === 0) divItem.classList.add('active');

    let img = document.createElement('img');
    img.setAttribute('src', image);
    img.classList.add('d-block', 'w-100');
    img.setAttribute('alt', '...');

    divItem.appendChild(img);
    carouselInner.appendChild(divItem);
  });
}

createCarousel(images);


const products = [
  {
    image: "https://n11scdn.akamaized.net/a1/226_339/13/34/21/49/IMG-3829073296363399964.jpg",
    title: "Sony Playstation PS5 Slim 1 TB Digital Edition Oyun Konsolu + 2 Dualsense Kol (İthalatçı Garantili)",
    rating: 5,
    reviews: 192,
    originalPrice: "25.999 TL",
    cartStatus: "SEPETDE",
    endPrice: "23.999 TL",
    freeShipping: true,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/226_339/10/70/82/65/IMG-3577949273807994345.jpg",
    title: "Dell Alienware AW2724HF 27 0.5 Ms 360 Hz Adaptive Sync Fast Ips Monitör",
    rating: 3,
    reviews: 1453,
    originalPrice: "15.965 TL",
    cartStatus: "SEPETDE",
    endPrice: "12.999 TL",
    freeShipping: true,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/320_480/11/14/95/40/IMG-5914280185327173190.jpg",
    title: "AMD Ryzen 5 7500F 3.7 GHz AM5 38 MB Cache 65 W İşlemci Tray",
    rating: 5,
    reviews: 617,
    originalPrice: "6.799 TL",
    cartStatus: "SEPETDE",
    endPrice: "5.799 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/320_480/07/65/63/85/IMG-6632433330053875059.jpg",
    title: "Apple iPad Air M2 MUWC3TU/A Wi-Fi 128 GB 11 Tablet Uzay Grisi",
    rating: 5,
    reviews: 256,
    originalPrice: "26.500 TL",
    cartStatus: "SEPETDE",
    endPrice: "24.300 TL",
    freeShipping: true,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/56/54/60/90/38/45/42/57/19/26040334021026951284.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/602_857/01/16/00/53/IMG-3062556028856964520.jpg",
    title: "DeepCool LS520 SE RGB 240 MM Sıvı Soğutucu",
    rating: 4,
    reviews: 39,
    originalPrice: "3.299 TL",
    cartStatus: "SEPETDE",
    endPrice: "3.299 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/602_857/12/83/68/56/IMG-749151388553056035.jpg",
    title: "Zoko Amiral DK431 4x12 Cm ARGB Fanlı Mesh Panel Temperli Cam E-ATX Bilgisayar Kasası",
    rating: 5,
    reviews: 59,
    originalPrice: "2.194 TL",
    cartStatus: "SEPETDE",
    endPrice: "2.044 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },
  //product hisse bitdi
  {
    image: "	https://n11scdn.akamaized.net/a1/500_713/12/09/88/81/IMG-2961213288067341400.jpg",
    title: "D's Damat Slim Fit Erkek Gömlek Gri 6EF02ORT00288",
    rating: 3,
    reviews: 15,
    originalPrice: "1.099 TL",
    cartStatus: "SEPETDE",
    endPrice: "1.099 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },
  {
    image: "	https://n11scdn.akamaized.net/a1/320_480/02/72/34/53/IMG-630030455833186826.jpg",
    title: "U.s. Polo Assn. Erkek Açık Mavi Gömlek Basic 50288648-vr003 Mavi",
    rating: 5,
    reviews: 71,
    originalPrice: "649 TL",
    cartStatus: "SEPETDE",
    endPrice: "629 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  {
    image: "	https://n11scdn.akamaized.net/a1/320_480/08/22/94/50/IMG-8386296974610376776.jpg",
    title: "Lufian Erkek Pablo Modern Grafik T-shirt 111020223 Beyaz",
    rating: 4,
    reviews: 65,
    originalPrice: "519 TL",
    cartStatus: "SEPETDE",
    endPrice: "499 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },
  {
    image: "	https://n11scdn.akamaized.net/a1/320_480/11/77/55/06/IMG-5137018893499923028.jpg",
    title: "U.s. Polo Assn. Erkek Lacivert Gömlek Basic 50296757-vr033 Lacivert",
    rating: 4,
    reviews: 70,
    originalPrice: "1.099 TL",
    cartStatus: "SEPETDE",
    endPrice: "1.099 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/56/54/60/90/38/45/42/57/19/26040334021026951284.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/320_480/05/16/67/84/IMG-8126882312767168547.jpg",
    title: "AC&Co / Altınyıldız Classics Anti-Pilling Tüylenme Yapmayan Bato Yaka Erkek Polar Sweatshirt 4A5221100016HAKL Haki",
    rating: 4,
    reviews: 36,
    originalPrice: "799 TL",
    cartStatus: "SEPETDE",
    endPrice: "759 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },

  {
    image: "	https://n11scdn.akamaized.net/a1/320_480/08/36/46/51/IMG-7561668544993152801.jpg",
    title: "Lufian Erkek T Shirt 112020039 Bej",
    rating: 4,
    reviews: 87,
    originalPrice: "478 TL",
    cartStatus: "SEPETDE",
    endPrice: "478 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  //wear hisse bitdi

  {
    image: "	https://n11scdn.akamaized.net/a1/602_857/11/26/15/54/IMG-6710704259718858043.jpg",
    title: "Puma 392332-02 Caven 2.0 Vtg Erkek Spor Ayakkabı Siyah - Beyaz",
    rating: 5,
    reviews: 4,
    originalPrice: "2.299 TL",
    cartStatus: "SEPETDE YOK",
    endPrice: "2.099TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/226_339/11/91/04/93/IMG-657835716266331726.jpg",
    title: "Nike Air Max 270 Erkek Spor Ayakkabı Beyaz",
    rating: 4,
    reviews: 65,
    originalPrice: "3.999 TL",
    cartStatus: "SEPETDE",
    endPrice: "3.999 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },
  {
    image: "	https://n11scdn.akamaized.net/a1/226_339/04/46/03/41/IMG-3450185637249704952.jpg",
    title: "Adidas Samba Og Unisex Günlük Ayakkabı Jı1991 Bej Jı1991 Bej",
    rating: 4,
    reviews: 14,
    originalPrice: "2.599 TL",
    cartStatus: "SEPETDE",
    endPrice: "2.599 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/56/54/60/90/38/45/42/57/19/26040334021026951284.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/226_339/14/39/10/65/IMG-1772886187549519312.jpg",
    title: "Nıke Court Vısıon Lo Nn Erkek Spor Ayakkabı Dh2987 Dh2987 101",
    rating: 5,
    reviews: 19,
    originalPrice: "999 TL",
    cartStatus: "SEPETDE",
    endPrice: "999 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/88/56/64/67/16/21/58/62/81/79064825173882417375.png"
  },

  {
    image: "https://n11scdn.akamaized.net/a1/226_339/11/00/63/43/IMG-4065896220779368355.jpg",
    title: "New Balance ML408WS 408 Unisex Spor Ayakkabı Beyaz",
    rating: 3,
    reviews: 7,
    originalPrice: "3.129 TL",
    cartStatus: "SEPETDE",
    endPrice: "2.789 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/226_339/14/50/98/78/IMG-1877752691585661853.jpg",
    title: "Nike Court Vision Low Erkek Günlük Spor Ayakkabı Hm9862-001",
    rating: 3,
    reviews: 7,
    originalPrice: "4.129 TL",
    cartStatus: "SEPETDE",
    endPrice: "4.689 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  // ayaqqabi hisse bitdi
  {
    image: "	https://n11scdn.akamaized.net/a1/182_180/10/17/87/38/IMG-85189016096169674.jpg",
    title: "Roborock S8 Sonic Mopping Akıllı Robot Süpürge Beyaz",
    rating: 3,
    reviews: 7,
    originalPrice: "15.429 TL",
    cartStatus: "SEPETDE",
    endPrice: "15.389 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/182_180/09/66/07/81/IMG-799891451899173547.jpg",
    title: "Baymak Elegant Plus UV 12 12000 BTU Inverter Duvar Tipi Klima",
    rating: 5,
    reviews: 7,
    originalPrice: "30.129 TL",
    cartStatus: "SEPETDE",
    endPrice: "29.789 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },
  {
    image: "https://n11scdn.akamaized.net/a1/182_180/11/44/63/03/IMG-3886071246344918949.jpg",
    title: "Arçelik 11141 M 1400 Devir 11 KG Çamaşır Makinesi",
    rating: 4,
    reviews: 7,
    originalPrice: "10.999 TL",
    cartStatus: "SEPETDE",
    endPrice: "10.500 TL",
    freeShipping: false,
    favoriteImg: "https://n11scdn.akamaized.net/a1/org/24/08/09/50/81/64/73/64/22/70/48/40/24655998218109107171.png"
  },

];

function createProductHTML(product) {
  return `
    <div class="product">
      <div class="product-image">
        <img src="${product.image}" alt="">
        <span class="favorite"><i class="fa-regular fa-heart"></i></span>
        <div class="cargo"><img src="${product.favoriteImg}" alt=""></div>
        <div class="image-text"><span>${product.freeShipping ? "ÜCRETSİZ KARGO" : ""}</span></div>
      </div>
      <div class="product-body">
        <div class="product-name">
          <h3>${product.title}</h3>
        </div>
        <div class="rating">
          ${[...Array(product.rating)].map(() => '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>').join('')}
          <span>(${product.reviews})</span>
        </div>
        <div class="price">
          <span class="original-price">${product.originalPrice}</span>
          <span class="in-cart">${product.cartStatus}</span>
          <span class="end-price">${product.endPrice}</span>
        </div>
      </div>
    </div>
  `;
}

const productContainer = document.getElementById('product-container');
const wearContainer = document.getElementById('wear-container');
const clothersContainer = document.getElementById('clothers-container');
const elektronicContainer = document.getElementById('elektronik-container');

products.slice(0, 6).forEach(product => {
  const productHTML = createProductHTML(product);
  productContainer.innerHTML += productHTML;
});

products.slice(6, 12).forEach(product => {
  const productHTML = createProductHTML(product);
  wearContainer.innerHTML += productHTML;
});

products.slice(12, 18).forEach(product => {
  const productHTML = createProductHTML(product);
  clothersContainer.innerHTML += productHTML;
});
products.slice(18, 21).forEach(product => {
  const productHTML = createProductHTML(product);
  elektronicContainer.innerHTML += productHTML;
});

function getNextCountdown() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let nextTime = null;
  const times = [
    { hour: 0, minute: 0 },
    { hour: 4, minute: 0 },
    { hour: 8, minute: 0 },
    { hour: 12, minute: 0 },
    { hour: 16, minute: 0 },
    { hour: 20, minute: 0 }
  ];

  for (let i = 0; i < times.length; i++) {
    const time = times[i];

    if (hours < time.hour || (hours === time.hour && minutes < time.minute)) {
      nextTime = time;
      break;
    }
  }

  if (!nextTime) {
    nextTime = times[0];
  }

  return nextTime;
}

function updateCountdown() {
  const now = new Date();
  const nextTime = getNextCountdown();
  const nextDate = new Date(now.setHours(nextTime.hour, nextTime.minute, 0, 0));
  const timeDifference = nextDate - new Date();

  const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.querySelector('.hour').textContent = String(hoursLeft).padStart(2, '0');
  document.querySelector('.minute').textContent = String(minutesLeft).padStart(2, '0');
  document.querySelector('.second').textContent = String(secondsLeft).padStart(2, '0');
}


setInterval(updateCountdown, 1000);
updateCountdown();


document.addEventListener("DOMContentLoaded", () => {
  const brands = [
    ["https://n11scdn.akamaized.net/a1/org/24/10/22/65/95/73/50/14/02/22/06/34/38115575922986339810.jpg",
      "https://n11scdn.akamaized.net/a1/org/24/10/22/78/39/68/18/01/04/77/42/67/27454315749700290735.jpg",
      "https://n11scdn.akamaized.net/a1/org/24/10/22/80/24/48/34/12/27/12/07/69/16354339138800009615.jpg",
      "https://n11scdn.akamaized.net/a1/org/24/09/30/66/58/77/53/99/20/75/84/75/21763789500440658726.jpg",
      "https://n11scdn.akamaized.net/a1/org/23/05/25/79/96/04/45/54/96/77/67/62/76826852885052898073.png",
      "https://n11scdn.akamaized.net/a1/org/21/05/03/68/15/84/06/15/62/86/26/23/32633710669061273057.jpg",
      "https://n11scdn.akamaized.net/a1/org/23/06/23/85/90/69/56/80/11/45/05/08/65716302984392428504.jpg"
    ],

    ["https://n11scdn.akamaized.net/a1/org/23/06/23/71/55/35/22/41/66/82/57/36/24696874136023614666.jpg",
      "	https://n11scdn.akamaized.net/a1/org/23/06/23/46/20/97/35/35/35/13/08/81/21889471371095291101.jpg",
      "https://n11scdn.akamaized.net/a1/org/23/09/12/59/47/30/69/48/01/77/36/49/83542302905443858949.png",
      "	https://n11scdn.akamaized.net/a1/org/24/03/27/78/24/76/45/72/23/51/24/22/11327507068227175243.png",
      "	https://n11scdn.akamaized.net/a1/org/23/06/23/78/84/73/83/93/92/19/40/95/8172913635334403075.jpg",
      "	https://n11scdn.akamaized.net/a1/org/23/06/23/60/58/37/02/34/95/23/12/45/25654569499314634919.jpg",
      "https://n11scdn.akamaized.net/a1/org/23/06/23/78/18/65/36/85/21/00/14/69/17188971000821824450.jpg"
    ],

    ["	https://n11scdn.akamaized.net/a1/org/23/06/23/65/53/46/23/13/10/38/75/41/57423322566715227448.jpg",
      "https://n11scdn.akamaized.net/a1/org/23/06/23/91/13/63/82/06/44/30/14/21/14499904648337706953.jpg",
      "https://n11scdn.akamaized.net/a1/org/23/06/23/81/81/35/64/07/04/93/59/95/77037778667026334137.jpg",
      "	https://n11scdn.akamaized.net/a1/org/23/06/23/49/70/79/56/16/21/25/01/91/96268140392379206901.jpg",
      "	https://n11scdn.akamaized.net/a1/org/25/03/04/68/98/09/61/00/49/47/90/18/78870155708241001322.png",
      "https://n11scdn.akamaized.net/a1/org/21/05/03/75/38/09/27/28/02/60/41/39/85828237445832788788.jpg",
      "https://n11scdn.akamaized.net/a1/org/21/05/03/55/63/62/68/62/15/54/97/32/2348892421740121542.jpg"
    ]
  ];

  const container = document.querySelector(".brands-container");
  const indicatorsContainer = document.querySelector(".indicators");
  let currentPage = 0;

  brands.forEach((page, index) => {
    const brandPage = document.createElement("div");
    brandPage.classList.add("brand-page");
    page.forEach(brand => {
      const img = document.createElement("img");
      img.src = `${brand}`;
      img.alt = brand.split(".")[0];
      img.classList.add("brand-logo");
      brandPage.appendChild(img);
    });
    container.appendChild(brandPage);


    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.addEventListener("click", () => updateCarousel(index));
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll(".indicator");

  const updateCarousel = (index) => {
    currentPage = index;
    container.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((el, i) => el.classList.toggle("active", i === index));
  };

  document.querySelector(".left").addEventListener("click", () => updateCarousel((currentPage - 1 + brands.length) % brands.length));
  document.querySelector(".right").addEventListener("click", () => updateCarousel((currentPage + 1) % brands.length));

  setInterval(() => updateCarousel((currentPage + 1) % brands.length), 5000);
});



   


