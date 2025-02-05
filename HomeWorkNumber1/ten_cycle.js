function forExamples_ten_cycle() {
    // 1. Example :)
    for (let i = 1; i <= 5; i++) {
        console.log(`Считать счета: ${i}`);
    }
}
    // 2. Example :)
    for (let i = 5; i >=1; i--){
        console.log(`Обратный счет: ${i}`);
    }
    // 3. Example :)
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (let i = 0; i < arr.length; i++) {
        console.log(`Массивы ${i}: ${arr[i]}`);
    }
    // 4. Example :)
    for (let i = 0; i < 11; i++){
        console.log(`Даже: ${i}`);
    }
    // 5. Example :)
    const str = "Я_Бейбит_<3"
    for (let i = 0; i < str.length; i++){
        console.log(`Выводы ${i}: ${str[i]}`);
    }
    // 6. Example :)
    for(let i = 0; i <11; i++){
        console.log(`10 x ${i} = ${10 * i}`);
    }
    //7. Example :)
    for (let i = 1; i <= 2; i++){
        for (let j = 1; j <=2; j++){
            console.log(`Пост: ${i},${j}`);
        }        
    }
    //8. Example :)
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const doubled = nums.map(num => num * 2);
        console.log(doubled);
    // 9. Example :)
    for (let i = 1; i <= 5; i++) {
        if (i === 3) break;
            console.log(`Завершение: ${i}`);
    }

    // 10. Example :)
    for (let i = 0; i <= 5; i++) {
        if (i === 3) continue;
            console.log(`Проспустить: ${i}`);
    }

// The end :)
forExamples_ten_cycle();
