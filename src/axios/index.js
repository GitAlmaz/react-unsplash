import axios from 'axios'

const access_key = '4e85ebe7f2e1b2a33af9cc9343f8c0aa3fdab517e8bc342f796f52f1b4b4ff83'

const _axios = axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		'Authorization': `Client-ID ${access_key}`,
		'Content-Type': 'application/json'
	}
})

export default _axios
