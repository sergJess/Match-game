import './start-page.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';

class StartPage extends NodeCreator {
  constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
    super(parent, element, nodeParams);
  }
}