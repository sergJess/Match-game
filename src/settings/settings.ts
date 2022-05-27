import './settings.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
type voidFunc = ()=> void;
interface settingsParams {

}
export default class Settings extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
}

render(): void{
	const title = new NodeCreator(this.getElement(), document.createElement('h2'), {classList: ['settings-title'],
text: 'Settings'
});
const settingsInner = new NodeCreator(this.getElement(), document.createElement('div'), {classList:['settings-inner']});
const firstPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner'], text: 'Choose difficulty'});
const secondPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner'], text: 'Set volume range'});
const thirdPoint = new NodeCreator(settingsInner.getElement(), document.createElement('div'), {classList:['settings-point-inner'], text: 'Choose song'});

}

}