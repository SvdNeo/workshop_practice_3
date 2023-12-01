// function open(){
//   document.getElementById("toggleButton").style.width = "300px"
// }
// function close(){
//   document.getElementById("toggleButton").style.width = "160px"
// }

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const button = document.getElementById('sidebarCollapse');
  const sidebarImage = document.getElementById('sidebarImage');
  const icon1  = document.getElementById("tab_one_name")
  const icon2 = document.getElementById("tab_two_name")

  if (main.classList.contains('shifted')) {
    sidebar.style.width = '160px';
    main.classList.remove('shifted');
    button.textContent = '>';
    sidebarImage.style.width = "78px";
    sidebarImage.style.height = "36px";
    icon1.style.display = "none"
    icon2.style.display = "none"
    sidebarCollapse.style.left = '155px'
    sidebarCollapse.style.top = '48px'
    sidebarImage.src ="/assets/Group 1.svg";
  } else {
    sidebar.style.width = '300px';
    main.classList.add('shifted');
    sidebarImage.style.width = "240px"
    sidebarImage.style.height = "80px"
    icon2.style.display = ""
    icon1.style.display = ""
    sidebarCollapse.style.left = '270px'
    sidebarCollapse.style.top = '48px'
    button.textContent = '<';
    sidebarImage.src = './assets/aftermain_logo.svg';
  }
}


  