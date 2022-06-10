import './start-page.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
import NodeEraser from '../helpers/node-eraser';
import Game from '../game/game';
import Settings from '../settings/settings';

export default class StartPage extends NodeCreator {
  constructor( element: HTMLElement, nodeParams: nodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
  }
  
  render(): void {
    const startPageInner = new NodeCreator(document.createElement('div'),{classList: ['start-page-inner']}, this.getElement());
    const startButton = new NodeCreator(document.createElement('button'),{classList: ['start-button'],
     text: 'Start Game'
  },
  startPageInner.getElement());
  const startSettings =  new NodeCreator(document.createElement('button'),{classList: ['start-settings-button'],
  text: 'Settings'
}, startPageInner.getElement());
startSettings.setOnclick(():void =>{
  new NodeEraser([this]).erase();
  new Settings(document.createElement('div'),{classList: ['settings-page']}, {difficulty: 'medium'}, this.getParent()).render();
});

startButton.setOnclick(():void =>{
  new NodeEraser([this]).erase();
  new Game(document.createElement('div'),{}, this.getParent()).render();
});

  }
}