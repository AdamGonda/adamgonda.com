const wiggle = gsap.timeline({ delay: 1.5, repeat: -1, repeatDelay: 3.5 })
wiggle
	.to('#dot', {
		transform: 'translateY(10px)',
		duration: 0.1,
	})
	.to('#dot', {
		transform: 'translateY(10px)',
		duration: 0.1,
	})
	.to('#dot', {
		transform: 'translateY(0)',
		duration: 0.1,
	})

document.getElementById('dot').addEventListener('click', e => {
	e.currentTarget.dataset.clicked++
	const clicked = e.currentTarget.dataset.clicked

	if (clicked == 1) {
		const tl = gsap.timeline()

		gsap.to('#logo', {
			scale: 1,
			duration: 0.1,
			rotate: 0,
		})
		gsap.to('#help', {
			opacity: 0,
			duration: 0
		})
		tl
		.to('#logo', {
			y: -15,
			duration: 0.1,
			ease: 'back.out(5.7)',
		}).to('#logo', {
			y: 0,
			duration: 0.1,
			ease: 'back.out(4)',
		})
		.to('#dot', {
			transform: 'translateY(0)',
			duration: 0
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
				y: -20,
				delay: 1,
				onComplete: () => {
					document.getElementById('logo-fun').style.display = 'none'
				},
			})
	}
})
