
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

/**
     <!-- JS for image filter and shuffle and loop for images -->
   */

$(document).ready(function () {
  // Gallery data with picture URLs and corresponding filters
  const galleryData = [
    { imgUrl: "assets/img/learning/learning-0.jpg", filter: "mis" },
    { imgUrl: "assets/img/learning/learning-1.jpg", filter: "cloud" },
    { imgUrl: "assets/img/learning/learning-2.gif", filter: "ml" },
    { imgUrl: "assets/img/learning/learning-3.jpg", filter: "ml" },
    { imgUrl: "assets/img/learning/learning-4.jpg", filter: "mis" },
    { imgUrl: "assets/img/learning/learning-5.jpg", filter: "mis" },
    { imgUrl: "assets/img/learning/learning-6.jpg", filter: "python" },
    { imgUrl: "assets/img/learning/learning-7.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-8.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-9.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-10.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-11.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-12.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-13.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-14.jpg", filter: "r ml" },
    { imgUrl: "assets/img/learning/learning-15.jpg", filter: "python" },
    { imgUrl: "assets/img/learning/learning-16.jpg", filter: "r ml" },
    { imgUrl: "assets/img/learning/learning-17.jpg", filter: "r" },
    { imgUrl: "assets/img/learning/learning-18.jpg", filter: "mis" },
    { imgUrl: "assets/img/learning/learning-19.jpg", filter: "mis" },
    { imgUrl: "assets/img/learning/learning-20.jpg", filter: "mis" },
    { imgUrl: "assets/img/learning/learning-21.jpg", filter: "cloud" },
    { imgUrl: "assets/img/learning/learning-22.jpg", filter: "cloud" },
    { imgUrl: "assets/img/learning/learning-23.jpg", filter: "python" },
    { imgUrl: "assets/img/learning/learning-24.jpg", filter: "python" },
    { imgUrl: "assets/img/learning/learning-25.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-26.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-27.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-28.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-29.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-30.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-31.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-32.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-33.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-34.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-35.jpg", filter: "python ml" },
    { imgUrl: "assets/img/learning/learning-36.jpg", filter: "r ml" },
    { imgUrl: "assets/img/learning/learning-37.jpg", filter: "viz" },
    { imgUrl: "assets/img/learning/learning-38.jpg", filter: "python" },
    { imgUrl: "assets/img/learning/learning-39.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-40.jpg", filter: "sql" },
    { imgUrl: "assets/img/learning/learning-41.jpg", filter: "cloud" },
    { imgUrl: "assets/img/learning/learning-42.jpg", filter: "cloud" },

    // Add other gallery items with respective filters here
  ];

  // Function to generate the gallery items based on the data
  function generateGalleryItems() {
    const galleryContainer = $("#gallery-container");
    const galleryItems = [];

    galleryData.forEach(function (item) {
      const galleryItem = `
        <div class="col-xl-3 col-lg-4 col-md-6 gallery-item ${item.filter}">
          <div class="gallery-item-inner h-100">
            <img src="${item.imgUrl}" class="img-fluid" alt="">
            <div class="gallery-links d-flex align-items-center justify-content-center">
              <a href="${item.imgUrl}" title="" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
            </div>
          </div>
        </div>
      `;

      galleryContainer.append(galleryItem);
    });
  }

  // Call the function to generate gallery items
  generateGalleryItems();

  // Add event listener to the filter buttons
  $(".btn").click(function () {
    const filter = $(this).data("filter");
    filterGalleryItems(filter);
    setActiveFilterButton(this);
  });

  // Function to filter gallery items based on the selected filter
  function filterGalleryItems(filter) {
    if (filter === "*") {
      $(".gallery-item").show();
    } else {
      $(".gallery-item").hide();
      $(`.gallery-item.${filter}`).show();
    }
  }

  // Function to set the active filter button
  function setActiveFilterButton(button) {
    $(".btn").removeClass("active");
    $(button).addClass("active");
  }
});

