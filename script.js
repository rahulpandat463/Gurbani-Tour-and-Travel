// Sample tour data
const tours = [
    {
        id: 1,
        name: "Paris Adventure",
        description: "Explore the City of Light with guided tours of Eiffel Tower, Louvre, and Seine River cruise.",
        price: "$1200",
        image: "WhatsApp_Image_2025-10-18_at_22.30.40_3b7f63c6.jpg",
        duration: "7 Days",
        itinerary: [
            "Day 1: Arrival and Eiffel Tower visit",
            "Day 2: Louvre Museum and art galleries",
            "Day 3: Seine River cruise and Notre Dame",
            "Day 4: Versailles Palace excursion",
            "Day 5: Montmartre and Sacré-Cœur",
            "Day 6: Free time for shopping and cafes",
            "Day 7: Departure"
        ],
        includes: ["Hotel accommodation", "Guided tours", "Meals", "Transportation"]
    },
    {
        id: 2,
        name: "Tokyo Discovery",
        description: "Experience Japan's capital with visits to temples, markets, and modern skyscrapers.",
        price: "$1500",
        image: "WhatsApp_Image_2025-10-18_at_22.30.40_8a793487.jpg",
        duration: "8 Days",
        itinerary: [
            "Day 1: Arrival and Tokyo Skytree",
            "Day 2: Senso-ji Temple and Asakusa",
            "Day 3: Shibuya and Harajuku districts",
            "Day 4: Meiji Shrine and Yoyogi Park",
            "Day 5: Tsukiji Fish Market and Ginza",
            "Day 6: Mount Fuji day trip",
            "Day 7: Free exploration",
            "Day 8: Departure"
        ],
        includes: ["Hotel accommodation", "Guided tours", "Meals", "Transportation", "JR Pass"]
    },
    {
        id: 3,
        name: "Bali Retreat",
        description: "Relax in tropical paradise with beach activities, cultural shows, and spa treatments.",
        price: "$800",
        image: "WhatsApp_Image_2025-10-18_at_22.30.40_c8d97d2d.jpg",
        duration: "6 Days",
        itinerary: [
            "Day 1: Arrival and beach relaxation",
            "Day 2: Ubud rice terraces and monkey forest",
            "Day 3: Spa day and wellness treatments",
            "Day 4: Cultural dance performance",
            "Day 5: Water sports and beach activities",
            "Day 6: Departure"
        ],
        includes: ["Resort accommodation", "Spa treatments", "Cultural shows", "Meals", "Transportation"]
    },
    {
        id: 4,
        name: "Swiss Alps Hiking",
        description: "Trek through stunning mountains, visit charming villages, and enjoy Swiss cuisine.",
        price: "$1800",
        image: "WhatsApp_Image_2025-10-18_at_22.30.43_2cddcccb.jpg",
        duration: "9 Days",
        itinerary: [
            "Day 1: Arrival in Zurich",
            "Day 2: Train to Interlaken",
            "Day 3: Jungfraujoch excursion",
            "Day 4: Hiking in Grindelwald",
            "Day 5: Lauterbrunnen Valley",
            "Day 6: Zermatt and Matterhorn",
            "Day 7: Swiss village experience",
            "Day 8: Return to Zurich",
            "Day 9: Departure"
        ],
        includes: ["Mountain hotels", "Guided hikes", "Swiss rail pass", "Meals", "Equipment"]
    },
    {
        id: 5,
        name: "Mountain Expedition",
        description: "Embark on an exciting mountain adventure with professional guides.",
        price: "$1600",
        image: "WhatsApp_Image_2025-10-18_at_22.30.43_70ebbfd3.jpg",
        duration: "10 Days",
        itinerary: [
            "Day 1: Arrival and base camp setup",
            "Day 2-3: Acclimatization hikes",
            "Day 4-7: Summit attempts",
            "Day 8: Descent and celebration",
            "Day 9: Return journey",
            "Day 10: Departure"
        ],
        includes: ["Mountain lodge", "Professional guides", "Equipment rental", "Meals", "Safety gear"]
    },
    {
        id: 6,
        name: "Desert Safari",
        description: "Experience the thrill of desert exploration and cultural immersion.",
        price: "$1400",
        image: "WhatsApp_Image_2025-10-18_at_22.30.43_602b37ea.jpg",
        duration: "5 Days",
        itinerary: [
            "Day 1: Arrival and desert camp",
            "Day 2: Camel riding and sand dunes",
            "Day 3: Cultural village visit",
            "Day 4: Star gazing and traditional dinner",
            "Day 5: Departure"
        ],
        includes: ["Desert camp accommodation", "Camel rides", "Cultural tours", "Meals", "Transportation"]
    },
    {
        id: 7,
        name: "Island Paradise",
        description: "Discover pristine beaches and underwater wonders in tropical islands.",
        price: "$1300",
        image: "WhatsApp_Image_2025-10-18_at_22.30.44_8c6afc53.jpg",
        duration: "7 Days",
        itinerary: [
            "Day 1: Arrival and beach resort",
            "Day 2: Snorkeling and diving",
            "Day 3: Island hopping",
            "Day 4: Marine life exploration",
            "Day 5: Beach relaxation",
            "Day 6: Cultural experiences",
            "Day 7: Departure"
        ],
        includes: ["Beach resort", "Diving equipment", "Boat tours", "Meals", "Transportation"]
    },
    {
        id: 8,
        name: "City Lights Tour",
        description: "Explore vibrant city life with night tours and cultural experiences.",
        price: "$1100",
        image: "WhatsApp_Image_2025-10-18_at_22.30.44_8e4c1c17.jpg",
        duration: "6 Days",
        itinerary: [
            "Day 1: Arrival and city overview",
            "Day 2: Historical landmarks",
            "Day 3: Cultural districts",
            "Day 4: Night life exploration",
            "Day 5: Local cuisine tour",
            "Day 6: Departure"
        ],
        includes: ["City hotel", "Guided tours", "Night shows", "Meals", "Transportation"]
    }
];

// Display tours
function displayTours() {
    const tourList = document.getElementById('tour-list');
    tours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}">
            <div class="tour-card-content">
                <h3>${tour.name}</h3>
                <p>${tour.description}</p>
                <div class="tour-price">${tour.price}</div>
                <a href="tour-detail.html?id=${tour.id}" class="btn-primary">View Details</a>
            </div>
        `;
        tourList.appendChild(tourCard);
    });
}

// Scroll to tours section
function scrollToTours() {
    document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you ${name}! Your message has been sent. We'll get back to you at ${email}.`);
    this.reset();
});


// Slider functionality
let currentSlide = 0;
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.slider-indicators');

function createSlider() {
    tours.forEach((tour, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide';
        slideDiv.style.width = '100%';
        slideDiv.style.height = '100%';
        slideDiv.style.position = 'relative';

        const img = document.createElement('img');
        img.src = tour.image;
        img.alt = tour.name;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.display = 'block';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            window.location.href = `tour-detail.html?id=${tour.id}`;
        });

        slideDiv.appendChild(img);
        sliderContainer.appendChild(slideDiv);

        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'slider-indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
        indicatorsContainer.appendChild(indicator);
    });
}

function showSlide(index) {
    const slides = sliderContainer.children;
    const indicators = document.querySelectorAll('.slider-indicator');

    currentSlide = index;

    // Add fade effect for professional transition
    sliderContainer.style.opacity = '0.3';
    setTimeout(() => {
        sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        sliderContainer.style.opacity = '1';
    }, 150);

    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderContainer.children.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderContainer.children.length) % sliderContainer.children.length;
    showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

// Initialize
createSlider();
displayTours();
