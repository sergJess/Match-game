import './settings.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
type voidFunc = ()=> void;
interface settingsParams {
difficulty: string; // easy - medium - hard
}
export default class Settings extends NodeCreator{
	private initiateSettings: settingsParams;
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs, initiateSettings:settingsParams){
		super(parent, element, nodeParams);
			this.initiateSettings = initiateSettings;
	

}

setSetting(parent:	HTMLElement, childrenName:	string):void {
const child = parent.querySelector(childrenName);
if(child) {
	const isInputRadio = child.getAttribute('type');
	 if(isInputRadio === 'radio') {
			child.setAttribute('checked', 'true');
			return;
		}
	throw new Error('Invalid child');
}

}

render(): void{
	const title = new NodeCreator(this.getElement(), document.createElement('h2'), {classList: ['settings-title'],
text: 'Settings'
});
const settingsInner = new NodeCreator(this.getElement(), document.createElement('div'), {classList:['settings-inner']});
const difficultTitle = new NodeCreator(settingsInner.getElement(), document.createElement('h2'), {
	classList:['settings-point-title'], text: 'Choose difficulty'
});
const firstPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner']});

const radioDifficultFirst = new NodeCreator(firstPoint.getElement(), document.createElement('input'), {
	id: 'first-difficult',
	classList:['settings-point-inner'], 
	attributes: [
		{name: 'name', value: 'settings-difficult'},
		{name:'type', value: 'radio'},
		{name: 'difficult-settings', value: 'easy'}]
});
const difficultLabelEasy = new NodeCreator(firstPoint.getElement(), document.createElement('label'), {
	classList:['difficult-label'],
	text: 'Easy', 
	attributes: [
		{name:'for', value: 'first-difficult'}
		]
});

const radioDifficultSecond = new NodeCreator(firstPoint.getElement(), document.createElement('input'), {
	id: 'second-difficult',
	classList:['settings-point-inner'], 
	attributes: [
		{name: 'name', value: 'settings-difficult'},
		{name:'type', value: 'radio'},
		{name: 'difficult-settings', value: 'medium'}]
});
const difficultLabelMedium = new NodeCreator(firstPoint.getElement(), document.createElement('label'), {
	classList:['difficult-label'],
	text: 'Medium', 
	attributes: [
		{name:'for', value: 'second-difficult'}
		]
});

const radioDifficultThird = new NodeCreator(firstPoint.getElement(), document.createElement('input'), {
	id: 'third-difficult',
	classList:['settings-point-inner'], 
	attributes: [
		{name: 'name', value: 'settings-difficult'},
		{name:'type', value: 'radio'},
		{name: 'difficult-settings', value: 'hard'}]
});
const difficultLabelHard = new NodeCreator(firstPoint.getElement(), document.createElement('label'), {
	classList:['difficult-label'],
	text: 'Hard', 
	attributes: [
		{name:'for', value: 'third-difficult'}
		]
});

const secondPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner'], text: 'Set volume range'});
const thirdPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner'], text: 'Choose song'});

}

}