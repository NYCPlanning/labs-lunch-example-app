import DS from 'ember-data';

export default DS.Model.extend({
  need: DS.attr('string'),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  agencyacro: DS.attr('string'),
  agency: DS.attr('string'),
  fullAgencyname: Ember.computed('agencyacro', 'agency', function() {
    return this.get('agencyacro') + ' ' + this.get('agency');
  }),
});
