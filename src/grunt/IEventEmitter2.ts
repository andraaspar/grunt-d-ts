module grunt {
	export interface IEventEmitter2 {
		addListener(event: string, listener: Function): void;
		
		on(event: string, listener: Function): void;
		
		once(event: string, listener: Function): void;
		
		removeListener(event: string, listener: Function): void;
		
		off(event: string, listener: Function): void;
		
		
		
		onAny(listener: Function): void;
		
		offAny(listener: Function): void;
		
		
		
		many(event: string, timesToListen: number, listener: Function): void;
		
		
		
		removeAllListeners(event?: string): void;
		
		
		
		setMaxListeners(n: number): void;
		
		
		
		listeners(event: string): Function[];
		
		
		
		listenersAny(): Function[];
		
		
		
		emit(event: string, ...	args: any[]): void;
	}
}