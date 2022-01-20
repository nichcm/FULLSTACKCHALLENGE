import Model, { attr }  from '@ember-data/model';


export default class VeiculoModel extends Model {
    @attr('string') placa;
    @attr('string') marca;
    @attr('string') modeloVersao;
    @attr('string') ano;
    @attr('string') tipo;
}
