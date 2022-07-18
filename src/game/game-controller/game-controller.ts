import {NodeCreator, INodeParametrs} from '../../helpers/node-creator';
import Score from '../score/score';
export default class GameController{
	private clickedCards: Array<HTMLElement> = [];
	private score: Score;
	constructor(score:Score){
this.score = score;
	}

setClickToCards(parent:	HTMLElement):void	{
	const cards = parent.querySelectorAll('.card');
	cards.forEach((item)=>{
		const element = <HTMLElement>item;
		this.setCardClick(element);
	});
}

setCardClick(element:	HTMLElement){
// 	const back = element.querySelector('.card-back');
// 	  if(back){
// 	 	  element.onclick = () => {
// 					if(element.getAttribute('data-isClickable') === 'true'){
// 						element.setAttribute('data-isClickable', 'false');
// 							switch(true){
// 	      case element.getAttribute('data-isFrontSide') === 'false':
// 		       this.addCard(element);
// 		       element.classList.add('card-reverse');
// 		       element.ontransitionend = () => {
// 		         back.classList.add('card-back_invisble');
// 		         element.classList.remove('card-reverse');
// 											element.setAttribute('data-isClickable', 'true');
// 	        }
// 	        element.setAttribute('data-isFrontSide', 'true');
// 	        this.sameCardsOpened();
// 	        break;
// 	      case element.getAttribute('data-isFrontSide') === 'true':
// 		       element.classList.add('card-reverse');
// 		       element.ontransitionend = () => {
// 		        	back.classList.remove('card-back_invisble');
// 			        element.classList.remove('card-reverse');
// 											element.setAttribute('data-isClickable', 'true');
// 	        	}
// 	       	element.setAttribute('data-isFrontSide', 'false');
// 	       	this.sameCardsOpened();
// 	       	break;
// }
// 					}



// };
// }

}

	clearClickedCards(){
		this.clickedCards.length = 0;
	}
	
	addCard(card: HTMLElement): void{
		const equelCard = (element: HTMLElement) => element === card;
		const isTheSameCard = this.clickedCards.some(equelCard);

		if(!isTheSameCard){
			this.clickedCards.push(card);
		}
		
	}
isOpenedTwoCards(): boolean {
	return this.clickedCards.length === 2 ? true: false;
	
}

	sameCardsOpened(): void {
if( this.clickedCards.length === 1){
	this.clickedCards[0].onclick = () => {};
}
if(this.isOpenedTwoCards()){
const firstCard = this.clickedCards[0];
const secondCard =	this.clickedCards[1];
const firstId = firstCard.getAttribute('data-id');
const secondId = secondCard.getAttribute('data-id');
const isTheSameIdCards = firstId ===	secondId;
const hasIds = firstId &&	secondId;
  if(hasIds && isTheSameIdCards){
this.score.increaseScore();
this.clickedCards.forEach((item)=>{
	item.onclick = () => {};
});
this.clearClickedCards();
		}
		else {
setTimeout(() => {
	this.setCardClick(firstCard);
	this.clickedCards.forEach((item)=>{
		item.click()
	});
	this.clearClickedCards();
}, 1200);
		}
	

}

}


}