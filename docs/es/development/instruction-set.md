| Sintaxis                 | Instrucción | Resultado |
| ------------------------ | ----------- | --------- |
| **ADDI Rd, Ro1, #Inm**   | Suma Entera con Inmediato sin signo | Rd = Ro1 + Inm | 
| **ADD Rd, Ro1, Ro2**     | Suma Entera  | Rd = Ro1 + Ro2 |
| **SUB Rd, Ro1, Ro2**     | Resta Entera | Rd = Ro1 – Ro2 |
| **MULT Rd, Ro1, Ro2**    | Multiplicación Entera | Rd = Ro1 * Ro2 |
| **OR Rd, Ro1, Ro2**      | O entre bits | Rd = Ro1 &#124; Ro2 | 
| **AND Rd, Ro1, Ro2**     | Y entre bits | Rd = Ro1 & Ro2 |
| **XOR Rd, Ro1, Ro2**     | O exclusiva entre bits | Rd = Ro1 ^ Ro2 |
| **NOR Rd, Ro1, Ro2**     | No-O entre bits | Rd = ~(Ro1 &#124; Ro2) |
| **SLLV Rd, Ro1, Ro2**    | Desplazamiento lógico a la izquierda | Rd = Ro1 << Ro2 |
| **SRLV Rd, Ro1, Ro2**    | Desplazamiento lógico a la derecha | Rd = Ro1 >> Ro2 |
| **ADDF Fd, Fo1, Fo2**    | Suma Punto Flotante | Fd = Fo1 + Fo2 |
| **SUBF Fd, Fo1, Fo2**    | Resta Punto Flotante | Fd = Fo1 – Fo2 |
| **MULTF Fd, Fo1, Fo2**   | Multiplicación Punto Flotante | Fd = Fo1 * Fo2 |
| **LW Rd, Inm(Ro)**       | Load Entero | Rd = MEM[Ro + Inm] |
| **LF Fd, Inm(Ro)**       | Load Flotante | Fd = MEM[Ro + Inm] |
| **SW Ro, Inm(Rd)**       | Store Entero | MEM[Rd + Inm] = Ro |
| **SF Fo, Inm(Rd)**       | Store Flotante | MEM[Rd + Inm] = Fo |
| **BNE Ro1, Ro2, Label**  | Etiqueta Salta si distinto Si (Ro1 != Ro2) | Saltar a instrucción apuntada por Etiqueta |
| **BEQ Ro1, Ro2, Label** | Etiqueta Salta si igual Si (Ro1 == Ro2) | Saltar a instrucción apuntada por Etiqueta | 
| **BGT Ro1, Ro2, Label** | Etiqueta Salta si mayor Si (Ro1 > Ro2) | Saltar a instrucción apuntada por Etiqueta | 