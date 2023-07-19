let iteration = 1;
function hanoi_tower(numberOfDisks,fromRod,toRod,usingRod) {
    if(numberOfDisks===1) {
        console.log(`${iteration++}: Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    hanoi_tower(numberOfDisks-1,fromRod,usingRod,toRod)
    console.log(`${iteration++}: Move disk ${numberOfDisks} from ${fromRod} to ${toRod}`)
    hanoi_tower(numberOfDisks-1,usingRod,toRod,fromRod)
}
hanoi_tower(3,'A','C','B');
