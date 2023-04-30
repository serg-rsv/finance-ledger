function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  const headerHeight = document.querySelector('header').offsetHeight;
  const targetPosition = targetSection.offsetTop - headerHeight;
  window.scrollTo({
    top: targetPosition,
  });
}

const anchorLinks = document.querySelectorAll('.navigation__link');

anchorLinks.forEach(link => link.addEventListener('click', scrollToSection));
