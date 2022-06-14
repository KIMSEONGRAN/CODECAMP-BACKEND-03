function solution(n, arr1, arr2) {
    let bbb = []
    for(let i = 0; i < arr1.length; i++){
        arr1[i] = arr1[i].toString(2).padStart(n,'0')
        arr2[i] = arr2[i].toString(2).padStart(n,'0')
        
        let aaa = []
        for(let j = 0; j < arr1.length; j++){
            if(arr1[i][j] ==="1" || arr2[i][j] === "1"){
                aaa.push("#")
            } else {
                aaa.push(" ")
            }
        }
        bbb.push(aaa.join(""))
    }
    // console.log(arr1);
    // console.log(arr2)
    // console.log(bbb)
    return bbb
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]) // ["#####","# # #", "### #", "# ##", "#####"]