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
