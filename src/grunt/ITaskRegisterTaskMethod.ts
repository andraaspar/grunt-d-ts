module grunt {
	export interface ITaskRegisterTaskMethod {
		(taskName: string, description: string, taskFunction: Function): void;
		(taskName: string, taskList: string[]): void;
	}
}