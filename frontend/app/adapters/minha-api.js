import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:3002',
     primaryKey: '_id'
});
