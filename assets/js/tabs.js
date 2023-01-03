// set active tab id
// just show idx 0 tab first

const tabsWraps = Array.from(document.querySelectorAll('.tabs-wrap'))
const tabsContentWraps = Array.from(document.querySelectorAll('.tabs-content-wrap'))

tabsContentWraps.forEach(tabsContent => {
	Array.from(tabsContent.children).forEach((content, idx) => {
		if (idx > 0) {
			content.style.display = 'none'
		}
	})
})

tabsWraps.forEach(tabs => {
	Array.from(tabs.children).forEach((tab, idx) => {
		tab.addEventListener('click', () => handleTabClick(tabs, idx))
	})
})

function handleTabClick(tabs, idx) {
  tabsContentWraps.forEach(tabsContent => {
    if(tabsContent.dataset.id == tabs.dataset.id){
      Array.from(tabsContent.children).forEach((content, i) => {
        if (i == idx) {
          content.style.display = 'block'
        } else {
          content.style.display = 'none'
        }
      })
    }
  })
}
