const wiggle = gsap.timeline({ repeat: -1, repeatDelay: 4 })
wiggle
	.to('#logo', {
		rotate: 3,
		duration: 0.1,
	})
	.to('#logo', {
		rotate: -3,
		duration: 0.1,
	})
	.to('#logo', {
		rotate: 3,
		duration: 0.1,
	})
	.to('#logo', {
		rotate: 0,
		duration: 0.1,
	})

document.getElementById('logo').addEventListener('click', e => {
	e.currentTarget.dataset.clicked++
	const clicked = e.currentTarget.dataset.clicked

	if (clicked == 1) {
		gsap.to('#logo', {
			scale: 1,
			duration: 0.2
		})
		wiggle.pause()
	}

	if (clicked == 2) {
		gsap.to('#hi', {
			x: 30,
			duration: 0,
		})
		gsap.to('#hi', {
			opacity: 1,
			x: 0,
			duration: 0.7,
		})
	}

	if (clicked == 3) {
		gsap.to('#iam', {
			y: -30,
			duration: 0,
		})
		gsap.to('#iam', {
			opacity: 1,
			y: 0,
			duration: 0.7,
		})
	}

	if (clicked == 4) {
		gsap.to('#logo-text', {
			x: -15,
			duration: 0,
		})
		gsap.to('#logo-text', {
			opacity: 1,
			x: 0,
			duration: 0.7,
		})
	}

	if (clicked == 5) {
		gsap.to('#fro', {
			y: -15,
			duration: 0,
		})
		gsap.to('#fro', {
			opacity: 1,
			y: 0,
			duration: 0.7,
		})
	}

	if (clicked == 6) {
		const tl = gsap.timeline()
		tl.to('#ux', {
			y: -25,
			duration: 0,
		})
		tl.to('#ux', {
			opacity: 1,
			y: 0,
			onComplete: () =>
				document.querySelector('.content').classList.add('totransparent'),
		})
			.to('#des', {
				y: -40,
				duration: 0,
			})
			.to('#des', {
				y: 0,
				opacity: 1,
			})
			.to('#ani', {
				y: -40,
				duration: 0,
			})
			.to('#ani', {
				opacity: 1,
				y: 0,
			})
			.to('#logo-fun', {
				opacity: 0,
				delay: 1.5,
				onComplete: () =>
					(document.getElementById('logo-fun').style.display = 'none'),
			})
	}
})
