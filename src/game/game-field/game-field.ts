import './game-field.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';

const frontCardImages = [''];
export default class GameField extends NodeCreator {
	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
	}
	duplicateCards(array: Array<NodeCreator>):	Array<NodeCreator>{
		const duplicatedArray = array.reduce((accum:Array<NodeCreator>, item) => {
			const clone = Object.assign({}, item);
			accum.push(item, clone);
return accum;
		}, []);
return duplicatedArray;
	}
generateCards(num:	number): Array<NodeCreator> | []{
const cardsArray: Array<NodeCreator> = [];
for (let i = 0; i < num; i++){
	const card = new NodeCreator(document.createElement('div'),{classList: ['card']});
	cardsArray.push(card);
}
return cardsArray;
}
render(): void {
	
}

}