export const Divider =(number)=>{
    let value = Number(number)
    if(value>999999999){
            return ((value/1000000000).toFixed(0)).toString()+"B";
       }else if((value>999999)&&(value<999999999)){
         return ((value/1000000).toFixed(0)).toString()+"M";
    }else if((value>999)&&(value<999999)){
            return ((value/1000).toFixed(0)).toString()+"K";
     }else{
            return value  
     }
}



    