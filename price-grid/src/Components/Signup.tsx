import './Signup.scss'

type SignupProps = {
	className:string
}

export const Signup = ({className}: SignupProps) => {

	const classes:string = 'signupFrame ' + className 

	return (
		<>
			<div className={classes}>
				<div className='signup-container'>
					<header>Monthly Subscription</header>

					<section>
						<p><span className='dollar-amount'>$29</span> <span className='charge-frequency'>per month</span></p>
					</section>

					<p>Full access for less than $1 a day</p>

					<button onClick={() => console.log("Sign-up Clicked!!!")}>Sign Up</button>
				</div>
			</div>
		</>
	)
}