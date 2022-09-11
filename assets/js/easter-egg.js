;(() => {
  const CHANGE = 10

	function showEasterEgg() {
		const nameLogo = document.querySelector('nav a')
		nameLogo.innerHTML = '[easter egg]'
		nameLogo.href = 'easter-egg'
	}

  const randomNumber = Math.random() * 100

  if(randomNumber < CHANGE  ) {
    showEasterEgg()
  }

})()
