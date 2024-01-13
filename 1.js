function clickParent( item ){
    let parent = item.parent();
    for(let i = 0;i < 10;i++){
        console.log(parent)
        if(parent.clickable() || true){
            parent.click()
            click(parent.bounds().centerX(),parent.bounds().centerY()) 
            break;
        }else{
            parent = parent.parent()
        }
    }
}


launchApp("微信");
sleep(1000)
// 点击右上角更多加号按钮
let clickBtn =  id("com.tencent.mm:id/meb").findOne(2000)
if(clickBtn != null ){
        console.log('检测到搜索按钮');
        click(clickBtn.bounds().centerX(),clickBtn.bounds().centerY())
        sleep(500)
        setText("文件传输助手")
        sleep(500)
        
        // 点击'文件传输助手'功能
        let fileTransfer = id("com.tencent.mm:id/odf").text('文件传输助手').findOne()
        clickParent(fileTransfer)
        sleep(500)
        // setText('来自Autox.js的操作，hello!')
        // click('发送')
}