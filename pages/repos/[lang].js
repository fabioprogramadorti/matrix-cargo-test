import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllLanguagesAliases, getReposData } from '../../lib/repos'
import utilStyles from '../../styles/utils.module.css'


export default function Lang({ repositories }) {

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			{
				repositories ? 
			<ul className={utilStyles.list}>
			{repositories.map(repo => (
				<li className={utilStyles.listItem} key={repo.id}>
					<a target="_blank" href={`http://github.com/${repo.full_name}`} >
					<img src={repo.owner.avatar_url}></img> {repo.name} 
					</a>	
				</li>
			))}
			</ul>
				
					:
					<h2>No Data Found</h2>
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