import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Position from '~/components/position/position';
import SkillBar from '~/components/skill-bar/skill-bar';
import Skill from '~/components/skill/skill';
import Spectrum from '~/components/spectrums/spectrum';
//import { Link } from '@builder.io/qwik-city';
import profile from '../../public/profile.service.json';

export default component$(() => {
	const store = useStore({ allPositions: false });

	return (
		<div class="wrap main-layout">
			

			<div class="section_left">
				<div class="section">
					<div class="textContent">{profile.intro.map((paragraph) => (<p>{paragraph}</p>))}</div>

					<br /><br />
					<h3>Relative strength</h3>
					<p>Where do I provide most value?</p>
					<div class="spectrums">
						{profile.zones.map((zone) => (<Spectrum startName={zone.startName} endName={zone.endName} description={zone.description} start={zone.start} end={zone.end} />))}
					</div>
				</div>

				<div class="section">
					<div class="sectionHeader" style="margin-bottom: 0px;">
						<div class="icon">
							<img src="../../images/experience.png" />
						</div>
						<h2>Experience</h2>
					</div>
					<div>
						{store.allPositions ? 
						profile.positions.map((position) => (<Position title={position.title} company={position.company} companyWebsite={position.companyWebsite} period={position.period} description={position.description} links={position.links} />)) 
						: profile.positions.slice(0,3).map((position) => (<Position title={position.title} company={position.company} companyWebsite={position.companyWebsite} period={position.period} description={position.description} links={position.links} />))}
					</div>
					<div>
					<button class="raised btn-secondary" onClick$={() => store.allPositions = !store.allPositions}>{store.allPositions ? 'Show less' : 'Show all'}</button>
				</div>
				</div>

			</div>

			<div class="section_right">

				<div class="section">
					<div class="sectionHeader">
						<div class="icon">
							<img src="../../images/skills.png" />
						</div>
						<h2>Skills</h2>
					</div>
					<div>
						<div class="column">
							{profile.skills.map((skill) => (<Skill name={skill.name} />))}
						</div>
					</div>
				</div>

				<div class="section">
					<div class="sectionHeader">
						<div class="icon">
							<img src="../../images/skills.png" />
						</div>
						<h2>Tools</h2>
					</div>
					<div class="column">
						{profile.tools.map((tool) => (<Skill name={tool.name} />))}
					</div>
				</div>

				<div class="section">
					<div class="sectionHeader">
						<div class="icon">
							<img src="../../images/lang.png" />
						</div>
						<h2>Languages</h2>
					</div>
					<div>
						<div class="column">
							{profile.languages.map((lang) => (<SkillBar name={lang.name} rating={lang.rating} />))}
						</div>
					</div>
				</div>

				<div class="section" style="border-bottom: none;">
					<div class="sectionHeader">
						<div class="icon">
							<img src="../../images/activities.png" />
						</div>
						<h2>Activities</h2>
					</div>
					<div>
						<div class="column">
							{profile.activities.map((act) => (<h3>{act}</h3>))}
						</div>
					</div>
				</div>

				<div class="section">
				<div class="sectionHeader">
					<a style="font-size: 1em;" href="https://github.com/rx-mikkel/" target="_blank">
						<div class="icon linkIcon raised github">
							<img src="../../images/gh.png" />
						</div>
						<h2>GitHub</h2>
					</a>
				</div>
			</div>

			</div>


		</div>
	);
});

export const head: DocumentHead = {
  title: 'Mikkel Ørum - CV',
};
