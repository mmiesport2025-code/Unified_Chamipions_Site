/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_equipes002")

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
    "id": "bool1819182086",
    "name": "appartenance_au_club",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select4263580191",
    "maxSelect": 1,
    "name": "specificite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Masculine",
      "Feminine",
      "Mixte"
    ]
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_joueurs001",
    "hidden": false,
    "id": "relation3678805032",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "id_joueur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_equipes002")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("bool1819182086")

  // remove field
  collection.fields.removeById("select4263580191")

  // remove field
  collection.fields.removeById("relation3678805032")

  // remove field
  collection.fields.removeById("relation473982447")

  return app.save(collection)
})
