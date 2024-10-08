function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let pregunta;
    let contadorId = 0;

    for (let d of datos) {
        let devolucionDiv;

        if (d["Tipo"] === "Pregunta"){
            pregunta = d["Texto"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Texto"];
            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            
        } else if (d["Tipo"] === "Respuesta") {
            devolucionDiv = document.createElement('div');
            let rta = document.createElement('li');
            let chBox = document.createElement('input');
            chBox.type = 'checkbox';
            chBox.name = pregunta
            chBox.id = `${d["Texto"] === "No" ? d["Texto"] : "Si"}${contadorId}`;
            
            let etiqRta = document.createElement('label');
            etiqRta.setAttribute('for', `${d["Texto"]  === "No" ? d["Texto"] : "Si"}${contadorId}`);
            etiqRta.innerHTML = d["Texto"]
            
            let img = document.createElement('img');
            
            if (d["Estado"]) {
                img.setAttribute('src', './img/correcto.png');
                img.setAttribute('alt', 'Correcto');
            } else {
                img.setAttribute('src', './img/incorrecto.png');
                img.setAttribute('alt', 'Incorrecto');
            }
            
            img.setAttribute('name', `${d["Texto"] === "No" ? d["Texto"] : "Si"}${contadorId}`);
            img.className = 'imgEstado oculto';

            devolucionDiv.append(img);
            rta.append(chBox, etiqRta, devolucionDiv);
            respuestasUl.append(rta);
            divItem.append(respuestasUl);
        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

};

export { crearCuestionario }