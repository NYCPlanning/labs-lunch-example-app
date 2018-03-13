import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return this.modelFor('application')
      .find(model => {
        return id === model.get('id')
      });
  }
});
