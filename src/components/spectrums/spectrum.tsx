import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './spectrum.css?inline';

interface spectrumProps {
    startName: string;
    endName: string;
    start: number;
    end: number;
    description: string;
}

export default component$((zone: spectrumProps) => {
	useStylesScoped$(styles);

	return (

	<div class="spectrumDiv">
		<div class="spectrumCaption">
			<p>{zone.startName}</p>
			<p>{zone.endName}</p>
		</div>
		<div class="skillBar">
			<div class="focusInner" style={{marginLeft: zone.start + '%', marginRight: zone.end + '%'}}></div>
		</div>
		<p>{zone.description}</p>
	</div>
	);
});
