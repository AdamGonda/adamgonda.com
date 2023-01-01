const SHOW_TRASHHOLD = 0.65
const HIDE_TRASHHOLD = 0.1

handleShow()
addIntersectionObservers()

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
  }, { threshold: [HIDE_TRASHHOLD] });

  ob1.observe(document.querySelector('.landing'))

  const ob2 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      document.querySelector('.nav-buttons').classList.remove('hidden')
    }
  }, { threshold: [SHOW_TRASHHOLD] });

  ob2.observe(document.querySelector('#_0'))
}

function addIntersectionObservers() {
	const observers = []

	for (let i = 0; i < 4; i++) {
		let observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting === true) {
					foobar()
				}
			},
			{ threshold: [0.61] },
		)

		observers[i] = observer
	}

	for (let i = 0; i < observers.length; i++) {
		observers[i].observe(document.querySelector('#_' + i))
	}
}

function foobar() {
	const currPos = getCurrentPosition()
	console.log(currPos);

	if(currPos == 0){
		document.querySelector('[data-up]').classList.add('hidden')
	}

	if(currPos > 0){
		document.querySelector('[data-up]').classList.remove('hidden')

	}
}