/// <reference path='ILogMethods.ts'/>
/// <reference path='ILogVerbose.ts'/>
/// <reference path='ILogWordlistOptions.ts'/>

module grunt {
	export interface ILog extends ILogMethods {
		verbose: ILogVerbose;
		notverbose: ILogVerbose;
		
		
		
		wordlist(arr: string, options?: ILogWordlistOptions): string;
		
		
		
		uncolor(str: string): string;
		
		
		
		wraptext(width: number, text: string): string;
		
		
		
		table(widths: number[], texts: string[]): string;
	}
}