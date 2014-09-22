module grunt {
	export interface IFileRecurseCallback {
		(abspath: string, rootdir: string, subdir: string, filename: string): any;
	}
}