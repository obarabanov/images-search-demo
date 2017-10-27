/*
function onLoad() {
    console.log('DOM loaded');    
}
*/

const picture = document.createElement("img"); 
picture.src = 'http://csharpcorner.mindcrackerinc.netdna-cdn.com/article/round-image-in-xamarin-forms/Images/image005.jpg';


function closePopup() {
    const popup = document.getElementById('popup');    
    popup.style.display = 'none';
}

function screenClicked(event) {
    //console.log('click:', event);    

    const popup = document.getElementById('popup');    
    popup.style.display = 'unset';
    
    // clientY & clientX
    const {y: top, x: left} = event;
    console.log(`event.y=${event.y} x=${event.x}`);
    //console.log(`event.target=${event.y} x=${event.x}`);
    //renderImageAt(top, left);
    
}

function renderImageAt(top, left) {

    document.body.appendChild(picture);
    
    //  works - OK
    //picture.style.position = 'absolute';
    picture.style.top = `${top}px`;
    picture.style.left = `${left}px`;

    //console.log('style.position:', picture.style.position);
    //console.log('style:', picture.style);
}    

function search() {
    console.log('search');    
    
    let url;
    //url = 'https://www.google.com.ua/search?q=puppy&tbm=isch'; // empty
    //url = 'https://www.google.com.ua/search?q=puppy'; // empty
    //url = 'https://www.google.com/search?q=puppy';
    //url = 'https://cors.io/?https://www.google.com/search?q=puppy'; // fails: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.

    //url = 'https://api.qwant.com/api/search/images?count=10&offset=1&q=cars';
    url = 'https://cors.io/?https://api.qwant.com/api/search/images?count=10&offset=1&q=cars';
    const json = fetch(url)//, { mode: 'no-cors' });
    json
        .then(data => {
            console.log( data );
            //data.json()
        })
        .catch(err => console.error(err));
    
}