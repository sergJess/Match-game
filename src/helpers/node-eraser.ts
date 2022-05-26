import {NodeCreator, nodeParametrs} from './node-creator';
export default class Eraser{
private nodeToRemove?: Array<NodeCreator>;
private nodeToClear?: Array<NodeCreator>;
constructor(nodeToRemove?: Array<NodeCreator>, nodeToClear?: Array<NodeCreator>) {
	this.nodeToRemove = nodeToRemove;
	this.nodeToClear = nodeToClear;
}
erase(): void{
if(this.nodeToRemove){
	this.nodeToRemove.map((item:NodeCreator)=>{
		item.removeElement();
	});
}

if(this.nodeToClear){
	this.nodeToClear.map((item:NodeCreator)=>{
		item.removeElementContent();
	});
}
}

}