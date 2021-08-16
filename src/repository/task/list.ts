import axios from "axios";
import { logger, toNumber } from "../../__helpers";
import { Task } from "./__types";
import { v4 } from "uuid";

/**
 * Function to get task list
 * from external server
 */
async function getTaskList(qty?: number): Promise<Task[]> {
	// Set quantity on 3 by default
	const quantity = toNumber(qty, 3);

	// Make a external API request
	try {
		const res = await axios.get<string[]>(`https://lorem-faker.vercel.app/api?quantity=${quantity}`);
		return res.data.map(task => ({
			uuid: v4(),
			title: task,
			done: false,
		}));
	} catch (err) {
		logger.error("Error getting external task list API", err);
		throw new Error("Error getting external task list API");
	}
}

export { getTaskList };
