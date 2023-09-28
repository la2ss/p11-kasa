import Navigation from "../Navigation/Navigation";

export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" 	src={`${window.location.origin}/assets/images/LOGO.svg`}  alt="logo de l'agence kasa" />
			</figure>
			<Navigation className="nav-header" />
		</header>
	);
}
