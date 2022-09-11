;(() => {
	const progressBar = document.getElementsByClassName('scroll-progressbar')[0]

	function getScrollProgress() {
		const pageHeight =
			document.documentElement.scrollTop || document.body.scrollTop
		return (
			(pageHeight / (document.body.scrollHeight - window.innerHeight)) * 100
		)
	}

	function updateProgress() {
		const progress = getScrollProgress()
		progressBar.style.width = progress + '%'
	}

	function toggleProgressBarVisibility() {
		if (document.getElementsByClassName('post')[0]) {
			progressBar.style.display = 'block'
		}else {
			progressBar.style.display = 'none'
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		toggleProgressBarVisibility()
		window.addEventListener('scroll', updateProgress)
	})
})()
