module grunt {
	export interface ITaskRegisterMultiTaskMethod {
		(taskName: string, description: string, taskFunction: Function): void;
	}
}