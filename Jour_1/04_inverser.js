{
    function reverse(array){
        const newArray=[];
        for (let i= array.length-1; i>=0; i--){
            newArray.push(array[i]);
        }
        return newArray;
    }
    function flip(arrayOfArray,sens){
        if (sens==='vertical'){
            return reverse(arrayOfArray)
        } else if (sens==='horizontal'){
            const newArrayOfArray=[]
            for (const array of arrayOfArray){
                newArrayOfArray.push(reverse(array));
            }
            return newArrayOfArray
        }
    }
    let  array = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
        ]
        console.log(flip(array, 'vertical'))
        console.log(flip(array, 'horizontal'))
}