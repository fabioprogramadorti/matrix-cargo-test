import Layout from '../../components/layout'
import { getAllLanguagesAliases, getReposData } from '../../lib/repos'
import utilStyles from '../../styles/utils.module.css'
export default function Lang({ repositories }) {

	return (
		<Layout>
			<ul className={utilStyles.list}>
			{repositories.map(repo => (
				<li className={utilStyles.listItem} key={repo.id}>
					<a target="_blank" href={`http://github.com/${repo.full_name}`} >
					<img src={repo.owner.avatar_url}></img> {repo.name} 
					</a>	
				</li>
			))}
			</ul>
		</Layout>
	)
}

export async function getStaticPaths() {
	// Return a list of possible value for lang
	const paths = await getAllLanguagesAliases()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the repos using params.lang
	const repositories = await getReposData(params.lang, '1')
	
	return {
		props: {
			repositories: repositories.items
		}
	}
}