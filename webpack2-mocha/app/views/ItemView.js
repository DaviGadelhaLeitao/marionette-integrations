import Marionette from 'backbone.marionette';
import template from '../templates/item.jst';
import { PessoaModel } from '../models/PessoaModel';

const ItemView = Marionette.View.extend({
  template: template,
  model: new PessoaModel({
    nome: "davi"
  })
});

export default ItemView;
