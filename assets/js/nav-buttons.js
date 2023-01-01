handleShow()
document.querySelectorAll('.nav-buttons button').forEach(button => {
	button.addEventListener('click', () => handleClick(button))
})

function handleClick(button) {
	const currentPos = getCurrentPosition()

	if (button.hasAttribute('data-up')) {
		if (currentPos > 0) {
			document
				.getElementById('_' + (currentPos - 1))
				.scrollIntoView({ behavior: 'smooth' })
		}
	} else {
		if (currentPos < 3) {
			document
				.getElementById('_' + (currentPos + 1))
				.scrollIntoView({ behavior: 'smooth' })
		}
	}
}

function getCurrentPosition() {
	const button = Array.from(
		document.querySelectorAll('.scroll-navigator button'),
	).find(button => button.classList.contains('current-position'))

	return Number(button.dataset.targetId)
}

function handleShow(){
  const ob1 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      document.querySelector('.nav-buttons').classList.add('hidden')
    }
  }, { threshold: [0.1] });

  ob1.observe(document.querySelector('.landing'))

  const ob2 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      document.querySelector('.nav-buttons').classList.remove('hidden')
    }
  }, { threshold: [0.65] });

  ob2.observe(document.querySelector('#_0'))
}