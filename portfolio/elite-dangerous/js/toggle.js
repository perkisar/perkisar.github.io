

function toggleVis(id) {
    $('#' + id).toggle('400');
}

function enlargeImg(id, event) {
    var overlay = document.getElementById('overlay');
 
    if (overlay.innerHTML == "") {
        var img = document.getElementById(id);
        /* Create backdrop (use class for styles) */ 
        var backdrop = document.createElement('div');
        var cla = document.createAttribute('class');
        cla.value = "large-backdrop";
        backdrop.setAttributeNode(cla);
        overlay.appendChild(backdrop);

        /* Create container for enlarged image and description */
        var container = document.createElement('div');
        cla = document.createAttribute('class');
        cla.value = 'large-container';
        container.setAttributeNode(cla);
        backdrop.appendChild(container);

        /* Add Image to Container */
        var largeImg = document.createElement('img');
        var src = document.createAttribute('src');
        cla = document.createAttribute('class');
        cla.value = 'large-img';
        largeImg.setAttributeNode(cla);
        src.value = img.getAttributeNode('src').value;
        largeImg.setAttributeNode(src);
        container.appendChild(largeImg);
    }

    $('#overlay').show('fast');

}

