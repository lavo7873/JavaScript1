let rnd = Math.round(Math.random() * 100)
let guessNum

do{
    guessNum = Number (prompt("Nhập số dự đoán: "))

    if(guessNum == rnd){
        alert("You're Win")
    } else if (guessNum < rnd) {
        alert("Số còn quá nhỏ!!!")
    }else{
        alert("Số quá lớn nhỏ xuống nữa !!!")
    }
}while(rnd != guessNum)