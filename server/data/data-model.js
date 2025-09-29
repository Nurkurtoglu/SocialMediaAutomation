const db = require("./data-config");

module.exports = {
    findMediaTable,


}

async function findMediaTable() {
    return await db("media_automation");
}

// async function findTodoById(id) {
//     return await db("todo").where({ todo_id: id }).first();
// }

// async function addTodo(newTodo) {

//     const inserted = await db("todo").insert(newTodo, "todo_id");
//     const todo_id = inserted[0].todo_id;
//     return await db("todo").where({ todo_id }).first();
// }
// async function updatedTodo(updateTodo, id) {
//     const updated = await db("todo").update(updateTodo).where({ todo_id: id });
//     if (updated) {
//         return await db("todo").where({ todo_id: id }).first();
//     }
// }

// async function deleteTodo(id) {
//     return await db("todo").del().where({ todo_id: id });
// }
