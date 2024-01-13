const doTask = () => {
    console.log("做任务");
}
const doTask1 = () => {
    console.log("做任务1");
}


let tasks = [
    { task: doTask, interval: 5 * 1000, startTime: "17:28" },
    { task: doTask1, interval: 5 * 1000,  startTime: "17:30"},
]

const intervalTask = (tasks) => {
    tasks.forEach( item => {
        let h = item.startTime.split(":")[0]
        let m = item.startTime.split(":")[1]

        let taskTime = new Date();
        console.log('start')

        taskTime.setHours(h);
        taskTime.setMinutes(m);
        let timeDiff = taskTime.getTime() - (new Date()).getTime(); 
        timeDiff = timeDiff > 0 ? timeDiff : (timeDiff + 24 * 60 * 60 * 1000);
        console.log(timeDiff)
        setTimeout(() => {
            // 首次执行
            item.task; 
            setInterval(item.task, item.interval); // 24小时为循环周期
        }, timeDiff); 
    })
}
intervalTask(tasks)
