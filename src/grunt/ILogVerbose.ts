/// <reference path='ILogMethods.ts'/>

module grunt {
	export interface ILogVerbose extends ILogMethods {
		or: ILogMethods;
	}
}