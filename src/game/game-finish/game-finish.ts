import './game-finish.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
export default class GameFinish extends NodeCreator {
private score = 0;
private success = 'You Win, Congratulations';
private loose = 'You failed the game, Do not give up';
constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
	super(element, nodeParams, parent);
}
setScore(value: number): void{
	this.score = value;
}

render(): void{
const totalScore = new NodeCreator(document.createElement('h2'), {classList:['game-finish-score-title'], text:'Your total score is:'}, this.getElement());
const scoreCount = new NodeCreator(document.createElement('span'), {classList:['game-finish-score-value'], text: `${this.score}`}, totalScore.getElement());
const finishText = new NodeCreator(document.createElement('p'), {classList:['game-finish-text']}, this.getElement());
}
}