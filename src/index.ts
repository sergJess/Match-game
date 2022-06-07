import './base-styles.css';
import {NodeCreator} from './helpers/node-creator';
import StartPage from './start-page/start-page';
import Footer from './footer/footer';
import {SettingsApp, settingsObject} from './settings/settings-app/settings-app';

const root = new NodeCreator(document.body, document.createElement('div'),{id: 'root'}).getElement();
export const content = new NodeCreator(root, document.createElement('div'), {classList: ['content']}).getElement();
new StartPage(content, document.createElement('div'),{classList: ['start-page']}).render();
new Footer(root, document.createElement('div'),{classList: ['footer']}).render();

export const appSettings = new SettingsApp(settingsObject).create();
