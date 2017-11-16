const express = require("express")

const get = require("./get")

const router = express.Router({ mergeParams: true })

/**
 * @api {get} /api/v1/static/:id Obtener todos los datos estáticos para una linea
 * @apiVersion 1.0.0
 * @apiName ObtenerStaticLinea
 * @apiGroup Estatico
 *
 * @apiParam {Number} id ID único de la línea.
 *
 * @apiSuccess {Object} response Respuesta del servidor.
 * @apiSuccess {String} response.id ID de la línea.
 * @apiSuccess {String} response.name Nombre de la línea.
 * @apiSuccess {Object[]} response.branches Array de ramales de la linea.
 * @apiSuccess {String} response.branches.id ID del ramal.
 * @apiSuccess {String} response.branches.name Nombre del ramal.
 * @apiSuccess {String} response.branches.slug Nombre URL friendly del ramal.
 * @apiSuccess {Object[]} response.branches.directions Array de sentidos del ramal.
 * @apiSuccess {String} response.branches.directions.id ID de la direccion.
 * @apiSuccess {String} response.branches.directions.name Nombre de la direccion.
 * @apiSuccess {String} response.branches.directions.color Color de la direccion.
 * @apiSuccess {String} response.path URIEncoded string con el recorrido.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "response": {
 *         "id": "roca",
 *         "name": "Roca",
 *         "branches": [{
 *           "id": 37,
 *           "name": "Ezeiza - Cañuelas",
 *           "slug": "cañuelas",
 *           "directions": [{
 *             "id": 37,
 *             "name": "Ezeiza",
 *             "color": "info"
 *           }],
 *           "stations": [{
 *             "index": 0,
 *             "id": "ezeiza",
 *             "name": "Ezeiza",
 *             "position": {
 *               "lat": -34.8540842,
 *               "lng": -58.5228154
 *             }
 *           }]
 *         }],
 *         "path": "..."
 *       }
 *     }
 *
 * @apiError error Error generico, posiblemente generado por el bloqueo de SOFSE.
 * @apiError detail Detalle del error devuelto por SOFSE.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Error",
 *       "detail": {}
 *     }
 */
router.route("/").get(get)

module.exports = router
