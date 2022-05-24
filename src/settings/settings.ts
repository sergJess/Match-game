import './settings.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
type voidFunc = ()=> void;
interface settingsParams {

}
export default class Settings extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
}
initiateByButton(parentNode: HTMLElement, callback: voidFunc): void{
const buttonStart = new NodeCreator(parentNode, document.createElement('button'), {classList: ['settings-start-button']}).getElement();
buttonStart.onclick = (): void => {
	callback();
};

}
render(): void{
	const title = new NodeCreator(this.getElement(), document.createElement('h2'), {classList: ['settings-title'],
text: 'Settings'
});
const settingsInner = new NodeCreator(this.getElement(), document.createElement('div'), {classList:['settings-inner']});
const firstPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {text: 'Choose difficulty'});
const secondPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {text: 'Set volume range'});
const thirdPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {text: 'Choose song'});

}

}