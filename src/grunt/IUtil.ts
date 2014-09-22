/// <reference path='IUtilRecurseCallback.ts'/>
/// <reference path='IUtilRecurseContinueCallback.ts'/>
/// <reference path='IUtilSpawnDoneCallback.ts'/>
/// <reference path='IUtilSpawnOptions.ts'/>

module grunt {
	export interface IUtil {
		linefeed: string;
		
		
		
		kindOf(value: any): string;
		
		
		
		error(message: any, origError?: Error): Error;
		
		
		
		normalizelf(str: string): string;
		
		
		
		recurse(object: any, callbackFunction: IUtilRecurseCallback, continueFunction: IUtilRecurseContinueCallback): void;
		
		
		
		repeat(n: number, str: string): string;
		
		
		
		pluralize(n: number, str: string, separator: string): string;
		
		
		
		spawn(options: IUtilSpawnOptions, doneFunction: IUtilSpawnDoneCallback): any;
		
		
		
		toArray(arrayLikeObject: any): any[];
		
		
		
		callbackify(syncOrAsyncFunction: Function): Function;
	}
}