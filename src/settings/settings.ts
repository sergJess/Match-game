import './settings.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
import NodeEraser from '../helpers/node-eraser';
import Difficulty from './difficulty/difficulty';
import StartPage from '../start-page/start-page';
import {content} from '../index';
import {appSettings} from './settings-app/settings-app';
type voidFunc = ()=> void;
interface settingsParams {
difficulty: string; // easy - medium - hard
}
interface settingsDifficulty {
	nameAttribute: string;
	valueAttribute: string;
}
export default class Settings extends NodeCreator{
	private initiateSettings: settingsParams;
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs, initiateSettings:settingsParams){
		super(parent, element, nodeParams);
			this.initiateSettings = initiateSettings;
	
}

setDifficulty(parent:	HTMLElement, childSelector:	string, attributes: settingsDifficulty):void {
const child = parent.querySelectorAll(childSelector);
child.forEach((item: Element)=>{
	const value = item.getAttribute('type');
	const isRadio = value === 'radio';
 if(item.getAttribute(attributes.nameAttribute) ===	attributes.valueAttribute && isRadio) {
item.setAttribute('checked', 'true');
	}
});

}

render(): void{
	 new NodeCreator(this.getElement(), document.createElement('h2'), 
		{
			classList: ['settings-title'],
   text: 'Settings'
  }
);
const settingsInner = new NodeCreator(this.getElement(), document.createElement('div'), {classList:['settings-inner']});
const difficulty = new Difficulty(settingsInner.getElement(), document.createElement('div'), {}, appSettings);
difficulty.render();

this.setDifficulty(difficulty.getElement(), '[difficult-settings]', {
	nameAttribute: 'difficult-settings',
	valueAttribute: 'medium'

});
const secondPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner'], text: 'Set volume range'});
const thirdPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner'], text: 'Choose song'});

const buttonBack = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {
	classList:['settings-button-back'],
	text: 'Back'
});
buttonBack.setOnclick(():void => {
new NodeEraser([this]).erase();
new StartPage(content, document.createElement('div'), {classList: ['start-page']}).render();
});

}

}