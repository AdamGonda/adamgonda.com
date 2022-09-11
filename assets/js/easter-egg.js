;(() => {
  const CHANGE = 10

	function showEasterEgg() {
		const nameLogo = document.querySelector('nav a')
		nameLogo.innerHTML = '[ Easter 🐣 ]'
		nameLogo.href = 'easter-egg'
	}

  const randomNumber = Math.random() * 100

  if(randomNumber < CHANGE  ) {
    showEasterEgg()
  }
})()
