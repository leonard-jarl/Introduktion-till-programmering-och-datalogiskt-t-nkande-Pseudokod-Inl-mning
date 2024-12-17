// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
START
    SET summa till INPUT från användaren;
    SET antalVänner till INPUT från användaren;
    SET dricks till INPUT från användaren;

    SET uträknadDricks = summa * dricks
    SET summaInklusiveDricks = summa + uträknadDricks
    SET summaPerPerson = SummaInklusiveDricks / antalVänner
    
    PRINT "Varje person ska betala" + SummaPerPerson
END
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE];
    SET startOrd till "FOUR";
    SET slutOrd till "FIVE";
    SET nuvarandeOrd till startOrd;

    IF nuvarandeOrd inte är lika med slutOrd
        SET nästaOrd till INPUT från användaren;
        CALL FUNCTION named "isOneLetterApart";
        IF nuvarandeOrd och nästaOrd = isOneLetterApart och orden finns i ordboken
            SET nuvarandeOrd till nästaOrd;
            PRINT "Bytte ord till" + nuvarandeOrd;
        ELSE
            PRINT "Ogiltigt ord";
        END IF

    PRINT "Grattis du har nått slutordet" + slutOrd;
end function

function isOneLetterApart(wordOne, wordTwo)
    SET diffCount till 0;

    FOR varje index i wordOne
        IF wordOne[i] inte är lika med wordTwo[i]
            öka diffCount med 1;
        END IF
    END FOR

    RETURN diffCount === 1;
end function

*/
