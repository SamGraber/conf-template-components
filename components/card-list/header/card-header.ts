import { Directive, TemplateRef } from 'angular2/core';

@Directive({ selector: '[confCardHeader]' })
export class CardHeader {
	constructor(public template: TemplateRef) {	}
}
