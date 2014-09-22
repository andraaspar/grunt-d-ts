module grunt {
	export interface IFailWarnMethod {
		(error: any, errorCode?: number): void;
	}
}