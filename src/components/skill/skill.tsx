import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './skill.css?inline';

interface skillProps {
    name: string;
}

export default component$((skill: skillProps) => {
	useStylesScoped$(styles);

	const color1 = {
		red: 183,
		green: 10,
		blue: 168
	};
	const color2 = {
		red: 84,
		green: 0,
		blue: 138
	};

	const calculateColor = (percentage: number) => {
		const pct = percentage / 100;

		const rCalc = Math.round((color2.red * (1 - pct)) + (color1.red * pct));
		const gCalc = Math.round((color2.green * (1 - pct)) + (color1.green * pct));
		const bCalc = Math.round((color2.blue * (1 - pct)) + (color1.blue * pct));

		const resultColor = 'rgb(' + rCalc + ', ' + gCalc + ', ' + bCalc + ')';
		return resultColor;
	}

	const randomColor = () => {
		const number = Math.floor(Math.random() * 100);

		const color = calculateColor(number);
		return color;
	}

	return (
		<div class="skillTag" style={{backgroundColor: randomColor()}}>{skill.name}</div>
	);
});
