import { axiosInstance } from "./axios"

export const itemApi = {
    _path: '/item',
    getItem(id: string) {
        return axiosInstance.get(`${this._path}/${id}.json`).then((response) => response.data)
    }
}
