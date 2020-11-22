knoppen=document.querySelectorAll('button')
for (let i = 0; i < knoppen.length; i++){ 
        knoppen[i].addEventListener('click',function(){
            achtergrondAanpassen(knoppen[i].style.backgroundColor,knoppen[i].style.color)})
}       

function achtergrondAanpassen(akleur,vkleur){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {code:`document.body.style.backgroundColor='${akleur}';
                   document.body.style.color='${vkleur}';                   
                   `}
        )
    })
}

