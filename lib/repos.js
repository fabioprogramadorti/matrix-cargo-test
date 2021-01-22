
export async function getAllLanguages() {
	const res = await fetch('https://api.github.com/languages')
	const languages = res.json()

	return languages

}