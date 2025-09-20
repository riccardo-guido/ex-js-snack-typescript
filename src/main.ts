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

// SNACK 3

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: string[];
  certificazioni: string[];
};

type ProjectManager = Dipendente & {
  teamSize: number | null;
  budgetGestito?: number;
  stakeholderPrincipali: string[];
};

let Maria: Developer = {
  nome: "Maria",
  cognome: "Verdi",
  annoNascita: 1990,
  sesso: "f",
  anniDiServizio: [2015, 2016, 2017, 2018, 2019],
  livelloEsperienza: "Mid",
  linguaggi: ["JavaScript", "TypeScript", "Python"],
  certificazioni: ["AWS Certified Developer", "Scrum Master"],
};

let Luca: ProjectManager = {
  nome: "Luca",
  cognome: "Bianchi",
  annoNascita: 1975,
  sesso: "m",
  anniDiServizio: [2000, 2001, 2002, 2003, 2004, 2005],
  teamSize: 10,
  budgetGestito: 500000,
  stakeholderPrincipali: ["CEO", "CTO", "CFO"],
};

console.log(Roberto);
console.log(Maria);
console.log(Luca);
