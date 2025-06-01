
// let productData = [];

// fetch("https://dummyjson.com/products/category/groceries")
//     .then(function (res) {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//     })
//     .then(function (data) {
//         console.log("API data:", data);
//         productData = data.products;
//         renderProducts();
//     })
//     .catch(function (error) {
//         console.error("Fetch error:", error);
//         document.getElementById("container").innerHTML = `
//                     <div class="error" style="text-align: center; padding: 50px; color: #e74c3c;">
//                         Failed to load products. Please try again later.
//                     </div>
//                 `;
//     });

// function renderProducts() {
//     const container = document.getElementById("container");

//     if (!productData.length) {
//         container.innerHTML = `
//                     <div class="error" style="text-align: center; padding: 50px; color: #e74c3c;">
//                         No products available.
//                     </div>
//                 `;
//         return;
//     }

//     container.innerHTML = '';

//     productData.forEach((product, index) => {
//         const card = document.createElement('div');
//         card.className = 'card';
//         card.style.animationDelay = `${index * 0.1}s`;

//         card.innerHTML = `
//                     <img src="${product.images[0] || ''}" class="card-image" alt="${product.title}">
//                     <div class="card-content">
//                         <h3 class="card-title">${product.title}</h3>
//                         <p class="card-price">$${product.price.toFixed(2)}</p>
//                         <span class="card-rating">${product.rating} ★</span>
//                     </div>
//                 `;

//         container.appendChild(card);
//     });
// }

// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;

// // Check for saved theme preference or use preferred color scheme
// const savedTheme = localStorage.getItem('theme') ||
//     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
// if (savedTheme === 'dark') body.classList.add('dark-theme');

// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-theme');
//     const isDark = body.classList.contains('dark-theme');
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');

//     // Add a quick animation to the toggle button
//     themeToggle.style.transform = 'scale(0.9)';
//     setTimeout(() => {
//         themeToggle.style.transform = 'scale(1)';
//     }, 100);
// });
























let productData = [];

// Fetch grocery products from DummyJSON API
fetch("https://dummyjson.com/products/category/groceries")
    .then(function (res) {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
    })
    .then(function (data) {
        console.log("Grocery products:", data);
        productData = data.products;
        renderProducts();
    })
    .catch(function (error) {
        console.error("Fetch error:", error);
        document.getElementById("container").innerHTML = `
            <div class="error" style="text-align: center; padding: 50px; color: #e74c3c;">
                Failed to load grocery products. Please try again later.
            </div>
        `;
    });

function renderProducts() {
    const container = document.getElementById("container");

    if (!productData || !productData.length) {
        container.innerHTML = `
            <div class="error" style="text-align: center; padding: 50px; color: #e74c3c;">
                No grocery products available.
            </div>
        `;
        return;
    }

    container.innerHTML = '';

    productData.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`;

        // Use thumbnail instead of images[0] as DummyJSON provides thumbnails
        card.innerHTML = `
            <img src="${product.thumbnail || 'https://via.placeholder.com/300'}" 
                 class="card-image" 
                 alt="${product.title || 'Grocery item'}">
            <div class="card-content">
                <h3 class="card-title">${product.title || 'Grocery Product'}</h3>
                <p class="card-brand">${product.brand || 'Generic Brand'}</p>
                <p class="card-price">$${product.price?.toFixed(2) || '0.00'}</p>
                ${product.discountPercentage ?
                `<p class="card-discount">${product.discountPercentage}% off</p>` : ''}
                <span class="card-rating">${product.rating || '0'} ★</span>
            </div>
        `;

        container.appendChild(card);
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (savedTheme === 'dark') body.classList.add('dark-theme');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 100);
});