import { useState, useRef, useEffect } from "react"; //import des hooks de base react


export default function Collapse(props) {


	//console.log(props);
	const [toggle, setToggle] = useState(false); // je definis le state du toggle (et false par défaut)
	const [heightEl, setHeightEl] = useState(); // je definis le state de la hauteur du collapse

	const toggleState = () => {
		//je définis la fonction toggleState qui modifie la valeur toggle au clic
		setToggle(!toggle);
	};

	const refHeight = useRef(); //récupère et conserve la valeur de hauteur du collapse déplié

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
	}, []);

	return (
		// affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className={`collaps ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collaps__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={`${window.location.origin}/assets/images/vectorBas.svg`} 
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collaps__toggle animated" : "collaps__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
