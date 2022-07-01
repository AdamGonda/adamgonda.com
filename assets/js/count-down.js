function Value(value) {
  const stringValue = value + ''
  return `<span class="count-down-value">${stringValue.replace('-', '')}</span>`
}

function Unit(value) {
  return `<span class="count-down-unit">${value}</span>`
}

;(() => {
  moment.updateLocale('en', {
    week: {
      dow: 1, // First day of week is Monday
      doy: 4, // First week of year must contain 4 January (7 + 1 - 4)
    },
  })

  function update() {
    const countDown = document.getElementById('count-down')

    const end = moment().endOf('week')
    const start = moment()
    const diffTime = moment(end).diff(start);
    const duration = moment.duration(diffTime)
    
    const p = document.createElement('p')
    p.innerHTML =
      Value(duration.days()) +
      Unit('d') +
      Value(duration.minutes()) +
      Unit('m') +
      Value(duration.seconds()) +
      Unit('s')
    countDown.innerHTML = ''
    countDown.appendChild(p)
  }

  update()

  setInterval(() => update(), 1000)
})()
