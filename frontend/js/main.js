const products = [
    {
        id: 1,
        name: "Aqua Care Plus",
        description: "Premium quality medicine for treating common fish diseases. Effective against bacterial and fungal infections.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 40,
            "250g": 90,
            "500g": 160,
            "1kg": 300
        }
    },
    {
        id: 2,
        name: "Fish Vita Gold",
        description: "Essential vitamins and minerals supplement for healthy fish growth and immune system boost.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 35,
            "250g": 80,
            "500g": 150,
            "1kg": 280
        }
    },
    {
        id: 3,
        name: "Parasite Clear",
        description: "Effective treatment for external and internal parasites in fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 45,
            "250g": 100,
            "500g": 180,
            "1kg": 340
        }
    },
    {
        id: 4,
        name: "Growth Booster",
        description: "Specially formulated to enhance fish growth and development.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 50,
            "250g": 110,
            "500g": 200,
            "1kg": 380
        }
    },
    {
        id: 5,
        name: "Immune Shield",
        description: "Strengthens fish immune system and prevents diseases.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 55,
            "250g": 120,
            "500g": 220,
            "1kg": 420
        }
    },
    {
        id: 6,
        name: "Water Clear Pro",
        description: "Makes aquarium water crystal clear and removes harmful chemicals.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 30,
            "250g": 70,
            "500g": 130,
            "1kg": 240
        }
    },
    {
        id: 7,
        name: "Stress Guard",
        description: "Reduces stress in fish during transportation and environmental changes.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 40,
            "250g": 90,
            "500g": 170,
            "1kg": 320
        }
    },
    {
        id: 8,
        name: "Color Enhance Plus",
        description: "Enhances natural colors of ornamental fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 45,
            "250g": 100,
            "500g": 190,
            "1kg": 360
        }
    },
    {
        id: 9,
        name: "Gill Care",
        description: "Treats gill problems and improves breathing in fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 50,
            "250g": 110,
            "500g": 210,
            "1kg": 400
        }
    },
    {
        id: 10,
        name: "Breeding Support",
        description: "Promotes healthy breeding conditions and fry development.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 60,
            "250g": 130,
            "500g": 250,
            "1kg": 480
        }
    },
    {
        id: 11,
        name: "pH Balance Pro",
        description: "Maintains optimal pH levels in aquarium water.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 35,
            "250g": 80,
            "500g": 150,
            "1kg": 280
        }
    },
    {
        id: 12,
        name: "Algae Control",
        description: "Controls and prevents algae growth in aquariums.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 40,
            "250g": 90,
            "500g": 170,
            "1kg": 320
        }
    },
    {
        id: 13,
        name: "Wound Heal",
        description: "Fast-acting medicine for healing wounds and injuries in fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 55,
            "250g": 120,
            "500g": 230,
            "1kg": 440
        }
    },
    {
        id: 14,
        name: "Scale Guard",
        description: "Protects and maintains healthy fish scales.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 45,
            "250g": 100,
            "500g": 190,
            "1kg": 360
        }
    },
    {
        id: 15,
        name: "Oxygen Plus",
        description: "Increases oxygen levels in aquarium water.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 30,
            "250g": 70,
            "500g": 130,
            "1kg": 240
        }
    },
    {
        id: 16,
        name: "Fin Rot Treatment",
        description: "Effective treatment for fin and tail rot in fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 50,
            "250g": 110,
            "500g": 210,
            "1kg": 400
        }
    },
    {
        id: 17,
        name: "White Spot Cure",
        description: "Treats ich (white spot disease) in fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 55,
            "250g": 120,
            "500g": 230,
            "1kg": 440
        }
    },
    {
        id: 18,
        name: "Appetite Boost",
        description: "Stimulates appetite in fish and improves digestion.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 40,
            "250g": 90,
            "500g": 170,
            "1kg": 320
        }
    },
    {
        id: 19,
        name: "Bacteria Control",
        description: "Controls harmful bacteria in aquarium water.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 45,
            "250g": 100,
            "500g": 190,
            "1kg": 360
        }
    },
    {
        id: 20,
        name: "Fungus Clear",
        description: "Treats fungal infections in fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 50,
            "250g": 110,
            "500g": 210,
            "1kg": 400
        }
    },
    {
        id: 21,
        name: "Ammonia Control",
        description: "Reduces harmful ammonia levels in aquarium water.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 35,
            "250g": 80,
            "500g": 150,
            "1kg": 280
        }
    },
    {
        id: 22,
        name: "Nitrite Reducer",
        description: "Reduces harmful nitrite levels in aquarium water.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 40,
            "250g": 90,
            "500g": 170,
            "1kg": 320
        }
    },
    {
        id: 23,
        name: "Scale Shine",
        description: "Makes fish scales shiny and healthy.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 45,
            "250g": 100,
            "500g": 190,
            "1kg": 360
        }
    },
    {
        id: 24,
        name: "Slime Coat Plus",
        description: "Protects and maintains fish's natural slime coat.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 50,
            "250g": 110,
            "500g": 210,
            "1kg": 400
        }
    },
    {
        id: 25,
        name: "Quick Heal",
        description: "Fast-acting general cure for common fish diseases.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 55,
            "250g": 120,
            "500g": 230,
            "1kg": 440
        }
    },
    {
        id: 26,
        name: "Digestion Aid",
        description: "Improves digestion and prevents constipation in fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 40,
            "250g": 90,
            "500g": 170,
            "1kg": 320
        }
    },
    {
        id: 27,
        name: "Spawn Inducer",
        description: "Promotes spawning in breeding fish.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 60,
            "250g": 130,
            "500g": 250,
            "1kg": 480
        }
    },
    {
        id: 28,
        name: "Tank Clean Pro",
        description: "Complete solution for aquarium cleaning and maintenance.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 35,
            "250g": 80,
            "500g": 150,
            "1kg": 280
        }
    },
    {
        id: 29,
        name: "Mineral Plus",
        description: "Essential minerals supplement for fish health.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 40,
            "250g": 90,
            "500g": 170,
            "1kg": 320
        }
    },
    {
        id: 30,
        name: "Complete Care",
        description: "All-in-one solution for fish health and aquarium maintenance.",
        image: "https://placehold.co/300x200",
        prices: {
            "100g": 65,
            "250g": 140,
            "500g": 270,
            "1kg": 520
        }
    }
];

// Local Storage Keys
const CART_STORAGE_KEY = 'fishMedicineCart';

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

// Display products in grid
function displayProducts(productsToShow = products) {
    const productsGrid = document.getElementById('productsGrid');
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="card product-card bg-base-100 shadow-xl">
            <figure class="px-4 pt-4">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="rounded-xl h-48 w-full object-cover">
            </figure>
            <div class="card-body">
                <h2 class="card-title">${product.name}</h2>
                <p class="text-sm text-gray-600">Starting from ৳${Math.min(...Object.values(product.prices))}</p>
                <div class="card-actions justify-end">
                    <button onclick="showProductModal(${product.id})" 
                            class="btn btn-primary">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Show product modal
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    
    modal.innerHTML = `
        <div class="modal-box relative">
            <h3 class="font-bold text-lg mb-4">${product.name}</h3>
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="w-full h-48 object-cover rounded-lg mb-4">
            <p class="mb-4">${product.description}</p>
            
            <div class="space-y-4">
                <div class="form-control">
                    <label class="label">Select Size</label>
                    <select id="sizeSelect" 
                            class="select select-bordered" 
                            onchange="updatePrice(${productId})">
                        ${Object.entries(product.prices)
                            .map(([size, price]) => `
                                <option value="${size}">
                                    ${size} - ৳${price}
                                </option>
                            `).join('')}
                    </select>
                </div>
                
                <div class="form-control">
                    <label class="label">Quantity</label>
                    <input type="number" 
                           id="quantityInput" 
                           class="input input-bordered" 
                           value="1" 
                           min="1"
                           onchange="updatePrice(${productId})">
                </div>
                
                <div class="text-xl font-bold">
                    Total: ৳<span id="modalTotal">0</span>
                </div>
            </div>
            
            <div class="modal-action">
                <button onclick="addToCart(${productId})" 
                        class="btn btn-primary">
                    Add to Cart
                </button>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    `;
    
    modal.showModal();
    updatePrice(productId);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
}


// Update price in modal
function updatePrice(productId) {
    const product = products.find(p => p.id === productId);
    const size = document.getElementById('sizeSelect').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const total = product.prices[size] * quantity;
    
    document.getElementById('modalTotal').textContent = total;
}

// Close modal
function closeModal() {
    document.getElementById('productModal').close();
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const size = document.getElementById('sizeSelect').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const price = product.prices[size];
    
    cart.push({
        id: productId,
        name: product.name,
        size: size,
        quantity: quantity,
        price: price,
        total: price * quantity
    });
    
    saveCart();
    updateCartDisplay();
    closeModal();
    showToast('Product added to cart!');
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    
    let total = 0;
    
    cartItems.innerHTML = cart.map((item, index) => {
        total += item.total;
        return `
            <div class="bg-base-100 p-4 rounded-lg">
                <div class="flex justify-between items-start">
                    <div>
                        <h4 class="font-bold">${item.name}</h4>
                        <p class="text-sm">${item.size} x ${item.quantity}</p>
                        <p class="text-primary">৳${item.total}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" 
                            class="btn btn-sm btn-error">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
    showToast('Product removed from cart!');
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const backdrop = document.querySelector('.cart-backdrop');
    
    if (window.innerWidth < 1024) {
        cartSidebar.classList.toggle('show-mobile');
        backdrop.classList.toggle('show');
        document.body.style.overflow = cartSidebar.classList.contains('show-mobile') ? 'hidden' : '';
    }
}

// Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const backdrop = document.querySelector('.menu-backdrop');
    const trigger = document.querySelector('.menu-trigger');
    
    menu.classList.toggle('show');
    backdrop.classList.toggle('show');
    document.body.style.overflow = menu.classList.contains('show') ? 'hidden' : '';
}


// Submit order
function submitOrder() {
    if (cart.length === 0) {
        showToast('Cart is empty!', 'error');
        return;
    }
    
    // Prepare message
    let message = "New Order:\n\n";
    let total = 0;
    
    cart.forEach(item => {
        message += `${item.name} (${item.size} x ${item.quantity}): ৳${item.total}\n`;
        total += item.total;
    });
    
    message += `\nTotal: ৳${total}`;

    // Show order method selection modal
    const modal = document.createElement('dialog');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-box">
            <h3 class="font-bold text-lg mb-4">Choose Order Method</h3>
            <div class="flex flex-col gap-4">
                <button onclick="sendWhatsApp('${encodeURIComponent(message)}')" class="btn btn-primary">
                    <i class="fab fa-whatsapp mr-2"></i> Send via WhatsApp
                </button>
                <button onclick="sendEmail('${encodeURIComponent(message)}')" class="btn btn-primary">
                    <i class="fas fa-envelope mr-2"></i> Send via Email
                </button>
            </div>
            <div class="modal-action">
                <button onclick="this.closest('dialog').close()" class="btn">Close</button>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    `;
    document.body.appendChild(modal);
    modal.showModal();
}

// Send via WhatsApp
function sendWhatsApp(message) {
    window.open(`https://wa.me/8801890393486?text=${message}`, '_blank');
    clearCart();
}

// Send via Email
function sendEmail(message) {
    window.location.href = `mailto:faisal.ahmed7405@gmail.com?subject=New Order&body=${message}`;
    clearCart();
}

// Clear cart after order
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    showToast('Order submitted successfully!');
    document.querySelector('.modal').close();
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchDropdown = document.getElementById('searchDropdown');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm.length < 1) {
            searchDropdown.classList.add('hidden');
            displayProducts(products);
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        
        if (filteredProducts.length > 0) {
            searchDropdown.classList.remove('hidden');
            showSearchSuggestions(filteredProducts, searchTerm);
            displayProducts(filteredProducts);
        } else {
            searchDropdown.innerHTML = `
                <div class="p-4 text-gray-500">
                    No products found
                </div>
            `;
            searchDropdown.classList.remove('hidden');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target)) {
            searchDropdown.classList.add('hidden');
        }
    });
}

// Show search suggestions
function showSearchSuggestions(filteredProducts, searchTerm) {
    const searchDropdown = document.getElementById('searchDropdown');
    
    searchDropdown.innerHTML = filteredProducts.map(product => `
        <div class="search-item hover:bg-base-200">
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="w-12 h-12 object-cover rounded">
            <div class="search-item-details">
                <div class="search-item-name font-medium">${highlightMatch(product.name, searchTerm)}</div>
                <div class="text-sm text-gray-500">
                    Starting from ৳${Math.min(...Object.values(product.prices))}
                </div>
                <div class="text-xs text-gray-500 mt-1">
                    ${product.description.substring(0, 60)}...
                </div>
            </div>
        </div>
    `).join('');

    // Add click event for each item
    searchDropdown.querySelectorAll('.search-item').forEach((item, index) => {
        item.onclick = () => selectProduct(filteredProducts[index].id);
    });
}

// Highlight matching text
function highlightMatch(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="bg-primary/20">$1</span>');
}

// Select product from search
function selectProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('searchInput').value = product.name;
        document.getElementById('searchDropdown').classList.add('hidden');
        displayProducts([product]);
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    initializeSearch();
    displayProducts();
    updateCartDisplay();
});


// banner page start 
// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    // Update dots
    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        slides[currentSlide].classList.add('active');
        updateDots();
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Add button listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto slide
    setInterval(nextSlide, 5000);

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.hero-slider').addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.querySelector('.hero-slider').addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });
}

// Function to handle video loading based on device
function handleVideoLoading() {
    const desktopVideo = document.querySelector('.desktop-video');
    const mobileVideo = document.querySelector('.mobile-video');
    
    // Function to load appropriate video
    function loadAppropriateVideo() {
        if (window.innerWidth <= 768) {
            desktopVideo.pause();
            mobileVideo.play();
        } else {
            mobileVideo.pause();
            desktopVideo.play();
        }
    }
    
    // Load video on page load
    loadAppropriateVideo();
    
    // Load video on window resize
    window.addEventListener('resize', loadAppropriateVideo);
}

// Initialize on page load
window.addEventListener('load', handleVideoLoading);

// Initialize on page load
window.addEventListener('load', initHeroSlider);


// banner page end 

// popup start 

// Check if form is already submitted
if (!localStorage.getItem('formSubmitted')) {
    document.getElementById('welcomePopup').style.display = 'flex';
} else {
    document.getElementById('welcomePopup').style.display = 'none';
}

// WhatsApp Send Function
function sendViaWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateForm()) {
        const text = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
        window.open(`https://wa.me/+8801890393486?text=${text}`);
        submitForm();
    }
}

// Email Send Function
function sendViaEmail() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateForm()) {
        const mailtoLink = `mailto:faisal.ahmed7405@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
        submitForm();
    }
}

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (!name || !phone || !email) {
        alert('দয়া করে সব তথ্য পূরণ করুন!');
        return false;
    }

    if (!email.includes('@')) {
        alert('দয়া করে সঠিক ইমেইল দিন!');
        return false;
    }

    return true;
}

// Submit Form
function submitForm() {
    localStorage.setItem('formSubmitted', 'true');
    document.getElementById('welcomePopup').style.display = 'none';
}
// popup end 