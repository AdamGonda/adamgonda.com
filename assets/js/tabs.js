
const tabCompHeaders = Array.from(document.querySelectorAll('.tab-comp-header'))
const tabCompBodys = Array.from(document.querySelectorAll('.tab-comp-body'))

tabCompBodys.forEach(body => {
	Array.from(body.children).forEach((child, idx) => {
		if (idx > 0) {
			child.style.display = 'none'
		}
	})
})

tabCompHeaders.forEach(header => {
	Array.from(header.children).forEach((child, idx) => {
		child.addEventListener('click', () => handleClick(header, child, idx))
	})
})

function handleClick(header, child, childIdx) {
  Array.from(header.children).forEach(child => child.classList.remove('active'))
  child.classList.add('active')

  tabCompBodys.forEach(body => {
    if(body.dataset.id == header.dataset.id){
      Array.from(body.children).forEach((child, idx) => {
        if (idx == childIdx) {
          child.style.display = 'block'
        } else {
          child.style.display = 'none'
        }
      })
    }
  })
}
