$( document ).ready(function() {
    $('#importSpin').css('display', 'none');
    $('#resultat').css('display', 'none');
    $('#api_outputof').css('display', 'none');

    addInputFileDisplayHandler();

});

function addInputFileDisplayHandler() {

    let inputs = $('input:file');
    Array.prototype.forEach.call( inputs, function( input )
    {
        let label	 = input.nextElementSibling;
        let labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            let fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });

}


function loadSpellingChecks(area) {
    $.ajax({
        url: "/browser/tools/spellingReport.php?area=" + area,
        type: "GET",
        xhrFields: {
            onprogress: function (e) {
                displayPopup("Spelling Report", e.target.responseText + "<br/><img src='/browser/img/loading.gif'>");
            }
        },
        success: function (data) {
            displayPopup("Spelling Report", data);
        },
        cache: false,
    });
    displayPopup("Spelling Report", "Checking... <img src='/browser/img/loading.gif'>");

}

function displayPopup(title, content) {

    $('.popup').remove();
    if (title == null)
        return;
    let div=`
        <div class="popup">
            <div class="popup-title">
            ${title}
            </div>
            <div class="popup-content">
                ${content}
            </div>
            <input type="button" class="input-centered" value="close" onclick="$('.popup').remove();">
        </div>
    `;
    $('body').append(div);
}