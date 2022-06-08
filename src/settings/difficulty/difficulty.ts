import './difficulty.css';
import {NodeCreator, nodeParametrs} from '../../helpers/node-creator';
import {applicationSettings, SettingsApp} from '../settings-app/settings-app';

export default class Difficulty extends NodeCreator{
	private settings: SettingsApp;
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs, settings: SettingsApp){
		super(parent, element, nodeParams);
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
	const difficultTitle = new NodeCreator(this.getElement(), document.createElement('h2'), {
		classList:['difficulty-title'], text: 'Choose difficulty'
	});
	const firstPoint = new NodeCreator(this.getElement(), document.createElement('div'), {classList:['settings-point-inner']});
	
	const radioDifficultFirst = new NodeCreator(firstPoint.getElement(), document.createElement('input'), {
		id: 'first-difficult',
		classList:['settings-point'], 
		attributes: [
			{name: 'name', value: 'settings-difficult'},
			{name:'type', value: 'radio'},
			{name: 'difficult-settings', value: 'easy'}]
	});

	radioDifficultFirst.getElement().onclick = () => {
		this.setDifficulty(radioDifficultFirst.getElement());
	}

	const difficultLabelEasy = new NodeCreator(firstPoint.getElement(), document.createElement('label'), {
		classList:['difficult-label'],
		text: 'Easy', 
		attributes: [
			{name:'for', value: 'first-difficult'}
			]
	});
	
	const radioDifficultSecond = new NodeCreator(firstPoint.getElement(), document.createElement('input'), {
		id: 'second-difficult',
		classList:['settings-point'], 
		attributes: [
			{name: 'name', value: 'settings-difficult'},
			{name:'type', value: 'radio'},
			{name: 'difficult-settings', value: 'medium'}]
	});

	radioDifficultSecond.getElement().onclick = () => {
		this.setDifficulty(radioDifficultSecond.getElement());
	}

	const difficultLabelMedium = new NodeCreator(firstPoint.getElement(), document.createElement('label'), {
		classList:['difficult-label'],
		text: 'Medium', 
		attributes: [
			{name:'for', value: 'second-difficult'}
			]
	});
	
	const radioDifficultThird = new NodeCreator(firstPoint.getElement(), document.createElement('input'), {
		id: 'third-difficult',
		classList:['settings-point'], 
		attributes: [
			{name: 'name', value: 'settings-difficult'},
			{name:'type', value: 'radio'},
			{name: 'difficult-settings', value: 'hard'}]
	});

	radioDifficultThird.getElement().onclick = () => {
		this.setDifficulty(radioDifficultThird.getElement());
	}

	const difficultLabelHard = new NodeCreator(firstPoint.getElement(), document.createElement('label'), {
		classList:['difficult-label'],
		text: 'Hard', 
		attributes: [
			{name:'for', value: 'third-difficult'}
			]
	});
	this.setChosenDifficultty(this.getElement());
}

}