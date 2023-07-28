import { writable } from 'svelte/store'
import { getTheme } from '../helpers/theme'

const setTheme = () => {
  const { subscribe, update, set } = writable(getTheme())

  return {
    subscribe,
    change: () => update((theme) => {
      if (getTheme()) {
        localStorage.setItem('darkmode', 'false')
      } else {
        localStorage.setItem('darkmode', 'true')
      }

      return !theme
    }),
    apply: (/** @type {boolean} */ theme) => set(theme)
  }
}

export const darkmode = setTheme()
