function handleClick(event) {
  const targetId = event.target.dataset.targetId;
  document.getElementById('_' + targetId).scrollIntoView({ behavior: 'smooth'});
}

document.querySelectorAll('.scroll-navigator button').forEach((button) => {
  button.addEventListener('click', handleClick);
});

const observers = []
for (let i = 0; i < 4; i++) {
  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      onSectionBecomesVisible(i)
    }
  }, { threshold: [1] });

  observers[i] = observer
}

for (let i = 0; i < observers.length; i++) {
  observers[i].observe(document.querySelector("#_" + i));
}

function onSectionBecomesVisible(id) {
  document.querySelectorAll('.scroll-navigator button').forEach((button, idx) => {
    button.style.background = ''

    if(id == idx){
      button.style.background = 'red'
    }
  });
}

