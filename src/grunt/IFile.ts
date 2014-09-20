/// <reference path='IFileCopyOptionsObject.ts'/>
/// <reference path='IFileDeleteOptionsObject.ts'/>
/// <reference path='IFileReadOptionsObject.ts'/>

module grunt {
	export interface IFile {
		defaultEncoding: string;
		
		preserveBOM: boolean;
		
		read(filepath: string, options?: IFileReadOptionsObject): string;
		
		readJSON(filepath: string , options?: IFileReadOptionsObject): any;
		
		readYAML(filepath: string , options?: IFileReadOptionsObject): any;
		
		write(filepath: string, contents: any, options?: IFileReadOptionsObject): void;
		
		copy(srcpath: string, destpath: string, options?: IFileCopyOptionsObject): void;
		
		delete(filepath: string, options?: IFileDeleteOptionsObject): void;
		
		
	}
}