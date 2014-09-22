/// <reference path='IFileExpandMappingOptions.ts'/>

module grunt {
	export interface ISrcDestFileMapping extends IFileExpandMappingOptions {
		src: any;
		dest: string;
	}
}