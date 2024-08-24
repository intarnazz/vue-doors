const API_URL = import.meta.env.VITE_API_URL

export async function GetArr(url, skip, take, ids) {
  return await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      skip: skip,
      take: take,
      ids: ids
    }
  })
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}
