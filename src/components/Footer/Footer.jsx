
export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={`${window.location.origin}/assets/images/logo-footer.svg`}  alt="logo de kasa" />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
