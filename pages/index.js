import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllLanguages } from '../lib/repos'
import Link from 'next/link'
import { CardColumns, Card, Container } from 'react-bootstrap'

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
						<Card border="dark" style={{ width: '15rem' }} className="text-center">
							<Card.Body>
								<Card.Title>
									<Link href={`/repos/${aliases[0]}`}>
										<a>{name}</a>
									</Link>
								</Card.Title>

							</Card.Body>
						</Card>
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