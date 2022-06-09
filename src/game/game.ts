import './game.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';

export default class Game extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
}
render(): void {
	const game = new NodeCreator(this.getElement(), document.createElement('div'), {
		classList:['game']
	});
}
}