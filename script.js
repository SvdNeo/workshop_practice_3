function toggleSidebar(initialSetup = false) {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const button = document.getElementById('sidebarCollapse');
  const sidebarImage = document.getElementById('sidebarImage');
  const icon1  = document.getElementById("tab_one_name");
  const icon2 = document.getElementById("tab_two_name");
  const greenDiv = document.querySelector('.green-div');
  const icon  = document.getElementById("icon");
  const payment = document.getElementById("payment")

  // Check if it's the initial setup
  if (initialSetup) {
    sidebar.style.width = '175px';
    main.classList.remove('shifted');
    button.innerHTML= '<img src="/assets/bxs-chevron-left.svg" alt="Right Arrow" class = "ml-3 rotate-right">';
    sidebarImage.style.width = "78px";
    sidebarImage.style.height = "36px";
    icon1.style.display = "none";
    icon2.style.display = "none";
    sidebarCollapse.style.left = '182px';
    sidebarCollapse.style.top = '48px';
    sidebarImage.src = "/assets/Group 1.svg";
    greenDiv.style.display = 'none'
    icon.classList.remove('w-full');
    payment.classList.remove('ml-7');
    return;
  }

  // Perform the toggling actions
  if (main.classList.contains('shifted')) {
    sidebar.style.width = '182px';
    main.classList.remove('shifted');
    button.innerHTML= '<img src="/assets/bxs-chevron-left.svg" alt="Right Arrow" class = "ml-3 rotate-right">';
    sidebarImage.style.width = "78px";
    sidebarImage.style.height = "36px";
    icon1.style.display = "none";
    icon2.style.display = "none";
    sidebarCollapse.style.left = '182px';
    sidebarCollapse.style.top = '48px';
    sidebarImage.src = "/assets/Group 1.svg";
    greenDiv.style.display = 'none';
    icon.classList.remove('w-full');
    payment.classList.remove('ml-7');
  } else {
    sidebar.style.width = '300px';
    main.classList.add('shifted');
    sidebarImage.style.width = "300px";
    sidebarImage.style.height = "80px";
    icon2.style.display = "";
    icon1.style.display = "";
    sidebarCollapse.style.left = '275px';
    sidebarCollapse.style.top = '48px';
    button.innerHTML= '<img src="/assets/bxs-chevron-left.svg" alt="Right Arrow" class = "ml-3 rotate-left">';
    sidebarImage.src = './assets/aftermain_logo.svg';
    greenDiv.style.display = 'block';
    icon.classList.add('w-full');
    payment.classList.add('ml-7');
  }
}

// Call the function once the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Call the toggleSidebar function with the initialSetup parameter set to true
  toggleSidebar(true);

  // Get the parent div element
  const icon = document.getElementById('icon');

  // Remove the w-full class from the parent div
  icon.classList.remove('w-full');
  payment.classList.remove('ml-7');
});


