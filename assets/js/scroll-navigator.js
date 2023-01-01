const NUMBER_OF_POSITIONS = 5

addIntersectionObservers()

document.querySelectorAll('.scroll-navigator button').forEach(button => {
	button.addEventListener('click', handleClick)
})


function handleClick(event) {
	const targetId = event.target.dataset.targetId
	document.getElementById('_' + targetId).scrollIntoView({ behavior: 'smooth' })
}

function onSectionBecomesVisible(id) {
	document
		.querySelectorAll('.scroll-navigator button')
		.forEach((button, idx) => {
			button.classList.remove('current-position')

			if (id == idx) {
				button.classList.add('current-position')
			}
		})
}

function addIntersectionObservers() {
	const observers = []

	for (let i = 0; i < NUMBER_OF_POSITIONS; i++) {
		let observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting === true) {
					onSectionBecomesVisible(i)
				}
			},
			{ threshold: [0.7] },
		)

		observers[i] = observer
	}

	for (let i = 0; i < observers.length; i++) {
		observers[i].observe(document.querySelector('#_' + i))
	}
}
