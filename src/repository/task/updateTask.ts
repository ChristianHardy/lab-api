import { updateTask as mongoUpdateTask } from "../mongodb/updateTask";
import { Task, TaskUpdateRequest } from "./__types";

async function updateTask(request: TaskUpdateRequest): Promise<Task> {
	let task: Task;

	// Get the
	try {
		task = await mongoUpdateTask(request.id, request.taskKey, request.value);
	} catch (error) {
		throw new Error(error);
	}

	return {
		uuid: task.uuid,
		title: task.title,
		done: task.done,
	};
}

export { updateTask };
