/// <reference path='IFileExpandMappingOptionsRenameCallback.ts'/>

module grunt {
	export interface IFileExpandMappingOptions extends IFileExpandOptions {
		flatten?: boolean;
		ext?: string;
		extDot?: string;
		rename?: IFileExpandMappingOptionsRenameCallback;
	}
}