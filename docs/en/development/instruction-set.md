| Sintaxis                 | Instrucción | Resultado |
| ------------------------ | ----------- | --------- |
| **ADDI Rd, Ro1, #Inm**   | Ingeger SUM with inmediate without sign | Rd = Ro1 + Inm | 
| **ADD Rd, Ro1, Ro2**     | Integer Sum   | Rd = Ro1 + Ro2 |
| **SUB Rd, Ro1, Ro2**     | Integer Subtraction  | Rd = Ro1 – Ro2 |
| **MULT Rd, Ro1, Ro2**    | Integer Multiplication  | Rd = Ro1 * Ro2 |
| **OR Rd, Ro1, Ro2**      | O between bits | Rd = Ro1 &#124; Ro2 | 
| **AND Rd, Ro1, Ro2**     | Y between bits | Rd = Ro1 & Ro2 |
| **XOR Rd, Ro1, Ro2**     | Exclusive O between bits | Rd = Ro1 ^ Ro2 |
| **NOR Rd, Ro1, Ro2**     | Not-O between bits | Rd = ~(Ro1 &#124; Ro2) |
| **SLLV Rd, Ro1, Ro2**    | Logical shift to left  | Rd = Ro1 << Ro2 |
| **SRLV Rd, Ro1, Ro2**    | Logical shift to right | Rd = Ro1 >> Ro2 |
| **ADDF Fd, Fo1, Fo2**    | Floating Point Sum | Fd = Fo1 + Fo2 |
| **SUBF Fd, Fo1, Fo2**    | Floating Point Subtraction | Fd = Fo1 – Fo2 |
| **MULTF Fd, Fo1, Fo2**   | Floating Point Multiplication | Fd = Fo1 * Fo2 |
| **LW Rd, Inm(Ro)**       | Integer Load | Rd = MEM[Ro + Inm] |
| **LF Fd, Inm(Ro)**       | Floating Load | Fd = MEM[Ro + Inm] |
| **SW Ro, Inm(Rd)**       | Integer Store | MEM[Rd + Inm] = Ro |
| **SF Fo, Inm(Rd)**       | Floating Store | MEM[Rd + Inm] = Fo |
| **BNE Ro1, Ro2, Label**  | Label Jump if not equal (Ro1 != Ro2) | Jump to instruction pointed by Label |
| **BEQ Ro1, Ro2, Label**  | Label Jump if equal (Ro1 == Ro2) | Jump to instruction pointed by Label | 
| **BGT Ro1, Ro2, Label**  | Label Jump if greater than Si (Ro1 > Ro2) | Jump to instruction pointed by Label | 