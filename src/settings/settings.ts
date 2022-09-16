import './settings.css';
import {NodeCreator, INodeParametrs} from '../helpers/node-creator';
import Difficulty from './difficulty/difficulty';
import StartPage from '../start-page/start-page';
import {content} from '../index';
import {appSettings} from './settings-app/settings-app';
interface settingsParams {
difficulty: string; // easy - medium - hard
}
interface settingsDifficulty {
	nameAttribute: string;
	valueAttribute: string;
}
export default class Settings extends NodeCreator{
	private initiateSettings: settingsParams;
	constructor(element: HTMLElement, nodeParams: INodeParametrs, initiateSettings:settingsParams,  parent?: HTMLElement,){
		super(element, nodeParams, parent);
			this.initiateSettings = initiateSettings;
	
}

render(): void{
	 new NodeCreator(document.createElement('h2'), 
		{
			classList: ['settings-title'],
   text: 'Settings'
  },	this.getElement()
);
const settingsInner = new NodeCreator(document.createElement('div'), {classList:['settings-inner']}, this.getElement());
const difficulty = new Difficulty(document.createElement('div'), {}, appSettings, settingsInner.getElement());
difficulty.render();

const secondPoint = new NodeCreator(document.createElement('div'), {classList:['settings-point-inner'], text: 'Set volume range'}, settingsInner.getElement());
const thirdPoint = new NodeCreator(document.createElement('div'), {classList:['settings-point-inner'], text: 'Choose song'}, settingsInner.getElement());

const buttonBack = new NodeCreator(document.createElement('div'), {
	classList:['settings-button-back'],
	text: 'Back'
}, settingsInner.getElement());
buttonBack.setOnclick(():void => {
this.removeElement();
new StartPage(document.createElement('div'), {classList: ['start-page']}, content).render();
});

}

}