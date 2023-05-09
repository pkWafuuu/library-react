import { Link } from 'react-router-dom'
import LandingImg from '../assets/undraw_reading_time.svg'

function Landing() {
	return (
		<section id="landing">
			<header>
				<div className="header__container">
					<div className="header__description">
						<h1>UAE's most awarded online library platform</h1>
						<h2>Find your dream book with <span className="text__color">Library</span></h2>
						<Link to="/books">
							<button className="btn">Browse Books</button>
						</Link>
					</div>
					<figure className="header__img--wrapper">
						<img src={LandingImg} alt="" />
					</figure>
				</div>
			</header>
		</section>
	);
}

export default Landing