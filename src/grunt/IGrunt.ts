/// <reference path='IConfig.ts'/>
/// <reference path='IEvent.ts'/>
/// <reference path='IFail.ts'/>
/// <reference path='IFile.ts'/>
/// <reference path='ILog.ts'/>
/// <reference path='IOption.ts'/>
/// <reference path='ITask.ts'/>
/// <reference path='ITemplate.ts'/>
/// <reference path='IUtil.ts'/>

module grunt {
	export interface IGrunt {
		config: IConfig;
		initConfig: IConfigInitMethod;
		
		event: IEvent;
		
		fail: IFail;
		warn: IFailWarnMethod;
		fatal: IFailWarnMethod;
		
		file: IFile;
		
		log: ILog;
		verbose: ILogVerbose;
		notverbose: ILogVerbose;
		
		option: IOption;
		
		task: ITask;
		registerTask: ITaskRegisterTaskMethod;
		registerMultiTask: ITaskRegisterMultiTaskMethod;
		renameTask: ITaskRenameTaskMethod;
		loadTasks: ITaskLoadTasksMethod;
		loadNPMTasks: ITaskLoadNPMTasksMethod;
		
		template: ITemplate;
		
		util: IUtil;
	}
}