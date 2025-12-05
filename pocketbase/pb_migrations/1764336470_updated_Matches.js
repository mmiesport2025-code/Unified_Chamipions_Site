/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_matches004")

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
    "id": "date3894085241",
    "max": "",
    "min": "",
    "name": "debut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2905535025",
    "max": "",
    "min": "",
    "name": "fin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool4249231845",
    "name": "diffusion_en_live",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1297868055",
    "max": 0,
    "min": 0,
    "name": "url_live",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool1161216031",
    "name": "rediffusion",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text488556291",
    "max": 0,
    "min": 0,
    "name": "url_rediffusion",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_equipes002",
    "hidden": false,
    "id": "relation41816056",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "id_equipe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_jeux003",
    "hidden": false,
    "id": "relation473982447",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_jeu",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_gamemode005",
    "hidden": false,
    "id": "relation2434834689",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "id_gamemode",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_matches004")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("date3894085241")

  // remove field
  collection.fields.removeById("date2905535025")

  // remove field
  collection.fields.removeById("bool4249231845")

  // remove field
  collection.fields.removeById("text1297868055")

  // remove field
  collection.fields.removeById("bool1161216031")

  // remove field
  collection.fields.removeById("text488556291")

  // remove field
  collection.fields.removeById("relation41816056")

  // remove field
  collection.fields.removeById("relation473982447")

  // remove field
  collection.fields.removeById("relation2434834689")

  return app.save(collection)
})
