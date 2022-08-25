import './game-finish.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
export default class GameFinish extends NodeCreator {
private score = 0;
private textFinish = '';
private success = 'Congratulations, You Win!';
private lose = 'You failed the game, Do not give up';
constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
	super(element, nodeParams, parent);
}
getSuccess(): string{
	return this.success;
}
getLose(): string{
	return this.lose;
}
setScore(value: number): void{
	this.score = value;
}
setTextFinish(value: string): void{
this.textFinish = value;
}

render(): void{
	const finishText = new NodeCreator(document.createElement('p'), {classList:['game-finish-text'], text: this.textFinish}, this.getElement());
const totalScore = new NodeCreator(document.createElement('h2'), {classList:['game-finish-score-title'], text:'Your total score is:'}, this.getElement());
const scoreCount = new NodeCreator(document.createElement('span'), {classList:['game-finish-score-value'], text: `${this.score}`}, totalScore.getElement());

}
}