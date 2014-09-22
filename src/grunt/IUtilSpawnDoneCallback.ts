/// <reference path='IUtilSpawnDoneCallbackResult.ts'/>

module grunt {
	export interface IUtilSpawnDoneCallback {
		(error: Error, result: IUtilSpawnDoneCallbackResult, code: number): any;
	}
}