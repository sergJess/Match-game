import './difficulty.css';
import {NodeCreator, nodeParametrs} from '../../helpers/node-creator';

export default class Difficulty extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
	}
render():void{
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
	const difficultLabelHard = new NodeCreator(firstPoint.getElement(), document.createElement('label'), {
		classList:['difficult-label'],
		text: 'Hard', 
		attributes: [
			{name:'for', value: 'third-difficult'}
			]
	});
}

}