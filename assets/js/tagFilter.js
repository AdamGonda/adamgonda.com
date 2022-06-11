;(async () => {
  const TAGS = await getAllTag()
  const FILTER_WRAP = document.getElementById('filter-wrap')
  const FILTER_ICON = document.getElementById('filter-icon')
  const CLOSE_ICON = document.getElementById('close-icon')

  FILTER_ICON.addEventListener('click', handleOpen)
  CLOSE_ICON.addEventListener('click', handleClose)

  function getAllTag() {
    return fetch('/allTags.json')
      .then(res => res.json())
      .then(data => data)
  }

  function handleOpen() {
    FILTER_WRAP.dataset.isOpen = true
    FILTER_ICON.style.display = 'none'
    CLOSE_ICON.style.display = ''

    insertTags()
  }

  function insertTags() {
    const ul = document.createElement('ul')
    ul.className = 'tags'

    TAGS.forEach(tag => {
      const li = document.createElement('li')
      li.textContent = tag
      ul.appendChild(li)
    })

    FILTER_WRAP.insertBefore(ul, CLOSE_ICON)
  }

  function handleClose() {
    document.querySelector('#filter-wrap ul.tags').remove()
    FILTER_WRAP.dataset.isOpen = false
    CLOSE_ICON.style.display = 'none'
    FILTER_ICON.style.display = ''
  }
})()
