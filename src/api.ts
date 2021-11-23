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

interface IShortLinkRequest {
    url: string
    ttlInSeconds: number
}

const baseURL = import.meta.env.VITE_API

export const convertToShortURL = async (url: IShortLinkRequest): Promise<IHttpResponse<IShortenURL[]>> =>
    axios.post(`${baseURL}/urls`, {
        urls: [url]
    }).then(response => response.data)
