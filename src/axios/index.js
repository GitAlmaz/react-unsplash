import axios from 'axios'

const APIKey = '563492ad6f917000010000016551894611e8476db548d095847d4a75'

const _axios = axios.create({
	baseURL: 'https://api.pexels.com/v1/',
	headers: {
		'Authorization': `${APIKey}`,
		'Content-Type': 'application/json'
	}
})

export default _axios
