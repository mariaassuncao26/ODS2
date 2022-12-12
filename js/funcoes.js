xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("postagem");

function texto(){
        for(i = 0; i <= 1; i++){
            document.write(
                    "<h1 class='inika'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
                    "<p class=''>" + x[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "<p>");
        }
    }


function teste(){
    for(i=x.length-1;i>=0;i--){
        document.write(
            "<div class='col-sm-4 '>" +
                "<div class='c card'>" +
                        "<div>" + 
                            "<img class='card-img-top' src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'>" + 
                        "</div>" + 
                    "<div class='card-body'>" +
                        "<h4 class='card-title inika'>" + 
                            x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + 
                        "</h4>" +
                        "<p class='card-text'>" +
                            x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,100) + 
                        "...</p>" +
                        "<div class='btn'>" +
                            "<a href='postagem.html?codigo_postagem=" + i + "'>" + x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +"</a>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>");
    }
}


function postagem(){
    //Armazena a URL completa, ex: http://localhost:81/blog/postagem.html?codigo_postagem=2
    url = new URL(window.location.href);
    //Armazena o parâmetro, ex: codigo_postagem=2
    parametro = url.searchParams;
    //Armazena a id, ex: 2
    i = parametro.get("codigo_postagem");

        document.write(
            "<div>" +
                "<div><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"></div>" +
                "<div class='inika'>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</div>" +
                "<div>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</div>" +
            "</div>");
    
}