export function save(key, value) {
  let arr = JSON.parse(localStorage.getItem(key))
  arr = arr ? arr : []
  if (!arr.includes(value)) {
    localStorage.setItem(key, JSON.stringify([...arr, value]))
  }
}

export function get(key) {
  return JSON.parse(localStorage.getItem(key))
}
