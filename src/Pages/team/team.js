import React from 'react';
import './style.css';
import Footer from '../../Components/Footer/Footer';
import LandingBanner from '../../Components/LandingBanner/LandingBanner';
import Profile from '../../Components/Profile/Profile';
import team from '../../vectors/undraw_forming_ideas_0pav.svg';

class TeamPage extends React.Component {
	render() {
		return (
			<div className='team-page'>
				<div className='container'>
					<LandingBanner image={team} heading={'Teams'} />
					<div className='team-content'>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
					</div>
					<div className='team-content'>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
					</div>
					<div className='team-content'>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
						<Profile
							name={'ADARSH SINGH'}
							devs={'WEB'}
							github={'https://github.com/adarshsingh87'}
							linkedin={'https://linkedin.com/in/adarshsingh87'}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							quae aliquam et ullam repudiandae placeat rem laborum. Excepturi
							cupiditate soluta ut? Quasi, rem. Porro, ratione. Tempore sit
							maiores obcaecati blanditiis.
						</Profile>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default TeamPage;
