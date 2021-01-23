import Head from 'next/head'
//import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { Container } from "react-bootstrap"
export const siteTitle = 'Github Finder'
export default function Layout({ children, home }) {
	return (
		<Container>
			<Head>
				<link rel="icon" href="/GitHub-Mark.png" />
				<meta
					name="description"
					content="find all repos on github by language"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<header className="text-center">
				<>
					<h1>Github Finder</h1>
				</>
			</header>
			<Container>{children}</Container>

			{!home && (
				<div>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}

		</Container>
	)
}