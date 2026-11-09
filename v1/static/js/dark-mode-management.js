// Get rid of some magic "numbers".

const checkboxId = 'dark-mode-checkbox'
const controlsId = 'dark-mode-controls'
// For both local storage and the data attribute.
const key = 'darkMode'
const onValue = 'true'
const offValue = 'false'

// Set the initial dark mode state from local storage.

const darkModeInitiallyOn = localStorage.getItem(key) === onValue
if (darkModeInitiallyOn) {
  document.documentElement.dataset[key] = onValue
}

// Once the DOM has loaded...
window.addEventListener('DOMContentLoaded', () => {
  const darkModeCheckbox = document.getElementById(checkboxId)
  
  // Set the initial checkbox value.
  darkModeCheckbox.checked = darkModeInitiallyOn

  // Attach the listener to handle the checkbox changes.
  darkModeCheckbox.addEventListener('change', event => {
    if (event.target.checked) {
      document.documentElement.dataset[key] = onValue
      localStorage.setItem(key, onValue)
    } else {
      document.documentElement.dataset[key] = offValue
      localStorage.setItem(key, offValue)
    }
  })

  // Unhide the checkbox controls.
  document.getElementById(controlsId).classList.remove('hidden');
})
