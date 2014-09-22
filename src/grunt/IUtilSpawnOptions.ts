module grunt {
	export interface IUtilSpawnOptions {
		cmd?: string;
		grunt?: boolean;
		args?: any[];
		opts?: {};
		fallback?: any;
	}
}