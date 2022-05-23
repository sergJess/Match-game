import './settings.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
type voidFunc = () => {};

export default class Settings extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
}
initiateByButton(parentNode: HTMLElement, callback: voidFunc): void{
const buttonStart = new NodeCreator(parentNode, document.createElement('button'), {classList: ['settings-start-button']}).getElement();
buttonStart.onclick = ():void => {
	callback();
};

}
render(): void{
	
}

}