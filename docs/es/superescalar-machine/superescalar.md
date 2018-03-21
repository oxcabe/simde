# Máquina Superescalar

![](../imgs/bm40.png)

Características

1. Control de la máquina basado en el algoritmo de Tomasulo

2. El parámetro más importante de esta máquina es el Grado de Emisión (nos referiremos a este parámetro simplemente como Emisión a partir de ahora), que es el número máximo de instrucciones que pueden emitirse por ciclo, pero también el número máximo de instrucciones que pueden graduarse (commit) por ciclo.

3. Emplea predicción dinámica de saltos.


## Componentes

* **Prefetch**: Unidad de prebúsqueda de instrucciones.

* **Decoder**: Decodificador de las instrucciones

* **ROB<->GPR**: Posición del ROB donde se está procesando un registro de propósito general

* **ROB<->FPR**: Posición del ROB donde se está procesando un registro de punto flotante

* **Predicción Salto**: Tabla de predicción de salto

* **ROB**: Reorder Buffer

* **E.R.**: Estaciones de Reserva

* **U.F.**: Unidades Funcionales

* **ALU de cálculo de direcciones**: Unidad para calcular las direcciones de las instrucciones de memoria

## Prefetch

La Unidad de Prebúsqueda (Prefetch Unit) se encarga de adquirir de forma transparente al resto de la máquina las instrucciones del flujo de ejecución.
Para ello tiene en cuenta la tabla de predicción de salto.

Esta unidad mantiene en cada ciclo hasta 2 x Emisión instrucciones.

## Decoder 

El Decodificador (Decoder) se encarga de interpretar las instrucciones para enviarlas a su E.R. correspondiente.
Implementa la lógica de control que permite retener el flujo si el ROB o la E.R. a la que va la próxima instrucción están llenos.


## ROB Mapper

Es el campo Qi del que se habla en el algoritmo de Tomasulo. Indica si un registro de propósito general está siendo usado por alguna entrada del ROB (en cuyo caso se mostrará el número de la entrada) o no (-1).

## Reorder Buffer

Estructura que permite la ejecución fuera de orden (out of order) conservando el orden de graduación (commit) de las instrucciones.

El ROB tiene tantas entradas como la suma de las entradas de todas las ER.

### Campos

* Nº: Número de entrada en el ROB
* Inst.: Identificador de la instrucción
* Destino: Número de registro destino de la instrucción
* Valor: Resultado de la instrucción
* Direc.: Dirección con la que opera la instrucción (si corresponde)
* Etapa: Etapa actual de la instrucción (ISSUE, EXECUTE, WRITERESULT, COMMIT)

## Estaciones de reserva

Estructura en la que permanecen las instrucciones mientras esperan por sus operandos o se ejecutan en la U. F. correspondiente.
Tienen tantas entradas como una más que el número de etapas de la U.F. correspondiente multiplicada por el número de U.F. de ese tipo que haya.


### Campos

* Inst.: Identificador de la instrucción
* Qj: Disponibilidad del primer operando. -1 indica que el valor se encuentra en Vj; otro valor indica la posición del ROB donde se está procesando el operando.
* Vj: Valor del primer operando si (Qj = -1).
* Qk: Disponibilidad del segundo operando. -1 indica que el valor se encuentra en Vk; otro valor indica la posición del ROB donde se está procesando el operando.
* Vk: Valor del segundo operando si (Qk = -1).
* A: Dirección de memoria
* ROB: Posición del ROB donde está esta instrucción

## ALU Cálculo de Direcciones

La ALU de Cálculo de Direcciones es una U.F. especial de la máquina Superescalar que se encarga únicamente del cálculo de la dirección de una instrucción de memoria, tanto LOADS como STORES.

## Tabla de predicción de saltos

La Tabla de Predicción de Salto emplea un esquema de 2 bits para predecir si un salto debe ser tomado o no.

La tabla tiene 16 entradas, que se corresponden con los 4 últimos bits de la posición en memoria de la instrucción de salto.

El esquema de funcionamiento del algoritmo de 2 bits puede verse en el siguiente dibujo, donde se indica si el salto se toma o no, y las transiciones de estado se deben a si se ha acertado con la última predicción o no:

![](../imgs/bm41.png)

