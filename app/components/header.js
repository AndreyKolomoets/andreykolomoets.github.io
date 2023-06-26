import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { isSuperset } from '../util/set';

export default class HeaderComponent extends Component {
  topOffsetScroll = 140;
  desktopMedia = new Set(['device-xl', 'device-lg']);
  @tracked isSticky = false;
  @service media;

  constructor() {
    super(...arguments);
    const document = getOwner(this).lookup('service:-document');
    document.addEventListener('scroll', () => {
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
