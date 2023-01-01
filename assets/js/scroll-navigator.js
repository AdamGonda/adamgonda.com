handleShow()
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

function handleShow() {
	const ob1 = new IntersectionObserver(
		function (entries) {
			if (entries[0].isIntersecting === true) {
				document.querySelector('.scroll-navigator').classList.add('hidden')
			}
		},
		{ threshold: [0.1] },
	)

	ob1.observe(document.querySelector('.landing'))

	const ob2 = new IntersectionObserver(
		function (entries) {
			if (entries[0].isIntersecting === true) {
				document.querySelector('.scroll-navigator').classList.remove('hidden')
			}
		},
		{ threshold: [0.65] },
	)

	ob2.observe(document.querySelector('#_0'))
}

function addIntersectionObservers() {
	const observers = []

	for (let i = 0; i < 4; i++) {
		let observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting === true) {
					onSectionBecomesVisible(i)
				}
			},
			{ threshold: [0.75] },
		)

		observers[i] = observer
	}

	for (let i = 0; i < observers.length; i++) {
		observers[i].observe(document.querySelector('#_' + i))
	}
}
