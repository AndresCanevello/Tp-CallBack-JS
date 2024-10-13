function mostrarMensaje(mensaje, callback)
        {
            console.log("El mensaje es:"+mensaje);
            callback();
        }
      /*  const respuesta = mostrarMensaje("Hola",function()
        {
                console.log("Ahora callback");
        })*/
        function esperarSegundos(segundos, funcion)
        {
            setTimeout(function()
            { funcion(segundos)
                {
                    console.log(`Tarde ${segundos} segundos`);
                }
            },segundos)
           
        }
      /*  esperarSegundos(3000,function(){
            console.log("Esto ahora");
        });*/
    
const sumarAsync = (num1,num2, callback) =>
{
    let rta = num1 + num2;
    callback()
    {
        console.log(rta+" infunction");
    };
}
const sumarAsyncV2 = (num1,num2, callback) =>
    {
        let rta = num1 + num2;
        callback(rta);
    }
sumarAsync(2,2,function(){console.log("hola");});
sumarAsyncV2(2,2,function(rta)
    {
        console.log(rta);
    }
    );
    function obtenerDatosUsuario(userId, callback) {
        // Simular una solicitud HTTP con setTimeout
        setTimeout(() => {
            // Datos de ejemplo (simulando una respuesta de la API)
            const usuarios = {
                1: { nombre: "Juan", edad: 30 },
                2: { nombre: "Ana", edad: 25 },
                3: { nombre: "Luis", edad: 28 }
            };
    
            // Obtener el usuario correspondiente al ID
            const usuario = usuarios[userId];
    
            // Llamar al callback con los datos del usuario o un mensaje de error si no existe
            if (usuario) {
                callback(null, usuario); // Sin error, pasamos el usuario
            } else {
                callback("Usuario no encontrado", null); // Con error, sin usuario
            }
        }, 2000); // Simulamos 2 segundos de espera
    }
    
    // Ejemplo de uso
    obtenerDatosUsuario(1, function(error, usuario) {
        if (error) {
            console.log(error);
        } else {
            console.log("Datos del usuario:", usuario);
        }
    });
//callbackAnidados
const hacerAlgo = (callback)=>
    {
        hacerOtraCosta(() =>
        {
            yOtra(()=>
               {

               }
        )
        })
    }
    function obtenerDatosUsuario(userId) {
        return new Promise((resolve, reject) => {
            // Simular una solicitud HTTP con setTimeout
            setTimeout(() => {
                // Datos de ejemplo (simulando una respuesta de la API)
                const usuarios = {
                    1: { nombre: "Juan", edad: 30 },
                    2: { nombre: "Ana", edad: 25 },
                    3: { nombre: "Luis", edad: 28 }
                };
    
                // Obtener el usuario correspondiente al ID
                const usuario = usuarios[userId];
    
                // Resolver la promesa o rechazarla si no existe el usuario
                if (usuario) {
                    resolve(usuario); // Resolvemos la promesa con el usuario
                } else {
                    reject("Usuario no encontrado"); // Rechazamos la promesa con un mensaje de error
                }
            }, 2000); // Simulamos 2 segundos de espera
        });
    }
    
    // Ejemplo de uso
    obtenerDatosUsuario(1)
        .then(usuario => {
            console.log("Datos del usuario:", usuario);
        })
        .catch(error => {
            console.log(error);
        });