import axios from "axios"

interface IHttpResponse<T> {
    success: boolean
    result?: T
    message?: string
    error?: string
}

export interface IShortenURL {
    raw: string
    short?: string
    expiredAt?: Date
}

const baseURL = import.meta.env.VITE_API

export const convertToShortURL = async (url: string): Promise<IHttpResponse<IShortenURL[]>> =>
    axios.post(`${baseURL}/urls`, {
        urls: [
            {
                url,
                ttlInSeconds: -1
            }
        ]
    }).then(response => response.data)
