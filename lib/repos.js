import axios from 'axios'
const headers = { 'Authorization': `token ${process.env.GITHUB_TOKEN}` }

async function fetchLanguages() {

	const res = await axios.get('https://api.github.com/languages', { headers })
	const languages = res.data
	return languages

}

export async function getAllLanguages() {
	const languages = await fetchLanguages()
	return languages
}

export async function getAllLanguagesAliases() {
	const languages = await fetchLanguages()
	return languages.map(lang => {
		return {
			params: {
				lang: lang.aliases[0]
			}
		}
	})

}

export async function getReposData(lang, page) {
	let uri = `https://api.github.com/search/repositories?q=${lang}&page=${page}&per_page=20`
	const res = await axios.get(uri, { headers })
	const repositories = res.data
	
	return repositories
}