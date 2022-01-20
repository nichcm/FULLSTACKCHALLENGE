import DS from "ember-data";

export default DS.RESTSerializer.extend( {
    normalizeResponse(store, primaryModelClass, payload, _id, requestType){
        payload = { veiculos: payload };
        console.log(payload);
        
        return this._super(store, primaryModelClass, payload, _id, requestType);
    },
    primaryKey: '_id'
});
