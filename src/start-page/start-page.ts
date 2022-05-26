import './start-page.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';
import NodeEraser from '../helpers/node-eraser';
import Settings from '../settings/settings';

export default class StartPage extends NodeCreator {
  constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
    super(parent, element, nodeParams);
  }
  
  render(): void {
    const startPageInner = new NodeCreator(this.getElement(), document.createElement('div'),{classList: ['start-page-inner']});
    const startButton = new NodeCreator(startPageInner.getElement(), document.createElement('button'),{classList: ['start-button'],
     text: 'Start Game'
  });
  const startSettings =  new NodeCreator(startPageInner.getElement(), document.createElement('button'),{classList: ['start-settings-button'],
  text: 'Settings'
});
startSettings.setOnclick(():void =>{
  new NodeEraser([this]).erase();
  new Settings(this.getParent(), document.createElement('div'),{classList: ['settings']}).render();
});

  

  }
}