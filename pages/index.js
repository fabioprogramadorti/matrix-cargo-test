import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getAllLanguages } from '../lib/repos'
import { CardColumns, Container } from 'react-bootstrap'
import Card from '../components/MyCard'

export default function Home({ languages }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Container>
				<CardColumns>
				{
					languages.map(({ name, aliases }) => (
						<Card name={name} alias={aliases[0]} />
					))
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