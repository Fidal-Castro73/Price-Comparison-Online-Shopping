document.getElementById('auth-icon').addEventListener('click', function() {
    const authIcon = document.getElementById('auth-icon');
    if (authIcon.getAttribute('data-logged-in') === 'true') {
        // Logout action
        authIcon.setAttribute('data-logged-in', 'false');
        authIcon.innerHTML = '<img src="login-icon.png" alt="Login">';
    } else {
        // Login action
        authIcon.setAttribute('data-logged-in', 'true');
        authIcon.innerHTML = '<img src="user-icon.png" alt="User">';
    }
});

// Sample product data with corresponding HTML pages
const products = [
    { name: 'Smart TV 32 inch', page: 'product.html' },
    { name: 'boAt Airdopes 511', page: 'airdopes.html' },
    { name: 'Men\'s Hawaiian Shirts', page: 'shirt.html' },
    { name: 'ASIAN Men\'s Wonder-13 Shoes', page: 'shoes.html' }
];

// Add event listener for search functionality
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    
    // Search for the product in the list
    const foundProduct = products.find(product => product.name.toLowerCase() === query);
    
    // If the product is found, redirect to its page
    if (foundProduct) {
        window.location.href = foundProduct.page;  // Redirect to the respective product page
    } else {
        alert('Product not found.');  // Show a message if the product is not found
    }
});
