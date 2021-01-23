import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout, { siteTitle } from '../components/layout'
import { getAllLanguages } from '../lib/repos'
import { CardColumns, Container, Spinner } from 'react-bootstrap'
import Card from '../components/MyCard'


export default function Home({ languages }) {

	const [searchLang, setSearchLang] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const handleChange = event => {
			setSearchLang(event.target.value);
	}

	useEffect(() => {
			const results = languages.filter(language =>
				language.name.toLowerCase().includes(searchLang)
			);
			setSearchResults(results);
		}, [searchLang]);
		

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Container>
				
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
					</div>
					<input type="text"
						className="form-control" placeholder="Search by Language" aria-label="Search by Language" aria-describedby="basic-addon1" value={searchLang}
					onChange={handleChange} />
				</div>

				<CardColumns>
				{ searchResults ?
					searchResults.map(({ name, aliases }) => (
						<Card name={name} alias={aliases[0]} />
					))
						:
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
				}
				</CardColumns>
			</Container>

		</Layout>
	)
}

export async function getStaticProps() {
	const languages = await getAllLanguages()

	return {
		props: {
			languages
		}
	}
}