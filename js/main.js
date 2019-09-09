$(document).ready(function(){

$('#SearchUser').on('keyup', function(e){
let username = e.target.value;

$.ajax({
    url:'https://api.github.com/users/'+username,
    data:{
        client_id:'3f10630a1e96ca02b780',
        client_secret:'c6583c09917784eacf089ce3b3203b2c859de875'
    }
}).done(function(user){
console.log(user);
$('#profile').html(
                //   "<b>Name : </b>" + (user.name) + "<br>"
                //    "<b>Login :  </b>" + (user.login) + "<br>" +
                //    "<b>Account creation date : </b>" + (user.created_at) + "<br>" +
                //    "<b>Location : </b>" + (user.location) + "<br>" +
                //    "<b>Public repos : </b>" + (user.public_repos) 
                
                '<div class="card" style="width: 20rem;">' + 
                '<img src="'+user.avatar_url+'" + class="card-img-top" +</img>' +
                '<div class="card-body">' +
                '<h5 class="card-title"> <b>Name : </b>'    + user.name + '</h5>' +
                '<div class="card-header"> <b>Login : </b>' + user.login +'</div>' +
                '<div class="card-body"> <b>Location : </b>'  + user.location+ "</div> " +
                '<b> Email : </b>' + user.email+ "</div> " +
                '<b>Created at : </b>'  + user.created_at+ "</div> " +
                '<b>Company : </b>'  + user.company+ "</div>" + '</br>' +
                '<b>Public repos : </b>'  + user.public_repos+ "</div> " + '<br>' +
                '</div>'
   

       //  email,location,created_at,company,public_repos,

);
  
  
    
    

});

});

});

