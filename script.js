var position;

function onLoad() {
    console.log('DOM loaded');    
    hideLoader();

    const body = document.getElementsByTagName('body')[0];
    body.onclick = function(event) {
        //console.log('clicked:', event);

        if ( event.target.classList.contains('gs-image') ) {
            event.preventDefault();
            console.log('img.src: ', event.target.src);

            //  1. close search results
            google.search.cse.element.getElement('gSearch').clearAllResults();
            closePopup();

            //  2. add image to screen
            const { top, left } = position;           
            renderImageAt(event.target.src, top, left);
        }
    }
}

function screenClicked(event) {
    const popup = document.getElementById('popup');    
    popup.style.display = 'unset';
    
    // clientY & clientX
    const {y: top, x: left} = event;
    console.log(`event.y=${event.y} x=${event.x}`);

    position = {
        top,
        left
    };
}

function renderImageAt(src, top, left) {
    const picture = document.createElement("img"); 
    picture.src = src;
    document.body.appendChild(picture);
    
    picture.style.position = 'absolute';
    picture.style.top = `${top}px`;
    picture.style.left = `${left}px`;
    //picture.style.border = '1px solid darkgrey';
}    

function closePopup() {
    const popup = document.getElementById('popup');    
    popup.style.display = 'none';
}

function hideLoader() {
    const popup = document.getElementById('loader');    
    popup.style.display = 'none';
}
