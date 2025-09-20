// SNACK 1

function controlDataType() {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else if (typeof data === "number") {
    console.log(data * 2);
  } else if (typeof data === "boolean") {
    console.log(data ? "Sì" : "No");
  } else {
    console.log("Tipo non supportato");
  }
}
let data: unknown = null;
controlDataType();

// SNACK 2

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
};

let Roberto: Dipendente = {
  nome: "Roberto",
  cognome: "Rossi",
  annoNascita: 1980,
  sesso: "m",
  anniDiServizio: [2010, 2011, 2012, 2013, 2014, 2015],
};
