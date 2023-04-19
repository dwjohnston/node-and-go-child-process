const { exec, spawn,ChildProcess } = require("node:child_process");




async function application(){

    //const myProcess = exec("go run main.go"); 
    const myProcess = exec("./main"); 


    myProcess.stdout.on('data', (chunk) => {
        console.log(chunk);
    })


    
    return new Promise(res => {
        setTimeout(() => {
            myProcess.on("close", () => {
                console.log("close")
                res(); 
                
            }); 
            myProcess.on("exit", () => {
                console.log("exit")
            })

            myProcess.kill();
        }, 1000); 
    
    })
}

async function main() {
    await application();
}

main();