/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_reseaux006")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1819170229",
    "max": 0,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2044859080",
    "maxSelect": 1,
    "name": "reseaux_sociaux",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Facebook",
      "Insta",
      "Linkedin",
      "Tweeter",
      "Youtube"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_reseaux006")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("select2044859080")

  return app.save(collection)
})
