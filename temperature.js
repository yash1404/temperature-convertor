const calculattemp=()=>{
const numbertype= document.getElementById("typenumber").value;
const selecttype=document.getElementById("temperaturettype")
const value=temperaturettype.options [selecttype.selectedIndex].value;


const celtofar=(cel)=>{
  fahrenhiet= Math.round((cel* 9/5 )+ 32 );
  return fahrenhiet
}

const fartocel=(far)=>{
  celsius= Math.round((far -32)*5/9);
  return celsius
}



let result

if(value=="cel"){
   result=celtofar(numbertype);
   document.getElementById("storetemp").innerHTML=`=${result}°fahrenhiet`
}
else{
  result=fartocel(numbertype);
  document.getElementById("storetemp").innerHTML=`=${result}°celsius`  
}
};
