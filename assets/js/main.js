/* 
 * 
 * Python CLI project
 * Boilerplate 2.0.7, Built on 07-01-2014
 * Copyright © 2014 SoftLayer, an IBM Company. All rights reserved.
 * Code and documentation licensed under MIT.
 * 
 */

!function(a){classReg=function(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")},toggleClass=function(a,b){(fn=hasClass(a,b)?removeClass:addClass)(a,b)},hasClass=void 0,addClass=void 0,removeClass=void 0,"classList"in document.documentElement?(hasClass=function(a,b){return a.classList.contains(b)},addClass=function(a,b){a.classList.add(b)},removeClass=function(a,b){a.classList.remove(b)}):(hasClass=function(a,b){return classReg(b).test(a.className)},addClass=function(a,b){hasClass(a,b)||(a.className=a.className+" "+b)},removeClass=function(a,b){a.className=a.className.replace(classReg(b)," ")}),classify={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass},"function"==typeof define&&define.amd?define(classify):"object"==typeof exports?module.exports=classify:a.classify=classify}(window),body=document.body,iconElement=document.getElementById("icon-element"),navElement=document.getElementById("nav-element"),subnavElement=document.getElementById("subnav-element"),toggleElement=document.getElementById("toggle-element"),toggleElement.onclick=function(){classify.toggle(body,"push"),classify.toggle(navElement,"pull"),classify.toggle(iconElement,"hidden"),classify.toggle(toggleElement,"fixed"),void 0!==typeof subnavElement&&null!==subnavElement&&classify.toggle(subnavElement,"hidden")},function(a){a.fn.indexing=function(b){defaults={showSpeed:"fast"},settings=a.extend(defaults,b),headings=a("h1").filter(function(){return this.id}),output=a(this),!headings.length||headings.length<1||!output.length||(get_level=function(a){return parseInt(a.nodeName.replace("H",""),10)},level=get_level(headings[0]),this_level=void 0,html="",headings.on("click",function(){window.location.hash=this.id}).addClass("clickable-heading").each(function(a,b){this_level=get_level(b),this_level===level&&(html+="<li><a href='#"+b.id+"'>"+b.innerHTML+"</a>"),level=this_level}),0!==settings.showSpeed?output.hide().html(html).show(settings.showSpeed):output.html(html))}}(jQuery),pageOffset=document.documentElement.scrollTop||document.body.scrollTop,scrollTo=function(a,b,c){start=a.scrollTop,change=b-start,currentTime=0,increment=20,animateScroll=function(){currentTime+=increment,val=Math.easeInOutQuad(currentTime,start,change,c),a.scrollTop=val,c>currentTime&&setTimeout(animateScroll,increment)},Math.easeInOutQuad=function(a,b,c,d){return a/=d/2,1>a?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b)},animateScroll()},window.onscroll=function(){return pageYOffset>=200?(document.getElementById("top").style.visibility="visible",void(document.getElementById("top").onclick=function(){scrollTo(document.body,0,0)})):void(document.getElementById("top").style.visibility="hidden")},$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}});var ReadifyHTML5;ReadifyHTML5=function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(k={article:{role:"article"},aside:{role:"complementary"},nav:{role:"navigation"},main:{role:"main"},section:{role:"region"},output:{"aria-live":"polite"},"[required]":{"aria-required":"true"}},p={ok:[],warn:[],fail:[]},h=p.fail,c=new RegExp("aria-[a-z]+|role|tabindex|title|alt|data-[\\w-]+|lang|style|maxlength|placeholder|pattern|required|type|target|accesskey|longdesc"),d="acfy-id-",t=0,f=document,f.querySelectorAll){if(a&&(a.header&&(k[a.header]={role:"banner"}),a.footer&&(k[a.footer]={role:"contentinfo"}),a.main&&(k[a.main]={role:"main"},k.main={role:""})),b&&b._CONFIG_&&b._CONFIG_.ignore_defaults)k=b;else for(n in b)k[n]=b[n];for(j in k)if(!j.match(/^_(CONFIG|[A-Z]+)_/)&&k.hasOwnProperty(j)){try{g=f.querySelectorAll(j)}catch(u){i=u,h.push({sel:j,attr:null,val:null,msg:"Invalid syntax for `document.querySelectorAll` function",ex:i})}for(o=k[j],(!g||g.length<1)&&p.warn.push({sel:j,attr:null,val:null,msg:"Not found"}),l=0;l<g.length;){for(m in o)if(o.hasOwnProperty(m)){if(e=m,q=o[m],e.match(/_?note/))continue;if(!e.match(c)){h.push({sel:j,attr:e,val:null,msg:"Attribute not allowed",re:c});continue}if(!(typeof q).match(/string|number|boolean/)){h.push({sel:j,attr:e,val:q,msg:"Value-type not allowed"});continue}if(r=e.match(/(describ|label)l?edby/)){try{s=f.querySelector(q)}catch(u){i=u,h.push({sel:j,attr:e,val:q,msg:"Invalid selector syntax (2) - see 'val'",ex:i})}if(!s){h.push({sel:j,attr:e,val:q,msg:"Labelledby ref not found - see 'val'"});continue}s.id||(s.id=d+t),q=s.id,e="aria-"+("label"===r[1]?"labelledby":"describedby"),t++}g[l].hasAttribute(e)?p.warn.push({sel:j,attr:e,val:q,msg:"Already present, skipped"}):(g[l].setAttribute(e,q),p.ok.push({sel:j,attr:e,val:q,msg:"Added"}))}l++}}}return p.input=k,p},function(a){a.fn.readEstimate=function(b){if(!this.length)return this;var c=this;el=a(this),defaults={readOutput:".estimate",wordCount:null,wordsPerMinute:290,roundup:!0,lessThanOneMinute:"",prependTime:"",prependWord:""},c.settings=a.extend({},defaults,b);var d=c.settings.readOutput;if(wordCount=c.settings.wordCount,wordsPerMinute=c.settings.wordsPerMinute,roundup=c.settings.roundup,e=c.settings.lessThanOneMinute,prependTime=c.settings.prependTime,prependWord=c.settings.prependWord,wordsPerMinute>wordCount){var e=e||"Less than a min read";minuteOutput="min read"}var f=function(b){var c=b.trim().split(/\s+/g).length;wordsPerSecond=wordsPerMinute/60,totalTimeInSeconds=c/wordsPerSecond,roundup===!0?readTimeInMinutes=Math.round(totalTimeInSeconds/60):Math.floor(totalTimeInSeconds/60);var f=Math.round(totalTimeInSeconds-60*readTimeInMinutes);if(roundup===!0)a(d).text(readTimeInMinutes>0?prependTime+readTimeInMinutes+" "+minuteOutput:prependTime+e);else{var g=readTimeInMinutes+":"+f;a(d).text(prependTime+g)}""!==wordCount&&void 0!==wordCount&&a(wordCount).text(prependWord+c)};el.each(function(){f(el.text())})}}(jQuery),featuredElement=document.getElementById("featured-element"),void 0!==typeof featuredElement&&null!==featuredElement&&($.getJSON("https://api.github.com/repos/softlayer/softlayer-python/contributors?callback=?",function(a){numContributors=a.data,$(function(){$("#github-contributors").text(numContributors.length)})}),$.ajax({url:"https://api.github.com/repos/softlayer/softlayer-python?callback?",dataType:"jsonp",success:function(a){numStargazers=a.data,$("#github-stargazers").text(numStargazers.stargazers_count)}}),$.ajax({url:"https://api.github.com/repos/softlayer/softlayer-python/tags?callback?",dataType:"jsonp",success:function(a){lastTag=a.data[0],$("#github-version").text(lastTag.name)}})),function(a){return void 0!==typeof featuredElement&&null!==featuredElement?(repoUrl=function(a){return repoUrls[a.name]||a.html_url},repoDescription=function(a){return repoDescriptions[a.name]||a.description},addRepo=function(b){$item=a("<li>").addClass("repo name "+(b.language||"").toLowerCase()),$link=a("<a>").attr("href",repoUrl(b)).attr("target","_blank").appendTo($item),$link.append(a("<h2>").text(b.name)),$link.append(a("<h4>").text(b.language)),$link.append(a("<h5>").text(b.watchers)),$link.append(a("<h6>").text(b.forks)),$link.append(a("<p>").text(repoDescription(b))),$item.appendTo("#repos")},addRepos=function(b,c){b=b||[],c=c||1,uri="https://api.github.com/orgs/softlayer/repos?callback=?&per_page=50&page="+c,a.getJSON(uri,function(d){return d.data&&d.data.length>0?(b=b.concat(d.data),addRepos(b,c+1)):void a(function(){return a("#github-repos").text(b.length),a.each(b,function(a,b){return b.pushed_at=new Date(b.pushed_at),weekHalfLife=1.146*Math.pow(10,-9),pushDelta="new Date"-Date.parse(b.pushed_at),createdDelta="new Date"-Date.parse(b.created_at),weightForPush=1,weightForWatchers=1.314*Math.pow(10,7),b.popularity=weightForPush*Math.pow(Math.E,-1*weekHalfLife*pushDelta),b.popularity+=weightForWatchers*b.watchers/createdDelta}),b.sort(function(a,b){return a.popularity<b.popularity?1:b.popularity<a.popularity?-1:void 0}),a.each(b,function(a,b){return addRepo(b)}),b.sort(function(a,b){return a.pushed_at<b.pushed_at?1:b.pushed_at<a.pushed_at?-1:void 0})})})},repoUrls={"":""},repoDescriptions={"":""},addRepos()):void 0}(jQuery);