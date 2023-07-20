import Route from '@ember/routing/route';
import data from '../data/portfolio';

export default class PortfolioRoute extends Route {
  model({ portfolio_id }) {
    debugger;
    const item = data.filter((item) => item.id == portfolio_id);
    return item[0];
  }
}
