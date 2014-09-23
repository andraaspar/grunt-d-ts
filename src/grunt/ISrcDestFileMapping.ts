/// <reference path='IFileExpandMappingOptions.ts'/>

module grunt {
	export interface ISrcDestFileMapping {
		src: string[];
		dest: string;
		orig: any;
	}
}