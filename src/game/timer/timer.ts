import './timer.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';

export class Timer{
	private timerElement = new NodeCreator(document.createElement('div'), {classList: ['timer']})
	constructor(private parent: HTMLElement, private timerNums: number){
	this.setTimer();
	this.parent.append(this.timerElement.getElement());
}

setTimer (): void{
	if(this.timerNums > 0){
   const element = this.timerElement.getElement();
   element.textContent = `${this.timerNums}`;
	}
	else{
		 throw new Error('Timer can not be negative');
	}
}

start(): void{
	if(this.timerNums > 0){

	}
}
}