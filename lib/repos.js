import axios from 'axios'

export async function getAllLanguages() {
	const res = await axios.get('https://api.github.com/languages')
	const languages = res.data

	return languages

}