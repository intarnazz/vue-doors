import * as GetModel from './get/Get.js'
const Get = GetModel.Get

import * as PostModel from './post/Post.js'
const Post = PostModel.Post

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

export const GetBrand = async () => await Get('brand')
export const GetComponent = async () => await Get('component')
export const GetMaterial = async () => await Get('material')

export const auth = async (body) => {
  const res = await Post('authorization', body)
  if (res.success) {
    sessionStorage.setItem('token', res.token)
  }
  return res
}

const Push = async (url, method, data) => {
  return await Post(`${url}/${data.id}`, { _method: method, ...data })
}

export const DeleteDoor = async (data) => await Push('door', 'DELETE', data)
export const DeleteBrand = async (data) => await Push('brand', 'DELETE', data)
export const DeleteComponent = async (data) => await Push('component', 'DELETE', data)
export const DeleteMaterial = async (data) => await Push('material', 'DELETE', data)

export const PatchDoor = async (data) => await Push('door', 'PATCH', data)
export const PatchBrand = async (data) => await Push('brand', 'PATCH', data)
export const PatchComponent = async (data) => await Push('component', 'PATCH', data)
export const PatchMaterial = async (data) => await Push('material', 'PATCH', data)

export const AddDoor = async (data) => await Post('door', data)
export const AddBrand = async (data) => await Post('brand', data)
export const AddComponent = async (data) => await Post('component', data)
export const AddMaterial = async (data) => await Post('material', data)
