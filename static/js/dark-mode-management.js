// Get rid of some magic "numbers".
const checkboxId = 'dark-mode-checkbox'
const controlsId = 'dark-mode-controls'
const localStorageItemName = 'dark-mode'
const localStorageOnValue = 'true'
const localStorageOffValue = 'false'


// Setup functions for toggling styles.

function setLightModeStyles () {
  document.documentElement.style
    .setProperty('--background-colour', 'var(--light-background-colour)')
  document.documentElement.style
    .setProperty('--main-colour', 'var(--light-main-colour)')
  document.documentElement.style
    .setProperty('--highlight-colour', 'var(--light-highlight-colour)')

  // This will definitely need to be more specific a selection at some point.
  for (const imageElement of document.getElementsByClassName(
    'should-invert-fixing-red'
  )) {
    imageElement.classList.remove('invert-fixing-red')
  }
}

function setDarkModeStyles () {
  document.documentElement.style
    .setProperty('--background-colour', 'var(--dark-background-colour)')
  document.documentElement.style
    .setProperty('--main-colour', 'var(--dark-main-colour)')
  document.documentElement.style
    .setProperty('--highlight-colour', 'var(--dark-highlight-colour)')
  
  // This will definitely need to be more specific a selection at some point.
  for (const imageElement of document.getElementsByClassName(
    'should-invert-fixing-red'
  )) {
    imageElement.classList.add('invert-fixing-red')
  }
}

// Attach the listener to handle the checkbox changes.

const darkModeCheckbox = document.getElementById(checkboxId)
darkModeCheckbox.addEventListener('change', event => {
  if (event.target.checked) {
    setDarkModeStyles()
    localStorage.setItem(localStorageItemName, localStorageOnValue)
  } else {
    setLightModeStyles()
    localStorage.setItem(localStorageItemName, localStorageOffValue)
  }
})

// Set the initial dark mode state from local storage.

const darkModeInitiallyOn =
  localStorage.getItem(localStorageItemName) === localStorageOnValue
darkModeCheckbox.checked = darkModeInitiallyOn
if (darkModeInitiallyOn) setDarkModeStyles()

// Unhide the checkbox controls.

document.getElementById(controlsId).classList.remove('hidden');
