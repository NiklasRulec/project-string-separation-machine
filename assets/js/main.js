function separationFunction() {
  // ! +++++ Input Satz auslesen
  let input = String(document.querySelector(".input-value").value);
  console.log({ input });

  // ! +++++ Trennungswort auslesen
  let separationWord = String(
    document.querySelector(".separation-point").value
  );
  console.log({ separationWord });

  // ! +++++ Trennungswort Länge auslesen
  let separationWordLength = separationWord.length;
  console.log({ separationWordLength });

  // ! +++++ Trennungsposition auslesen
  let separationPoint = input.indexOf(separationWord);
  console.log({ separationPoint });

  // ! +++++ Radio Buttons auslesen
  let separation1 = document.querySelector(".separ1").checked;
  console.log({ separation1 });

  let separation2 = document.querySelector(".separ2").checked;
  console.log({ separation2 });

  let buttonOutput = document.querySelector(".button-alert");

  if (separation1 == true && separation2 == false) {
    separationPoint = separationPoint + 0;
    console.log({ separationPoint });
  } else if (separation1 == false && separation2 == true) {
    separationPoint = separationPoint + separationWordLength;
    console.log({ separationPoint });
  } else if (separation1 == false && separation2 == false) {
    console.log("Falsche Eingabe, einen Radio Button auswählen");
    buttonOutput.innerText = "Falsche Eingabe, einen Radio Button auswählen";
  } else if (separation1 == true && separation2 == true) {
    console.log("Falsche Eingabe, nur einen Radio Button auswählen");
    buttonOutput.innerText =
      "Falsche Eingabe, nur einen Radio Button auswählen";
  }

  // ! +++++ Text Outputs
  let output1 = document.querySelector(".output1");
  output1.innerText = input.slice(0, separationPoint);
  let output2 = document.querySelector(".output2");
  output2.innerText = input.slice(separationPoint);
}
