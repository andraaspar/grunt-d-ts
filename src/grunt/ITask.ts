

module grunt {
	export interface ITask {
		registerTask(taskName: string, taskList: string[]): void;
		registerTask(taskName: string, description: string, taskFunction: Function): void;
		
		registerMultiTask(taskName: string, description: string, taskFunction: Function): void;
		
		requires(taskName: string): void;
		
		exists(name: string): boolean;
		
		renameTask(oldname: string, newname: string): void;
		
		loadTasks(tasksPath: string): void;
		
		loadNPMTasks(pluginName: string): void;
		
		run(taskList: string[]): void;
		run(task: string, ...rest: string[]): void;
		
		clearQueue(): void;
		
		normalizeMultiTaskFiles(data: string, targetname?: string): {};
		normalizeMultiTaskFiles(data: {}, targetname?: string): {};
	}
}