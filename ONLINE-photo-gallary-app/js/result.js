$(document).ready(function () {

    if(window.localStorage){
        if (localStorage.userObject) {
            var user_object = localStorage.getItem('userObject');
            //var testVar;
            retreivedObject = JSON.parse(user_object); 
            retreivedObject.results.forEach(function(obj){
                //console.log(obj.urls.regular);
                var article = document.createElement('article')
                var img = document.createElement('img');
                img.src =  obj.urls.regular;
                let element = document.getElementById('content');
                element.appendChild(article).appendChild(img);

                getCreatorId(obj);
                getFirstName(obj);
                getLastName(obj);
                getLocation(obj);
                getLikes(obj);
            })
        }    
    }
  
     //method get the photo owner's id
     function getCreatorId(photos){
         var creatorId = document.getElementById("creatorId");
         var li = document.createElement("li");
         li.appendChild(document.createTextNode(photos.user.id));
         creatorId.appendChild(li);
     
     }
     
     //method get first name of owner
     function getFirstName(photos){
        var fName = document.getElementById("fName");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(photos.user.first_name));
        fName.appendChild(li);
     }
     
     //method get last name of owner 
     function getLastName(photos){
        var lName = document.getElementById("lName");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(photos.user.last_name));
        lName.appendChild(li);
     }
     
     //method get the location of owner
     function getLocation(photos){
        var locate = document.getElementById("locate");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(photos.user.location));
        locate.appendChild(li);
     }
     
     //method get number of likes of photo owner
     function getLikes(photos){
        var totalLikes = document.getElementById("tLikes");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(photos.user.total_likes));
        totalLikes.appendChild(li); 
     }

});