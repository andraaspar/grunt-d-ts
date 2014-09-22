/// <reference path='IMinimatchOptions.ts'/>

module grunt {
	export interface IFileExpandOptions extends IMinimatchOptions {
		filter?: any;
		cwd?: string;
	}
}