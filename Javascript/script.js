function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.getElementById('profile').style.opacity = '0';
    } else {
        // Scrolling up
        document.getElementById('profile').style.opacity = '1';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);


function opentab(tabname) {
    // Remove 'active-link' class from all tab links
    var tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(function(tabLink) {
      tabLink.classList.remove("active-link");
    });
  
    // Add 'active-link' class to the clicked tab link
    event.target.classList.add("active-link");
  
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach(function(tabContent) {
      tabContent.classList.remove("active-tab");
    });
  
    // Show the corresponding tab content
    var tabContent = document.getElementById(tabname + '-content');
    tabContent.classList.add("active-tab");
  }