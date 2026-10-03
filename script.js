
const userName = "Kalle";      // variabel const går inte att ändra
const userPassword = "qwe123"  // variabel const går inte att ändra

let formRef; // variabel.

//  funktion init lokaliserar min form element.
function init() { 
    formRef = document.querySelector("form");
    console.log(formRef);
    
    const namnInput = document.getElementById("namn"); // hittar element med id =namn
    const lösenordInput = document.getElementById("lösenord"); // hittar element med id = lösenord

    formRef.addEventListener("submit", function(event) { // övervakar submit knappen DVS om någon klickar på den så kör den functionen
        event.preventDefault(); // förhindrar att sidan laddas om utan prioriter händelsen efter att sumbit har tryckt.

        if (namnInput.value === userName && lösenordInput.value === userPassword) {  // jämför ddet duu skriver in med const variablerna
        
            formRef.style.display = "none"; // tar bort display form 
            
            const meddelande = document.createElement("p");  // skapar en variabel const som har en create element "P"
            meddelande.innerHTML = "Välkommen Kalle, du är nu inloggad!"; // skriver i p elementet texten ""
            document.body.appendChild(meddelande);    // lägger till constmedelandet

            console.log("Välkommen Kalle, du är nu inloggad!");   // om det är rätt skriver den ut Välkommen Kalle, Du är nu  inloggad!

            const loggaUt = document.createElement("button"); // skappar en Button element

            loggaUt.innerHTML = ("Logga ut"); // lägger in text i button
            document.body.appendChild(loggaUt); //lägger in elementet 
            loggaUt.addEventListener("click", function() { // övervakar button knappen ochser vad som händer när någon clickar på den så
                formRef.style.display = "grid";             // går den tillbaks till grid stylingen
                meddelande.remove();                        // tar bort const medelandert , variabel med texten
                loggaUt.remove();                           // tar bor button elementtet.
            })

            namnInput.value = "";     // texten försviner du kan skriva in på nytt utan att raderar den.sker automatiskt
            lösenordInput.value = ""; // texten försviner du kan skriva in på nytt utan att raderar den.sker automatiskt
        }        

        else {  // else function vad som händer när användaren skriver fel lösenord och namn. 

            const meddelande = document.createElement("p");  // skapar en variabel const som har en create element "P"

            meddelande.innerHTML = "Felaktiga inloggningsuppgifter!"; // skriver i p elementet texten ""
            meddelande.remove(); // tar bort const medelandert , variabel med texten
            document.body.appendChild(meddelande); //lägger in const variabel.
            namnInput.value = "";     // texten försviner du kan skriva in på nytt utan att raderar den.sker automatiskt
            lösenordInput.value = ""; // texten försviner du kan skriva in på nytt utan att raderar den.sker automatiskt
            
        }
        
    })

}

// Skriver ut min function "init".
window.onload = init;












/*
addEventListener("submit") lyssnar på formuläret och väntar på att användaren ska trycka på Logga in. 
När formuläret skickas körs koden i funktionen. event.preventDefault() stoppar sidan från att laddas om, 
och sedan kan JavaScript själv kontrollera om användaren har skrivit in rätt namn och lösenord, till exempel 
"Kalle" och "qwe123".
*/


/* DOM = Document Object Model

DOM-manipulation handlar om att:

Hämta element (getElementById, querySelector)
Ändra innehåll (textContent, innerHTML)
Ändra stil (style)
Lägga till eller ta bort element (createElement, appendChild, remove)
Hantera händelser (addEventListener)
Ändra attribut (setAttribute, getAttribute) 
*/