var test = false;


var regularLink = "https://lgreenbunny.github.io/site-of-webs/"; //regular link prefix
var testLink = "http://127.0.0.1:5500/"; //liveserver testing prefix with loopback ip
/*if the link doesnt's start with https, the loop'll add one of the prefix links based on the test var.
the order of the array is: [div id, link text, [end of/full] link*/
var linkArr = 
["react", "React js content", "reactCodes.html",
"three", "Three js content", "threeCodes.html",
"git", "My Github", "https://github.com/Lgreenbunny",
"commission", "Deviantart comissions", "https://www.deviantart.com/lgreenbunny/shop",
"commission", "Fiverr art commissions", "https://www.fiverr.com/share/WQyLD5",
"commission", "Fiverr google sheet commissions", "https://www.fiverr.com/share/z80G8z"
];
//using three indexes at once, it makes a paragraph element with a link inside for each div
for(var i = 0; i < linkArr.length; i+=3){
    var link = "";
    if(linkArr[i+2].match("https.*"))
        link += linkArr[i+2]
    else
        link += test ? testLink+linkArr[i+2] : regularLink+linkArr[i+2];
    var linkTag = document.createElement("a");
    linkTag.setAttribute("href", link);
    var paraTag = document.createElement("p");
    paraTag.appendChild(linkTag);
    document.getElementById(linkArr[i]).appendChild(paraTag);
    /*document.getElementById(linkArr[i]).appendChild(
        document.createElement("p").appendChild(
            document.createElement("a").setAttribute("href", link)
        )
    );*/
    linkTag.innerText = linkArr[i+1];
}
