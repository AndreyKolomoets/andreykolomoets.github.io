import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import getStyles from '../../util/style';

export default class SliderCaptionComponent extends Component {
  @service device;
  @service fastboot;
  @service('-document') document;

  @tracked
  captionStyle;
  opacity = 1;

  @action
  setup() {
    this.slider = this.document.querySelector('.slider-parallax');
    if (!this.fastboot.isFastBoot) {
      window.addEventListener(
        'DOMContentLoaded',
        () => this.prepareStyle(this),
        false
      );
    }
  }

  prepareStyle(component) {
    const opacity = component.getOpacity(component);
    let style = { opacity };
    if (component.transformY) {
      style = Object.assign(style, {
        transform: `translate3d(0px, ${component.transformY}px, 0px)`,
      });
    }

    component.captionStyle = getStyles(style);
  }

  getOpacity(component) {
    const yScrollPosition = window.pageYOffset;

    if (component.device.isDesktop()) {
      const parallaxElHeight = component.slider.offsetHeight;
      const tHeaderOffset = 100;

      component.opacity =
        1 - ((yScrollPosition - tHeaderOffset) * 1.85) / parallaxElHeight;

      requestAnimationFrame(function () {
        component.prepareStyle(component);
      });
    } else {
      component.opacity = 1;
    }
    return component.opacity;
  }
}
