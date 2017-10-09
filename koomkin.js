
var json = {
   	name: "Angelica Mccoy",
 	email: "mail@gmail.com"
};

function myFunction(arr) {
	 var out = "";
    for (var entry in json) {
  	out += entry + '  ' + json[entry] + '\n';
	}
    alert(out);
}