xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("postagem");

function texto(){
        for(i = 0; i <= 1; i++){
            document.write( 
                "<h1 class='display-3 titulo1'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
                "<div class='texto'>");
                for(i = 0; i < x.length; i++){
                    document.write( 
                        "<p>" + x[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "</p>");
                }
                document.write( 
                "</div>"
                );
        }
    }