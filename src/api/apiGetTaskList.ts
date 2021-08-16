import { insertTasks } from "../repository/mongodb/insertTasks";
import { getTaskList } from "../repository/task";
import { logger, toNumber } from "../__helpers";
import { ApiRequest, ApiResponse } from "../__server";

async function apiGetTaskList(req: ApiRequest, res: ApiResponse): Promise<ApiResponse> {
	// Get the quantity
	const quantity = toNumber(req.query.quantity, 3);

	// Get the task list
	const taskList = await getTaskList(quantity);

	// Persist the data in Mongo DB
	try {
		await insertTasks(taskList);
	} catch (err) {
		logger.error(`[api-error]: ${err}`);
		return res.status(503).json({ message: err });
	}

	return res.status(200).json(taskList);
}

export { apiGetTaskList };
