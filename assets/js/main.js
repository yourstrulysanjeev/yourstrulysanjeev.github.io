
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
// Get the element you want to make collapsible
const collapsibleElement = document.querySelector('.collapsible-text');

// Toggle the collapsed class on the element when clicked
collapsibleElement.addEventListener('click', function() {
  this.classList.toggle('collapsed');
});

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
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
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

 //----------------------------- Skill --------------------------------------

  // Array of skills data
  const skillsData = [
    { name: " Deep Leanrning and ML Models ", level: 75, icon: "fa-solid fa-brain"},
    { name: " Developer tools and Devops", level: 80, icon: "fa-solid fa-database" },
    { name: " Visualization Tools and Analysis", level: 85, icon: "fa-solid fa-chart-simple" },
    // { name: "SQL", level: 90 },
    // { name: "Tableau", level: 95 },
    // { name: "Power BI", level: 85 },
    // { name: "Machine Learninig", level: 90 },
    // { name: "Microsoft Visio", level: 80 },
    // { name: "Big Data", level: 90 },
    // { name: "Business Intelligence", level: 90 },
    // { name: "Data Analysis", level: 100 },
    // { name: "Statistical Modeling", level: 90 },
    // { name: "Data Mining ", level: 90 },
    // { name: "MATLAB", level: 90 },
    // { name: "AWS", level: 80 },
    // { name: "C++", level: 90 },
    // { name: "Azure", level: 70 },
    // { name: "Django", level: 85 },
    // { name: "API", level: 80 },
    // { name: "Git", level: 90 },
    // { name: "Flask ", level: 85 },
    // { name: "Microsoft Excel", level: 90 },
    // { name: "ROS", level: 70 },
    // { name: "DevOps ", level: 75 },
    // { name: "Apache Spark", level: 70 },
    // Add more skills here...
  ];

  // Function to generate the skills HTML
  function generateSkillsHTML() {
    const skillsContainer = document.getElementById("skills-content");

    for (const skill of skillsData) {
      const skillHTML = `
        <div class="col-lg-6">
          <div class="progress">
          <span class="skill">
          <i class="${skill.icon}"></i>&nbsp;&nbsp;${skill.name} <i class="val">&nbsp;&nbsp;${skill.level}%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      `;

      skillsContainer.insertAdjacentHTML("beforeend", skillHTML);
    }
  }

  // Call the function to generate skills on page load
  generateSkillsHTML();


 //----------------------------- Projects --------------------------------------

//Project Data Array 

//    const projectsData = [
//      {
//        title: "NBA Analysis",
//        category: "filter-Analysis",
//        imageSrc: "assets/img/portfolio/portfolio-1.jpg",
//        description: "Exploring Seaborn with NBA dataset",
//        detailsPageLink: "portfolio-details1.html"
//      },
//      {
//        title: "Stock Price Prediction",
//        category: "filter-ML",
//        imageSrc: "assets/img/portfolio/portfolio-2.jpg",
//        description: "Google Stock Price Prediction using RNN And LSTM",
//        detailsPageLink: "portfolio-details2.html"
//      },
//      // Add more project data objects here for other projects
//      // {
//      //   title: "Project Title",
//      //   category: "filter-Category", // Choose the appropriate category for each project
//      //   imageSrc: "path/to/image",
//      //   description: "Project Description",
//      //   detailsPageLink: "path/to/details"
//      // },
//    ];


// //Loop through projectsData to create project items

//    for (const project of projectsData) {
//      const projectItemHtml = `
//        <div class="col-lg-4 col-md-6 portfolio-item ${project.category}">
//          <div class="portfolio-wrap">
//            <img src="${project.imageSrc}" class="img-fluid" alt="">
//            <div class="portfolio-info">
//              <h4>${project.title}</h4>
//              <p>${project.description}</p>
//              <div class="portfolio-links">
//                <a href="${project.imageSrc}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${project.title}"><i class="bx bx-plus"></i></a>
//                <a href="${project.detailsPageLink}" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
//              </div>
//            </div>
//          </div>
//        </div>
//      `;
//      document.querySelector('.portfolio-container').insertAdjacentHTML('beforeend', projectItemHtml);
//    }

function toggleRelevantCourses(courseId) {
  const relevantCourses = document.getElementById(courseId);
  const showMoreBtn = document.getElementById(`showMoreBtn${courseId.slice(-1)}`);

  if (relevantCourses.style.display === "none") {
    relevantCourses.style.display = "inline";
    showMoreBtn.textContent = "Show Less";
  } else {
    relevantCourses.style.display = "none";
    showMoreBtn.textContent = "Show More";
  }
}

// dark mode icon

var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "assets/img/sun.png";
  }else{
    icon.src = "assets/img/moon.png";
  }
}

// scroll contact

document.getElementById('contact-button').addEventListener('click', function() {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});