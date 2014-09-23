/// <reference path='IConfigInitMethod.ts'/>
/// <reference path='IConfigRequiresMethod.ts'/>

module grunt {
	export interface IConfig {
		(prop?: string, value?: any): any;
		
		
		
		init: IConfigInitMethod;
		
		
		
		get(prop?: string): any;
		
		
		
		process(value: any[]): any[];
		process(value: {}): {};
		process(value: string): any;
		
		
		
		getRaw(prop: string): any;
		getRaw(): {};
		
		
		
		set(prop: string, value: any): void;
		
		
		
		escape(propString: string): string;
		
		
		
		merge(configObject: {}): void;
		
		
		
		requires: IConfigRequiresMethod;
	}
}