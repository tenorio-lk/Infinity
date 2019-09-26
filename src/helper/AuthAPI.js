import axios from 'axios'

// const APP_KEY = 'AIzaSyB0hyHf9A1lDyXIMxLarK_NUSgBOCSTbHA'
const APP_KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I'
const BASE_URL = 'https://www.googleapis.com/youtube/v3/'

export const basicData = axios.create({
    baseURL: BASE_URL,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: APP_KEY
    }
})
