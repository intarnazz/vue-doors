const API_URL = import.meta.env.VITE_API_URL

export async function Get(
  url,
  skip = '',
  take = '',
  ids = '',
  brand = '',
  material = '',
  response_id = 1
) {
  return await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      skip: skip,
      take: take,
      ids: ids,
      brand: brand,
      material: material,
      responseId: response_id
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
