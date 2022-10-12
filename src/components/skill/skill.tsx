import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './skill.css?inline';

interface skillProps {
    name: string;
}

export default component$((skill: skillProps) => {
	useStylesScoped$(styles);

	return (
		<div class="skillTag">{skill.name}</div>
	);
});
