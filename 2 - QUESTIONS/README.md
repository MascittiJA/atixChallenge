# a.
Strategy es un patrón de diseño de la categoría de patrones de comportamiento basado en composición.
Sirve para cuando quiero poder elegir dinámicamente entre distintas alternativas de resolución de un problema.
Encapsulando comportamiento en estrategias que puedo seleccionar en "run-time", consigo un bajo acoplamiento teniendo resoluciones específicas en cada una de ellas y un solo punto de conflicto al tener que realizar alguna modificación.
Con la utilizacion de este patrón, consigo escalar de forma sencilla y prolija, dado que agregar una nueva estrategia consiste en definirla y utilizarla donde corresponde.

Con respecto a si existen otros patrones que puedan ayudar, la respuesta es depende.
Cada patrón de diseño encara distintas problemáticas. Dependiendo el problema, hay algunos patrones que pueden llegar a estar relacionados al Strategy, pero tienen sus propios alcances y limitaciones.

Por ejemplo con respecto a tener la opción de resolver problemas dependiendo de ciertas características, podemos nombrar el Template Methods, el cual funciona por medio del concepto de herencia y en donde las subclases pueden sobreescribir características del padre y de esta manera conseguir distintos comportamientos utilizando la subclase necesaria en cada caso. En este caso el comportamiento no es dinámico y se selecciona en tiempo de compilación, lo que lo hace un enfoque distinto al Strategy.

Otro patrón con características similares es el State Pattern, en donde se puede modificar comportamiento en función de distintos estados. En algún punto este patrón es una extensión del Strategy Pattern.

La conclusión es que depende exclusivamente del problema a atacar que patrón utilizar en cada caso, dado que estos son una guia para la estructuración del código que permiten obtener un código más estandarizado.

# b.
Escribir test unitarios antes de comenzar a desarrollar código sirve en varios aspectos:

1. Pensar en los test ayuda al proceso de entender como se tiene que comportar el código final.
2. La capacidad de detectar bugs temprano en el desarrollo de software implica siempre menores costos para su arreglo.
3. Diseñar test en un etapa temprana evita la propagación de errores a características más complejas.
4. Permite que con cualquier modificación del código, detectar fehacientemente cual fué la causante de la introducción de bugs.

Test Driven Develompent es una estrategia de desarrollo en la cual en iteraciones incrementales, primero pienso test sensillos que tiene que pasar mi aplicación y voy agregando funcionalidad en función de los mismos. En todo momento tengo un batería de test que verifican que mi nuevo código no entra en conflicto con todo lo desarrollado hasta el momento y consigo tener una gran covertura del mismo.

# c.
El Observer Pattern lo podemos utilizar siempre que tengamos una abstracción en la cual existan eventos que puedan interesarle a ciertos sujetos y/o participantes a los que le interesen atender ciertos eventos.

Este patrón viene a solucionar el problema de que distintos actores tengan que realizar algún tipo de "pooling" para verificar cambios de estados, o la necesidad de notificar a todo el mundo dichos cambios de estado, incluso a aquellos que no les interesa.

Con este patrón, los observadores pueden suscribirse solo a los eventos que crean relevantes para su funcionamiento y se produce una comunicación directa de los cambios de estado.

Por ejemplo podríamos pensar una aplicación web que sincroniza un video entre distintos participantes conectados. Todos los participantes que se conecten a una sala, pueden darle play, pausar o moverse a lo largo del video, viendose reflejado estos cambios de estado en todos aquellos que estén conectados.