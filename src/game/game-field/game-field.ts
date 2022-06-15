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
		const duplicatedArray = array.reduce((accum:Array<NodeCreator>, item, index: number) => {
			item.getElement().setAttribute('data-id', `${index}`);
			const cloneNode = item.getElement().cloneNode(true);
			const cloneElement = <HTMLElement> cloneNode;			
			const clone = new NodeCreator(cloneElement, item.getNodeParams());
			accum.push(item, clone);
return accum;
		}, []);
return duplicatedArray;
	}
generateCards(array: Array<string>): Array<NodeCreator> | []{
const cardsArray: Array<NodeCreator> = [];
for (let i = 0, length = array.length; i < length; i++){
	const card = new NodeCreator(document.createElement('div'), {classList: ['card']});
	const cardBack = new NodeCreator(document.createElement('div'), {classList: ['card-back']}, card.getElement());
	const img = new NodeCreator(document.createElement('img'), {classList: ['card-image']}, card.getElement());
	img.getElement().setAttribute('src', `${array[i]}`); 
	cardsArray.push(card);
}
return cardsArray;
}
randomiseCards(array: Array<NodeCreator>):Array<NodeCreator> {
	const arrayCopy = [...array];
	for (let i = arrayCopy.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
}
return arrayCopy;
}
render(array: Array<string>): void {
const cardsArray = this.randomiseCards(this.duplicateCards(this.generateCards(array)));
cardsArray.forEach((item) => {
	const back = item.getElement().querySelector('.card-back');
	let isFrontSide = false;
	if(back){
		item.setOnclick(() => {
			if(!isFrontSide){
				item.getElement().classList.add('card-reverse');
				item.getElement().ontransitionend = () => {
					back.classList.add('card-back_invisble');
					item.getElement().classList.remove('card-reverse');
					isFrontSide = true;
				}
			}
	if(isFrontSide){
		item.getElement().classList.add('card-reverse');
		item.getElement().ontransitionend = () => {
			back.classList.remove('card-back_invisble');
			item.getElement().classList.remove('card-reverse');
			isFrontSide = false;
		}
	}
		});

	}

this.getElement().append(item.getElement());

});
}

}