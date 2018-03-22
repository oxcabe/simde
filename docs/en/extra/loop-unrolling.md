Técnica consistente en replicar el cuerpo de un bucle varias veces. De esta manera se incrementa el número de operaciones disponibles y se puede aprovechar mejor el ILP. 

Además disminuye la penalización de las operaciones de salto, al disminuir su frecuencia en el código.


{%ace lang='asm'%}
// Original loop
LOOP:
	LF 		F1 (R2)
	ADDF	F1 F1 F0
	DADDUI 	R2 R2 #1
	BNE		R2 R5 LOOP

// Unrolling loop (2 iterations)
LOOP:
	LF 		F1 (R2)
	ADDF	F1 F1 F0
	LF 		F2 1(R2)
	ADDF	F2 F2 F0
	DADDUI 	R2 R2 #2
	BNE		R2 R5 LOOP
{%endace%}