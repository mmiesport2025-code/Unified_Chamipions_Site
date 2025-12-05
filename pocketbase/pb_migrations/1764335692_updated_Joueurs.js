/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_joueurs001")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_jeux003",
    "hidden": false,
    "id": "relation473982447",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "id_jeu",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_reseaux006",
    "hidden": false,
    "id": "relation2536923489",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "id_reseaux",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_valo_agents007",
    "hidden": false,
    "id": "relation23074086",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "valo_agents",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_valo_map008",
    "hidden": false,
    "id": "relation3104457679",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "valo_map",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_valo_arme009",
    "hidden": false,
    "id": "relation1331847605",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "valo_arme",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_valo_skin010",
    "hidden": false,
    "id": "relation1429961426",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "valo_skin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_valo_rank011",
    "hidden": false,
    "id": "relation3745249833",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "valo_rank",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_valo_ret012",
    "hidden": false,
    "id": "relation3439918199",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "valo_reticule",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_main013",
    "hidden": false,
    "id": "relation3296842706",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "lol_main",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_skin014",
    "hidden": false,
    "id": "relation2043705000",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "lol_skin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_lol_pos015",
    "hidden": false,
    "id": "relation1138225159",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lol_positionnement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
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

  // add field
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

  // add field
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

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2710147437",
    "max": 0,
    "min": 0,
    "name": "prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1411584853",
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

  // update field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2170571947",
    "max": 0,
    "min": 0,
    "name": "pseudo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1815500461",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "portrait",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select408443112",
    "maxSelect": 2,
    "name": "nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Français",
      "Anglais"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_joueurs001")

  // remove field
  collection.fields.removeById("relation473982447")

  // remove field
  collection.fields.removeById("relation2536923489")

  // remove field
  collection.fields.removeById("relation23074086")

  // remove field
  collection.fields.removeById("relation3104457679")

  // remove field
  collection.fields.removeById("relation1331847605")

  // remove field
  collection.fields.removeById("relation1429961426")

  // remove field
  collection.fields.removeById("relation3745249833")

  // remove field
  collection.fields.removeById("relation3439918199")

  // remove field
  collection.fields.removeById("relation3296842706")

  // remove field
  collection.fields.removeById("relation2043705000")

  // remove field
  collection.fields.removeById("relation1138225159")

  // remove field
  collection.fields.removeById("relation750818524")

  // remove field
  collection.fields.removeById("relation3965933853")

  // remove field
  collection.fields.removeById("relation3278329578")

  // update field
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

  // update field
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

  // update field
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

  // update field
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

  // update field
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

  return app.save(collection)
})
