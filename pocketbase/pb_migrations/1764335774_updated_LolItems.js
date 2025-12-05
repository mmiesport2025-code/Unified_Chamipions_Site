/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_lol_items017")

  // update collection data
  unmarshal({
    "name": "LolItem"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_lol_items017")

  // update collection data
  unmarshal({
    "name": "LolItems"
  }, collection)

  return app.save(collection)
})
