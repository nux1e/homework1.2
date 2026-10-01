let userName = "Alex";
let userBalance = 100;

if (userName === "admin") {
  console.log("Администратор");
} 

else if (userName === "" || userName === null || userName === undefined) {
  console.log("Гость");
} 

else {
  if (userBalance > 5000) {
     console.log("Вип-клиент");
  } else if (userBalance > 1000) {
    console.log("Постоянный покупатель");
  } else {
    console.log("Обычный покупатель");
  }
}
