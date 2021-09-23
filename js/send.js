var client_id = 'ffd460a77ebb49b5a874ff0008cfada0';
var client_secret = 'https://accounts.spotify.com/authorize'; 
var redirect_uri = 'http://127.0.0.1:5500/stats.html'; 
var joiner = "%20"

var scopes = ["user-top-read"]
var redirect_url = scopes.join(joiner);

window.onload = function(){
    document.getElementById('log-in').onclick = function() {
        window.location = `${client_secret}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;
    }
}