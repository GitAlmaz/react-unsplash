import axios from 'axios'

const access_key = 'ujONZcYs5Bm68fLKQ4eUOrhd72Pvv97jCLfe1QjG8go'

const _axios = axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		'Authorization': `Client-ID ${access_key}`,
		'Content-Type': 'application/json'
	}
})

export default _axios
