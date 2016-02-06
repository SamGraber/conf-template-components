import { Directive, TemplateRef } from 'angular2/core';

@Directive({ selector: '[confCardBody]' })
export class CardBody {
	constructor(public template: TemplateRef) {	}
}
