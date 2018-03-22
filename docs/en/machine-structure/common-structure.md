

# Common characteristics

Both processors, Superscalar and VLIW, have been designed by using a shared basic structure.

1. The processors are intended to work with 32-bit words for both integer and floating point data types.

2. The instruction set repertoire, based on MIPS IV.

3. Both processors are monoprogrammed. Codes (both, sequential code in superscalar processor and long instruction one in VLIW) starts always at memory address 0. Destination of branches are treated always as absolute addresses.

## Common Elements

* Memory.

* General Purpose Registers (GPR).

* Floating Point Registers (FPR).

## Memory 

The memory employes a ficticious scheme with two separated caches: instruction and data.

### Main Memory

Main memory contains 1024 32-bit words.

### Instruction Cache

The instruction cache is designed to completely contain the sequential code (and the VLIW code if it's been using too). Thus, instruction cache misses never occur.

### Data Cache

The data cache generates random cache misses for loads. The miss rate is a user-defined parameter.

#### Memory Addressing

Only the indexed addressing is allowed: Imm(Rn).

The address is computed by adding the immediate value (Inm) to the value read from the register (Rn) . 
Memory accesses are always computed as complete words, i.e. the immediate value is interpreted as a word value (and not as a byte value). 

##### Example

{%ace lang='asm'%}
// This example access to memory word 5 (3 + 2) to store R1 contents
ADDI	 R4 R0 #2
SI		 R1 3(R4)
{%endace%}


## General purpose registers

File with 64 32-bits registers.

They are named R0, R1, R2, ..., R63.

**The value of R0 is always 0.**

### Access on VLIW

The VLIW processor has a special access mode. "Reads" are carried out in the first half of a clock cycle and "writes" in the second one. Thus, WAR hazards are avoided. The Superscalar processor doesn't need this mechanism because the ROB makes this job.


## Floating point registers

File with 64 32-bits single-precision registers.

They are named F0, F1, F2, ..., F63.


### Access on VLIW

The VLIW processor has an special access mode. "Reads" are carried out in the first half of a clock cycle and "writes" in the second one. Thus, WAR hazards are avoided. The Superscalar processor doesn't need this mechanism because the ROB makes this job.

## Functional Units

The Functional Units (FU) are the basic unit for the processor execution.

They are pipelined, with 1 cycle per pipeline stage. Thus, a new instruction (operation of a VLIW processor) enters in the pipeline each cycle unless it has a true dependence with the previous instruction. If this is the case, the entering instruction must be stalled until the previous instruction has finished. The time the instruction is stalled is called Latency and it fits with the number of pipeline stages.


### Types

* Integer Add: It performs the ADDI and ADD operations, and the address computing for the superscalar processor (the VLIW processor includes this work in the memory FU).

* Integer Multiplication: It performs the MULT operation.

* FP Add: It performs the ADDF operation.

* FP Multiplication: It performs the MULTF operation.

* Memory: It performs all the memory operations (LW, LF, SW, SF). The VLIW processor adds an ALU for address computing into this unit. 

* Branch: It performs all branch operations. It evaluates conditions and change the PC (if it's necessary). Branch Prediction Table in superscalar processor is handled by this unit too).
