import Layout from '../../components/layout'
import { getAllLanguagesAliases, getReposData } from '../../lib/repos'

export default function Lang({ repoData }) {
	return (
		<Layout>
			<ul>
			{repoData.items.map(repo => {
				<li>
					Name: <a href={`http://github.com/${repo.full_name}`} >
					{repo.name} 
					</a>	
				</li>
			})}
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
	const repoData = getReposData(params.lang)

	return {
		props: {
			repoData
		}
	}
  // Fetch necessary data for the repos using params.lang
}