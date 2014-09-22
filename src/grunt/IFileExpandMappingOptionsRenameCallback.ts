module grunt {
	export interface IFileExpandMappingOptionsRenameCallback {
		(dest: string, matchedSrcPath: string, options: IFileExpandMappingOptions): string;
	}
}