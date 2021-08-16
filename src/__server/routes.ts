import { apiGetTaskList } from "../api/apiGetTaskList";
import { apiPutTask } from "../api/apiPutTask";
import { ExpressRoutesPool } from "./__types";

export const expressRoutes: ExpressRoutesPool = [
	{
		method: "get",
		path: "/task-list",
		handler: apiGetTaskList,
	},
	{
		method: "put",
		path: "/tasks",
		handler: apiPutTask,
	},
];
