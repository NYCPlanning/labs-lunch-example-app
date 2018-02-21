import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return this.modelFor('application')
      .findBy('cartodb_id', parseInt(id));
  }
});
