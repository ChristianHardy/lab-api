/*------------------------------------------------------------------------
 * Types for Task
 -----------------------------------------------------------------------*/
export type Task = {
	uuid: string;
	title: string;
	done: boolean;
};

/*------------------------------------------------------------------------
 * Types for update task request
 -----------------------------------------------------------------------*/
export type TaskUpdateRequest = {
	id: string;
	taskKey: keyof Task;
	value: string | boolean;
};
