import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class GoToTopComponent extends Component {
  @service fastboot;
  @service('-document') document;

  @tracked isShown = false;

  @action
  addScrollListener() {
    if (!this.fastboot.isFastBoot) {
      this.document.addEventListener('scroll', () => {
        const lastKnownScrollPosition = window.scrollY;
        const browserWindowHeight = window.innerHeight;

        if (lastKnownScrollPosition > browserWindowHeight / 3) {
          this.isShown = true;
        } else {
          this.isShown = false;
        }
      });
    }
  }

  @action
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
