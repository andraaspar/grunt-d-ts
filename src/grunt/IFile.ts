/// <reference path='IFileCopyOptions.ts'/>
/// <reference path='IFileDeleteOptions.ts'/>
/// <reference path='IFileExpandMappingOptions.ts'/>
/// <reference path='IFileExpandOptions.ts'/>
/// <reference path='IFileReadOptions.ts'/>
/// <reference path='IFileRecurseCallback.ts'/>
/// <reference path='ISrcDestFileMapping.ts'/>

module grunt {
	export interface IFile {
		defaultEncoding: string;
		preserveBOM: boolean;
		
		
		
		read(filepath: string, options?: IFileReadOptions): string;
		
		readJSON(filepath: string, options?: IFileReadOptions): any;
		
		readYAML(filepath: string, options?: IFileReadOptions): any;
		
		
		
		write(filepath: string, contents: any, options?: IFileReadOptions): void;
		
		
		
		copy(srcpath: string, destpath: string, options?: IFileCopyOptions): void;
		
		
		
		delete(filepath: string, options?: IFileDeleteOptions): void;
		
		
		
		mkdir(dirpath: string, mode?: number): void;
		
		
		
		recurse(rootdir: string, callback: IFileRecurseCallback): void;
		
		
		
		expand(options: IFileExpandOptions, ...patterns: string[]): string[];
		expand(pattern: string, ...patterns: string[]): string[];
		
		
		
		expandMapping(patterns: string[], dest: string, options?: IFileExpandMappingOptions): ISrcDestFileMapping[];
		
		
		
		match(options: IMinimatchOptions, patterns: string[], filepaths: string[]): string[];
		match(options: IMinimatchOptions, patterns: string[], filepath: string): string[];
		match(options: IMinimatchOptions, pattern: string, filepaths: string[]): string[];
		match(options: IMinimatchOptions, pattern: string, filepath: string): string[];
		match(patterns: string[], filepaths: string[]): string[];
		match(patterns: string[], filepath: string): string[];
		match(pattern: string, filepaths: string[]): string[];
		match(pattern: string, filepath: string): string[];
		
		
		isMatch(options: IMinimatchOptions, patterns: string[], filepaths: string[]): boolean;
		isMatch(options: IMinimatchOptions, patterns: string[], filepath: string): boolean;
		isMatch(options: IMinimatchOptions, pattern: string, filepaths: string[]): boolean;
		isMatch(options: IMinimatchOptions, pattern: string, filepath: string): boolean;
		isMatch(patterns: string[], filepaths: string[]): boolean;
		isMatch(patterns: string[], filepath: string): boolean;
		isMatch(pattern: string, filepaths: string[]): boolean;
		isMatch(pattern: string, filepath: string): boolean;
		
		
		
		exists(path: string, ...paths: string[]): boolean;
		
		isLink(path: string, ...paths: string[]): boolean;
		
		isDir(path: string, ...paths: string[]): boolean;
		
		isFile(path: string, ...paths: string[]): boolean;
		
		isPathAbsolute(path: string, ...paths: string[]): boolean;
		
		arePathsEquivalent(path: string, ...paths: string[]): boolean;
		
		isPathCwd(path: string, ...paths: string[]): boolean;
		
		isPathInCwd(path: string, ...paths: string[]): boolean;
		
		setBase(path: string, ...paths: string[]): boolean;
		
		
		
		doesPathContain(ancestorPath: string, descendantPath: string, ...paths: string[]): boolean;
	}
}