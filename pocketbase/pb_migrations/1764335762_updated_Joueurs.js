/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_joueurs001")

  // update field
  collection.fields.addAt(18, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_role018",
    "hidden": false,
    "id": "relation750818524",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lol_rank",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(19, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_mode016",
    "hidden": false,
    "id": "relation3965933853",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "lol_mode",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(20, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_items017",
    "hidden": false,
    "id": "relation3278329578",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lol_item",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_joueurs001")

  // update field
  collection.fields.addAt(18, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_role018",
    "hidden": false,
    "id": "relation750818524",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lol_role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(19, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_mode016",
    "hidden": false,
    "id": "relation3965933853",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lol_mode",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(20, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_items017",
    "hidden": false,
    "id": "relation3278329578",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lol_items",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
