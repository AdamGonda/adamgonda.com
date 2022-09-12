;(() => {
	const progressBar = document.getElementsByClassName('scroll-progressbar')[0]
	const navigation = document.getElementsByTagName('nav')[0]
	const post = document.getElementsByClassName('post')[0]

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
		const show = (navigation.offsetHeight - document.documentElement.scrollTop) <=0
		const isMobile = window.innerWidth < 1000
	
		if (show && post && !isMobile) {
			progressBar.style.display = 'block'
		} else {
			progressBar.style.display = 'none'
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		window.addEventListener('scroll', updateProgress)
		window.addEventListener('scroll', toggleProgressBarVisibility)
	})
})()
