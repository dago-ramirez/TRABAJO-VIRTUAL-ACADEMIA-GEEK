const defaultAvatar = 'http://placehold.it/300x300';
var urlImage = 'http://www.fillmurray.com/300/300';
let imgAvatar = document.querySelector('.avatar');
if (imgAvatar.getAttribute('src') === '') {
    imgAvatar.setAttribute('src', urlImage);
}
