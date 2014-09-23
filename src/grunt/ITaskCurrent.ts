/// <reference path='ITaskCurrentAsyncDoneCallback.ts'/>

module grunt {
	export interface ITaskCurrent {
		name: string;
		nameArgs: string;
		args: any[];
		flags: any;
		errorCount: number;
		
		
		
		async(): ITaskCurrentAsyncDoneCallback;
		
		
		
		requires(tasksList: string[]);
		requires(task: string, ...tasks: string[]);
		
		
		
		requiresConfig: IConfigRequiresMethod;
		
		
		
		options(defaultsObj?: {}): any;
	}
}