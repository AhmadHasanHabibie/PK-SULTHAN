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
document.addEventListener("DOMContentLoaded", () => {
  renderGalleryGrid();
  initIntersectionObserver();
  initNavbarScroll();
  initCustomCursor();
  initBackToTop();
});

/**
 * Renders the 12 gallery cards dynamically into the HTML grid container.
 */
function renderGalleryGrid() {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  galleryItems.forEach((item, index) => {
    // Create card link element
    const card = document.createElement("a");
    card.className = "gallery-card";
    card.href = item.link;
    card.target = "_blank"; // Open Google Drive in new tab
    card.rel = "noopener noreferrer";
    card.setAttribute("aria-label", `View collection item ${item.number}: ${item.title}`);
    
    // Set custom animation stagger delay index
    card.style.transitionDelay = `${(index % 3) * 0.12}s`;

    card.innerHTML = `
      <div class="card-media">
        <span class="card-number">${item.number}</span>
        <img 
          src="${item.image}" 
          alt="${item.title} - ${item.subtitle}" 
          class="card-img"
          loading="lazy" 
        />
        <div class="card-overlay"></div>
      </div>
      <div class="card-body">
        <div class="card-info">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-subtitle">${item.subtitle}</p>
        </div>
        <div class="card-action">
          <div class="card-action-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </div>
    `;

    // Click feedback visual animation before redirect
    card.addEventListener("click", (e) => {
      // Optional subtle tap feedback trigger
      card.classList.add("is-clicked");
    });

    galleryGrid.appendChild(card);
  });
}

/**
 * --------------------------------------------------------------------------
 * 3. SCROLL REVEAL (IntersectionObserver)
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
        obs.unobserve(entry.target); // Unobserve once animated
      }
    });
  }, observerOptions);

  // Observe all dynamically created gallery cards
  const cards = document.querySelectorAll(".gallery-card");
  cards.forEach(card => observer.observe(card));
}

/**
 * --------------------------------------------------------------------------
 * 4. NAVBAR SCROLL STYLING
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
  handleScroll(); // Initial check
}

/**
 * --------------------------------------------------------------------------
 * 5. CUSTOM DESKTOP CURSOR INTERACTION
 * --------------------------------------------------------------------------
 */
function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const cursorDot = document.querySelector(".cursor-dot");

  if (!cursor || !cursorDot) return;

  // Track mouse coordinates
  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instant dot movement
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }, { passive: true });

  // Smooth lag follower for main outer ring
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Magnetic hover state on gallery cards and links
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .gallery-card")) {
      document.body.classList.add("has-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .gallery-card")) {
      document.body.classList.remove("has-hover");
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 6. BACK TO TOP BUTTON
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
