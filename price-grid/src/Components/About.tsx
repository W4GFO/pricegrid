import './About.scss'

type AboutProps = {
	className:string
}

export const About = ({className}: AboutProps) => {

	const classes:string = 'aboutFrame ' + className 

	return (
		<>
			<div className={classes}>
				<header>Why Us</header>

				<article>
					<p>Tutorials by industry experts<br/>
					Peer &amp; expert code review<br/>
					Coding exercises<br/>
					Access to our GitHub repos<br/>
					Community forum<br/>
					Flashcard decks<br/>
					New videos every week</p>
				</article>
			</div>
		</>
	)
}