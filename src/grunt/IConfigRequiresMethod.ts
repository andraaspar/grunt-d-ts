module grunt {
	export interface IConfigRequiresMethod {
		(props: string[]): void;
		(prop: string, ...props: string[]): void;
	}
}