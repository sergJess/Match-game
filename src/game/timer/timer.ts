import './timer.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
type  timerCallback = () => void;
export class Timer{
	private timerElement = new NodeCreator(document.createElement('div'), {classList: ['timer']});
	private callback: Function;
	private timerId = setTimeout(() =>{}, 0);

	constructor(private parent: HTMLElement, private timerNums: number, private action: Function) {
	this.callback =	action;
	this.parent.append(this.timerElement.getElement());
}

setTimer(num:	number): void{
	if(num >= 0){
   const element = this.timerElement.getElement();
   element.textContent = `${num}`;
	}
	else{
		 throw new Error('Timer can not be negative');
	}
}

start(): void{
this.setTimer(this.timerNums);
this.updateTimer();
}

updateTimer(): void {
let timerCount = this.timerNums - 1;

	const rec = () => {
		if(timerCount >= 0) {
		 	this.setTimer(timerCount);
		  timerCount--;
		  this.timerId = setTimeout(rec, 1000);
	   }
	 else {
			 this.action();
	  	clearTimeout(this.timerId);
	 }
	};
	this.timerId = setTimeout(rec
	, 1000);
	
}

}