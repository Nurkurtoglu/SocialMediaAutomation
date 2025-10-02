const db = require("./data-config");
const dbName = process.env.DB_NAME;
const sanitizeHtml = require("sanitize-html");

module.exports = {
    findMediaTable,
    findMediaById,
    addMedia,
    updatedMedia,
    deleteMedia
}

const ALLOWED_FIELDS = ["name", "link", "description"]; // whitelist

function sanitizeInput(obj) {
    const clean = {};
    if (obj == null || typeof obj !== "object") return clean;
    for (const key of ALLOWED_FIELDS) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] != null) {
            //name/description gibi alanları temizle; link için genelde isURL ile doğrulama yeterli
            if (typeof obj[key] === "string") {
                clean[key] = sanitizeHtml(obj[key], { allowedTags: [], allowedAttributes: {} }).trim();
            } else {
                clean[key] = obj[key];
            }
        }
    }
    return clean;
}

async function findMediaTable() {
    return await db(dbName);
}

async function findMediaById(id) {
    return await db(dbName).where({ id }).first();
}

// async function addMedia(newMedia) {

//     const inserted = await db(dbName).insert(newMedia, "id");
//     const id = inserted[0].id;
//     return await db(dbName).where({ id }).first();
// }

async function addMedia(newMedia) {

    const payload = sanitizeInput(newMedia);

    if (!payload.name || !payload.link) {
        throw new Error("Missing required fields");
    }
    const [insertedId] = await db("media_automation").insert(payload, "id");
    const id = insertedId.id || insertedId;
    return await db("media_automation").where({ id }).first();
}

async function updatedMedia(updateMedia, id) {
    const updated = await db(dbName).update(updateMedia).where({ id });
    if (updated) {
        return await db(dbName).where({ id }).first();
    }
}

async function deleteMedia(id) {
    return await db(dbName).del().where({ id });
}
