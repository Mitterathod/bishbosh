
function BishBoshA(value1, value2){
  let returnValue = "";
  for(let i = 1;i<=100;i++){
      if(i%value1==0 && i%value2==0){
          returnValue += 'BishBosh ';
      }
      else if (i%value1 == 0){
          returnValue += 'Bish ';
      }
      else if (i%value2 == 0){
          returnValue += 'Bosh ';
      }
      else{
          returnValue += i + ' ';
  }
}
return returnValue;
}

function BishBoshB(value1,value2){
    let returnValue = "";
    let Bish = false;
    let Bosh = false;
    for(let i = 1;i<=100;i++){
        Bish = i%value1 == 0;
        Bosh = i%value2 == 0;
        switch(true){
            case Bish && Bosh :{
                returnValue += 'BishBosh ';
                break;
            }
            case Bish :{
                returnValue += 'Bish ';
                break;
            }
            case Bosh :{
                returnValue += 'Bosh ';
                break;
            }
            default : {
                returnValue += i + ' ';
                break;
            }
        }
    }
    return returnValue;
}
function BishBoshC(value1,value2){
    let returnValue = "";
    for (let i =1;i<=100;i++){
        returnValue += ((i%value1==0 ? 'Bish' : '') + (i%value2 ? 'Bosh' : '') || i) + ' ';
    }
    return returnValue;
}

function boshIt(){
    let output="";
    let val1 = document.getElementById('Bishvalue').value;
    let val2 = document.getElementById('Boshvalue').value;
    output = BishBoshB(val1,val2);
    document.getElementById('results').innerHTML = output;
}