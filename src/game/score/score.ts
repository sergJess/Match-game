import './score.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';

export default class Score extends NodeCreator{
	private scoreInner = new NodeCreator(document.createElement('p'),{classList: ['attempts-text'], text: 'score:'}, this.getElement());
	private attemptsCount = new NodeCreator(document.createElement('span'), {classList: ['attempt-count']}, this.scoreInner.getElement());
private score = 0;

	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
		this.setAttemptsCount(this.score);
  }

		setAttemptsCount(value: number): void{
			this.attemptsCount.getElement().innerText = `${value}`;
		}
		increaseScore(): void{
			const step = 1;
			this.score += step;
			this.setAttemptsCount(this.score);
		}
		getAttemptsCount(): number{
			return this.score;
		}
	
}