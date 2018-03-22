# Superescalar Machine

![](imgs/bm40.png)

## Characteristics

1. Control of the processor based on Tomasulo's algorithm.

2. The Issue Rate is the most important parameter for this processor. The Issue Rate is the maximum number of instructions issued per cycle (and consequently the maximum number of instructions that may commit per cycle).

3. It uses dynamic branch prediction.


## Components

* **Prefetch**: Prefetch unit.

* **Decoder**: Decoder Unit

* **ROB<->GPR**: ROB entry where a General Purpose Register is being processed.  

* **ROB<->FPR**: ROB entry where a Floating Point Register is being processed. 

* **Branch Prediction**: 2-bit Branch Prediction Table. 

* **ROB**: Reorder Buffer. 

* **RE**: Reservation Stations. 

* **FU**: Functional Units. 

* **Address computing ALU**: This unit computes memory addresses.

## Prefetch 

The Prefetch Unit) reads blocks of instructions from the instruction cache to maintain the execution flow. It dynamically uses the Branch Prediction Table.

This unit stores up to 2 x Issue Rate instructions per cycle.

## Decoder

The Decoder) selects the instructions and sends them to the corresponding RE.
It also implements the control logic for stopping the execution flow if the ROB or an ER destination for the next instruction are full.

## ROB Mapper

This is what Tomasulo's algorithm calls the Qi field. It indicates if a GPR is being used by a ROB entry (it shows the entry number) or not (-1). 

## Reorder Buffer

This structure allows the instructions to execute out of order but to commit in order. ROB holds the results of instructions that have finished execution but have not commited, preventing any irrevocable action.
The ROB has as many entries as the amount of entries from all the REs.

### Fields

* # The identifier of this entry of the ROB
* Inst.: Instruction identifier
* Destin.: The destination register for the instruction
* Value: Result of the instruction
* Addr.: Memory Address used by the instruction (if it's the case)
* Stage: Current stage of the instruction (ISSUE, EXECUTE, WRITERESULT, COMMIT)

## Reserve Stations

This structure holds the instructions while they are waiting for their operands or they are executing in the corresponding FU. 

Let T be a specific type of FU. There is an associated RE[T] for each type of FU. Let N[T] be the number of FU[T] and let P[T] be the number of pipeline stages of this FU. The number of entries of RE[T] is computed by using the following expression: N[T] * P[T] + 1

### Fields

* Inst.: Instruction identifier.
* Qj: The ROB entry that will produce the first source operand. A value of -1 indicates that the source operand is already available in Vj.
* Vj: Value of the first source operand if (Qj = -1).
* Qk: The ROB entry that will produce the first source operand. A value of -1 indicates that the source operand is already available in Vk.
* Vk: Value of the first source operand if (Qk = -1).
* A: Memory address.
* ROB: ROB entry where this instruction is being processed.

## Memory Address ALU

The memory address ALU is a special FU of the Superscalar processor that computes the memory address of a LOAD or STORE instruction once the base register is available.

## Jump prediction table

The Branch Prediction Table uses a 2-bit scheme to predict if a branch must be taken or not.

The table has 16 entries. The last 4 bits of the memory address of a branch instruction are used to know what entry corresponds to the branch.

The next scheme shows how the 2-bits algorithm works.

![](imgs/bm41.png)

