const header = document.querySelector('.header');
const headerHeight = () => header.offsetHeight;

function handleHeader() {
  if (window.pageYOffset > headerHeight()) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

function throttle(func, delay) {
  let timeoutId;
  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        timeoutId = null;
      }, delay);
    }
  };
}

window.addEventListener('scroll', throttle(handleHeader, 200));
