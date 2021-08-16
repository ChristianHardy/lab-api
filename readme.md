Hi! I am very excited to present this project.

I have used a docker image with MongoDB to be used as database in the project.

The `.env` file is added for demonstration purposes.

Instructions:

1. **Run the docker image:** run the command docker compose up, this downloads an image of mongo and `mongo-express`, `mongo-express` is a web UI manager, you access it by logging into [http://localhost:8081](http://localhost:8081/) (port 8081 is configurable from env with the variable `MONGO_EXPRESS_PORT`)
2. **Run the backend project:** once the docker image is running run the command `npm run start`, this will wake up the server and make the connections to the database and activate the following APIs

`GET localhost:3003/task-list (gets 3 tasks by default)`

`GET localhost:3003/task-list?quantity=4 (gets 4 tasks)`

`PUT localhost:3003/tasks (updates the status of a task)`

```jsx
{
	"taskId": {task UUID},
	"done": true
}
```