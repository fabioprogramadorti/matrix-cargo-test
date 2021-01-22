import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllLanguages } from '../lib/repos'
import Link from 'next/link'

export default function Home({ languages }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<ul className={utilStyles.list}>
					{languages.map(({ name, aliases }) => (
						<li className={utilStyles.listItem} key={aliases[0]}>
							<Link href={`/repos/${aliases[0]}`}>
								<a>{name}</a>
							</Link>
						</li>
					))}
				</ul>
			</section>

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