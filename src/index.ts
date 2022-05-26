import './base-styles.css';
import {NodeCreator, nodeParametrs} from './helpers/node-creator';
import StartPage from './start-page/start-page';

const root = new NodeCreator(document.body, document.createElement('div'),{id: 'root'}).getElement();

new StartPage(root, document.createElement('div'),{}).render();
export default root;