import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PortfolioItemComponent extends Component {
  @tracked animation = 'fadeOut';

  @action
  changeFade(type) {
    if (this.animation != `fade${type}`){
      this.animation = `fade${type}`;
    }
  }
}
