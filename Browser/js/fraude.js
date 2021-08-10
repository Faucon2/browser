xmlhttp = new XMLHttpRequest();
var postsUrl = "https://c4bq-api-antifraude.prj.onecaas.vpodg1np.carrefour.com/pattern-anti-fraude/v2/analyse-risque";

xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        $('#importSpin').css('display', 'none');
        $('#badrequest').css('display', 'none');
        var reponsejson = JSON.parse(xmlhttp.response);
        console.log(reponsejson);
        document.getElementById("api_operator").innerHTML = reponsejson.nomOperateurOrigine;
        document.getElementById("api_risque").innerHTML = reponsejson.fraudePotentielleOperateur; // Et on affiche !
        $('#resultat').css('display', 'block');
    }else {
    $('#importSpin').css('display', 'none');
    $('#resultat').css('display', 'none');
    //var reponsejso = JSON.parse(xmlhttp.response);
    console.log(xmlhttp);
    document.getElementById("bad").innerHTML = "Invalid parameters : [numTel]" +  "  || "  +  "Bad Request. Please check your request" ;
    $('#badrequest').css('display', 'block');
    
}
    $('#importSpin').css('display', 'none');
   // $('#resultat').css('display', 'block');
   // $('#api_risque').css('display', 'block');
   // $('#risque').css('display', 'block');
    //$('#api_outputof').css('display', 'none');
}

function doFunction() {
    $('#resultat').css('display', 'none');
    var element = document.getElementById("numTel").value;
    var parameters = JSON.stringify({
        "numTel": element,
    });
    
    xmlhttp.open("POST", postsUrl, true);
   // xmlhttp.setRequestHeader('Access-Control-Allow-Methods','POST');
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.setRequestHeader("Authorization", "eb154a17-2138-4921-a9cf-c1648b89f47f");
    xmlhttp.send(parameters);
    $('#importSpin').css('display', 'block');

}