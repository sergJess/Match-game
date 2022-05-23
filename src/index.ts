import {NodeCreator, nodeParametrs} from './helpers/node-creator';

const root = new NodeCreator(document.body, document.createElement('div'),{id: 'root'}).getElement();
