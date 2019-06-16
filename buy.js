<script>
function myFunction() {
  var person = prompt("Please enter your name", "name");
  var person2 = prompt("Please enter your name", "name");
  var person3 = prompt("Please enter your name", "name");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
</script>