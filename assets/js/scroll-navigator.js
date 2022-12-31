foobar()
const OBSERVERS = []


for (let i = 0; i < 4; i++) {
  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      onSectionBecomesVisible(i)
    }
  }, { threshold: [1] });

  OBSERVERS[i] = observer
}


function handleClick(event) {
  const targetId = event.target.dataset.targetId;
  document.getElementById('_' + targetId).scrollIntoView({ behavior: 'smooth'});
}

document.querySelectorAll('.scroll-navigator button').forEach((button) => {
  button.addEventListener('click', handleClick);
});


for (let i = 0; i < OBSERVERS.length; i++) {
  OBSERVERS[i].observe(document.querySelector("#_" + i));
}

function onSectionBecomesVisible(id) {
  document.querySelectorAll('.scroll-navigator button').forEach((button, idx) => {
    button.classList.remove('current-position')

    if(id == idx){
      button.classList.add('current-position')
    }
  });
}

function showScrollNavigator() {
  document.querySelector('.scroll-navigator').classList.remove('hidden')
}

function hideScrollNavigator() {
  document.querySelector('.scroll-navigator').classList.add('hidden')
}

function foobar(){
  const ob1 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      hideScrollNavigator()
    }
  }, { threshold: [0.1] });

  ob1.observe(document.querySelector('.landing'))

  const ob2 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      showScrollNavigator()
    }
  }, { threshold: [0.6] });

  ob2.observe(document.querySelector('#_0'))
}
