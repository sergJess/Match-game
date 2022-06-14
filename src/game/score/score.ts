import './score.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';

export default class Score extends NodeCreator{
	private attempts = new NodeCreator(document.createElement('p'),{classList: ['attempts-text'], text: 'attempts:'}, this.getElement());
	private attemptsCount = new NodeCreator(document.createElement('span'), {classList: ['attempt-count']}, this.attempts.getElement());

	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
		this.setAttemptsCount(0);
  }

		setAttemptsCount(value: number): void{
			this.attemptsCount.getElement().innerText = `${value}`;
		}
		getAttemptsCount(): string{
			const value = this.attempts.getElement().innerText;
			return value;
		}
	
}