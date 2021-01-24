let kurs1 = devisenkurse[0];

let deviseEUR = {
    date: kurs1.Datum,
    local: kurs1.Heimw,
    foreign: kurs1.Fernw,
    value: kurs1.Kurs
}

let kurs2 = devisenkurse[1];

let deviseUSD = {
    date: kurs2.Datum,
    local: kurs2.Heimw,
    foreign: kurs2.Fernw,
    value: kurs2.Kurs
}

let kurs3 = devisenkurse[2];

let deviseGBP = {
    date: kurs3.Datum,
    local: kurs3.Heimw,
    foreign: kurs3.Fernw,
    value: kurs3.Kurs
}
let kurs4 = devisenkurse[3];

let deviseCHF1 = {
    date: kurs4.Datum,
    local: kurs4.Heimw,
    foreign: kurs4.Fernw,
    value: kurs4.Kurs
}

let kurs5 = devisenkurse[4];

let deviseCHF2 = {
    date: kurs5.Datum,
    local: kurs5.Heimw,
    foreign: kurs5.Fernw,
    value: kurs5.Kurs
}

let kurs6 = devisenkurse[5];

let deviseCHF3 = {
    date: kurs6.Datum,
    local: kurs6.Heimw,
    foreign: kurs6.Fernw,
    value: kurs6.Kurs
}

//Werte auslesen
let locAm=document.getElementById("localAmount");
let locEx=document.getElementById("localExchange");
let forAm=document.getElementById("foreignAmount");
let forEx=document.getElementById("foreignExchange");

/* Multipliziert den Betrag mit dem Umwandlungskurs resp. Währungskurs */
function convert(betrag, kurs) {
    return Math.fround(betrag * kurs).toFixed(4);
}

/**
 *  von CHF nach Fremdwährung
 */
function localToForeign() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === deviseEUR.local ) {
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === deviseEUR.foreign ) {
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            forAm.value = convert(locAm.value, deviseEUR.value);
        }
        if (forEx.value === deviseUSD.foreign ) {
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            forAm.value = convert(locAm.value, deviseUSD.value);
        }
        if (forEx.value === deviseGBP.foreign ) {
            /* ... rufe die Funktion auf zur Berechnung des GBP-Kurses  */
            forAm.value = convert(locAm.value, deviseGBP.value);
        }
    }
}

/**
 *  von Fremdwährung nach CHF
 */
function foreignToLocal() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === deviseCHF1.foreign ) {
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === deviseCHF1.local ) {
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            locAm.value = convert(forAm.value, deviseCHF1.value);
        }
        if (forEx.value === deviseCHF2.local ) {
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            locAm.value = convert(forAm.value, deviseCHF2.value );
        }
        if (forEx.value === deviseCHF3.local ) {
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            locAm.value = convert(forAm.value, deviseCHF3.value );
        }
    }
}