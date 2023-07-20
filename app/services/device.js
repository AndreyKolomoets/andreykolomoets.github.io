import Service from '@ember/service';
import { service } from '@ember/service';
import { isSuperset } from '../util/set';

export default class DeviceService extends Service {
  @service media;

  isDesktop() {
    const hasMedia = new Set(this.media.matches);
    const desktopMedia = new Set(['device-xl', 'device-lg']);
    return isSuperset(desktopMedia, hasMedia);
  }

  isMobile() {
    const hasMedia = new Set(this.media.matches);
    const desktopMedia = new Set(['device-xs', 'device-sm']);
    return isSuperset(desktopMedia, hasMedia);
  }
}
