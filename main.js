var likesMin = 0;
var commentsMin = 0;

chrome.storage.sync.get({
    likesMin: 250,
    commentsMin: 10
}, function(items) {
    console.log(items);
    likesMin = items.likesMin;
    commentsMin = items.commentsMin;
});


$(document).mousemove(function(event){
    var engagements = $(".qn-0x");
    engagements.each(function(index, value){
        var likes = 0;
        var comments = 0;
        engagements.find("li").each(function(index, value){
            if(index === 0){
                likes = parseFloat(value.innerText.replace(',','').replace(' ',''));
            }else if(index === 1){
                comments = parseFloat(value.innerText.replace(',','').replace(' ','').replace('.',''));
            }
        });

        console.log(likesMin);
        console.log(commentsMin);
        console.log(likes);
        console.log(comments);
        // if engagement är under gräns
        if( likes < likesMin || comments < commentsMin ){
            $(value).parent().parent().css("opacity", "0.3");
            //$(value).parent().parent().parent().remove();
        }

    });
});