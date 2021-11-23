//recupération de la liste des articles 

//création d'une ligne tableau (html) 

//append de la ligne 
var $ = require('jquery');

window.$ = window.jQuery = $;

var url = $('#url-users-list').val();
/*$.ajax({url: url, success: function(result){
    if(result.length){
        $('#users tbody tr');
    }
    $.each(result, function (index, value) {
        var tr='<tr><td>'+value.username+'</td><td>'+value.email+'</td><td>';
        $('#users').append(tr);
    });
  }});*/
  
  $(document).ready(function() {
    $("#show").click(function(e) {
        e.preventDefault();
 var username = $("#username").val();
 var email = $("#email").val();
 var password = $("#password").val();
 var user = $("#user").val();
 var data =  {
    username: username,
    email: email,
    password: password
    }
    console.log(user);
 $.ajax({
    type: "POST",
    url: url,
    data:data,
    cache: false,
    success: function(data) {
    alert('hello', data);
    },
    error: function(xhr, status, error) {
    console.error(xhr);
    }
    });
        document.getElementById("input").innerHTML ="<strong>l'utilisateur est enregistré</strong>";

        $("#users").load("http://127.0.0.1:8000/inscription/users");
      //alert('utilisateur est ajouté');
    });
});