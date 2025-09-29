
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('media_automation').del()
  await knex('media_automation').insert([
    { id: 1, link: 'rowValue1', name: 'name1', description: 'description1', created_at: knex.fn.now(), updated_at: knex.fn.now() },
    { id: 2, link: 'rowValue2', name: 'name2', description: 'description2', created_at: knex.fn.now(), updated_at: knex.fn.now() },
    { id: 3, link: 'rowValue3', name: 'name3', description: 'description3', created_at: knex.fn.now(), updated_at: knex.fn.now() },
  ]);
};
