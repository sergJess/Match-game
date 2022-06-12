import './game-field.css';
import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
import cloud from '../../../assets/img/card/front/cloud2.png';
import riding from '../../../assets/img/card/front/Riding.png';

export const frontCardImages: Array<string> = [`${cloud}`, `${riding}`];
export  class GameField extends NodeCreator {
	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
	}
	duplicateCards(array: Array<NodeCreator>):	Array<NodeCreator>{
		const duplicatedArray = array.reduce((accum:Array<NodeCreator>, item) => {
			const clone = Object.assign(new NodeCreator(item.getElement()), item);
			accum.push(item, clone);
return accum;
		}, []);
return duplicatedArray;
	}
generateCards(array: Array<string>): Array<NodeCreator> | []{
const cardsArray: Array<NodeCreator> = [];
for (let i = 0, length = array.length; i < length; i++){
	const card = new NodeCreator(document.createElement('div'), {classList: ['card']});
	const img = new NodeCreator(document.createElement('img'), {classList: ['card-image']}, card.getElement());
	img.getElement().setAttribute('src', `${array[i]}`); 
	cardsArray.push(card);
}
return cardsArray;
}
render(array: Array<string>): void {
const cardsArray = this.duplicateCards(this.generateCards(array));
console.log(cardsArray);
cardsArray.forEach((item) => {
this.getElement().append(item.getElement());
});
}

}