import 'isomorphic-fetch'
const token = process.env.GITHUB_TOKEN || "d200856207781da2ee662c58846419f1802dd91b"
const headers = { 'Authorization': `token ${token}` }

async function fetchLanguages() {

	const res = await fetch('https://api.github.com/languages', { headers })
	const languages = await res.json()
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
	const res = await fetch(uri, { headers })
	const repositories = await res.json()

	return repositories.items
}