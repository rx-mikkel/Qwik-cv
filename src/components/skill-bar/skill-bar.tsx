import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './skill-bar.css?inline';

interface skillProps {
    name: string;
	rating: number;
}

export default component$((skill: skillProps) => {
	useStylesScoped$(styles);

	const color1 = {
		red: 118,
		green: 224,
		blue: 194
	};
	const color2 = {
		red: 37,
		green: 112,
		blue: 126
	};

	const calculateColor = (percentage: number) => {
		const pct = percentage / 100;

		const rCalc = Math.round((color2.red * (1 - pct)) + (color1.red * pct));
		const gCalc = Math.round((color2.green * (1 - pct)) + (color1.green * pct));
		const bCalc = Math.round((color2.blue * (1 - pct)) + (color1.blue * pct));

		const resultColor = 'rgb(' + rCalc + ', ' + gCalc + ', ' + bCalc + ')';
		return resultColor;
	}

	const color = calculateColor(skill.rating)

	return (
		<div class="skill">
			<p>{skill.name}</p>
			<div class="skillBar">
				<div class="skillInner" style={{width: skill.rating + '%', backgroundColor: color}} ></div>
			</div>
		</div> 
	);
});