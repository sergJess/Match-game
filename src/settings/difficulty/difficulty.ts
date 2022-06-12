import './difficulty.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
import {applicationSettings, SettingsApp} from '../settings-app/settings-app';

export default class Difficulty extends NodeCreator{
	private settings: SettingsApp;
	constructor(element: HTMLElement, nodeParams: INodeParametrs, settings: SettingsApp, parent?: HTMLElement){
		super(element, nodeParams, parent);
		this.settings = settings;
	}

	setChosenDifficultty(difficulty: HTMLElement): void {
const radioChildren = difficulty.querySelectorAll('[difficult-settings]');
radioChildren.forEach((item) => {
	const type = item.getAttribute('type');
	const settings = item.getAttribute('difficult-settings');
	if(type === 'radio' && this.settings.getDifficulty() === settings) {
		item.setAttribute('checked', 'true');
	}
});

	}

setDifficulty(difficulty: HTMLElement):void{
	const value = difficulty.getAttribute('difficult-settings');
	 if (value) {
			this.settings.setDifficulty(value);
		}
}

render(): void{
	const difficultTitle = new NodeCreator(document.createElement('h2'), {
		classList:['difficulty-title'], text: 'Choose difficulty'
	}, this.getElement());
	const firstPoint = new NodeCreator(document.createElement('div'), {classList:['settings-point-inner']}, this.getElement());
	
	const radioDifficultFirst = new NodeCreator(document.createElement('input'), {
		id: 'first-difficult',
		classList:['settings-point'], 
		attributes: [
			{name: 'name', value: 'settings-difficult'},
			{name:'type', value: 'radio'},
			{name: 'difficult-settings', value: 'easy'}]
	}, firstPoint.getElement());

	radioDifficultFirst.getElement().onclick = () => {
		this.setDifficulty(radioDifficultFirst.getElement());
	}

	const difficultLabelEasy = new NodeCreator(document.createElement('label'), {
		classList:['difficult-label'],
		text: 'Easy', 
		attributes: [
			{name:'for', value: 'first-difficult'}
			]
	}, firstPoint.getElement());
	
	const radioDifficultSecond = new NodeCreator(document.createElement('input'), {
		id: 'second-difficult',
		classList:['settings-point'], 
		attributes: [
			{name: 'name', value: 'settings-difficult'},
			{name:'type', value: 'radio'},
			{name: 'difficult-settings', value: 'medium'}]
	}, firstPoint.getElement());

	radioDifficultSecond.getElement().onclick = () => {
		this.setDifficulty(radioDifficultSecond.getElement());
	}

	const difficultLabelMedium = new NodeCreator(document.createElement('label'), {
		classList:['difficult-label'],
		text: 'Medium', 
		attributes: [
			{name:'for', value: 'second-difficult'}
			]
	}, firstPoint.getElement());
	
	const radioDifficultThird = new NodeCreator(document.createElement('input'), {
		id: 'third-difficult',
		classList:['settings-point'], 
		attributes: [
			{name: 'name', value: 'settings-difficult'},
			{name:'type', value: 'radio'},
			{name: 'difficult-settings', value: 'hard'}]
	}, firstPoint.getElement());

	radioDifficultThird.getElement().onclick = () => {
		this.setDifficulty(radioDifficultThird.getElement());
	}

	const difficultLabelHard = new NodeCreator(document.createElement('label'), {
		classList:['difficult-label'],
		text: 'Hard', 
		attributes: [
			{name:'for', value: 'third-difficult'}
			]
	}, firstPoint.getElement());
	this.setChosenDifficultty(this.getElement());
}

}