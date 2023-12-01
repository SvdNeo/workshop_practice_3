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

  if (main.classList.contains('shifted')) {
    sidebar.style.width = '160px';
    main.classList.remove('shifted');
    button.textContent = '>';
    sidebarImage.src ="/assets/Group 1.svg";
  } else {
    sidebar.style.width = '300px';
    main.classList.add('shifted');
    button.textContent = '<';
    sidebarImage.src = './assets/aftermain_logo.svg';
  }
}


  