COPTER GAME

PLAN DE ACCION

PERSONAJE:
El personaje (cuadrado pequeño, helicoptero u otra imagen) comenzará el juego posicionado en unas coordenadas x e y.
Escucharemos al evento keydown, keyup, y cuando se corresponda con la barra "space":
a) presionada: el personaje cambiara sus coordenadas en el eje "y" positivamente.
b) levantada: el personaje cambiara sus coordenadas en el eje "y" negativamente, cayendo.
Estos movimientos tendran aceleracion (mas altura de caida, tomara mas velocidad)

RASTRO DE HUMO:
Del personaje (sus coordenadas) saldran pequeños circulos o burbujas de colores con direccion negativa en el eje "x"
y dirección random en el eje "y", simulando un rastro de humo. Las mismas se haran pequeñas hasta desaparecer, renovandose
mientras el personaje siga andando.
Las mismas seran una instancia de la clase Burbujas.

RECORD:
A medida que pase el tiempo de juego o se vayan sorteando obstaculos, se ira incrementando un contador. Si el contador
es mayor al mas alto logrado en una partida previa, se guardara como record en el localStorage.

MAPA:
Se generaran rectangulos de tamaño random. Los mismos estaran ubicados en la parte superior e inferior del canvas, dejando
un espacio para que el personaje los pueda sortear. Se moveran negativamente en el eje x.
Puede o no haber una imagen de fondo (algun paisaje, ej: nubes, estrellas, etc) que se mueva como en un loop a
una velocidad diferente de los rectangulos, dando la impresion de profundidad.
A medida que el personaje avance, y transcurra el tiempo, los rectangulos sufrirán un incremento de velocidad.

DESARROLLO DEL JUEGO:
Cuando las coordenadas del personaje coincidan con la parte superior o inferior del canvas, o con la superficie de algun
rectangulo (obstaculos) el juego concluirá. El contador dejara de incrementarse, y si supero su record previo, se guardara
en el localStorage.
El personaje volvera a su posicion inicial, y el juego estara listo para comenzar de nuevo.

### Actualizacion 20/11/21

- Tamano de canvas 600 x 400
- Experimentando con el personaje:
  a) instancia de la clase Character
  b) coordenadas, tamanio y peso en etapa de prueba
  c) Eventos keydown/keyup lo mueven verticalmente
