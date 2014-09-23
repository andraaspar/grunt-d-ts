/// <reference path='IFileExpandMappingOptions.ts'/>

module grunt {
	export interface ISrcDestFileMapping {
		src: any;
		dest: string;
		orig: any;
	}
}