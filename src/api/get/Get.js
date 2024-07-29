const API_URL = import.meta.env.VITE_API_URL

export async function TeerGet() {
  return await fetch(`${API_URL}teer`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}
