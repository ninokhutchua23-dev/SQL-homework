// 1. დადებითი/უარყოფითი რიცხვი
let number = 10;
if (number > 0) {
    console.log("რიცხვი დადებითია");
} else if (number < 0) {
    console.log("რიცხვი უარყოფითია");
} else {
    console.log("რიცხვი არის ნული");
}

// 2. ამინდის შეფასება
let temperature = 25;
if (temperature > 30) {
    console.log("ცხელა");
} else if (temperature >= 15 && temperature <= 30) {
    console.log("სასიამოვნო ამინდია");
} else {
    console.log("ცივა");
}

// 3. პაროლის შემოწმება
let password = "myPassword123";
if (password === "123456") {
    console.log("წვდომა დაშვებულია");
} else {
    console.log("წვდომა უარყოფილია");
}

// 4. ლუწი რიცხვები (1-დან 20-მდე)
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 5. "Hello" 5-ჯერ
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// 6. მასივი და ინდექსები
let names = ["ანი", "ნიკო", "ლუკა", "მარი"];
for (let i = 0; i < names.length; i++) {
    console.log("სახელი: " + names[i] + ", ინდექსი: " + i);
}

// 7. მასივიდან 4 სიმბოლოზე მეტი სიტყვების გაფილტვრა
let fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანანი"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 4) {
        console.log(fruits[i]);
    }
}

// 8. Switch/Case (მომხმარებლის როლი)
let userRole = "doctor";
switch (userRole) {
    case "doctor":
        console.log("თქვენ ხართ ექიმი");
        break;
    case "patient":
        console.log("თქვენ ხართ პაციენტი");
        break;
    default:
        console.log("უცნობი როლი");
}
