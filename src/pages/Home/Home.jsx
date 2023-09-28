import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import { Context } from "../../service/Context";

export default function Home() {
	const logements = useContext(Context); // Accessing the logements data from context

	return (
		<>
			<Banner />
			<div className="cards-container">
				{logements.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logements/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
