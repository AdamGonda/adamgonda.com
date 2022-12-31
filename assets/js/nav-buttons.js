document.querySelectorAll('.about button').forEach(button => {
	button.addEventListener('click', handleClick)
})

function handleClick(e) {
	const currentPos = getCurrentPosition()

	if (e.target.hasAttribute('data-up')) {
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
