for (var i = 0; i < 5; i++) {
    console.log("Run : " + i);
}
var foods = ["Pizza", "Burger", "Fries"];
for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
    var item = foods_1[_i];
    console.log(item);
}
for (var item in foods) {
    console.log(item);
}
