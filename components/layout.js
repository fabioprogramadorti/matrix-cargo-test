import Head from 'next/head'
import Link from 'next/link'
import { Container, Navbar } from "react-bootstrap"

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
			<Navbar fixed="top" expand="lg" bg="light" variant="light">
			<Container>

					<Navbar.Brand href="#home">
						<Link href="/">
							<a style={{color: 'black'}}>{siteTitle}</a>
						</Link>
					</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					{
						!home && (

							<Navbar.Text>
								<Link href="/">
									<a>← Back to home</a>
								</Link>
							</Navbar.Text>
						)
					}
				</Navbar.Collapse>
				
			</Container>
			</Navbar>
			
			<Container style={{marginTop: '4em'}}>{children}</Container>

		

		</Container>
	)
}