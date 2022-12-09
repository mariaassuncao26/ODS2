xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("postagem");

function texto(){
        for(i = 0; i <= 1; i++){
            document.write( 
                "<div class='oque container'" +
                    "<h1 class='inika'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
                    "<p class=''>" + x[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "<p>" +
                "</div>");
        }
    }



    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","xml/conteudo.xml",false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    
    x = xmlDoc.getElementsByTagName("postagem");
    
    function teste(){
        for(i=x.length-1;i>=0;i--){
            document.write(
                "<div class='c card mt-5' style='width:400px'>" +
                        "<div>" + 
                            "<img class='card-img-top' src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'>" + 
                        "</div>" + 
                    "<div class='card-body'>" +
                        "<h4 class='card-title'>" + 
                            x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + 
                        "</h4>" +
                        "<p class='card-text'>" +
                            x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,100) + 
                        "...</p>" +
                        "<div class='btn'>" +
                            "<a href='postagem.html?codigo_postagem=" + i + "'>" + x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +"</a>" +
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
                    "<div><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></div>" +
                    "<div>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</div>" +
                    "<div>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</div>" +
                "</div>");
        
    }