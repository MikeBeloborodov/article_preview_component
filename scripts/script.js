const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const $shareButton = $('#share-toggle-button');
const $shareContainer = $('#share-container')

const toggleShareContainer = () => {
  $shareContainer.classList.toggle('hidden');
}

$shareButton.addEventListener('click', () => {
  toggleShareContainer();
});
