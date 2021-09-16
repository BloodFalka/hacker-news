import { axiosInstance } from "./axios"

export const newsApi = {
    _path: '/news',
    getNews(page: number) {
        return axiosInstance.get(`${this._path}/${page}.json`).then((response) => response.data)
    }
}

