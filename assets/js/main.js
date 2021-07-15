/*  Schreibe den untenstehenden Code im VSC und sieh dir das Ergebnis mit Hilfe des
    console.log() Befehls an, nutze den Live Server um das Projekt zu starten und dann
    in der Konsole des Chrome - Browsers das Ergebnis zu sehen. 
*/
let a = 12;
let b = a * 3;
console.log(b);

// Probier mal b mit Hilfe von document.write(b) in deinem Html Document auszugeben
document.getElementById("result").textContent = b;

// Teste diesen Code in VSC
console.log(document.URL);

// Gib ein Hello World in der Konsole aus = console.log("Hello world!");
console.log("Hello world!");

// Gib folgende Zeichenkette (string) in der Konsole aus: "Anton".
console.log("Anton");

//Deklariere die Variable name mit string "Anton".
let name = "Anton";

// Gib die Variable name in der Konsole aus.
console.log(name);

// Deklariere die Variable age mit Nummer 28.
let age = 28;

// Gib die Variable age in der Konsole aus.
console.log(age);

// Deklariere die Variable job mit string "Trainer".
let job = "Trainer";

// Gib die Variable job in der Konsole aus.
console.log(job);

// Deklariere die Variable married mit boolean true.
var married = true;
// Gib die Variable married in der Konsole aus.
console.log(married);

/*  Für diese Aufgabe schreibe in console.log(Variable + " Some Text " + Variable ...)
    es soll aussehen wie runter und gib in der Konsole folgendes aus:
    (Anton ist 28 Jahre alt und ist verheiratet: true)
*/
console.log(name + " ist " + age + " und ist verheiratet: " + married);
