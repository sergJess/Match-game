import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
export default class GameController{
	private clickedCards: Array<HTMLElement> = [];
	constructor(){

	}
setCardClick(parent:	HTMLElement){
const cards = parent.querySelectorAll('.card');
cards.forEach((item)=>{
	const element = <HTMLElement>item;
	const back = item.querySelector('.card-back');
	let isFrontSide = false;
	if(back){
		element.onclick = () => {
			this.addCard(element);
			if(!isFrontSide){
				element.classList.add('card-reverse');
				element.ontransitionend = () => {
					back.classList.add('card-back_invisble');
					element.classList.remove('card-reverse');
					isFrontSide = true;
				}
			}
	if(isFrontSide){
		element.classList.add('card-reverse');
		element.ontransitionend = () => {
			back.classList.remove('card-back_invisble');
			element.classList.remove('card-reverse');
			isFrontSide = false;
		}
	}
this.isSameCards();
};
}
});
}

	clearClickedCards(){
		this.clickedCards.length = 0;
	}
	
	addCard(card: HTMLElement): void{
		this.clickedCards.push(card);
	}

	isSameCards():boolean{
if(this.clickedCards.length === 2){
const firstCard = this.clickedCards[0];
const secondCard =	this.clickedCards[1];
const firstId = firstCard.getAttribute('data-id');
const secondId = secondCard.getAttribute('data-id');
  if(firstId && firstId ===	secondId && firstCard !== secondCard){
this.clickedCards.forEach((item)=>{
	item.onclick =	() => {};
return true;
});
		}
		else{
			this.clickedCards.forEach((item)=>{
				item.click();
			}
			);
		}

this.clearClickedCards();
}
	return false
}
}