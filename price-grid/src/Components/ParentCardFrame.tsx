import './ParentCardFrame.scss'

import {About} from './About'
import {Join} from './Join'
import {Signup} from './Signup'

type ParentFrameProps = {}

export const ParentCardFrame = (props: ParentFrameProps) => {
	return (
		<>
			<div className='grid-container'>
				<Join className='join-item'/>
				<Signup className='signup-item'/>
				<About className='about-item'/>
			</div>
		</>
	)
}