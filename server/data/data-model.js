const db = require("./data-config");

module.exports = {
    findMediaTable,
    findMediaById,
    addMedia,
    updatedMedia,
    deleteMedia
}

async function findMediaTable() {
    return await db("media_automation");
}

async function findMediaById(id) {
    return await db("media_automation").where({ id }).first();
}

async function addMedia(newMedia) {

    const inserted = await db("media_automation").insert(newMedia, "id");
    const id = inserted[0].id;
    return await db("media_automation").where({ id }).first();
}

async function updatedMedia(updateMedia, id) {
    const updated = await db("media_automation").update(updateMedia).where({ id });
    if (updated) {
        return await db("media_automation").where({ id }).first();
    }
}

async function deleteMedia(id) {
    return await db("media_automation").del().where({ id });
}
