import Link from 'next/link'
import { Card, Button } from 'react-bootstrap'

export default function MyCard({ repo, name, alias }) {
	return (
		repo?
			<Card style={{ width: '18rem' }} className="text-center">
				{/* <Card.Img variant="top" src={repo.owner.avatar_url} /> */}
				<Card.Body>
					<Card.Title>{repo.name}</Card.Title>
					<Button variant="primary">
						<a target="_blank" href={`http://github.com/${repo.full_name}`}  style={{color: 'white'}}>
							Visit Repositorie
						</a>
					</Button>
				</Card.Body>
			</Card>
			: 
		<Card border="dark" style={{ width: '18rem' }} className="text-center">
			<Card.Body>
				<Card.Title>
					<Link href={`/repos/${alias}`}>
						<a>{name}</a>
					</Link>
				</Card.Title>

			</Card.Body>
		</Card>
	)
}