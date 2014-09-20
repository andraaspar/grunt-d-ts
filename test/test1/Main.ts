/// <reference path='../../src/grunt.d.ts'/>

module test1 {
	export class Main {
		
		private static instance = new Main();
		
		constructor() {
			grunt.config.init({});
		}
	}
}