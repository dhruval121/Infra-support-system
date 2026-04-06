
/*File Path (link):- <script src="Images/infra.js"></script> */


/*dark & light mode*/
function setTheme(mode){

  const icon = document.getElementById("themeIcon");
  const tables = document.querySelectorAll("table");

  if(mode === "dark"){

      document.body.classList.add("dark-mode");

      tables.forEach(table=>{
          table.classList.add("table-dark");
      });

      icon.className = "fa-solid fa-moon";

      localStorage.setItem("theme","dark");
  }

  else if(mode === "light"){

      document.body.classList.remove("dark-mode");

      tables.forEach(table=>{
          table.classList.remove("table-dark");
      });

      icon.className = "fa-solid fa-sun";

      localStorage.setItem("theme","light");
  }

}


   /*Top navigation bar*/
function toggleNavLayout() {

    const body = document.body;
    const sidebar = document.getElementById("sidebarMenu");
    const topMenu = document.getElementById("topMenu");

    if (body.classList.contains("top-nav-mode")) {

        // 👉 BACK TO SIDEBAR
        body.classList.remove("top-nav-mode");

        sidebar.style.display = "block";
        topMenu.classList.add("d-none");

        localStorage.setItem("layout", "sidebar");

    } else {

        // 👉 SWITCH TO TOP NAV
        body.classList.add("top-nav-mode");

        sidebar.style.display = "none";
        topMenu.classList.remove("d-none");

        localStorage.setItem("layout", "top");
    }
}

/*For active pages only*/
document.addEventListener("DOMContentLoaded", function () {

    let currentPage = window.location.pathname.split("/").pop();

    let links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        let linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");

            // If inside dropdown → open parent
            let parent = link.closest(".has-treeview");
            if (parent) {
                parent.classList.add("menu-open");
                parent.querySelector(".nav-link").classList.add("active");
            }
        }
    });

});