import Layout from '../../components/layout'
import { getAllLanguagesAliases } from '../../lib/repos'

export default function Lang() {
	return (
		<Layout>
		
		</Layout>
	)
}

export async function getStaticPaths() {
	// Return a list of possible value for lang
	const paths = getAllLanguagesAliases()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the repos using params.lang
}