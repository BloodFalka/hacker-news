import { axiosInstance } from "./axios"

export const jobsApi = {
    _path: '/jobs',
    getJobs(page: number) {
        return axiosInstance.get(`${this._path}/${page}.json`).then((response) => response.data)
    }
}

