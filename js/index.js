const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting === true) {
      entry.target.classList.add('in');
    } else {
			entry.target.classList.remove('in');
		}
  });
});

const items = document.querySelectorAll('.swipe');
const items2 = document.querySelectorAll('.outleft');
const items3 = document.querySelectorAll('.outup');

items.forEach((item) => {
  observer.observe(item);
});

items2.forEach((item) => {
  observer.observe(item);
});

items3.forEach((item) => {
  observer.observe(item);
});