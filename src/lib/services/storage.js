/**
 * @returns {any} data
 */
const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('data')
  return data ? JSON.parse(data) : null
}

/**
 * @returns {Promise<any>} data
 */
export const getData = () => {
  // Return the data from the local storage
  return new Promise((resolve, reject) => {
    try {
      const data = getDataFromLocalStorage()

      if (data) {
        resolve(data)
      } else {
        const initialData = {
          notes: [],
          settings: {
            darkmode: true,
            view: "list"
          }
        }

        localStorage.setItem('data', JSON.stringify(initialData))
        resolve(initialData)
      }
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * @param {any} note
 */
export const newNote = (note) => {
  // Add a note to the local storage
  const data = getDataFromLocalStorage()
  if (!data) return

  data.notes.push(note)
  localStorage.setItem('data', JSON.stringify(data))
}

/**
 * @param {any} note 
 */
export const updateNote = (note) => {
  // Update a note in the local storage
  const data = getDataFromLocalStorage()
  if (!data) return

  const index = data.notes.findIndex((/** @type {any} */ n) => n.id === note.id)
  data.notes[index] = note
  localStorage.setItem('data', JSON.stringify(data))
}

/**
 * @param {string} id 
 */
export const removeNote = (id) => {
  // Delete a note from the local storage
  const data = getDataFromLocalStorage()
  if (!data) return

  data.notes = data.notes.filter((/** @type {any} */ n) => n.id !== id)
  localStorage.setItem('data', JSON.stringify(data))
}

/**
 * @param {boolean} darkmode 
 */
export const darkTheme = (darkmode) => {
  // Change the theme of the app and save in local storage
  const data = getDataFromLocalStorage()
  if (!data) return

  data.settings.darkmode = darkmode
  localStorage.setItem('data', JSON.stringify(data))
}
