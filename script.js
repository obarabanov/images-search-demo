
var position;
/*
const picture = document.createElement("img"); 
picture.src = 'http://csharpcorner.mindcrackerinc.netdna-cdn.com/article/round-image-in-xamarin-forms/Images/image005.jpg';
*/


function onLoad() {
    console.log('DOM loaded');    

    const body = document.getElementsByTagName('body')[0];
    body.onclick = function(event) {
    //document.onclick = function(event) {
        console.log('clicked:', event);

        if ( event.target.classList.contains('gs-image') ) {
            event.preventDefault();
            console.log('img.src: ', event.target.src);

            //  TODO:   
            //  1. close search results
            //  2. add image to screen

            const { top, left } = position;           
            renderImageAt(event.target.src, top, left);

        }
    }
}


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

    position = {
        top,
        left
    };
    //renderImageAt(top, left);
    console.log('position:', position);    
}

function renderImageAt(src, top, left) {

    const picture = document.createElement("img"); 
    picture.src = src;
        
    document.body.appendChild(picture);
    
    //  works - OK
    picture.style.position = 'absolute';
    picture.style.top = `${top}px`;
    picture.style.left = `${left}px`;
    picture.style.border = '1px solid red';

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
        })
        /*
        .then(json => {
            console.log( json ); // undefined
        })
        */
        .catch(err => console.error(err));
    
}