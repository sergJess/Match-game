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
	const back = element.querySelector('.card-back');
	element.setAttribute('data-isFrontSide', 'false');
	  if(back){
	 	  element.onclick = () => {

			if(element.getAttribute('data-isFrontSide') === 'false'){
			  this.addCard(element);
			  element.classList.add('card-reverse');
			  element.ontransitionend = () => {
					back.classList.add('card-back_invisble');
					element.classList.remove('card-reverse');
					element.setAttribute('data-isFrontSide', 'true');
					
				}
				this.sameCardsOpened();
			}	
else {
	    element.setAttribute('data-isFrontSide', 'false');
	    element.classList.add('card-reverse');
					element.ontransitionend = () => {
						back.classList.remove('card-back_invisble');
						element.classList.remove('card-reverse');
					
					}
					this.sameCardsOpened();
}

};
}

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
	// else{
	// 	this.clickedCards.forEach((item)=>{
			
	// 		const back = item.querySelector('.card-back');
	// 		item.onclick = ()=>{
	// 			item.classList.add('card-reverse');
 //        item.ontransitionend = () => {
 //            if(back){
	// 						back.classList.remove('card-back_invisble');
	// 						item.classList.remove('card-reverse');
	// 					}
	// 					item.setAttribute('data-isFrontSide', 'false');
	// 			}
	// 		};
	// 				});

	// 				setTimeout(() => {
	// 					firstCard.click();
	// 					secondCard.click();
	// 					this.clearClickedCards();
	// 					tempArray.forEach((item)=>{
	// 						const back = item.querySelector('.card-back');
	// 						if(back){
	// 							item.onclick = () => {
	// 								this.addCard(item);
	// 								if(item.getAttribute('data-isFrontSide') === 'false'){
	// 										item.classList.add('card-reverse');
	// 										item.ontransitionend = () => {
	// 										back.classList.add('card-back_invisble');
	// 										item.classList.remove('card-reverse');
	// 										item.setAttribute('data-isFrontSide', 'true');
	// 										this.sameCardsOpened();
	// 									}
	// 								}	
	// 							}
	// 						}
							
	// 					});
	// 				}, 500);
	// }


}

}


}