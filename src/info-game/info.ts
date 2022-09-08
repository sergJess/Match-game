import './info.css';
import {NodeCreator, INodeParametrs} from '../helpers/node-creator';
import Eraser from '../helpers/node-eraser';
import {content} from '../index';
import StartPage from '../start-page/start-page';

export default class InfoGame extends NodeCreator{
		constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
  }
		render(): void {
					const infoTitle = new NodeCreator(document.createElement('h2'), {classList: ['info-title'], text: 'About Game'}, this.getElement());
					const infoScreen = new NodeCreator(document.createElement('div'),{classList: ['info-screen'], text: 'In Match Game Player must remember where lie the same opened cards. When the timer is over, all cards reverse. Then Player must open the cards one by one, the score increases only when opened only two the same.'}, this.getElement());
			const backToStartPage = new NodeCreator(document.createElement('button'),{classList: ['info-start-page'], text: 'Back to Start Page'}, this.getElement());
		backToStartPage.setOnclick(():void => {
	   new Eraser([this]).erase();
    new StartPage(document.createElement('div'),{classList: ['start-page']}, content).render();
		});

		
		}
}