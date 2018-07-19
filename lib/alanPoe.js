"use strict";

(function () {
    //sirven para forzar a ejecutar esto primero
    var alanPoe = function alanPoe(number) {
        var crow = "";
        for (var i = 0; i < number; i++) {
            crow += "Nunca más";
        }
        return crow;
    };

    //se utiliza para checar que no se esté utilizando l navegador ya que este solo existe en "chrome"
    if (typeof window == "undefined") {
        console.log("consola");
        module.exports = alanPoe;
    } else {
        console.log("navegador");
        window.alanPoe = alanPoe;
    }
})();