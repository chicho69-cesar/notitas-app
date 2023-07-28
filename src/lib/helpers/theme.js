/**
 * @returns {boolean} theme
 */
export function getTheme () {
  const theme = localStorage.getItem('darkmode')
  return theme ? theme === 'true' : true
}
