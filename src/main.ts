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
