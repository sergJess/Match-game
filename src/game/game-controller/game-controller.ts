import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
import Score from '../score/score';
export default class GameController{
	private clickedCards: Array<HTMLElement> = [];
	private score: Score;
	constructor(score:Score){
this.score = score;
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
	// if(isFrontSide){
	// 	element.classList.add('card-reverse');
	// 	element.ontransitionend = () => {
	// 		back.classList.remove('card-back_invisble');
	// 		element.classList.remove('card-reverse');
	// 		isFrontSide = false;
	// 	}
	// }
	this.isSameCards();
};
}
});
}

	clearClickedCards(){
		this.clickedCards.length = 0;
	}
	
	addCard(card: HTMLElement): void{
		let isTheSame = false;
		this.clickedCards.forEach((item)=>{
    if(item === card) isTheSame = true;
		});
		if(!isTheSame){
			this.clickedCards.push(card);
		}
		
	}
isOpenedTwoCards(): boolean {
	if (this.clickedCards.length === 2){
		return true;
	}
	return false;
}
	isSameCards():void{
if(this.clickedCards.length === 2){
const firstCard = this.clickedCards[0];
const secondCard =	this.clickedCards[1];
const firstId = firstCard.getAttribute('data-id');
const secondId = secondCard.getAttribute('data-id');
const isTheSameIdCards = firstId ===	secondId;
const hasIds = firstId &&	secondId;
  if(hasIds && isTheSameIdCards){
this.score.increaseScore();
this.clickedCards.forEach((item)=>{
	item.onclick = ()=>{};
});
		}
		else{
			this.clickedCards.forEach((item)=>{
				// item.click();
			}
			);
		}

this.clearClickedCards();
}

}
}