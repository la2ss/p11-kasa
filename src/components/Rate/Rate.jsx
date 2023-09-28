
export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={`${window.location.origin}/assets/images/star-rate.svg`} 
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={`${window.location.origin}/assets/images/emptyStar.svg`} 
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
