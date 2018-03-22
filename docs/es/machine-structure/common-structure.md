# Características comunes

Tanto la máquina Superescalar como la VLIW diseñadas para este simulador mantienen una estructura básica común.

1. Ambas máquinas están diseñadas para trabajar con palabras de 32 bits, tanto para los tipos de datos entero y flotante.

2. El juego de instrucciones, basado en MIPS IV.

3. Las dos máquinas son monoprograma. El código (tanto el secuencial en la máquina superescalar como el de instrucciones largas en la VLIW) siempre se coloca empezando en la dirección 0, por lo que los saltos son siempre a direcciones absolutas.


## Elementos Comunes

* Memoria.

* Registros de Propósito General (GPR).

* Registros de Punto Flotante (FPR).

## Memoria

La memoria emplea un esquema ficticio con cachés separadas para datos e instrucciones.


### Memoria Principal

La memoria principal contiene 1024 palabras de 32 bits.


### Caché de Instrucciones

La caché de instrucciones está diseñada para contener completamente el programa secuencial (y el programa VLIW si se está empleando), de tal manera que nunca se producen fallos de caché al intentar leer una instrucción.


### Caché de Datos

La caché de datos genera fallos de lectura de manera aleatoria. El porcentaje de fallos es un parámetro definido por el usuario.

#### Direccionamiento de la memoria

El repertorio de instrucciones de la máquina sólo permite direccionamiento de memoria indexado de la forma Inm(Rn).

La dirección se calcula sumando al valor del registro indicado (Rn) el valor inmediato (Inm). Los accesos a memoria se hacen siempre a palabras completas, de tal manera que el valor inmediato se interpreta directamente como un valor de palabra (y no como byte, como suele ser más habitual).

##### Ejemplo

{%ace lang='asm'%}
// En este ejemplo se accede a la palabra de memoria 5 (3 + 2) para guardar el contenido de R1
ADDI	 R4 R0 #2
SW		 R1 3(R4)
{%endace%}

## Registros de propósito general

Banco de 64 registros de 32 bits.

Se denotan R0, R1, R2, ..., R63.


**El valor de R0 se mantiene siempre a 0.**


### Acceso en VLIW

En la máquina VLIW la lectura se realiza en la primera mitad del ciclo y la escritura en la segunda mitad. De esta manera se evitan los riesgos WAR. En la máquina Superescalar no tiene sentido este añadido, ya que este tipo de dependencias se eliminan con el ROB.

## Registros de punto flotante

Banco de 64 registros de 32 bits. Emplea simple precisión.

Se denotan F0, F1, F2, ..., F63.


### Acceso Acceso en VLIW

En la máquina VLIW la lectura se realiza en la primera mitad del ciclo y la escritura en la segunda mitad. De esta manera se evitan los riesgos WAR. En la máquina Superescalar no tiene sentido este añadido, ya que este tipo de dependencias se eliminan con el ROB.

## Unidades funcionales 

Las Unidades Funcionales (UF) son las únidades básicas de ejecución de la máquina.

Son segmentadas, y cada etapa del pipeline dura 1 ciclo exactamente. De esta manera, cada ciclo puede entrar una nueva instrucción a menos que tenga una dependencia verdadera con la instrucción anterior. En ese caso, deberá esperar hasta que la instrucción anterior haya acabado completamente su ejecución. A este tiempo lo denominamos latencia de la UF, y coincide con el número de etapas del pipeline.

### Tipos

* Suma entera: Para efectuar las operaciones ADD y ADDI, y el cálculo de direcciones en la VLIW (en la máquina superescalar esta función se considera integrada en la UF de memoria).

* Multiplicación entera: Efectúa la operación MULT.

* Suma flotante: Efectúa la operación ADDF.

* Multiplicación flotante: Efectúa la operación MULTF.

* Memoria: Se encarga de todas las operaciones referentes a memoria (LW, SW, LF, SF). En la máquina Superescalar se considera que tiene integrada una ALU para el cálculo de direcciones, mientras que en la VLIW sólo representa el tiempo de acceso a la memoria

* Salto: Se encarga de las operaciones de salto, evaluando las condiciones y cambiando el PC (y la tabla de predicción en la máquina Superescalar).