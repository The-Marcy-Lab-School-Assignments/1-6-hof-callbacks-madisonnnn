const messageFile = [
    [1],
    [2,3],
    [4,5,6]
]

const key = (num) => {
    switch(num){
        case 1:
            return 'I'
        case 2:
            return 'dogs'
        case 3:
            return 'love'
        case 4: 
            return 'cats'
        case 5:
            return 'you'
        case 6:
            return 'computers'
    }
}
//console.log(key(6))
const decode = (messageFile) => {
    for(let i = 0; i < messageFile.length; i++) {
        let message = messageFile[i];
        for(let j = 0; j < message.length; j++) {
            console.log(i,j);
        }
    }
}
decode()
console.log(messageFile.length)