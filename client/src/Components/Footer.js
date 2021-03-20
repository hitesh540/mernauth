import React from 'react';
import './style.css';
import EditIcon from '@material-ui/icons/Edit';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const Footer = () => {
    return (
        <>
       

		<footer className="footer-distributed d-none d-lg-block bottom">

			<div className="footer-right">

                    <EditIcon style={{fill: "white"}} fontSize="large"/>{" "}
                    <SkipPreviousIcon style={{fill: "white"}} fontSize="large"/>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p>Company Name &copy; 2015</p>
			</div>

            </footer>
            </>
    )
}
export default Footer;