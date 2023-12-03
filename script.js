function toggleSidebar(initialSetup = false) {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const button = document.getElementById('sidebarCollapse');
  const sidebarImage = document.getElementById('sidebarImage');
  const icon1 = document.getElementById('tab_one_name');
  const icon2 = document.getElementById('tab_two_name');
  const greenDiv = document.querySelector('.green-div');

  const updateStyles = (width, iconDisplay, imageSrc, collapseLeft, greenDivDisplay) => {
    sidebar.style.width = width;
    icon1.style.display = icon2.style.display = iconDisplay;
    sidebarCollapse.style.left = collapseLeft;
    greenDiv.style.display = greenDivDisplay;

    // Set resolution for sidebarImage when the width is 300px
    if (width === '300px') {
      sidebarImage.style.width = '240px';
      sidebarImage.style.height = '80px';
    } else {
      sidebarImage.style.width = '78px';
      sidebarImage.style.height = '36px';
    }

    sidebarImage.src = imageSrc;
  };

  if (initialSetup) {
    updateStyles('160px', 'none', '/assets/Group 1.svg', '155px', 'none');
    main.classList.remove('shifted');
    button.innerHTML = '<img src="/assets/bxs-chevron-left.svg" alt="Right Arrow" class="ml-3 rotate-right">';
    return;
  }

  const isShifted = main.classList.contains('shifted');
  updateStyles(
    isShifted ? '160px' : '300px',
    isShifted ? 'none' : '',
    isShifted ? '/assets/Group 1.svg' : './assets/aftermain_logo.svg',
    isShifted ? '155px' : '270px',
    isShifted ? 'none' : 'block'
  );
  main.classList.toggle('shifted');
  button.innerHTML = `<img src="/assets/bxs-chevron-left.svg" alt="Right Arrow" class="ml-3 rotate-${isShifted ? 'right' : 'left'}">`;
}

document.addEventListener('DOMContentLoaded', () => toggleSidebar(true));
