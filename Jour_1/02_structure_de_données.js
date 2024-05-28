//Implement an algorithm to determine if a string has all unique characters. 
//What if you cannot use additional data structures? ex set()


{
    function allUniq(str){
        return str.length === new Set(str).size;
    }
    
    function allUniqWithSort(str){
    }

    function allUniqWithoutStructurt(str){
        for (i=0;i<str.length; i++){
            for(j=i+1;j< str.length; j++){
                if(str(i)===str(j)){
                    return false;
                }
            }
        }
    }
    console.log(allUniq("abc"))//true
    console.log(allUniq("abca"))//false
}