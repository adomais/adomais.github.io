var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="See you ~",clearTimeout(titleTime)):(document.title="hi, i am here ~"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));