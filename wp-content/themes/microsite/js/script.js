(function($) {

  "use strict";
    //declare variable 
    const body =  document.querySelector("body"),
    nav = document.querySelector(".main-nav"),
    sidebarOpen = document.querySelector(".open-icon"),
    siderbarClose = document.querySelector(".close-icon");

    // menu for the mobile version
    // toggle menu
    sidebarOpen.addEventListener("click", () => {
          nav.classList.add("active");
    });

    siderbarClose.addEventListener("click", () => {
      nav.classList.remove("active");
    });

})(jQuery);

