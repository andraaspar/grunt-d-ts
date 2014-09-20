/// <reference path='IFileCopyOptionsProcessFunction.ts'/>

module grunt {
	export interface IFileCopyOptionsObject {
		encoding: string;
		process: IFileCopyOptionsProcessFunction;
		noProcess: any;
	}
}