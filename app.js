function mostrarMensaje(mensaje, callback)
        {
            console.log("El mensaje es:"+mensaje);
            callback();
        }
        const respuesta = mostrarMensaje("Hola",function()
        {
                console.log("Ahora callback");
        })
        function esperarSegundos(segundos, funcion)
        {
            setTimeout(function()
            { funcion(segundos)
                {
                    console.log(`Tarde ${segundos} segundos`);
                }
            },segundos)
           
        }
        esperarSegundos(3000,function(){
            console.log("Esto ahora");
        });
        