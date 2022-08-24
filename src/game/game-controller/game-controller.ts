import Score from '../score/score';
import GameFinish from '../game-finish/game-finish';
export default class GameController{
	private clickedCards: Array<HTMLElement> = [];
 private  totalCards = 0;
	private score: Score;

	constructor(private cardInner: HTMLElement, score: Score){
   this.score = score;
			this.setClickToCards(this.cardInner);
	}

setTotalCards(value: number):	void{
this.totalCards = value;
}

isGameFinished(): boolean{
	return this.score.getScore() === this.totalCards / 2 ;
}

setClickToCards(parent:	HTMLElement): void	{
	const cards = parent.querySelectorAll('.card');
	this.setTotalCards(cards.length);
	cards.forEach((item)=>{
		const element = <HTMLElement>item;
		this.setCardClick(element);

	});
}

hideCards(parent:	HTMLElement): void {
	const cards = parent.querySelectorAll('.card');
	cards.forEach((item)=>{
		const element = <HTMLElement>item;
	const cardInner = element.querySelector('.card-inner');
    if(cardInner){
					element.setAttribute('data-is-clickable', 'true');
					cardInner.classList.add('card-inner_rotated');
				}
	});
}

setCardClick(element:	HTMLElement){
element.onclick = () => {
const isClickable = element.getAttribute('data-is-clickable');
const cardInner = element.querySelector('.card-inner');
if((isClickable === 'true') && cardInner){
	this.addCard(element);
	this.openedOneCard();
	cardInner.classList.remove('card-inner_rotated')
	  if(this.isOpenedTwoCards() && this.isSameOpenedTwoCards()){
    this.sameTwoCardsOpened();
	   }
	  if(this.isOpenedTwoCards() && !this.isSameOpenedTwoCards()){
       setTimeout(this.differentTwoCardsOpened.bind(this), 900);
					
	  }
}

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

openedOneCard(): void {
	if(this.clickedCards.length === 1){
this.setCardsInactive();
	}
}

setCardsInactive(): void{
	this.clickedCards.forEach((item)=>{
		item.setAttribute('data-is-clickable', 'false');
	});
}

isSameOpenedTwoCards(): boolean{
	  const firstCard = this.clickedCards[0];
	  const secondCard =	this.clickedCards[1];
	  const firstId = firstCard.getAttribute('data-id');
	  const secondId = secondCard.getAttribute('data-id');
	  const isTheSameIdCards = firstId ===	secondId;
	  const hasIds = firstId &&	secondId;
	  return !!hasIds && isTheSameIdCards;
}

gameFinish(gameFinish: GameFinish):void{
gameFinish.setScore(this.score.getScore());
gameFinish.render();
		console.log('FF7')
}

	sameTwoCardsOpened(): void {
	 this.setCardsInactive();
  this.clearClickedCards();
  this.score.increaseScore();
		if(this.isGameFinished()){
			this.gameFinish.bind(this);
	
		}
}

differentTwoCardsOpened(): void{
this.clickedCards.forEach((item)=>{
	const cardInner = item.querySelector('.card-inner');
	if(cardInner){
		item.setAttribute('data-is-clickable', 'true');
		cardInner.classList.add('card-inner_rotated');
	}

});
this.clearClickedCards();
}

}