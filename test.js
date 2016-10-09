// create view

function createHTMLView(k,obj1)
{
var para = document.createElement("div");
para.className="col-lg-3";
para.style.alignItems="center";
para.style.boxSizing = "border-box";
para.style.height = "400px";
para.style.overflow = "hidden";
var t1 = obj1.Books[k].Title;
var t = document.createElement("H2");
var textNode = document.createTextNode(t1);
t.style.color="#FFF";
t.style.textShadow = "5px 5px 1px #777777,0px 0px 8px #000";
t.appendChild(textNode);
var t2 = document.createElement("img");
var cli =obj1.Books[k].ID;
t2.src=obj1.Books[k].Image;
var link = document.createElement("A");
link.href="javascript:book(".concat(cli).concat(")");
link.appendChild(t2);
para.appendChild(link);
para.appendChild(t);

document.getElementById("myDIV").appendChild(para);
}



//On Click event of button

function loadDoc()
{
  var searchText = document.getElementById("namehere").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

          var Obj = JSON.parse(this.responseText);
          document.getElementById("myDIV").innerHTML="";
          for(var i =0 ;i<Obj.Books.length;i++)
          {
            createHTMLView(i,Obj);
          }
    }
  };
  xhttp.open("GET", "http://it-ebooks-api.info/v1/search/".concat(searchText), true);
  xhttp.send();
}

function book(id)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
          var Obj = JSON.parse(this.responseText);
          document.getElementById("myDIV").innerHTML="";
          var para = document.createElement("div");
          para.className="col-lg-12";
          para.style.alignItems="center";
          para.style.boxSizing = "border-box";
          var heading=document.createElement("H1");
          var text1 = document.createTextNode(Obj.Title);
          heading.appendChild(text1);
          para.appendChild(heading);
          var image = document.createElement("img");
          image.src=Obj.Image;
          para.appendChild(image);
          var heading4 = document.createElement("H5");
          var textHead = document.createTextNode("Author :-  ".concat(Obj.Author));
          heading4.appendChild(textHead);
          textHead = document.createTextNode(" ISBN :- ".concat(Obj.ISBN));
          heading4.appendChild(textHead);
          textHead = document.createTextNode(" Pages :- ".concat(Obj.Page));
          heading4.appendChild(textHead);
          textHead = document.createTextNode(" Publisher :- ".concat(Obj.Publisher));
          heading4.appendChild(textHead);
          para.appendChild(heading4);
          var pTag = document.createElement("p");
          pTag.innerHTML=Obj.Description;
          para.appendChild(pTag);


          document.getElementById("myDIV").appendChild(para);


      };
      xhttp.open("GET", "http://it-ebooks-api.info/v1/book/".concat(id), true);
      xhttp.send();
}
