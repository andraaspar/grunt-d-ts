/// <reference path='ITaskCurrent.ts'/>

module grunt {
	export interface ITaskCurrentMulti extends ITaskCurrent {
		target: string;
		files: ISrcDestFileMapping[];
		filesSrc: string[];
		data: any;
	}
}