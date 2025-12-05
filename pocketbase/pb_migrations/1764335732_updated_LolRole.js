/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_lol_role018")

  // update collection data
  unmarshal({
    "name": "LolRank"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_lol_role018")

  // update collection data
  unmarshal({
    "name": "LolRole"
  }, collection)

  return app.save(collection)
})
