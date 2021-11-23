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

// TODO: get from env
const baseURL = 'http://127.0.0.1:3334/api/v1/urls'

export const convertToShortURL = async (url: string): Promise<IHttpResponse<IShortenURL[]>> =>
    axios.post(baseURL, {
        urls: [
            {
                url,
                ttlInSeconds: -1
            }
        ]
    }).then(response => response.data)
