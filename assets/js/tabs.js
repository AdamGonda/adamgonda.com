
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
		child.addEventListener('click', () => handleClick(header, idx))
	})
})

function handleClick(header, idx) {
  tabCompBodys.forEach(body => {
    if(body.dataset.id == header.dataset.id){
      Array.from(body.children).forEach((child, i) => {
        if (i == idx) {
          child.style.display = 'block'
        } else {
          child.style.display = 'none'
        }
      })
    }
  })
}
