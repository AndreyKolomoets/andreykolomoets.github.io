import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  topOffsetScroll = 140;

  @tracked isSticky = false;

  @service device;
  @service fastboot;
  @service('-document') document;

  @action
  addScrollListener() {
    if (!this.fastboot.isFastBoot) {
      this.document.addEventListener('scroll', () => {
        if (this.device.isDesktop() && window.scrollY >= this.topOffsetScroll) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      });
    }
  }
}
