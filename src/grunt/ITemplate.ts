

module grunt {
	export interface ITemplate {
		process(template: string, options?: {}): any;
		
		setDelimiters(name: string): void;
		
		addDelimiters(name: string, opener: string, closer: string): void;
		
		date(date: Date, format: string): string;
		date(date: number, format: string): string;
		
		today(format: string): string;
	}
}