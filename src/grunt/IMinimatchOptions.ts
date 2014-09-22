module grunt {
	export interface IMinimatchOptions {
		debug?: boolean;
		nobrace?: boolean;
		noglobstar?: boolean;
		dot?: boolean;
		noext?: boolean;
		nocase?: boolean;
		nonull?: boolean;
		matchBase?: boolean;
		nocomment?: boolean;
		nonegate?: boolean;
		flipNegate?: boolean;
	}
}