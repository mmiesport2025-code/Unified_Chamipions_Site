/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_joueurs001")

  // update collection data
  unmarshal({
    "createRule": null,
    "updateRule": null
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2710147437",
    "max": 0,
    "min": 0,
    "name": "Prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1411584853",
    "max": 0,
    "min": 0,
    "name": "Nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2170571947",
    "max": 0,
    "min": 0,
    "name": "Pseudo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1815500461",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Portrait",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select408443112",
    "maxSelect": 2,
    "name": "Nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Français",
      "Anglais"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_jeux003",
    "hidden": false,
    "id": "relation4170301721",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_jeu_maitriser",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_joueurs001")

  // update collection data
  unmarshal({
    "createRule": "",
    "updateRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("text2710147437")

  // remove field
  collection.fields.removeById("text1411584853")

  // remove field
  collection.fields.removeById("text2170571947")

  // remove field
  collection.fields.removeById("file1815500461")

  // remove field
  collection.fields.removeById("select408443112")

  // remove field
  collection.fields.removeById("relation4170301721")

  return app.save(collection)
})
