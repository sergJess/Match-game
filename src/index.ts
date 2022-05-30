import './base-styles.css';
import {NodeCreator, nodeParametrs} from './helpers/node-creator';
import StartPage from './start-page/start-page';
import Footer from './footer/footer';

const root = new NodeCreator(document.body, document.createElement('div'),{id: 'root'}).getElement();
const content = new NodeCreator(root, document.createElement('div'), {classList: ['content']}).getElement();
new StartPage(content, document.createElement('div'),{classList: ['start-page']}).render();
new Footer(root, document.createElement('div'),{classList: ['footer']}).render();
export default root;