//********** About me Script *********//  
const tabLinks = document.getElementsByClassName("tab_links");
const tabContents = document.getElementsByClassName("tab_Contents");

function openTab(tabname) {
    for (tablink of tabLinks) {
      tablink.classList.remove("active_link");
    }
    for (tabcontent of tabContents) {
      tabcontent.classList.remove("active_tab");
    }

    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
  }


//********** Responsive  Navbar Script *********//  
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
  }

function closemenu() {
    sidemenu.style.right = "-200px";
  }