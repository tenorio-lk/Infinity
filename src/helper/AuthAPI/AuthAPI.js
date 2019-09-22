import axios from 'axios'

const KEY = 'AIzaSyB0hyHf9A1lDyXIMxLarK_NUSgBOCSTbHA'
const BASE_URL = 'https://www.googleapis.com/youtube/v3/'

export const youtube = axios.create({
    baseURL: BASE_URL,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
