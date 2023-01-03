// set active tab id
// just show idx 0 tab first

const tabs = Array.from(document.querySelectorAll('.tabs'))
const tabsContent = Array.from(document.querySelectorAll('.tabs-content'))

tabsContent.forEach(tabsContent => {
	Array.from(tabsContent.children).forEach((content, idx) => {
		if (idx > 0) {
			content.style.display = 'none'
		}
	})
})

tabs.forEach(tabs => {
	Array.from(tabs.children).forEach((tab, idx) => {
		tab.addEventListener('click', () => handleClick(tabs, idx))
	})
})

function handleClick(tabs, idx) {
	tabs.dataset.active = idx
}
