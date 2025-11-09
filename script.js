function updateScrollbarWidth() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
     
    
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }
  
  updateScrollbarWidth();
  window.addEventListener('resize', updateScrollbarWidth);

  document.querySelector('.menu-btn').onclick = toggleSidebar;
  function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('inactive');
    document.documentElement.style.setProperty('--sidebar-width', document.querySelector('.sidebar').classList.contains('inactive') ? '0px' : '16.5%');
  }
  