/// <reference path='IConfig.ts'/>
/// <reference path='IFile.ts'/>
/// <reference path='ITask.ts'/>
/// <reference path='ITemplate.ts'/>

module grunt {
	export interface IGrunt {
		config: IConfig;
		file: IFile;
		task: ITask;
		template: ITemplate;
	}
}