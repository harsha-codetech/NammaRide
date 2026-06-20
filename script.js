// Shivapoorni Travels — site behaviour

// Replace this with the real number. Used by every "Call Now" link.
const PHONE_NUMBER = "+91XXXXXXXXXX";
const PHONE_DISPLAY = "+91 XXXXX XXXXX";

// --- Vehicle data ---
const vehicles = [
  { name: "Swift Dzire",      type: "Compact Sedan",  seats: 4, bags: 2, img: "images/vehicles/swift_dzire.png" },
  { name: "Maruti Ertiga",    type: "MUV",            seats: 6, bags: 3, img: "images/vehicles/ertiga.png" },
  { name: "Toyota Innova",    type: "SUV",            seats: 7, bags: 3, img: "images/vehicles/innova.png" },
  { name: "Innova Crysta",    type: "Premium SUV",    seats: 7, bags: 4, img: "images/vehicles/innova_crysta.png" },
  { name: "Tempo Traveller",  type: "Group Van",      seats: 12, bags: 8, img: "images/vehicles/tempo_traveller.png" },
  { name: "Tourist Bus",      type: "Group Bus",      seats: 52, bags: null, img: "images/vehicles/tourist_bus.png" }
];

// --- Reviews ---
const reviews = [
  { name: "Aditya Varma", route: "Airport Transfer • T2", text: "Driver was waiting right on time for my early morning flight. Clean car and a smooth ride to the airport." },
  { name: "Priya Nair", route: "Bengaluru → Coorg", text: "Booked an Innova Crysta for a weekend in Coorg. Comfortable, safe and the driver knew all the good stops." },
  { name: "Rahul Shetty", route: "Airport Transfer • T1", text: "Flight landed late at night and the cab was still there. Hassle-free pickup, fair price." },
  { name: "Sneha Reddy", route: "Bengaluru → Tirupati", text: "Did the Tirupati trip with family. Punctual, polite driver and a very neat vehicle. Will book again." },
  { name: "Karthik Iyer", route: "Local Package • 8hr", text: "Used the 8 hour package for client meetings across the city. On time at every stop, very professional." },
  { name: "Megha Joshi", route: "Bengaluru → Mysuru", text: "Quick and comfortable ride to Mysuru. Transparent pricing with no last-minute surprises." },
  { name: "Arjun Menon", route: "Airport Transfer • T2", text: "Have used Shivapoorni Travels three times now for airport drops. Consistent, reliable and always clean cabs." },
  { name: "Divya Rao", route: "Bengaluru → Ooty", text: "The Ertiga was perfect for our group trip to Ooty. Driver was patient on the ghat roads. Highly recommend." },
  { name: "Vikram Singh", route: "Local Package • 12hr", text: "Full day package for a family function. Smooth experience from the first call to drop-off." },
  { name: "Anjali Kulkarni", route: "Airport Transfer • T1", text: "Easy booking over a phone call and the driver tracked my flight. Stress-free start to my trip." },
  { name: "Suresh Kumar", route: "Bengaluru → Chennai", text: "Long drive to Chennai was very comfortable. Well-maintained car and a safe, steady driver." },
  { name: "Lakshmi Pillai", route: "Bengaluru → Chikkamagaluru", text: "Lovely trip to the coffee estates. Courteous driver and a spotless vehicle throughout." },
  { name: "Naveen Gowda", route: "Airport Transfer • T2", text: "Quick response when I called, and the cab arrived in 15 minutes. Great local service." },
  { name: "Pooja Hegde", route: "Bengaluru → Mangaluru", text: "Overnight trip to Mangaluru went perfectly. Felt safe the entire way. Thank you Shivapoorni Travels." },
  { name: "Rohan Desai", route: "Local Package • 4hr", text: "Needed a cab for a few hours of city errands. Simple, affordable and on time." },
  { name: "Shruti Agarwal", route: "Airport Transfer • T1", text: "Driver helped with luggage and got me to the terminal with time to spare. Very courteous." },
  { name: "Manoj Pillai", route: "Bengaluru → Hyderabad", text: "Comfortable intercity ride to Hyderabad. Clean Innova and a calm, experienced driver." },
  { name: "Deepa Krishnan", route: "Airport Transfer • T2", text: "Reliable airport pickup at 4 AM. The car was ready and the fare was exactly as quoted." },
  { name: "Sandeep Reddy", route: "Bengaluru → Mysuru", text: "Smooth highway drive and a friendly driver. Booking by phone was quick and clear." },
  { name: "Ananya Bhat", route: "Local Package • 8hr", text: "Used them for a day of shopping and visits. The driver was patient and never rushed us." },
  { name: "Vivek Sharma", route: "Airport Transfer • T1", text: "Professional service for a corporate guest. Clean car, neat driver, perfect timing." },
  { name: "Kavya Nayak", route: "Bengaluru → Coorg", text: "Family trip to Coorg in the Innova Crysta. Spacious, comfortable and very safe on the hills." },
  { name: "Harish Babu", route: "Airport Transfer • T2", text: "Late flight, no problem. The cab waited and the driver was cheerful even at midnight." },
  { name: "Nisha Verma", route: "Bengaluru → Tirupati", text: "Pilgrimage trip went smoothly. Punctual, respectful driver and a well-kept vehicle." },
  { name: "Praveen Kamath", route: "Local Package • 12hr", text: "Booked a full day for an event. Everything ran like clockwork. Five stars." },
  { name: "Ritu Malhotra", route: "Airport Transfer • T1", text: "Simple to arrange and very dependable. My go-to for airport runs in Bengaluru now." },
  { name: "Gopal Rao", route: "Bengaluru → Chennai", text: "Comfortable seats and a smooth drive made the long Chennai trip easy. Recommended." },
  { name: "Swathi Prabhu", route: "Bengaluru → Ooty", text: "Driver handled the winding roads to Ooty beautifully. Felt completely safe with my kids." },
  { name: "Imran Khan", route: "Airport Transfer • T2", text: "Clear pricing and a clean cab. Pickup was prompt and the ride was quiet and comfortable." },
  { name: "Tara Subramani", route: "Bengaluru → Mangaluru", text: "Excellent service for our coastal trip. Friendly driver and a very comfortable journey." }
];

// --- Build vehicle slides ---
function buildFleet() {
  const wrap = document.getElementById("fleetWrapper");
  wrap.innerHTML = vehicles.map(v => `
    <div class="swiper-slide">
      <article class="vehicle-card">
        <div class="vehicle-card__media">
          <img src="${v.img}" alt="${v.name}" loading="lazy"
               onerror="vehicleFallback(this, '${v.name}')" />
        </div>
        <h3>${v.name}</h3>
        <p class="vehicle-card__type">${v.type}</p>
        <div class="vehicle-card__specs">
          <span class="spec"><span class="material-symbols-outlined">group</span> ${v.seats} Passengers</span>
          <span class="spec"><span class="material-symbols-outlined">luggage</span> ${v.bags} Bags</span>
        </div>
      </article>
    </div>
  `).join("");
}

// Graceful placeholder when a photo isn't present yet
function vehicleFallback(img, name) {
  const media = img.parentElement;
  media.classList.add("vehicle-card__media--placeholder");
  media.innerHTML = `<span class="material-symbols-outlined">directions_car</span>`;
}

// --- Build review slides ---
function buildReviews() {
  const wrap = document.getElementById("reviewsWrapper");
  wrap.innerHTML = reviews.map(r => `
    <div class="swiper-slide">
      <article class="review-card">
        <div class="review-card__stars">★★★★★</div>
        <p class="review-card__text">${r.text}</p>
        <div class="review-card__person">
          <div class="avatar">${r.name.charAt(0)}</div>
          <div>
            <div class="name">${r.name}</div>
            <div class="route">${r.route}</div>
          </div>
        </div>
      </article>
    </div>
  `).join("");
}

// --- Init everything ---
document.addEventListener("DOMContentLoaded", () => {
  // Phone links
  document.querySelectorAll("[data-call]").forEach(el => el.setAttribute("href", `tel:${PHONE_NUMBER}`));
  document.querySelectorAll("[data-phone-display]").forEach(el => el.textContent = PHONE_DISPLAY);
  document.getElementById("year").textContent = new Date().getFullYear();

  buildFleet();
  buildReviews();

  new Swiper(".fleet-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    navigation: { prevEl: "#fleetPrev", nextEl: "#fleetNext" },
    breakpoints: {
      640: { slidesPerView: 2.2 },
      960: { slidesPerView: 3 },
      1280: { slidesPerView: 3.5 }
    }
  });

  new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 28,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    speed: 700,
    breakpoints: {
      720: { slidesPerView: 2 },
      1080: { slidesPerView: 3 }
    }
  });

  // Scroll reveal with staggered delays for a more professional feel
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  reveals.forEach((el, i) => el.style.setProperty('--reveal-delay', `${i * 120}ms`));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("active");
        if (e.target.closest(".vehicle-card")) {
          e.target.closest(".vehicle-card").classList.add("visible");
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  reveals.forEach(el => io.observe(el));
  document.querySelectorAll(".vehicle-card").forEach((card, i) => {
    // stagger vehicle cards after content reveals
    card.style.setProperty('--reveal-delay', `${(i + reveals.length) * 80}ms`);
    io.observe(card);
  });

  // Header shadow on scroll
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav
  const mobileNav = document.getElementById("mobileNav");
  document.getElementById("navToggle").addEventListener("click", () => mobileNav.classList.add("open"));
  document.getElementById("navClose").addEventListener("click", () => mobileNav.classList.remove("open"));
  mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));

  // Booking enquiry form
  setupEnquiryForm(document.getElementById("bookingForm"));
});

function setupEnquiryForm(form) {
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Native checks first (required fields, dates, dropdown)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Phone must be 10–12 digits
    const phoneField = form.phone;
    const digits = phoneField.value.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 12) {
      phoneField.closest(".field").classList.add("invalid");
      phoneField.focus();
      showToast("Please enter a valid contact number.", "error");
      return;
    }
    phoneField.closest(".field").classList.remove("invalid");

    // To Date cannot be before From Date
    const dateInputs = form.querySelectorAll('input[type="date"]');
    if (dateInputs.length === 2 && dateInputs[1].value < dateInputs[0].value) {
      dateInputs[1].closest(".field").classList.add("invalid");
      dateInputs[1].focus();
      showToast("To Date cannot be before From Date.", "error");
      return;
    }

    showToast("Thank you! We will contact you shortly.");
    form.reset();
  });

  // Clear invalid highlight as the user edits a flagged field
  form.querySelectorAll("input, select").forEach((el) =>
    el.addEventListener("input", () => el.closest(".field").classList.remove("invalid"))
  );
}

// Lightweight toast notification
let toastTimer;
function showToast(message, type) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  const icon = type === "error" ? "error" : "check_circle";
  toast.innerHTML = `<span class="material-symbols-outlined">${icon}</span>${message}`;
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// --- Loader fade out ---
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 1500);
});
