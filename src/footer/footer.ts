import './footer.css';
import {NodeCreator, INodeParametrs} from '../helpers/node-creator';

export default class Footer extends NodeCreator{
	constructor( element: HTMLElement, nodeParams: INodeParametrs, parent?: HTMLElement){
		super(element, nodeParams, parent);
	}
render():void {
	const footerInner = new NodeCreator(document.createElement('div'), {
		classList:['footer-inner']
	}, this.getElement()).getElement();
const yearCreate = new NodeCreator(document.createElement('p'), {
	classList: ['footer-year'],
	text: '2022'
}, footerInner);

const linkGithubInner = new NodeCreator(document.createElement('div'), {
	classList:['footer-link-inner']
}, footerInner).getElement();
const linkGithub = new NodeCreator(document.createElement('a'), {
	classList:['footer-link'],
	text: 'Github',
	attributes: [{name: 'href', value: 'https://github.com'}]
}, linkGithubInner).getElement();
}
}