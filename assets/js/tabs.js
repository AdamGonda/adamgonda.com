// set active tab id

Array.from(document.querySelectorAll('.tabs')).forEach((tabs) => {
  Array.from(tabs.children).forEach((tab, idx) => tab.addEventListener('click', () => handleClick(tabs, idx)))
})

function handleClick(tabs, idx) {
  tabs.dataset.active = idx
  console.log(idx);
}