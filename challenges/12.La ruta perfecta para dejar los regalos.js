function getMinJump(obstacles) {
    const max = Math.max(...obstacles);
    const unseen = Array.from({ length: max }).fill(0).reduce((acc, _, i) => {
        if (!obstacles.includes(i + 1)) 
            acc.push(i + 1);
            return acc;
    },[]);
    for (let i = 0; i< unseen.length; i++) {
        let candidates = [];
        for (let j = 0; j <= max; j += unseen[i]){
            candidates.push(j);
        }
        if(candidates.every((item) => !obstacles.includes(item))) {
            return unseen[i];
        }
    }
}

console.log(getMinJump([1, 3, 6, 8, 11]));