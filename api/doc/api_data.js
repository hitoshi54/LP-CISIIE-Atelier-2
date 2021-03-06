define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc.old/main.js",
    "group": "D__Wamp_www_atelier2_LP_CISIIE_Atelier_2_api_doc_old_main_js",
    "groupTitle": "D__Wamp_www_atelier2_LP_CISIIE_Atelier_2_api_doc_old_main_js",
    "name": ""
  },
  {
    "group": "Destinations",
    "name": "destinationFinale",
    "version": "0.1.0",
    "type": "get",
    "url": "/destinations",
    "title": "Accès à une ressource destination",
    "description": "<p>Retourne un tableau contenant une représentation json d'une destination finale chosie aléatoirement.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "indice1",
            "description": "<p>Indice numéro un de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "indice2",
            "description": "<p>Indice numéro deux de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "indice3",
            "description": "<p>Indice numéro trois de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "indice4",
            "description": "<p>Indice numéro quatre de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "indice5",
            "description": "<p>Indice numéro cinq de la destination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\t{\n\t\t\"destination\": {\n\t\t\t\"id\": 6,\n\t\t\t\"nom\": \"Cherbourg\",\n\t\t\t\"latitude\": 49.6337308,\n\t\t\t\"longitude\": -1.622137,\n\t\t\t\"indice1\": \"Une des plus grosses bases de défense\",\n\t\t\t\"indice2\": \"Emmanuel Liais\",\n\t\t\t\"indice3\": \"La Montagne du Roule\",\n\t\t\t\"indice4\": \"Mes parapluies me sont célèbres\",\n\t\t\t\"indice5\": \"Cotentin\"\n\t\t }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Destinations"
  },
  {
    "group": "Parties",
    "name": "meilleurScores",
    "version": "0.1.0",
    "type": "get",
    "url": "/parties",
    "title": "Accès au tableau des 10 meilleurs scores",
    "description": "<p>Retourne un tableau contenant une représentation json des 10 meilleurs scores.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": "<p>Pseudo du joueur</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Score obtenu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\t{\n\n\t\t\"scores\": [\n\t\t\t{\n\t\t\t\t\"id\": 25,\n\t\t\t\t\"pseudo\": \"david\",\n\t\t\t\t\"score\": 10\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 29,\n\t\t\t\t\"pseudo\": \"paul\",\n\t\t\t\t\"score\": 10\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 27,\n\t\t\t\t\"pseudo\": \"Bob\",\n\t\t\t\t\"score\": 10\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 28,\n\t\t\t\t\"pseudo\": \"rémi\",\n\t\t\t\t\"score\": 10\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 23,\n\t\t\t\t\"pseudo\": \"hugues\",\n\t\t\t\t\"score\": 8\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 22,\n\t\t\t\t\"pseudo\": \"paul\",\n\t\t\t\t\"score\": 6\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 20,\n\t\t\t\t\"pseudo\": \"françois\",\n\t\t\t\t\"score\": 1\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 30,\n\t\t\t\t\"pseudo\": \"michel\",\n\t\t\t\t\"score\": 1\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 24,\n\t\t\t\t\"pseudo\": \"maurice\",\n\t\t\t\t\"score\": 1\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\": 19,\n\t\t\t\t\"pseudo\": \"bob\",\n\t\t\t\t\"score\": 0\n\t\t\t}\n\t\t]\n\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Parties"
  },
  {
    "group": "Parties",
    "name": "newGame",
    "version": "0.1.0",
    "type": "post",
    "url": "/parties",
    "title": "Création de la partie",
    "description": "<p>Création de la partie (exemple de JSON-type à renvoyer : { &quot;pseudo&quot; : &quot;Bob&quot; })</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": "<p>Pseudo entré par l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 201": [
          {
            "group": "Succès : 201",
            "type": "json",
            "optional": false,
            "field": "info",
            "description": "<p>Creation de la partie</p>"
          },
          {
            "group": "Succès : 201",
            "type": "json",
            "optional": false,
            "field": "token",
            "description": "<p>Token de la partie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 201 Created\n\n    {\n      \"info\" : \"Creation de la partie : http://localhost/github/LP-CISIIE-Atelier-2/api/parties\",\n\t\t\"token\" : \"eouglrziogoeujhreosjhojtr\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Erreur de pseudo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Pseudo introuvable",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Erreur de pseudo : http://localhost/github/LP-CISIIE-Atelier-2/api/parties\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Parties"
  },
  {
    "group": "Parties",
    "name": "scorePartie",
    "version": "0.1.0",
    "type": "put",
    "url": "/parties/score",
    "title": "Enregistrement du score",
    "description": "<p>Enregistrement du score d'un partie (exemple de JSON-type à renvoyer : { &quot;score&quot; : 10 , &quot;token&quot; : &quot;iuegh96r5hg26reh52e6&quot; })</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>Score obtenu par l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de la partie en cours</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Le token n'existe pas</p>"
          }
        ],
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Le score est incorrect</p>"
          },
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "Error",
            "description": "<p>Une valeur est manquante (token ou score)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Token non trouvé",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"Le token n'existe pas : http://localhost/github/LP-CISIIE-Atelier-2/api/parties\"\n}",
          "type": "json"
        },
        {
          "title": "Erreur de score",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Le score est incorrect : http://localhost/github/LP-CISIIE-Atelier-2/api/parties\"\n}",
          "type": "json"
        },
        {
          "title": "Valeur manquante",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Une valeur est manquante (token ou score) : http://localhost/github/LP-CISIIE-Atelier-2/api/parties\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Succès : 201": [
          {
            "group": "Succès : 201",
            "optional": false,
            "field": "info",
            "description": "<p>Ajout du score de la partie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "HTTP/1.1 201 Created\n\n{\n  \"info\" : \"Ajout du score de la partie : http://localhost/github/LP-CISIIE-Atelier-2/api/parties\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Parties"
  },
  {
    "group": "Points",
    "name": "recupPoints",
    "version": "0.1.0",
    "type": "get",
    "url": "/points",
    "title": "Accès à 5 ressources points",
    "description": "<p>Retourne un tableau contenant une représentation json de 5 points choisis aléatoirement.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant du point</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude du point</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude du point</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "indication",
            "description": "<p>Indication du point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\t{\n\t \t\"points\": {\n\t\t\t\"id\": 6,\n\t\t\t\"latitude\": 49.8944,\n\t\t\t\"longitude\": 2.30194,\n\t\t\t\"indication\": \"La plus grande cathédrale de France\"\n\t\t }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Points"
  }
] });
