import Route from '@ember/routing/route';
import data from '../data/portfolio';

export default class IndexRoute extends Route {
  model() {
    return data;
  }
}
