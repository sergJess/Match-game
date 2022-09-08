import './game.css';
import {NodeCreator, INodeParametrs} from '../helpers/node-creator';
import {GameField, frontCardImages} from './game-field/game-field';
import Score from './score/score';
import Eraser from '../helpers/node-eraser';
import {content} from '../index';
import StartPage from '../start-page/start-page';
import GameController from './game-controller/game-controller';
import {Timer} from './timer/timer';
import GameFinish from './game-finish/game-finish';

export default class Game extends NodeCreator{
	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
  }
render(): void {
	const game = new NodeCreator(document.createElement('div'), {
		classList:['game']
	}, this.getElement());
	const timerStart = new Timer(game.getElement(), {classList: ['timer', 'game-timer'], timerValue: 1, shouldDelete: true}, () => {console.log('Jess')});
	timerStart.start();
	const score = new Score(document.createElement('div'), {classList:['score']}, game.getElement());
	const gameField = new GameField(document.createElement('div'),{classList:['game-field']}, game.getElement());
	gameField.render(frontCardImages);
		const gameFinish = new GameFinish(document.createElement('div'), {classList:['game-finish']}, game.getElement());
	const gameController = new GameController(gameField.getElement(), score, gameFinish);
	timerStart.setAdditionalCallback(gameController.hideCards, [gameField.getElement()]);
const timerGame = new Timer(game.getElement(),{classList: ['timer', 'game-timer'], timerValue: 30, shouldDelete: false}, ()=>{} );

	const backToStart = new NodeCreator(document.createElement('button'),{classList:['game-back'], text:'Back To Start Page'}, this.getElement());
	backToStart.setOnclick(() => {
new Eraser([this]).erase();
new StartPage(document.createElement('div'),{classList: ['start-page']}, content).render();
	});
}
}