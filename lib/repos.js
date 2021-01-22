
export async function getAllLanguages() {
	const res = await fetch('https://api.github.com/languages')
	const languages = res.json()

	return languages

}

export function getAllLanguagesAliases() {
	const res = await fetch('https://api.github.com/languages')
	const languages = res.json()

	const aliases = languages.map(lang => {
		return lang.aliases[0]
	})

	return aliases

}