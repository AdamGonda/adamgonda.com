;(async () => {
  const TAGS = await getAllTag()
  const FILTER_WRAP = document.getElementById('filter-wrap')
  const FILTER_ICON = document.getElementById('filter-icon')
  const CLOSE_ICON = document.getElementById('close-icon')

  FILTER_ICON.addEventListener('click', handleOpen)
  CLOSE_ICON.addEventListener('click', handleClose)

  // event handlers
  function handleOpen() {
    FILTER_WRAP.dataset.isOpen = true
    FILTER_ICON.style.display = 'none'
    CLOSE_ICON.style.display = ''

    insertTags()
  }

  function handleClose() {
    document.querySelector('#filter-wrap ul.tags').remove()
    FILTER_WRAP.dataset.isOpen = false
    CLOSE_ICON.style.display = 'none'
    FILTER_ICON.style.display = ''
  }

  function handleSelectTag(e) {
    if (e.target.dataset.isSelected === 'false') {
      e.target.style.backgroundColor = 'black'
      e.target.style.color = 'white'
      e.target.dataset.isSelected = true
    } else {
      e.target.style.backgroundColor = 'transparent'
      e.target.style.color = 'black'
      e.target.dataset.isSelected = false
    }
  }

  // functions
  function getAllTag() {
    return fetch('/allTags.json')
      .then(res => res.json())
      .then(data => data)
  }

  function insertTags() {
    const ul = document.createElement('ul')
    ul.className = 'tags'

    TAGS.forEach(tag => {
      const li = document.createElement('li')
      li.textContent = tag
      li.dataset.isSelected = false
      ul.appendChild(li)
    })

    FILTER_WRAP.insertBefore(ul, CLOSE_ICON)
    document
      .querySelectorAll('#filter-wrap li')
      .forEach(li => li.addEventListener('click', handleSelectTag))
  }
})()
