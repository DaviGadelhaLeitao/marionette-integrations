import Backbone from "backbone";

const PessoaModel = Backbone.Model.extend({
    urlRoot: "rs/crud/pessoas",
    defaults: {
        nome: ''
    }
});

export { PessoaModel };