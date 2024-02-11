//sidebar

var sidebarOpen = false;
var sidebarClose = true;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen= true
    }
}

function closeSidebar(){
    if (!sidebarClose) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarClose = true;
    }

}


    /*  var sidebar= document.getElementById("menu-icon");

      function openSidebar(){
        sidebar.style.right="0";
      }
      function closeSidebar(){
        sidebar.style.right="-200px";
      }*/
      
    /*  function openmenu() {
    // Example: Incorrect code causing the error
    var element = document.getElementById('sidemenu');
    element.style.display = 'block';
     }
function closemenu() {
    // Example: Incorrect code causing the error
    var element = document.getElementById('sidemenu');
    element.style.display = 'block';
     }*/


    
