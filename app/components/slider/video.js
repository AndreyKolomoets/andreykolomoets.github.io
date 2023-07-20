import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import getStyles from '../../util/style';

export default class VideoComponent extends Component {
  @service fastboot;
  @service('-document') document;

  @tracked
  videoStyle;

  @action
  muteVideo(videoElement) {
    videoElement.muted = true;
  }

  @action
  setup() {
    if (!this.fastboot.isFastBoot) {
      window.addEventListener('load', () => this.calculateSize(this));
    }
  }

  calculateSize(component) {
    debugger;
    console.log('setup video');
    const element = component.document.querySelector('.video-wrap:has(video)');
    console.log(element);
    const divWidth = element.offsetWidth;
    const divHeight = element.offsetHeight;
    console.log(divWidth, divHeight);
    let elWidth = (16 * divHeight) / 9;
    let elHeight = divHeight;

    if (elWidth < divWidth) {
      elWidth = divWidth;
      elHeight = (9 * divWidth) / 16;
    }

    let style = { width: elWidth + 'px', height: elHeight + 'px' };

    if (elHeight > divHeight) {
      style = Object.assign(style, {
        left: '',
        top: -((elHeight - divHeight) / 2) + 'px',
      });
    }

    if (elWidth > divWidth) {
      style = Object.assign(style, {
        top: '',
        left: -((elWidth - divWidth) / 2) + 'px',
      });
    }
    component.videoStyle = getStyles(style);
  }
}
