document.getElementById('auth-icon').addEventListener('click', function() {
    const authIcon = document.getElementById('auth-icon');
    if (authIcon.getAttribute('data-logged-in') === 'true') {
        // Logout action
        authIcon.setAttribute('data-logged-in', 'false');
        authIcon.innerHTML = '<img src="login-icon.png" alt="Login Icon">';
    } else {
        // Login action
        authIcon.setAttribute('data-logged-in', 'true');
        authIcon.innerHTML = '<img src="user-icon.png" alt="User Icon">';
    }
});


const searchInput = document.getElementById('search-input');
const dealsGrid = document.getElementById('deals-grid');
const dealLinks = dealsGrid.getElementsByClassName('deal-link');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase(); // Trim and convert query to lowercase

    let hasResults = false; // Track if any result matches

    // Loop through all deal items and filter based on query
    Array.from(dealLinks).forEach(deal => {
        const itemName = deal.querySelector('.deal-item h3').textContent.trim().toLowerCase();
        const itemDescription = deal.querySelector('.deal-item p').textContent.trim().toLowerCase();

        if (itemName.includes(query) || itemDescription.includes(query)) {
            deal.classList.remove('hidden');
            hasResults = true; // At least one match found
        } else {
            deal.classList.add('hidden');
        }
    });

    // Handle "Product Not Found" scenario
    const noResultsMessage = document.getElementById('no-results');
    if (!hasResults) {
        if (!noResultsMessage) {
            const message = document.createElement('p');
            message.id = 'no-results';
            message.textContent = 'Product not found.';
            dealsGrid.appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
});