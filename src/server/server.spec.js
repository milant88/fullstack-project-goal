import { addNewTask, updateTask } from "./server";

(async function myFunc() {
    await addNewTask({
        name: 'My Task',
        id: '12345'
    });

    await updateTask({
        name: 'My task - UPDATED!!!!',
        id: '12345'
    });
})();