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
                '<img src="'+user.avatar_url+'" + id="img" class="card-img-top img" +</img>' +
                '<div class="card-body">' +
                '<h5 class="card-header ml-3"> <b>Name : </b>'+ user.name + '</h5>' +
               // '<div class="card-header"> <b>Login : </b>' + user.login +'</div>' +
                '<div class="card-body"><b>Location : </b>' + user.location + '<hr>' +
                '<b> Email : </b>'+user.email + '<hr>' +
                '<b> Bio : </b> '+user.bio +'<hr>' +
                  '<b>Created at : </b>'+ user.created_at +'<hr>' +
                '<b>Company : </b>'+ user.company + '<hr>' +
                '<b>Public repos : </b>'+ user.public_repos+ '<hr>' +
                '<a href="'+user.html_url+'" class="btn btn-primary btn-block">View profile</a></div><br></div>'
   

       //  email,location,created_at,company,public_repos,

);
  
  
    
    

});

});

});

