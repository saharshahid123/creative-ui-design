// let productData = [];
// fetch("https://dummyjson.com/").then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log("api data", data);
//     productData = data
// });


// console.log(productData);

// let container = document.getElementById("container")
// setTimeout(function () {
//     for (let i = 0; i < productData.length; i++) {
//         console.log(productData[i]);
//         let product = productData[i]

//         container.innerHTML += `<div>
//   <div>
//   img src = ${product?.images?.[0] || product?.images?.[1] || product?.images?.[2]}"width = 100px" "height = 100px" alt= "">
//   <p>${product.price}</p>
//   <p>${product.title}</p>
//   </div>
//   </div>`
//     }
// }, 1000)







// let productData = [];

// fetch("https://dummyjson.com/products")
//     .then(function (res) {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//     })
//     .then(function (data) {
//         console.log("API data:", data);
//         productData = data.products; // DummyJSON returns { products: [...] }
//     })
//     .catch(function (error) {
//         console.error("Fetch error:", error);
//     });

// let container = document.getElementById("container");

// setTimeout(function () {
//     if (!productData.length) {
//         console.error("No product data available!");
//         return;
//     }

//     for (let i = 0; i < productData.length; i++) {
//         let product = productData[i];
//         console.log(product);

//         container.innerHTML += `
//             <div>
//                 <div>
//                     <img src="${product?.images?.[0] || ''}" width="100px" height="100px" alt="">
//                     <p>${product.price}</p>
//                     <p>${product.title}</p>
//                 </div>
//             </div>
//         `;
//     }
// }, 1000);







let productData = [];

fetch("https://dummyjson.com/products")
    .then(function (res) {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
    })
    .then(function (data) {
        console.log("API data:", data);
        productData = data.products;
        renderProducts();
    })
    .catch(function (error) {
        console.error("Fetch error:", error);
        document.getElementById("container").innerHTML = `
                    <div class="error" style="text-align: center; padding: 50px; color: #e74c3c;">
                        Failed to load products. Please try again later.
                    </div>
                `;
    });

function renderProducts() {
    const container = document.getElementById("container");

    if (!productData.length) {
        container.innerHTML = `
                    <div class="error" style="text-align: center; padding: 50px; color: #e74c3c;">
                        No products available.
                    </div>
                `;
        return;
    }

    container.innerHTML = ''; 

    productData.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
                    <img src="${product.images[0] || ''}" class="card-image" alt="${product.title}">
                    <div class="card-content">
                        <h3 class="card-title">${product.title}</h3>
                        <p class="card-price">$${product.price.toFixed(2)}</p>
                        <span class="card-rating">${product.rating} ★</span>
                    </div>
                `;

        container.appendChild(card);
    });
}