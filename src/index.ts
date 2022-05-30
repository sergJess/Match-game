import './base-styles.css';
import {NodeCreator, nodeParametrs} from './helpers/node-creator';
import StartPage from './start-page/start-page';
import Footer from './footer/footer';

const root = new NodeCreator(document.body, document.createElement('div'),{id: 'root'}).getElement();
const content = new NodeCreator(root, document.createElement('div'), {}).getElement();
new StartPage(content, document.createElement('div'),{}).render();
new Footer(root, document.createElement('div'),{}).render();
export default root;