/// <reference path='IFailWarnMethod.ts'/>

module grunt {
	export interface IFail {
		warn: IFailWarnMethod;
		
		
		
		fatal: IFailWarnMethod;
	}
}