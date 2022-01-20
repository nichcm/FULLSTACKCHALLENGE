import Route from '@ember/routing/route';
import Ember from 'ember';

export default class VehiclesRoute extends Route {
    model(){
        return this.store.findAll('veiculo');
    };

    setupController(controller, model){
        Ember.set(controller, 'veiculos', model)
    }
}
