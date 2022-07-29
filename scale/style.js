function check {
    let w = prompt("Nhập số cân nặng :");
    let h = prompt("Nhập số cân chiều cao :");

bmi = w / h * h

if (bmi > 40){
    document.write("Béo Phì cấp độ 3");
    elif (35 <= bmi < 40){
        document.write("Béo phì cấp độ 2");
    }
    elif (30 <= bmi <= 35){
        document.write("Béo phì cấp độ 1");
    }
    
    elif (25 <=bmi < 30){
        document.write("in ra thừa cân");
    }


    
}
}
