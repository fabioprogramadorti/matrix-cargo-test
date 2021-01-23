import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllLanguagesAliases, getReposData } from '../../lib/repos'
import Card from '../../components/MyCard'
import { CardColumns } from 'react-bootstrap'
export default function Lang({ repositories }) {

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			{
			<CardColumns>
			{repositories.map((repo, idx) => (
				<Card repo={repo} key={idx}/>
			))}
			</CardColumns>
			}
		</Layout>
	)
}

export async function getServerSideProps({ params }) {
	// Fetch necessary data for the repos using params.lang
	const repositories = await getReposData(params.lang)
	
	return {
		props: {
			repositories
		}
	}
}