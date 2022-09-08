import './start-page.css';
import {NodeCreator, INodeParametrs} from '../helpers/node-creator';
import NodeEraser from '../helpers/node-eraser';
import Game from '../game/game';
import Settings from '../settings/settings';
import InfoGame from '../info-game/info';

export default class StartPage extends NodeCreator {
  constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
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

const info = new NodeCreator(document.createElement('button'),{classList: ['start-page-info'], text: 'Info'}, startPageInner.getElement());
info.setOnclick(()=>{
  new NodeEraser([this]).erase();
  new InfoGame(document.createElement('div'), {classList: ['info-page']}, this.getParent()).render();
});

startButton.setOnclick(():void =>{
  new NodeEraser([this]).erase();
  new Game(document.createElement('div'),{classList: ['game-page']}, this.getParent()).render();
});

  }
}