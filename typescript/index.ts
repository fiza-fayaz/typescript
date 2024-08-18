console.log(100);
//Arrays
//rest parameters and spread operators

function moneybank(name:string, ...pocketmoney:number[]){

    //Console.log(...pocketmoney)
     return name + pocketmoney
}

console.log(moneybank("fiza", 200 + 300 + 500 + 1000));
//////////////////////////////////////////////////////////////////////////