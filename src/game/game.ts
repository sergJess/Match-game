import './game.css';
import {NodeCreator, INodeParametrs} from '../helpers/node-creator';
import {GameField, frontCardImages} from './game-field/game-field';
import Score from './score/score';
import NodeEraser from '../helpers/node-eraser';
import {content} from '../index';
import StartPage from '../start-page/start-page';
import GameController from './game-controller/game-controller';

export default class Game extends NodeCreator{
	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
  }
render(): void {
	const game = new NodeCreator(document.createElement('div'), {
		classList:['game']
	}, this.getElement());
	const score = new Score(document.createElement('div'), {classList:['score']}, game.getElement());
	const gameField = new GameField(document.createElement('div'),{classList:['game-field']}, game.getElement());
	gameField.render(frontCardImages)
	const gameController = new GameController(score);
	gameController.setCardClick(gameField.getElement());
	const backToStart = new NodeCreator(document.createElement('button'),{classList:['game-back'], text:'Back To Start Page'}, this.getElement());
	backToStart.setOnclick(() => {
new NodeEraser([this]).erase();
new StartPage(document.createElement('div'),{classList: ['start-page']}, content).render();
	});
}
}