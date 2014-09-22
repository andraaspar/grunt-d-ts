module grunt {
	export interface IOption {
		(key: string, value: any): void;
		(key: string): any;
		
		
		
		init(initObject?: {}): void;
		
		
		
		flags(): string[];
	}
}