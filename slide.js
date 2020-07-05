var time=6000;var quantityItens=12;var pages=12;var activePage=0;$(document).ready(function(){startSlide();});function startSlide(){$(".last_articles .item-wd").removeClass('active');$(".last_articles .item-wd:eq("+activePage+")").addClass('active');$(".button_right").click(function(){next();});$(".button_left").click(function(){prev();});activeMoviment();}
function activeMoviment(){var pause=false;$(".last_articles .item-wd").mouseover(function(){activePage=$(this).index();activePageF(activePage);pause=true;});$("#sub_header").mouseover(function(){pause=true;});$(".last_articles .item-wd, #sub_header").mouseout(function(){pause=false;});var intervalActive=setInterval(function(){if(pause==false){next();}},time);}
function activeButtons(){$(".next").click(function(){next();});$(".prev").click(function(){prev();});}
function next(){if(activePage<pages-1)
activePage+=1;else
activePage=0;activePageF(activePage);}
function activePageF(activePage){var link=$(".last_articles .item-wd:eq("+activePage+") img").attr('src');var title=$(".last_articles .item-wd:eq("+activePage+") .title-item").html();var date=$(".last_articles .item-wd:eq("+activePage+") .date").html();var cat_links=$(".last_articles .item-wd:eq("+activePage+") div.cat-links-wd").html();$(".last_articles .item-wd").removeClass('active');$(".last_articles .item-wd:eq("+activePage+")").addClass('active');$('#sub_header').attr('style','background: url("'+link+'") no-repeat center center;   -webkit-background-size: cover;  -moz-background-size: cover;  -o-background-size: cover;  background-size: cover;');$('#sub_header a b').html(title);$('#sub_header .cat-links').html(cat_links);}
function prev(){if(activePage>0)
activePage-=1;else
activePage=pages-1;activePageF(activePage);}