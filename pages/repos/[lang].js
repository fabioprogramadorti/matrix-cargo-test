import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getReposData } from '../../lib/repos'
import Card from '../../components/MyCard'
import { CardColumns, Button, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function Lang({ repositories }) {
	
	const [repos, setRepos] = useState(repositories)
	const [isLoading, setLoading] = useState(false)
	const lang = useRouter().query.lang
	const [page, setPage] = useState(2)

	const loadMore = () => {
		
		getReposData(lang, page).then(res => {
			setRepos([...repos, ...res], setPage(page+1))
		})
	}

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			{
				<CardColumns>
					{
						repos.map((repo, idx) => (
							<Card repo={repo} key={idx}/>
						))
					}
				</CardColumns>
			}
			<div className="d-flex p-2 justify-content-center">
				<Button
					variant="success"
					disabled={page >=5}
					onClick={!isLoading ? loadMore : null}
				>
					{isLoading ? <Spinner animation="border" /> : 'Load More'}
				</Button>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({ params }) {
	// Fetch necessary data for the repos using params.lang
	const repositories = await getReposData(params.lang, 1)
	
	return {
		props: {
			repositories
		}
	}
}