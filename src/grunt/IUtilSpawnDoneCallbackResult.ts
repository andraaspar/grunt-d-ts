module grunt {
	export interface IUtilSpawnDoneCallbackResult {
		stdout: any;
		stderr: any;
		code: number;
	}
}