import Node from './arbol'
import Reversi from './reversi'
const { Router } = require('express');
const router = new Router();
const _ = require('underscore');




function LLenarArbol(turno,estado){

    var reversi  = new Reversi();
    reversi.LlenarInicial(estado);

    

    estadoActual=reversi.getInicial();

    //llenar informacion del valor del nodo
    var matrizValor = new Object()
    matrizValor.valor=estadoActual
    matrizValor.puntuacion=0
    matrizValor.x=0
    matrizValory=0

    var arborl = new Node(matrizValor);


    reversi.RecorridoH1(turno,estadoActual)
    reversi.RecorridoH2(turno,estadoActual)
    reversi.RecorridoV1(turno,estadoActual)
    reversi.RecorridoV2(turno,estadoActual)
    reversi.RecorridoD1(turno,estadoActual)
    reversi.RecorridoD2(turno,estadoActual)
    reversi.RecorridoD3(turno,estadoActual)
    reversi.RecorridoD4(turno,estadoActual)
    var sol = getSoluciones

    for (x=0;x<sol.length;x++) {
        reversi.setNewInical(turno,sol[x])
    }


}
     
router.get('/', (req, res) => {

    const turno = req.query.turno;
    const Estado = req.query.Estado;


});



module.exports = router;