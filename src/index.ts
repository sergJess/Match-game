import './base-styles.css';
import {NodeCreator} from './helpers/node-creator';
import StartPage from './start-page/start-page';
import Footer from './footer/footer';

const root = new NodeCreator(document.createElement('div'),{id: 'root'}, document.body).getElement();
export const contentNode = new NodeCreator(document.createElement('div'), {classList: ['content']}, root)
export const content = contentNode.getElement();
new StartPage(document.createElement('div'),{classList: ['start-page']}, content).render();
new Footer(document.createElement('div'),{classList: ['footer']}, root).render();


