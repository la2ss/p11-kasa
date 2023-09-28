
import Collapse from "../../components/Collapse/Collapse";
import items from "../../service/DataService";

export default function About() {

	return (
		<>
		<div className="aboutBackground">
        </div>
			{items.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.title}
					aboutText={rule.text}
					aboutStyle="about-style"
				/>
			))}
     
		</>
	);
}
