$(document).ready(function(){function A(){a.beginPath();a.moveTo(c+25,d);a.quadraticCurveTo(c+10,d+25,c+25,d+65);a.quadraticCurveTo(c+38,d+25,c+25,d);a.fillStyle="#fc0";a.fill();a.beginPath();a.moveTo(c+20,d+27);a.lineTo(c+20,d+20);a.lineTo(c+29,d+20);a.lineTo(c+29,d+27);a.quadraticCurveTo(c+25,d+35,c+20,d+27);a.fillStyle="#000";a.fill();a.beginPath();if(k=="left"){a.arc(c+21,d+24,3,0,f,false);a.arc(c+28,d+26,3,0,f,false)}else{k=="right"?a.arc(c+21,d+26,3,0,f,false):a.arc(c+21,d+24,3,0,f,false);a.arc(c+
28,d+24,3,0,f,false)}a.fillStyle="#900";a.fill();a.beginPath();a.strokeStyle="#333";if(k=="left"){a.moveTo(c,d+20);a.lineTo(c+48,d+40);a.arc(c,d+20,3,0,f,false);a.arc(c+3,d+21,3,0,f,false);a.arc(c+6,d+22,2,0,f,false);a.arc(c+48,d+40,3,0,f,false);a.arc(c+45,d+39,3,0,f,false);a.arc(c+42,d+38,2,0,f,false);t="left";k="center"}else if(k=="right"){a.moveTo(c,d+40);a.lineTo(c+48,d+20);a.arc(c,d+40,3,0,f,false);a.arc(c+3,d+39,3,0,f,false);a.arc(c+6,d+38,2,0,f,false);a.arc(c+48,d+20,3,0,f,false);a.arc(c+45,
d+21,3,0,f,false);a.arc(c+42,d+22,2,0,f,false);t="right";k="center"}else{a.moveTo(c,d+30);a.lineTo(c+48,d+30);a.arc(c,d+30,3,0,f,false);a.arc(c+3,d+30,3,0,f,false);a.arc(c+6,d+30,2,0,f,false);a.arc(c+48,d+30,3,0,f,false);a.arc(c+45,d+30,3,0,f,false);a.arc(c+42,d+30,2,0,f,false);k=t=="left"?"right":"left";t="center"}a.fillStyle="#00c";a.stroke();a.fill();a.beginPath();a.arc(c+24.5,d+24,3,0,f,false);a.fillStyle="#c90";a.fill();var b=c+19,e=c+24.5,B=c+30;if($("input:checked").length==0&&(b<=h[1]||B>=
i[1]||b<=h[2]||B>=i[2]||rocks[1]!=null&&e>=rocks[1]-8&&e<=rocks[1]+8||rocks[2]!=null&&e>=rocks[2]-8&&e<=rocks[2]+8||gators[1]!=null&&e>=gators[1]-10&&e<=gators[1]+10||gators[2]!=null&&e>=gators[2]-10&&e<=gators[2]+10||fireflies[1]!=null&&e>=fireflies[1]-20&&e<=fireflies[1]+20||fireflies[2]!=null&&e>=fireflies[2]-20&&e<=fireflies[2]+20)){u=false;clearInterval(v);a.fillStyle="#000";a.fillText("GAME OVER!",145,235);a.fillText("Click to Restart",100,255)}}function C(){a.clearRect(0,0,l,z);for(var b=0;b<
10;b++){h[b]=h[b+1];i[b]=i[b+1];rocks[b]=rocks[b+1];gators[b]=gators[b+1];fireflies[b]=fireflies[b+1]}h[10]=Math.random()*(s-m)+m;i[10]=l-(Math.random()*(s-m)+m);rocks[b]=null;gators[b]=null;fireflies[b]=null;if(n!="center")if(n=="left"){if(m+o>15)o-=10}else if(l-s+o<365)o+=10;h[10]+=o;i[10]+=o;for(b in rocks)if(rocks[b]!=null){a.beginPath();a.arc(rocks[b],b*50,8,0,f,false);a.fillStyle="#666";a.fill()}for(b in gators)if(gators[b]!=null){var e=b*50;a.beginPath();a.arc(gators[b],e,10,0,f,false);a.arc(gators[b],
e-15,8,0,f,false);a.moveTo(gators[b]-10,e);a.lineTo(gators[b]-8,e-15);a.lineTo(gators[b]+8,e-15);a.lineTo(gators[b]+10,e);a.lineTo(gators[b]-10,e);a.fillStyle="#060";a.fill();a.beginPath();a.moveTo(gators[b]-3,e-17);a.lineTo(gators[b]-2,e-19);a.moveTo(gators[b]+3,e-17);a.lineTo(gators[b]+2,e-19);a.moveTo(gators[b]-3,e+1);a.lineTo(gators[b]-3,e-3);a.moveTo(gators[b]+3,e+1);a.lineTo(gators[b]+3,e-3);a.moveTo(gators[b]-4,e+2);a.lineTo(gators[b]-4,e-3);a.moveTo(gators[b]+4,e+2);a.lineTo(gators[b]+4,e-
3);a.strokeStyle="#040";a.stroke();a.beginPath();a.moveTo(gators[b]-3,e-3);a.lineTo(gators[b]-3,e-4);a.moveTo(gators[b]+3,e-3);a.lineTo(gators[b]+3,e-4);a.strokeStyle="#090";a.stroke()}a.beginPath();a.moveTo(0,485);a.lineTo(0,15);a.arc(15,15,15,Math.PI,Math.PI*3/2,false);a.moveTo(15,0);a.lineTo(h[0],w[0]);for(b in h)a.lineTo(h[b],w[b]);a.lineTo(15,500);a.arc(15,485,15,Math.PI/2,Math.PI,false);a.fillStyle="#090";a.fill();a.beginPath();a.moveTo(400,485);a.lineTo(400,15);a.arc(385,15,15,f,Math.PI*3/
2,true);a.moveTo(385,0);a.lineTo(i[0],x[0]);for(b in i)a.lineTo(i[b],x[b]);a.lineTo(385,500);a.arc(385,485,15,Math.PI/2,0,true);a.fill();A();for(b in fireflies)if(fireflies[b]!=null){a.beginPath();a.moveTo(fireflies[b],b*50-2);a.lineTo(fireflies[b],b*50+2);a.strokeStyle="#3d2627";a.stroke();a.beginPath();a.moveTo(fireflies[b],b*50+1);a.lineTo(fireflies[b],b*50+2);a.strokeStyle="#ff0";a.stroke();a.beginPath();a.arc(fireflies[b],b*50,20,0,f,false);a.fillStyle="rgba(255, 255, 0, "+Math.random()+")";
a.fill()}g++;if(g%5==0){n=Math.random();n=n<0.4?"left":n>0.6?"right":"center"}if(g%16==0)rocks[10]=Math.floor(Math.random()*400);if(g%25==0){m+=0.5;s+=0.5}if(g%78==0)gators[10]=Math.floor(Math.random()*400);if(g%100==0){y-=1;clearInterval(v);v=setInterval(C,y)}if(g%113==0)fireflies[10]=Math.floor(Math.random()*400);$("#current-score").html(g);if($("#high-score").html()<g&&D==false){$("#high-score").html(g);localStorage.setItem("high",g)}}var u=false,p=$("canvas"),D=false,f=Math.PI*2;typeof localStorage==
"undefined"?alert("Unfortunately, your browser sucks"):$("#high-score").html(localStorage.getItem("high")==null?0:localStorage.getItem("high"));if(p[0].getContext){var a=p[0].getContext("2d"),l=p.width(),z=p.height(),d=35,G=p.attr("offsetLeft"),c=l/2-6,h=[],w=[],i=[],x=[],q=10,r=l-10,E=q,F=r,t="left",k="center",j=0,m,s,o,y=80,g=0,n="center";a.strokeStyle="#000";a.lineWidth="2";a.lineCap="round";a.lineJoin="round";a.font="bold 22px monospace";a.fillText("Click to Start",110,250);var v=""}else alert("Unfortunately, your browser sucks");
$("canvas").click(function(){if(u==false){D=$("input:checked").length;h=[];w=[];i=[];x=[];rocks=[];gators=[];fireflies=[];q=10;r=l-10;E=q;F=r;interval=1;j=0;m=100;s=115;o=0;y=70;g=0;n="center";for(var b=0;b<=z;b+=50){h[j]=q;w[j]=b;i[j]=r;x[j]=b;E=q;q+=7;F=r;r-=7;rocks[j]=null;gators[j]=null;fireflies[j]=null;j++}u=true;a.clearRect(0,0,l,z);v=setInterval(C,y)}});$("canvas").mousemove(function(b){if(u==true){p.css("cursor","move");a.clearRect(c,d,49,65);c=b.clientX-G-25;A()}})});