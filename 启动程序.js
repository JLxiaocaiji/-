// 汉字，id click
const clickFn = (searchParam) => {
    preHandle = (searchParam) => {
        let reg=(/^[\u4E00-\u9FA5]+$/).test(searchParam)
        console.log(reg)
        if ( reg ) {
            return text(searchParam)
        } else {
            return id(searchParam)
        }
    }
    let t = preHandle(searchParam).findOne().bounds()
    click(t.centerX(),t.centerY())
}

auto.waitFor("fast");
home();

sleep(1500);

let l = launchApp("移动办公");
sleep(4000)

if( l && text("工作台").exists()) {
    clickFn("工作台")
}

// textContains("签到").waitFor()
sleep(4000)

// 这是随机的不可
// let t = id("img-9fd8468a-b478-43a9-8411-6ca4f2b93070").findOne(2000)
let t = text("签到").findOne().bounds()
console.log(t)
click(t.centerX(),(t.top - 50))

sleep(1000)




