function checkScreenSize() {
  const detailsElements = document.querySelectorAll('details');
  detailsElements.forEach(detailsElement => {
    if (window.innerWidth <= 1024) {
      detailsElement.removeAttribute('open');
    } else {
      detailsElement.setAttribute('open', 'open');
    }
  });
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);