const express = require("express")

const get = require("./get")

const router = express.Router({ mergeParams: true })

/**
 * @api {get} /api/v1/data/:id Obtener horarios y posición de un ramal específico
 * @apiVersion 1.0.0
 * @apiName ObtenerRamal
 * @apiGroup Informacion
 *
 * @apiParam {Number} id ID único del ramal.
 *
 * @apiSuccess {Object} response Respuesta del servidor.
 * @apiSuccess {Object[]} response.arrivals Array de arribos.
 * @apiSuccess {String} response.arrivals.nombre Nombre de la estacion de arribo.
 * @apiSuccess {String} response.arrivals.minutos_1 Minutos para arribo del primer tren en sentido ida.
 * @apiSuccess {String} response.arrivals.minutos_2 Minutos para arribo del segundo tren en sentido ida.
 * @apiSuccess {String} response.arrivals.minutos_3 Minutos para arribo del primer tren en sentido vuelta.
 * @apiSuccess {String} response.arrivals.minutos_4 Minutos para arribo del segundo tren en sentido vuelta.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "response": {
 *         "arrivals": [{
 *           "nombre": "Cabred",
 *           "minutos_1": "29",
 *           "minutos_2": "41",
 *           "minutos_3": "4",
 *           "minutos_4": "-1"
 *         }],
 *         "positions": [{
 *           "formacion_id": 300007,
 *           "latitud": "-34.589131",
 *           "longitud": "-58.373620",
 *           "ramal": 32,
 *           "estado_servicio": 1,
 *           "estado_mov": 3
 *         }]
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
