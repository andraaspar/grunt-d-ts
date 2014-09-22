/// <reference path='IFileCopyOptionsProcessFunction.ts'/>

module grunt {
	export interface IFileCopyOptions {
		encoding?: string;
		process?: IFileCopyOptionsProcessFunction;
		noProcess?: any;
	}
}