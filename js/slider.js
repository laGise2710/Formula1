document.addEventListener("DOMContentLoaded", function(e)); {
    const parrafos= document.querySelectorAll('descripcion');
    let alturas=[];
    let alturaMaxima=0;
    const aplicarAlturas=(function aplicarAlturas(){
        parrafos.forEach(parrafo => {
            if(altuaMaxima==0){
                alturas.push(parrafo.clientHeihnt);
            }else{
                parrafo.style.heght=alturaMaxima+"px";
            }
            
        };
        return aplicarAlturas;
    )};
    alturaMaxima=Math.max.apply(Math,alturas);
    aplicarAlturas();
    )}
