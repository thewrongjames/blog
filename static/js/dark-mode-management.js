const root = document.documentElement
const darkModeCheckbox = document.getElementById('dark-mode-checkbox')

function useLightMode () {
  root.style.setProperty(
    '--background-colour',
    'var(--light-background-colour)'
  )
  root.style.setProperty('--main-colour', 'var(--light-main-colour)')
  root.style.setProperty('--highlight-colour', 'var(--light-highlight-colour)')

  // This will definitely need to be more specific a selection at some point.
  for (const imageElement of document.getElementsByTagName('img')) {
    imageElement.classList.remove('invert-black-and-white-only')
  }
}

function useDarkMode () {
  root.style.setProperty('--background-colour', 'var(--dark-background-colour)')
  root.style.setProperty('--main-colour', 'var(--dark-main-colour)')
  root.style.setProperty('--highlight-colour', 'var(--dark-highlight-colour)')

  // This will definitely need to be more specific a selection at some point.
  for (const imageElement of document.getElementsByTagName('img')) {
    imageElement.classList.add('invert-black-and-white-only')
  }
}

darkModeCheckbox.addEventListener('change', event => {
  if (event.target.checked) {
    useDarkMode()
  } else {
    useLightMode()
  }
})
