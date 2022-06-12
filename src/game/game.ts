import './game.css';
import {NodeCreator, INodeParametrs} from '../helpers/node-creator';

export default class Game extends NodeCreator{
	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
  }
render(): void {
	const game = new NodeCreator(document.createElement('div'), {
		classList:['game']
	}, this.getElement());
}
}