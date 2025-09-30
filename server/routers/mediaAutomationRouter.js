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


router.get("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        if (id) {
            const byId = await media.findMediaById(id);
            return res.status(200).json(byId);
        }
    } catch (error) {
        next({
            statusCode: 500,
            errorMessage: "İstenilen id ye gore veri getirilirken hata olustu.",
            error,
        });
    }
})


router.post("/", async (req, res, next) => {
    try {
        const newMedia = req.body;
        console.log("POST ile gelen veri:", newMedia);

        if (newMedia.link && newMedia.name) {
            const result = await media.addMedia(newMedia);

            console.log(result);
            return res.status(201).json(result);
        } else {
            next({
                statusCode: 400,
                errorMessage: "Sosyal medya eklemek icin isim ve link girmelisiniz.",
            });
        }
    } catch (err) {
        console.error("Hata oluştu:", err);
        next(err);
    }
});


router.patch("/:id", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const updateMedia = req.body;

        if (updateMedia) {
            const updated = await media.updatedMedia(updateMedia, id);
            return res.status(200).json(updated);
        }
    } catch (error) {
        next({
            statusCode: 500,
            errorMessage: "Sosyal medya duzenlenirken hata olustu.",
            error,
        });
    }
})


router.delete("/:id", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const deletedData = await media.findMediaById(id);
        if (deletedData) {
            const deleted = await media.deleteMedia(id);
            if (deleted) {
                return res.status(204).end();
            }
        }

        next({
            statusCode: 400,
            errorMessage: "Silmeye calistiginiz medya sistemde mevcut degil.",
        });
    } catch (error) {
        next({
            statusCode: 500,
            errorMessage: "Medya silinirken hata olustu.",
            error,
        });
    }
});


module.exports = router; 