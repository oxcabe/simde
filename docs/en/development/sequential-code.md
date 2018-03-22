---
showToc: false
---

SIMDE allows to load a sequential code that cand be created with any text editor. This coee can be introduced into the application through a text input or loaded from a .pla file.

## Characteristics

File must be created with the following characteristics:
* The first line (not a commentary) must contain the number of instructions of code.
* Each instruction must be placed in a new line.
* Operands are separated with blanks or tabs.
* Labels must be placed at the start of the line and always finishes with a ":".
* Commentaries start with "//". From here to the end of the line will be considered as a commentary.

### Instructions

The instructions are inspired in the MIPS IV repertory. We use the next nomenclature:

* Rn General Purpose Register n. 
		f. i.  R1, R0...
* Fm Floating Point Register m. 
		f. i.  F1, F0...
* #n Inmediate value n. 
		f. i.  #12, #0...
* n(Rm) Memory address. 
		f. i.  (R1), 3(R4)...
* LAB: Branch destiny label. 
		f. i.  LOOP1:, END:...


In the [following section](./instruction-set.md) there is a summary of the different kinds of instructions.

## Sequential Code Example

{%ace lang='asm'%}
// SIMDE v0.1
// Author: Iván Castilla Rodríguez
// Utility: Single loop example
// Observations: User must fill a 16-elements array starting at position 50 (R2) of memory. User must also
// put a constant at position 40. The constant will be added to each element from source array and result
// will be put in a destination array at position 70 (R3).
11
	ADDI	R2 R0 #50
	ADDI	R3 R0 #70
	ADDI	R4 R0 #40
	LF		F0 (R4)
	ADDI	R5 R2 #5
LOOP:
	LF 		F1 (R2)
	ADDF	F1 F1 F0
	SF		F1 (R3)
	ADDI 	R2 R2 #1
	ADDI	R3 R3 #1
	BNE		R2 R5 LOOP
{%endace%}


## Error handling

In case the code contains any error, it will apear under the form. The lex analyzer of the simulator will stop after the first error, so the first error may hide anothers.

![](../imgs/code-error.png)
