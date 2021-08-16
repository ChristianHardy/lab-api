import mongodb from "../../__server/mongodb";
import { Task } from "../task";

async function updateTask(taskId: string, key: string, value: string | boolean): Promise<Task> {
	// Set the filter to find and update
	const filter = { uuid: taskId };

	// Set the new value
	const update = {
		"$set": {
			[key]: value,
		},
	};

	try {
		const { value } = await mongodb.collection().findOneAndUpdate(filter, update, { returnDocument: "after" });
		// Document could be undefined
		if (!value) {
			throw new Error("Error updating task in DB");
		}

		return {
			uuid: value.uuid,
			title: value.title,
			done: value.done,
		};
	} catch (error) {
		throw new Error("Error updating task in DB");
	}
}

export { updateTask };
