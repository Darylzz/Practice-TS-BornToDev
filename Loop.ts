for(let i = 0; i<5; i++) {
    console.log("Run : " + i)
}

var foods: string[] = ["Pizza", "Burger", "Fries"]

for(let item of foods) {
    console.log(item)
}

for(let item in foods) {
    console.log(item)
}