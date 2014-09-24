/// <reference path='IFileExpandMappingOptionsRenameCallback.ts'/>

module grunt {
	export interface IFileExpandMappingOptions extends IFileExpandOptions {
		src?: string[];
		dest?: string;
		flatten?: boolean;
		ext?: string;
		extDot?: string;
		rename?: IFileExpandMappingOptionsRenameCallback;
	}
}