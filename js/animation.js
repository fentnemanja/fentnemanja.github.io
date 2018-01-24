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

TweenMax.from(html, 1.5, {
    delay: 1.5,
    ease: Power3.easeOut,
    opacity: .4,
    width: 0
});

TweenMax.from(css, 1.5, {
    ease: Power3.easeOut,
    delay: 1.8,
    opacity: .4,
    width: 0
});

TweenMax.from(js, 1.5, {
    ease: Power3.easeOut,
    delay: 2,
    opacity: .4,
    width: 0
});

TweenMax.from(bootstrap, 1.5, {
    ease: Power3.easeOut,
    delay: 2.2,
    opacity: .4,
    width: 0
});

TweenMax.from(design, 1.5, {
    ease: Power3.easeOut,
    delay: 2.6,
    opacity: .4,
    width: 0
});
