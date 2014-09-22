module grunt {
	export interface ILogMethods {
		write(msg: string): ILogMethods;
		
		errorlns(msg: string): ILogMethods;
		
		oklns(msg: string): ILogMethods;
		
		subhead(msg: string): ILogMethods;
		
		debug(msg: string): ILogMethods;
		
		
		
		writeln(msg?: string): ILogMethods;
		
		error(msg?: string): ILogMethods;
		
		ok(msg?: string): ILogMethods;
		
		
		
		writeflags(obj: {}, prefix: string): ILogMethods;
	}
}