;(() => {
  const CHANGE = 10

	function showEasterEgg() {
		const nameLogo = document.querySelector('nav a')
		nameLogo.innerHTML = '[ Easter 🐣 ]'
		nameLogo.href = '/easter-egg'
	}

  const randomNumber = Math.random() * 100

  if(window.innerWidth < 1000) return

  if(randomNumber < CHANGE  ) {
    showEasterEgg()
  }
})()
