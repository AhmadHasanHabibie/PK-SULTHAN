/**
 * ==========================================================================
 * DIGITAL GALLERY ARCHIVE - JAVASCRIPT LOGIC & DATA CONFIGURATION
 * ==========================================================================
 * 
 * Instructions for Editing Content:
 * To change photos, titles, subtitles, or Google Drive links, simply modify 
 * the values inside the `galleryItems` array below.
 * ==========================================================================
 */

/**
 * --------------------------------------------------------------------------
 * 1. GALLERY DATA CONFIGURATION (EDIT YOUR ITEMS HERE)
 * --------------------------------------------------------------------------
 */
const galleryItems = [
  {
    id: 1,
    number: "01",
    title: "Tasyukuran",
    subtitle: "Dokumentasi Acara Tasyukuran",
    image: "assets/images/1_Tasyukuran.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/1TafD6OkjuRHDuXc0vKJMbPReUFIMSC5f?fbclid=PAT01DUAT-g8JwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp0YKUh9hnu9b8Rl3ljXGrs9NjZn-g3nu5c3T0lxDKdX4zUUefw4p7ujpHud1_aem_5et_TLendZAhB577Q-BedQ"
  },
  {
    id: 2,
    number: "02",
    title: "Juara Umum HSN",
    subtitle: "Dokumentasi Hari Santri Nasional",
    image: "assets/images/2_Juara_Umum_HSN.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/1RDH0Quultxvf__7VysmeAJ5V76jktKn6?fbclid=PAT01DUAT-hBBwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpzE55sKirh1SI8jikvBtD1t0mn6J2JqrRpKkGYCUw2ZciQgQGNYzTsetUxW-_aem_HUg-A6EZ2DNZ82CJhRz3Fg"
  },
  {
    id: 3,
    number: "03",
    title: "P5RA Juara 1",
    subtitle: "Dokumentasi Prestasi P5RA",
    image: "assets/images/3_P5RA_JUARA_1.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/1rvrb_zU1KvTBP_YOEZPA746oaK-yv9pE?usp=sharing&fbclid=PAT01DUAT-hMVwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp8P7WyxXOl9WSVS7BpqvC-ei3FZkix-mw_LARlPfAstbDw7JxPC76B9Il96T_aem_EN7gLnINK9lWhW6cZCdBJw"
  },
  {
    id: 4,
    number: "04",
    title: "P5RA #2",
    subtitle: "Kegiatan P5RA Sesi 2",
    image: "assets/images/4_P5RA_2.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/1m_w99NYutFjRrciHn2eyrRrQ6xTSiZDd?fbclid=PAT01DUAT-hRtwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp2lpgjHcbwmlHvQx6F7lKaLXGTbiHSzT2Y7CgBYBweGrbxE6gpb0P0ABNK4F_aem_tqA6CCbsN2_CdCjE8pGQ8w"
  },
  {
    id: 5,
    number: "05",
    title: "Syawir Kelas 10",
    subtitle: "Kegiatan Syawir Kelas X",
    image: "assets/images/5_Syawir_kelas_10.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/1rOUZLHK6da4VfsY-wVeonjcOsktDHnG3?usp=sharing&fbclid=PAT01DUAT-hZlwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp5-_6m6VMP18j32LbDM7eVimeVidbG5Rf934hMuYTMHqfizeukamtBO_2AMi_aem_oYGfgxNyWL416_q9IZf8uA"
  },
  {
    id: 6,
    number: "06",
    title: "P5RA Kelas 10",
    subtitle: "Kegiatan P5RA Kelas X",
    image: "assets/images/6_P5RA_KELAS_10.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/1mEU5-FO-vTXpj7L30liBBNDIYObTCtwy/1IOI49SXReCsqxCCg4oq2lgS1aDlOHTVj/1P87zC00boitTAjjza-Ud9Q6-GUvX1svn?usp=sharing&fbclid=PAb21jcAT-hg5PTUNQA8dIB2V4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp1EIWeNn8IVC89rgnattOuozKl0DbDI68ngbcuRLRrQp6qNCRhYAA6Sw_kQ1_aem_s_ME4e_yERU2MQHt1Yci7Q&sort=13&direction=a"
  },
  {
    id: 7,
    number: "07",
    title: "Juara Umum Musabaqoh",
    subtitle: "Dokumentasi Juara Umum Musabaqoh",
    image: "assets/images/7_JUARA_UMUM_MUSABAQOH.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/13_BiNQPJJocFyQpVFt143CJXKc7quAtg?fbclid=PAT01DUAT-hldwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp0cGdfsxX2f_kXPK9sP_6FRzd_T99TrikwP6uYySuZVNJ9aVd55Yf2bTWoVg_aem_62d0xpmsQr9sUZ2xDNkh0A"
  },
  {
    id: 8,
    number: "08",
    title: "Musabaqoh",
    subtitle: "Dokumentasi Kegiatan Musabaqoh",
    image: "assets/images/8_MUSABAQOH.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/1MKW9p9qU2A4yeS3NN-09p5W0vaQDmzK7/1jf9cX9zGKXaem5taIybqNYejdMr8L3GV/1PzRoT1N6NrIl5yiGbkKF5kbZfHBco0Ao?usp=drive_link&sort=13&direction=a&fbclid=PAT01DUAT-httwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp5-_6m6VMP18j32LbDM7eVimeVidbG5Rf934hMuYTMHqfizeukamtBO_2AMi_aem_oYGfgxNyWL416_q9IZf8uA"
  },
  {
    id: 9,
    number: "09",
    title: "Khatam Tafsir Malam",
    subtitle: "Dokumentasi Khatam Tafsir Malam",
    image: "assets/images/9_KHATAM_TAFSIR_MALAM.jpeg",
    link: "https://drive.google.com/drive/mobile/folders/10eNAzUdO2ohcNSLDW2txLYk7TsZ261cT?fbclid=PAT01DUAT-h0BwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp0cGdfsxX2f_kXPK9sP_6FRzd_T99TrikwP6uYySuZVNJ9aVd55Yf2bTWoVg_aem_62d0xpmsQr9sUZ2xDNkh0A"
  },
  {
    id: 10,
    number: "10",
    title: "Tafsir Ramadhan",
    subtitle: "Kajian & Dokumentasi Tafsir Ramadhan",
    image: "assets/images/10_TAFSIR_RAMADHAN.jpeg",
    link: "https://drive.google.com/drive/folders/1a7K1Mukj_uHlGTcCqTCkxQ4qc3_dZkql"
  },
  {
    id: 11,
    number: "11",
    title: "Khitobah Akbar",
    subtitle: "Dokumentasi Khitobah Akbar",
    image: "assets/images/11_KHITOBAH_AKBAR.jpeg",
    link: "https://drive.google.com/drive/folders/1vEbLkNfQj1pqXNwUVMPa-CyGEQUV_u01"
  },
  {
    id: 12,
    number: "12",
    title: "Agustus 17an",
    subtitle: "Peringatan Hari Kemerdekaan 17 Agustus",
    image: "assets/images/12_AGUSTUS_17AN.jpeg",
    link: "https://drive.google.com/drive/folders/11HuGqsheEr1yCSvhApa38anuQmm1hWGI"
  },
  {
    id: 13,
    number: "13",
    title: "Closingan Syawir 2025-2026",
    subtitle: "Dokumentasi Closingan Syawir 2025-2026",
    image: "assets/images/13_CLOSINGAN_SYAWIR_2025_2026.jpeg",
    link: "https://drive.google.com/drive/folders/15GzVOufk59_RJIbUrLrXMSFDXwV4t7Zx"
  }
];

/**
 * --------------------------------------------------------------------------
 * 2. DOM INITIALIZATION & DYNAMIC RENDER
 * --------------------------------------------------------------------------
 */
let currentModalIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderGalleryGrid();
  initIntersectionObserver();
  initNavbarScroll();
  initCustomCursor();
  initBackToTop();
  initAmbientCanvas();
  initPhotoModal();
  initCardTilt();
});

/**
 * Renders the gallery cards dynamically into the HTML grid container.
 */
function renderGalleryGrid() {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  galleryItems.forEach((item, index) => {
    // Create card element
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Preview photo item ${item.number}: ${item.title}`);
    
    // Set custom animation stagger delay index
    card.style.transitionDelay = `${(index % 3) * 0.1}s`;

    card.innerHTML = `
      <div class="card-media">
        <span class="card-number">${item.number}</span>
        <img 
          src="${item.image}" 
          alt="${item.title} - ${item.subtitle}" 
          class="card-img"
          loading="lazy" 
        />
        <div class="card-overlay">
          <span class="card-preview-badge">PREVIEW FOTO</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-info">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-subtitle">${item.subtitle}</p>
        </div>
        <div class="card-action">
          <div class="card-action-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
    `;

    // Click handler to open interactive lightbox modal popup
    card.addEventListener("click", () => {
      openPhotoModal(index);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPhotoModal(index);
      }
    });

    galleryGrid.appendChild(card);
  });
}

/**
 * --------------------------------------------------------------------------
 * 3. INTERACTIVE LIGHTBOX MODAL POPUP
 * --------------------------------------------------------------------------
 */
function initPhotoModal() {
  const modal = document.getElementById("photoModal");
  const modalClose = document.getElementById("modalClose");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");

  if (!modal) return;

  // Close modal on X button click
  modalClose?.addEventListener("click", closePhotoModal);

  // Close modal on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closePhotoModal();
    }
  });

  // Prev / Next button click handlers
  modalPrev?.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateModal(-1);
  });

  modalNext?.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateModal(1);
  });

  // Keyboard Navigation (Esc to close, Left/Right arrow to navigate)
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      closePhotoModal();
    } else if (e.key === "ArrowLeft") {
      navigateModal(-1);
    } else if (e.key === "ArrowRight") {
      navigateModal(1);
    }
  });
}

function openPhotoModal(index) {
  const modal = document.getElementById("photoModal");
  if (!modal || index < 0 || index >= galleryItems.length) return;

  currentModalIndex = index;
  updateModalContent(currentModalIndex);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closePhotoModal() {
  const modal = document.getElementById("photoModal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Re-enable background scrolling
}

function navigateModal(direction) {
  currentModalIndex = (currentModalIndex + direction + galleryItems.length) % galleryItems.length;
  updateModalContent(currentModalIndex);
}

function updateModalContent(index) {
  const item = galleryItems[index];
  if (!item) return;

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalNumber = document.getElementById("modalNumber");
  const modalDriveBtn = document.getElementById("modalDriveBtn");
  const modalImgGlow = document.getElementById("modalImgGlow");

  if (modalImg) {
    modalImg.src = item.image;
    modalImg.alt = `${item.title} - ${item.subtitle}`;
  }

  if (modalTitle) modalTitle.textContent = item.title;
  if (modalSubtitle) modalSubtitle.textContent = item.subtitle;
  if (modalNumber) modalNumber.textContent = `${item.number} / ${galleryItems.length < 10 ? '0' + galleryItems.length : galleryItems.length}`;
  if (modalDriveBtn) modalDriveBtn.href = item.link;
  
  if (modalImgGlow) {
    modalImgGlow.style.backgroundImage = `url(${item.image})`;
  }
}

/**
 * --------------------------------------------------------------------------
 * 4. ULTRA-DYNAMIC ANIMATED CANVAS BACKGROUND (Particle Constellation & Glow Orbs)
 * --------------------------------------------------------------------------
 */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 180 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  window.addEventListener("resize", resize);
  
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 0.8;
      this.baseAlpha = Math.random() * 0.4 + 0.2;
      this.alpha = this.baseAlpha;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.color = Math.random() > 0.4 ? "230, 198, 135" : (Math.random() > 0.5 ? "100, 223, 223" : "168, 85, 247");
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interactivity glow
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          this.alpha = Math.min(1, this.baseAlpha + (1 - dist / mouse.radius) * 0.6);
        } else {
          this.alpha = this.baseAlpha;
        }
      } else {
        this.alpha = this.baseAlpha;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${this.color}, 0.5)`;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow
    }
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 12000), 75);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          let alpha = (1 - dist / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(230, 198, 135, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
  }

  resize();
  animate();
}

/**
 * --------------------------------------------------------------------------
 * 5. 3D CARD TILT MICRO-INTERACTION
 * --------------------------------------------------------------------------
 */
function initCardTilt() {
  // Mobile touch devices skip heavy 3D tilt calculation
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cards = document.querySelectorAll(".gallery-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6; // Max tilt deg X
      const rotateY = ((x - centerX) / centerX) * 6;  // Max tilt deg Y

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 6. SCROLL REVEAL (IntersectionObserver)
 * --------------------------------------------------------------------------
 */
function initIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll(".gallery-card");
  cards.forEach(card => observer.observe(card));
}

/**
 * --------------------------------------------------------------------------
 * 7. NAVBAR SCROLL STYLING
 * --------------------------------------------------------------------------
 */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * --------------------------------------------------------------------------
 * 8. CUSTOM DESKTOP CURSOR INTERACTION
 * --------------------------------------------------------------------------
 */
function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const cursorDot = document.querySelector(".cursor-dot");

  if (!cursor || !cursorDot) return;

  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }, { passive: true });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .gallery-card, .modal-close, .modal-nav")) {
      document.body.classList.add("has-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .gallery-card, .modal-close, .modal-nav")) {
      document.body.classList.remove("has-hover");
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 9. BACK TO TOP BUTTON
 * --------------------------------------------------------------------------
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
