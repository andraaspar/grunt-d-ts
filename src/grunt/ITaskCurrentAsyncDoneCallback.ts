module grunt {
	export interface ITaskCurrentAsyncDoneCallback {
		(flag: boolean): void;
		(err?: Error): void;
	}
}