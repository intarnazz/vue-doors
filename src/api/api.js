import * as GetArrModel from './get/Get.js'
const Get = GetArrModel.Get

export const GetDoors = async (
  skip = 0,
  take = 6,
  ids = '',
  brand = '',
  material = '',
  response_id = 1
) => {
  return await Get('door', skip, take, ids, brand, material, response_id)
}
export const GetDoor = async (id = 1) => {
  return await Get(`door/${id}`)
}
export const Getfilters = async (skip = 0, take = 6) => {
  return await Get('door/filters', skip, take)
}
