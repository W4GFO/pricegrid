import './Join.scss'

type JoinProps = {
	className:string
}

export const Join = ({className}: JoinProps) => {

	const classes:string = 'joinFrame ' + className 

	return (
		<>
			<div className={classes}>
				<div className='join-content'>
					<header>
						<p>Join our community</p>
					</header>
					
					<section>
						<p>30-day, hassle-free money back guarantee</p>
					</section>
					
					<article>
						<p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
					</article>
				</div>
			</div>
		</>
	)
}