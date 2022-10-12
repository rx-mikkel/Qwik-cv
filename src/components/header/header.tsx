import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import profile from '../../../public/profile.service.json';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>


      <div class="wrap">
        <div class="section">
            <h1>{profile.userName}</h1>
            <div class="contact">
                <h2 style="margin-top: 0em; line-height: 1.4em;">{profile.title}</h2>
            </div>
        </div>
        <div class="bubble"></div>
      </div>
    </header>
  );
});
