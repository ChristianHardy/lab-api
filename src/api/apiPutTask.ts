import { updateTask } from "../repository/task/updateTask";
import { logger, toBool, toStr } from "../__helpers";
import { ApiRequest, ApiResponse } from "../__server";

async function apiPutTask(req: ApiRequest, res: ApiResponse): Promise<ApiResponse> {
	// Get the task id & the done value
	const taskId = toStr(req.body.taskId);
	const value = toBool(req.body.done);

	// If not exists a task id return a bad request error
	if (!taskId) {
		return res.status(400).json({ message: "Invalid task id, try again" });
	}

	const updatedTask = await updateTask({ id: taskId, taskKey: "done", value });
	return res.status(200).json(updatedTask);
}

export { apiPutTask };
