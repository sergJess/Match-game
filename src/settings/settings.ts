import './settings.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
type voidFunc = ()=> void;
interface settingsParams {

}
export default class Settings extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
}

render(): void{
	const title = new NodeCreator(this.getElement(), document.createElement('h2'), {classList: ['settings-title'],
text: 'Settings'
});
const settingsInner = new NodeCreator(this.getElement(), document.createElement('div'), {classList:['settings-inner']});
const firstPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner']});
const difficultTitle = new NodeCreator(settingsInner.getElement(), document.createElement('h2'), {
	classList:['settings-point-title'], text: 'Choose difficulty'
});
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
		{name: 'difficult-settings', value: 'easy'}]
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