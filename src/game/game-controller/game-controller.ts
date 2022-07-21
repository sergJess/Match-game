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
hideCards(parent:	HTMLElement): void {
	const cards = parent.querySelectorAll('.card');
	cards.forEach((item)=>{
		const element = <HTMLElement>item;
		const back = element.querySelector('.card-back');
		if (back){
			back.classList.remove('card-back_invisble');
		}

	});
}


setCardClick(element:	HTMLElement){


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
 
	

}

}


}