document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.cart-item');
        item.remove();
        updateCartCount();
    });
});

function updateCartCount() {
    const itemCount = document.querySelectorAll('.cart-item').length;
    document.querySelector('.subtotal').textContent = `${itemCount} Items, Subtotal: ₹ updated-price-here`;
}
