import * as GetArrModel from './get/GetArr.js'
const GetArr = GetArrModel.GetArr

export const GetDoors = async (skip = 0, take = 6, ids = []) => {
  return await GetArr('door', skip, take, ids)
}
export const GetDoor = async (id = 1) => {
  return await GetArr(`door/${id}`)
}
export const Getfilters = async (skip = 0, take = 6) => {
  return await GetArr('door/filters', skip, take)
}
