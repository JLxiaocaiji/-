device.wakeUp()
sleep(500)
// duration 201-230
swipe(500,2000,500,100,210);
sleep(500)
let password = ("884026").split('')
console.log(password)
password.forEach( i => {
    let p = text(i).findOne().bounds();
    click(p.centerX(), p.centerY());
    sleep(100);
})