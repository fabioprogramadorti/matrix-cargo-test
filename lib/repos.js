
async function fetchLanguages() {
	const res = await fetch('https://api.github.com/languages')

	return res.json()

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
	uri = `https://api.github.com/search/repositories?q=${lang}&page=${page}&per_page=20`
	const repos = await fetch(uri)
	return repos.json()
}