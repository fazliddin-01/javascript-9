let obj = {}

let ism
let yowi
function name() {
    for (let i = 0+1; i <= 10; i++) {

        let foyda = `Foydalanuvchi ${i}`
        let ism = prompt("ismingizni kiritng","name")
        let yowi = +prompt("yowingizni kiritng","35")
        
        if (ism) {

            console.log( foyda);
            console.log("ismingiz:", ism);
            console.log("yowingiz:", yowi);
        }
    
    }
    
    return obj
}

console.log(name());