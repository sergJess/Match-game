import './timer.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
interface ITimerParams  {
classList : Array<string>;
timerValue: number;
shouldDelete:	boolean;
}
type TimerClassList = Array<string>;
export class Timer{
	private timerElement = new NodeCreator(document.createElement('div'), {classList: this.parameters.classList});
	private callback: Function;
	private timerId = setTimeout(() =>{}, 0);
	private additionCallback: Function = ()=>{};

	constructor(private parent: HTMLElement, private parameters:ITimerParams	, private action: Function) {
	this.callback =	action;
	
	this.parent.append(this.timerElement.getElement());
}

setTimer(value:	number): void{
	if(value >= 0){
   const element = this.timerElement.getElement();
   element.textContent = `${value}`;
	}
	else{
		 throw new Error('Timer can not be negative');
	}
}

start(): void{
this.setTimer(this.parameters.timerValue);
this.updateTimer();
}
 deleteTimer(): void {
		this.timerElement.removeElement();
	}

updateTimer(): void {
let timerCount = this.parameters.timerValue - 1;

	const rec = () => {
		if(timerCount >= 0) {
		 	this.setTimer(timerCount);
		  timerCount--;
		  this.timerId = setTimeout(rec, 1000);
	   }
	 else {
			 this.callback();
			 this.setAction(this.additionCallback);
	  	clearTimeout(this.timerId);
				if(this.parameters.shouldDelete){
					this.deleteTimer();
				}
	 }
	};
	this.timerId = setTimeout(rec
	, 1000);
	
}
setAdditionalCallback(f: Function): void{
this.additionCallback = f;
}
setAction(f: Function): void{
	f();
}
}