 // When you click the Calculate button, you will be taken to the results section
 var calculateButtons = document.querySelectorAll('.calculate');  
 calculateButtons.forEach(function (button) {
     button.addEventListener('click', function () {
         var totalSection = document.getElementById('totalSection');
         totalSection.scrollIntoView({ behavior: "smooth" });
     });
 });

 //  conditional form submit notification
 function successAlert() {
     alert("The form has been successfully submitted!")
     return true
 }