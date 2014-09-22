module grunt {
	export interface IFileCopyOptionsProcessFunction {
		(contents: string, srcPath: string, destPath: string): any;
	}
}