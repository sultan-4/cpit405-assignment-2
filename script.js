const clientId = "1975510bca39a20";
var albumId = 'qwFBg';
var images = document.getElementsByClassName("image")

console.log("here")
function requestAlbum() {
  console.log("here")
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            processAlbumRequest(req.responseText);
        }
        else if (req.readyState == 4 && req.status != 200) {
            console.log(req.status + " Error with the imgur API: ", req.responseText);
        }
    }
    req.open('GET', 'https://api.imgur.com/3/album/' + albumId + '/images', true); // true for asynchronous     
    req.setRequestHeader('Authorization', 'Client-ID ' + clientId);
    req.send();
}

function processAlbumRequest(response_text) {
  var respObj = JSON.parse(response_text);
  for (item of respObj.data.slice(0, 10)){
      console.log(item)
      requestImage(item.id);
  }
}

function requestImage(imageHash) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
      if (req.readyState == 4 && req.status == 200) {
          processImageRequest(req.responseText);
      }
      else if (req.readyState == 4 && req.status != 200) {
          console.log("Error with the imgur API");
      }
  }
  req.open("GET", "https://api.imgur.com/3/image/" + imageHash, true); // true for asynchronous     
  req.setRequestHeader('Authorization', 'Client-ID ' + clientId);
  req.send();
}

function processImageRequest(response_text) {
  images.innerHTML = "";
  var respObj = JSON.parse(response_text);
  let imgElem = document.createElement("img");
  imgElem.src = respObj.data.link;
  images.innerHTML += '<img srs="'+ imgElem + '">'
}
requestAlbum()

function addImages() {
  imagesDiv.innerHTML = "";
  for (imageItem of images) {
      imagesDiv.innerHTML += '<div>' +
          '                <img src="' + imageItem.download_url + '">' +
          '                <div class="info">' +
          '                    <span>' +
          '                        ID: ' + imageItem.id + ', Author: ' + imageItem.author +
          '                    </span>' +
          '                </div>' +
          '            </div>';
  }
}