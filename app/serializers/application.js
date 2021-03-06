import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store,
      primaryModelClass,
      payload.rows,
      id,
      requestType);
  },
});
