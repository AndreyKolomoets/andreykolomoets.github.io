import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { isSuperset } from '../util/set';

export default class HeaderComponent extends Component {
  topOffsetScroll = 140;
  desktopMedia = new Set(['device-xl', 'device-lg']);
  @tracked isSticky = false;
  @service media;
  @service fastboot;
  @service('-document') document;

  @action
  addScrollListener() {
    if (!this.fastboot.isFastBoot) {
      this.document.addEventListener('scroll', () => {
        const hasMedia = new Set(this.media.matches);

        if (
          isSuperset(this.desktopMedia, hasMedia) &&
          window.scrollY >= this.topOffsetScroll
        ) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      });
    }
  }
}
