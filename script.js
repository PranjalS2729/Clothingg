
document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cartCount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = {
                id: btn.dataset.id,
                name: btn.dataset.name,
                price: btn.dataset.price
            };
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            cartCount.textContent = cart.length;
            alert(`${item.name} added to cart`);
        });
    });

    // Login modal toggles
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLogin = document.getElementById('closeLogin');

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });
    }
    if (closeLogin) {
        closeLogin.addEventListener('click', () => loginModal.style.display = 'none');
    }
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
    });
});
