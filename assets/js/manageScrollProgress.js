;(() => {
	const bar = getBar()

	function getBar() {
		return document.getElementsByClassName('scroll-progressbar')[0]
	}

	function getNav() {
		return document.getElementsByTagName('nav')[0]
	}

	function getPost() {
		return document.getElementsByClassName('post')[0]
	}

	function getScrollProgress() {
		const pageHeight =
			document.documentElement.scrollTop || document.body.scrollTop
		return (
			(pageHeight / (document.body.scrollHeight - window.innerHeight)) * 100
		)
	}

	function updateProgress() {
		const progress = getScrollProgress()
		bar.style.width = progress + '%'
	}

	function toggleProgressBarVisibility() {
		const show = (getNav().offsetHeight - document.documentElement.scrollTop) <=0
	
		if (show && getPost()) {
			getBar().style.display = 'block'
		} else {
			getBar().style.display = 'none'
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		window.addEventListener('scroll', updateProgress)
		window.addEventListener('scroll', toggleProgressBarVisibility)
	})
})()
