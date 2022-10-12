import { component$, useStylesScoped$ } from '@builder.io/qwik';
//import { QwikLogo } from '../icons/qwik';
import styles from './footer.css?inline';
import profile from '../../../public/profile.service.json';

export default component$(() => {
	useStylesScoped$(styles);

	return (
	<footer>
		<a class="top raised" title="Go to top" href="#top"></a>
		<a class="linked-in raised" href={profile.linkedIn}>Connect</a>
	</footer>
	);
});
