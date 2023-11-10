import {inventory} from "../inventory.js";
// function addOne(input) {
//     return input + 1;
// }
//
// console.log('addOne: ', addOne( 1))
//
// export default addOne;

let soldTvs= []
function viewSoldTvs(){
    for (let i = 0; i < inventory.length; i++) {
        soldTvs= soldTvs + inventory[i].sold;
    }
    return soldTvs
}
export default viewSoldTvs;