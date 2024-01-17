document.write("84.to replace each character in a given string with the next in the English alphabet."+"<br>");
function test84(str){
   var x=str.split("");
   for(let i=0;i<x.length;i++){
    var y=x[i].charCodeAt()-'a'.charCodeAt();
    y=(y+1)%26;
    x[i]=String.fromCharCode(y+'a'.charCodeAt());
   }
   return x.join("");
}
document.write("the string :sanje, ans:"+test84("sanje")+"<br><br>")