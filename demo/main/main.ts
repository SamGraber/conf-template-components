import { Component } from 'angular2/core';

import { CardList, CardHeader, CardBody } from '../../components/card-list/card-list';

import template from './main.html!text';

@Component({
	selector: 'demo-app',
	template: template,
	directives: [CardList, CardHeader, CardBody],
	styles: [
		`
span.important {
	color: darkred;
}
		`,
	],
})
export class Main {
	sampleData: ITestData[];

	constructor() {
		this.sampleData = [
			{
				dangerous: false,
				name: 'My first item',
				value1: 10,
				value2: 20,
			},
			{
				dangerous: false,
				name: 'Another item',
				value1: 12,
				value2: 6,
			},
			{
				dangerous: true,
				name: 'Blowing up!',
				value1: 500,
				value2: 750,
			},
			{
				dangerous: true,
				name: 'Big problem',
				value1: 1000,
				value2: 900,
			},
			{
				dangerous: false,
				name: 'Final item',
				value1: 202,
				value2: 78,
			},
		];
	}
}

interface ITestData {
	dangerous: boolean,
	name: string,
	value1: number,
	value2: number,
}