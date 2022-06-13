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
			clone.setOnclick(()=>{
				clone.getElement().style.transform =	'translateX(200px)'
			});
			accum.push(item, clone);
return accum;
		}, []);
return duplicatedArray;
	}
generateCards(array: Array<string>): Array<NodeCreator> | []{
const cardsArray: Array<NodeCreator> = [];
for (let i = 0, length = array.length; i < length; i++){
	const card = new NodeCreator(document.createElement('div'), {classList: ['card']});
	card.setOnclick(()=>{
		card.getElement().style.transform =	'translateX(200px)'
	});
	const img = new NodeCreator(document.createElement('img'), {classList: ['card-image']}, card.getElement());
	img.getElement().setAttribute('src', `${array[i]}`); 
	cardsArray.push(card);
}
return cardsArray;
}
randomiseCards(array: Array<NodeCreator>):Array<NodeCreator> {

}
render(array: Array<string>): void {
const cardsArray = this.duplicateCards(this.generateCards(array));
cardsArray.forEach((item) => {
	console.log(item.getElement());
this.getElement().append(item.getElement());
});
}

}