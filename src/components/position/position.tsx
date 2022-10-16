import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './position.css?inline';

interface positionProps {
    title: string;
	company: string;
	companyWebsite?: string;
	period: string;
	description: string[];
	links: string[] | undefined;
}

export default component$((position: positionProps) => {
	useStylesScoped$(styles);

	return (
		<div class="experience">
			<h3>{position.title}</h3>
			<h4>
				{ position.companyWebsite ? <a class="companyLink" href={position.companyWebsite}>{position.company}</a> : <span style={{fontWeight: 400}}>{position.company}</span> }, {position.period}
			</h4> 
			{position.description.map((paragraph) => (<p>{paragraph}</p>))}
			{ position.links ? position.links.map((link) => (<div class="link-container"><a href={link} target="_blank">{link}</a></div>)) : null}
		</div>
	);
});
