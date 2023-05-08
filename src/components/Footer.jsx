import { Link } from "react-router-dom"
import LibraryLogo from '../assets/Library.svg'

function Footer(){
	return (
		<footer>
			<div className="container">
				<div className="row row__column">
					<figure className="footer__logo">
						<img src={LibraryLogo} alt="" className="footer__logo--img" />
					</figure>
					<div className="footer__list">
						<Link to="/" className="footer__link">Home</Link>
						<Link to="/" className="footer__link">Books</Link>
						<Link to="/" className="footer__link"><span className="no-cursor">About</span></Link>
						<Link to="/" className="footer__link">Cart</Link>
					</div>
					<div className="footer__copyright">Copyright © 2023 Library</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer