Un caso básico de uso de SIMDE sería comprobar como se pueden optimizar algoritmos mediante el uso de distintas configuraciones de máquina.

Para ello lo primero que hemos de hacer es desarrollar nuestro algoritmo haciendo uso del juego de referencia de instucciones y de las limitaciones mencionadas.

Una vez hecho esto, cargaremos el programa, simplemente tenemos que hacer click en la ópcion **Cargar**, en el **menú Archivo**.

![](../imgs/load-option.png)

Introduciremos el código en el campo de texto o cargaremos un fichero .pla.

![](../imgs/code-load.png)

Ahora podremos hacer ejecuciones básicas del código cargado presionando el botón con el icono de *Play*. Al acabar la ejecución aparecerá una ventana emergente indicanos esto.

![](../imgs/finished-execution.png)

Para comprobar que los resultados son los esperados podemos hacer uso de las [técnicas de depuración mencionadas en la siguiente sección](./debugging.md).

Una vez que hayamos verificado el funcionamiento del algoritmo, podemos hacer uso del modo de ejecución por lotes, situado en el menú de **Ejecución**, para realizar pruebas del tiempo de ejecución del algoritmo.

![](../imgs/batch-mode-options.png)

En esta sección se puede configurar además del número de pruebas, el porcentaje de fallo de la caché y la latencia en caso de que ocurran esos fallos.

![](../imgs/batch-mode-modal.png)

Al terminar, aparecerá un modal mostrándonos una serie de datos estadísticos sobre la prueba que hemos realizado.

![](../imgs/batch-mode-results.png)

Ahora, podemos ir a la sección de **Configurar máquina Superescalar** en el menú de **Opciones** y repetir la prueba con distintos valores.

![](../imgs/configure-superescalar-option.png)

En el modal podremos ajustar tanto el número de unidades funcionales de cada tipo, como la latencia de las mismas.

![](../imgs/configure-superescalar-modal.png)

Y repitiendo la ejecución podremos valorar que partes de la máquina son más importantes para nuestro algoritmo.

![](../imgs/batch-results-comparison.png)
