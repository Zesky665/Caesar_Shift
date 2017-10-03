function caesarShift(str, amount, f){

  if (amount > 95 ){
    amount = amount % 95;
  }

var result = "";
if(f == 1){
  for(var i = 0; i < str.length; i++){
    var code = str[i].charCodeAt();
    if((code >= 32) && (code <= 126)){
      result += String.fromCharCode(((code - 32 + amount) % 95) + 32);
    }
  }
}

if(f == -1){
  amount = 95 - amount;
  for(var i = 0; i < str.length; i++){
    var code = str[i].charCodeAt();
    if((code >= 32) && (code <= 126)){
      result += String.fromCharCode(((code - 32 + amount) % 95) + 32);
    }
  }
}

  alert(result);
  return result;

};

function doThing() {

    var en = document.getElementById('en').checked;
    var de = document.getElementById('de').checked;

    var k = parseInt(document.getElementById('k-val').value);
    var text_in = document.getElementById('text-in').value;
    var text_out;

    if(en){
      text_out = caesarShift(text_in, k, 1);
    }
    else{
      text_out = caesarShift(text_in, k, -1);
    }


    //alert(k);

    document.getElementById('text-out').value = text_out;
}
