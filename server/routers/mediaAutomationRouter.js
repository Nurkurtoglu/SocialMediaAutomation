const router = require("express").Router();

const media = require('../data/data-model');

router.get("/", async (req, res, next) => {
    try {
        const result = await media.findMediaTable();
        if (result) {
            res.status(200).json(result);
        }
        else {
            next({ statusCode: 404, errorMessage: "Veriler bulunamadi." });
        }
    } catch (err) {
        next(err);
    }
});


// router.post("/", async (req, res, next) => {
//     try {
//         const newTodo = req.body;
//         console.log("POST ile gelen veri:", newTodo);

//         if (newTodo.todo_text) {
//             const result = await todo.addTodo(newTodo);

//             console.log(result);
//             return res.status(201).json(result);
//         } else {
//             next({
//                 statusCode: 400,
//                 errorMessage: "Todo eklemek icin veri girmelisiniz.",
//             });
//         }
//     } catch (err) {
//         console.error("Hata oluştu:", err);
//         next(err);
//     }
// });


// router.patch("//:id", async (req, res, next) => {
//     try {
//         const id = parseInt(req.params.id);
//         const updateTodo = req.body;

//         if (updateTodo) {
//             const updated = await todo.updatedTodo(updateTodo, id);
//             return res.status(200).json(updated);
//         }
//     } catch (error) {
//         next({
//             statusCode: 500,
//             errorMessage: "Aktor duzenlenirken hata olustu.",
//             error,
//         });
//     }
// })


// router.delete("//:id", async (req, res, next) => {
//     try {
//         const id = parseInt(req.params.id);

//         const deletedData = await todo.findTodoById(id);
//         if (deletedData) {
//             const deleted = await todo.deleteTodo(id);
//             if (deleted) {
//                 return res.status(204).end();
//             }
//         }

//         next({
//             statusCode: 400,
//             errorMessage: "Silmeye calistiginiz todo sistemde mevcut degil.",
//         });
//     } catch (error) {
//         next({
//             statusCode: 500,
//             errorMessage: "Todo silinirken hata olustu.",
//             error,
//         });
//     }
// });


module.exports = router; 