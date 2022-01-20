import Route from '@ember/routing/route';

export default class InserirRoute extends Route {
    model(tipoVeiculo){
        console.log(tipoVeiculo)
        return this.store.findAll(`fipe/${tipoVeiculo}`);
    };

    setupController(controller, model){
        Ember.set(controller, 'modelos', model)
    }
}
