import mongodb from "../../__server/mongodb";
import { Task } from "../task";

async function insertTasks(items: Task[]): Promise<void> {
	try {
		await mongodb.collection().insertMany(items);
	} catch (error) {
		throw new Error("Error inserting taks in DB");
	}
}

export { insertTasks };
