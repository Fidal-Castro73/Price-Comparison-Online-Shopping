function opentab(tabname) {
    // Get all the tab links and tab contents
    const tablinks = document.querySelectorAll('.tab-links');
    const tabcontents = document.querySelectorAll('.tab-contents');
    
    // Remove 'active-link' from all tab links
    tablinks.forEach(function(tablink) {
        tablink.classList.remove('active-link');
    });
    
    // Remove 'active-tab' from all tab contents
    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove('active-tab');
    });
    
    // Add 'active-link' to the clicked tab link
    event.currentTarget.classList.add('active-link');
    
    // Add 'active-tab' to the corresponding tab content
    document.getElementById(tabname).classList.add('active-tab');
}

// Function to update cart count 
function updateCartCount() {
    const itemCount = document.querySelectorAll('.cart-item').length;
    document.querySelector('.subtotal').textContent = ${itemCount} Items, Subtotal: ₹ updated-price-here;
}

// Delete button functionality with event delegation
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const item = event.target.closest('.cart-item');
        item.remove();
        updateCartCount();
    }
});

// Switching between "Awaiting" and "Notified" tabs in the cart header
const awaitingTab = document.querySelector('.cart-header span:nth-child(1)');
const notifiedTab = document.querySelector('.cart-header span:nth-child(2)');
const cartItemsContainer = document.querySelector('.cart-items');

// Initial setup: Show Awaiting items by default
let currentView = 'awaiting';

// Store awaiting and notified items separately (you can add different items for notified if needed)
let awaitingItems = [
    {
        img: "https://www.apple.com/v/airpods-3rd-generation/f/images/overview/value-props/battery_startframe__1ruivb5dm4ie_xlarge.jpg",
        title: "Apple AirPods(3rd Generation) IPX4-rated sweat and water resistance",
        price: "Currently unavailable."
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAZtBvssAXkMimsq5NHhTIiK1WFEDd5EImg&s",
        title: "ZEBRONICS Zeb-Dash Plus 2.4GHz Wireless Mouse",
        price: "₹249.00"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZny5GGdcaksnf_tJjfnMRlDxQlb3FgWNzUg&s",
        title: "Men's Classic Fit Crew Neck T-Shirt soft cotton relaxed fit",
        price: "₹619.00"
    }
];

let notifiedItems = [...awaitingItems]; // Cloning the awaiting items for the notified section

// Function to render cart items based on the current view
function renderCartItems(view) {
    cartItemsContainer.innerHTML = ''; // Clear the container

    const itemsToDisplay = view === 'awaiting' ? awaitingItems : notifiedItems;

    itemsToDisplay.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <img src="${item.img}" alt="Item Image" class="item-image">
            <div class="item-details">
                <h2>${item.title}</h2>
                <p>${item.price}</p>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
}

// Tab switching logic for cart header
awaitingTab.addEventListener('click', function () {
    currentView = 'awaiting';
    awaitingTab.classList.add('active');
    notifiedTab.classList.remove('active');
    renderCartItems(currentView);
});

notifiedTab.addEventListener('click', function () {
    currentView = 'notified';
    notifiedTab.classList.add('active');
    awaitingTab.classList.remove('active');
    renderCartItems(currentView);
});

// Call renderCartItems initially to load awaiting items
renderCartItems('awaiting');
renderCartItems('notified');
// Function to handle the main tab switching (outside of the cart header tabs)
function opentab(tabname) {
    // Get all the tab links and tab contents
    const tablinks = document.querySelectorAll('.tab-links');
    const tabcontents = document.querySelectorAll('.tab-contents');
    
    // Remove 'active-link' from all tab links
    tablinks.forEach(function(tablink) {
        tablink.classList.remove('active-link');
    });
    
    // Remove 'active-tab' from all tab contents
    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove('active-tab');
    });
    
    // Add 'active-link' to the clicked tab link
    event.currentTarget.classList.add('active-link');
    
    // Add 'active-tab' to the corresponding tab content
    document.getElementById(tabname).classList.add('active-tab');
}