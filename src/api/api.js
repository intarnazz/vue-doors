import * as GetArrModel from './get/GetArr.js'
const GetArr = GetArrModel.GetArr

export const GetDoors = async (skip, take) => {
  return await GetArr('door', skip, take)
}
export const Getfilters = async (skip, take) => {
  return await GetArr('door/filters', skip, take)
}
