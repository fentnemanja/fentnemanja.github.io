const text = document.querySelector('.about');
const html = document.querySelector('.js-html');
const css = document.querySelector('.js-css');
const js = document.querySelector('.js-javascript');
const bootstrap = document.querySelector('.js-bootstrap');
const design = document.querySelector('.js-design');

const header = document.querySelector('.js-header');

TweenMax.from(text, 1.5, {
    delay: .5,
    y: 100,
    opacity: 0
});

TweenMax.from(header, 1.5, {
    y: 100,
    opacity: 0
});






