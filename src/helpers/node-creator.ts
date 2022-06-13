interface IAttributesParams{
	name: string;
	value: string;
}
export interface INodeParametrs {
	classList?: Array<string>
	id? :string;
	text?: string;
	attributes?: Array<IAttributesParams>
}

export class NodeCreator {
	private element: HTMLElement;
	private parent?: HTMLElement;
	private nodeParams: INodeParametrs;
	constructor(element: HTMLElement, nodeParams: INodeParametrs = {}, parent?: HTMLElement){
		this.element = element;
		if(parent){
			this.parent = parent;
			this.parent.append(this.element);
		}

		this.nodeParams = nodeParams;
		this.addClassList();
		this.addId();
		this.addText();
		this.addAttributes();
		
	}

addClassList(): void{
	const classList = this.nodeParams.classList;
	if(classList && classList.length){
		classList.map((item:string) => {
			this.element.classList.add(item);
		});
	}
}

addId(): void{
const id = this.nodeParams.id;
if(id){
	this.element.setAttribute('id', id);
}
}

addText(): void{
	const text = this.nodeParams.text;
	if(text){
		this.element.textContent = text;
	}
}
addAttributes():void {
	if(this.nodeParams.attributes?.length){
		this.nodeParams.attributes.map((item: IAttributesParams) => {
			this.element.setAttribute(item.name, item.value);
		});
	}
}
getParent(): HTMLElement | undefined {
	if(this.parent){
		return this.parent;
	}
}
getNodeParams(): INodeParametrs {
return this.nodeParams;
}
getElement(): HTMLElement {
	return this.element;
}

removeElement(): void {
	this.element.remove();
}
removeElementContent(): void {
	this.element.innerHTML = '';
}
setOnclick(handler: Function): void{
	this.element.onclick = ()=>{
		handler();
	}

}

}