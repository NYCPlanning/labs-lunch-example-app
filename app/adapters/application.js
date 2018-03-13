import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  keyForAttribute(key) {
    return key;
  },
  urlForFindAll() {
    return 'https://planninglabs.carto.com/api/v2/sql?skipfields=the_geom&q=SELECT%20 cartodb_id as id, *%20FROM%20cbbr_fy18_pts_v5%20LIMIT%2010';
  },
});
