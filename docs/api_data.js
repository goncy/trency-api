define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/static",
    "title": "Obtener todos los datos estáticos de la aplicación",
    "version": "1.0.0",
    "name": "ObtenerStatic",
    "group": "Estatico",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Respuesta del servidor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.id",
            "description": "<p>ID de la línea.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Nombre de la línea.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response.branches",
            "description": "<p>Array de ramales de la linea.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.id",
            "description": "<p>ID del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.name",
            "description": "<p>Nombre del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.slug",
            "description": "<p>Nombre URL friendly del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response.branches.directions",
            "description": "<p>Array de sentidos del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.directions.id",
            "description": "<p>ID de la direccion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.directions.name",
            "description": "<p>Nombre de la direccion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.directions.color",
            "description": "<p>Color de la direccion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.path",
            "description": "<p>URIEncoded string con el recorrido.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\": [{\n    \"id\": \"roca\",\n    \"name\": \"Roca\",\n    \"branches\": [{\n      \"id\": 37,\n      \"name\": \"Ezeiza - Cañuelas\",\n      \"slug\": \"cañuelas\",\n      \"directions\": [{\n        \"id\": 37,\n        \"name\": \"Ezeiza\",\n        \"color\": \"info\"\n      }],\n      \"stations\": [{\n        \"index\": 0,\n        \"id\": \"ezeiza\",\n        \"name\": \"Ezeiza\",\n        \"position\": {\n          \"lat\": -34.8540842,\n          \"lng\": -58.5228154\n        }\n      }]\n    }],\n    \"path\": \"...\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error generico, posiblemente generado por el bloqueo de SOFSE.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "detail",
            "description": "<p>Detalle del error devuelto por SOFSE.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Error\",\n  \"detail\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/api/v1/static/index/index.js",
    "groupTitle": "Estatico"
  },
  {
    "type": "get",
    "url": "/api/v1/static/:id",
    "title": "Obtener todos los datos estáticos para una linea",
    "version": "1.0.0",
    "name": "ObtenerStaticLinea",
    "group": "Estatico",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único de la línea.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Respuesta del servidor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.id",
            "description": "<p>ID de la línea.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Nombre de la línea.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response.branches",
            "description": "<p>Array de ramales de la linea.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.id",
            "description": "<p>ID del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.name",
            "description": "<p>Nombre del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.slug",
            "description": "<p>Nombre URL friendly del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response.branches.directions",
            "description": "<p>Array de sentidos del ramal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.directions.id",
            "description": "<p>ID de la direccion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.directions.name",
            "description": "<p>Nombre de la direccion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.branches.directions.color",
            "description": "<p>Color de la direccion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.path",
            "description": "<p>URIEncoded string con el recorrido.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\": {\n    \"id\": \"roca\",\n    \"name\": \"Roca\",\n    \"branches\": [{\n      \"id\": 37,\n      \"name\": \"Ezeiza - Cañuelas\",\n      \"slug\": \"cañuelas\",\n      \"directions\": [{\n        \"id\": 37,\n        \"name\": \"Ezeiza\",\n        \"color\": \"info\"\n      }],\n      \"stations\": [{\n        \"index\": 0,\n        \"id\": \"ezeiza\",\n        \"name\": \"Ezeiza\",\n        \"position\": {\n          \"lat\": -34.8540842,\n          \"lng\": -58.5228154\n        }\n      }]\n    }],\n    \"path\": \"...\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error generico, posiblemente generado por el bloqueo de SOFSE.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "detail",
            "description": "<p>Detalle del error devuelto por SOFSE.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Error\",\n  \"detail\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/api/v1/static/line/index.js",
    "groupTitle": "Estatico"
  },
  {
    "type": "get",
    "url": "/api/v1/data/:id",
    "title": "Obtener horarios y posición de un ramal específico",
    "version": "1.0.0",
    "name": "ObtenerRamal",
    "group": "Informacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID único del ramal.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Respuesta del servidor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response.arrivals",
            "description": "<p>Array de arribos.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.arrivals.nombre",
            "description": "<p>Nombre de la estacion de arribo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.arrivals.minutos_1",
            "description": "<p>Minutos para arribo del primer tren en sentido ida.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.arrivals.minutos_2",
            "description": "<p>Minutos para arribo del segundo tren en sentido ida.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.arrivals.minutos_3",
            "description": "<p>Minutos para arribo del primer tren en sentido vuelta.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.arrivals.minutos_4",
            "description": "<p>Minutos para arribo del segundo tren en sentido vuelta.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"response\": {\n    \"arrivals\": [{\n      \"nombre\": \"Cabred\",\n      \"minutos_1\": \"29\",\n      \"minutos_2\": \"41\",\n      \"minutos_3\": \"4\",\n      \"minutos_4\": \"-1\"\n    }],\n    \"positions\": [{\n      \"formacion_id\": 300007,\n      \"latitud\": \"-34.589131\",\n      \"longitud\": \"-58.373620\",\n      \"ramal\": 32,\n      \"estado_servicio\": 1,\n      \"estado_mov\": 3\n    }]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error generico, posiblemente generado por el bloqueo de SOFSE.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "detail",
            "description": "<p>Detalle del error devuelto por SOFSE.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Error\",\n  \"detail\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/api/v1/data/branch/index.js",
    "groupTitle": "Informacion"
  }
] });
