import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllLanguagesAliases, getReposData } from '../../lib/repos'
import Card from '../../components/MyCard'
import { CardColumns, Spinner } from 'react-bootstrap'
export default function Lang({ repositories }) {

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			{
				repositories ? 
			<CardColumns>
			{repositories.map((repo, idx) => (
				<Card repo={repo} key={idx}/>
			))}
			</CardColumns>
					:
					<div>

						<Spinner animation="grow" variant="primary" />
					</div>
			}
		</Layout>
	)
}

export async function getStaticPaths() {
	// Return a list of possible value for lang
	const paths = await getAllLanguagesAliases() || []
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the repos using params.lang
	const repositories = await getReposData(params.lang) || null
	
	return {
		props: {
			repositories
		}
	}
}