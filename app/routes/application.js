import Route from '@ember/routing/route';

const API = 'https://planninglabs.carto.com/api/v2/sql?skipfields=the_geom&q=SELECT%20*%20FROM%20cbbr_fy18_pts_v5%20LIMIT%2010';

export default Route.extend({
  model() {
    // return fetch(API)
    //   .then(blob => blob.json())
    //   .then(json => json.rows);

    return this.store.findAll('budget-request'); // -> GET /budget-requests
  }
});
