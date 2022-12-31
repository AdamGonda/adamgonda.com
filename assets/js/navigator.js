function handleClickLink(event) {
  const targetId = event.target.dataset.targetId;
  document.getElementById('id-' + targetId).scrollIntoView({ behavior: 'smooth'});
}

document.querySelectorAll('.navigator button').forEach((button) => {
  button.addEventListener('click', handleClickLink);
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
  observers[i].observe(document.querySelector("#id-" + i));
}

function onSectionBecomesVisible(id) {
  console.log(id + ' got visible');
}

