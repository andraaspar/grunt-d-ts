/// <reference path='ITaskLoadNPMTasksMethod.ts'/>
/// <reference path='ITaskLoadTasksMethod.ts'/>
/// <reference path='ITaskRegisterMultiTaskMethod.ts'/>
/// <reference path='ITaskRegisterTaskMethod.ts'/>
/// <reference path='ITaskRenameTaskMethod.ts'/>

module grunt {
	export interface ITask {
		registerTask: ITaskRegisterTaskMethod;
		
		
		
		registerMultiTask: ITaskRegisterMultiTaskMethod;
		
		
		
		requires(taskName: string): void;
		
		
		
		exists(name: string): boolean;
		
		
		
		renameTask: ITaskRenameTaskMethod;
		
		
		
		loadTasks: ITaskLoadTasksMethod;
		
		
		
		loadNpmTasks: ITaskLoadNPMTasksMethod;
		
		
		
		run(taskList: string[]): void;
		run(task: string, ...rest: string[]): void;
		
		
		
		clearQueue(): void;
		
		
		
		normalizeMultiTaskFiles(data: string, targetname?: string): {};
		normalizeMultiTaskFiles(data: {}, targetname?: string): {};
	}
}