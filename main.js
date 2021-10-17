var name_of_people=[];
function submit(){
 var guest_name=document.getElementById("name1").value;
 name_of_people.push(guest_name);
 var length_of_name=name_of_people.length;
 document.getElementById("display_name").innerHTML=name_of_people.toString();

}
function sorting() {
  name_of_people.sort();
  var I=name_of_people.join("<br>");
  document.getElementById("sorted").innerHTML=I.toString();


}