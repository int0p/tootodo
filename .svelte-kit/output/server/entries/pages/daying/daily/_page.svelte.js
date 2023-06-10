import{c as i,i as n,f as d,h as e,v as o}from"../../../../chunks/index2.js";import{c}from"../../../../chunks/clock.js";import{D as u,T as b}from"../../../../chunks/doneList.js";import"classnames";import{B as p}from"../../../../chunks/Button.js";/* empty css                                                        */let f="w-full text-center uppercase mb-2 text-lg font-bold py-2 rounded-md hover:bg-rose-700 text-white bg-zinc-700";const _=i((s,m,x,v)=>{let t,l;l=n(c,r=>t=r);let a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return l(),`<div class="flex-col w-full relative h-full">
    <div class="flex-col justify-start absolute top-0 w-full h-[80px]"><button${d("class",f,0)}>${e(a[t.day])}</button>
        <div class="w-full text-center uppercase mb-2 text-lg font-bold "><div class="absolute left-0 font-digital"><span class="text-rose-600 text-xl">${e(t.date)}</span> /<span class="text-lg">${e(t.month)}</span></div>
            <div class="text-3xl text-rose-950 font-digital absolute right-0">${e(t.shortTime)}</div></div></div>

    <div class="absolute h-[calc(100%-80px)] flex-col w-full top-20">
        <div class="w-full h-[33%] absolute top-2">${o(u,"DoneList").$$render(s,{},{},{})}</div>
        <div class="h-[67%] w-full absolute bottom-0">${o(b,"TimeTable").$$render(s,{},{},{})}</div>

        
        ${o(p,"Button").$$render(s,{size:"xl",gradient:!0,color:"",class:`showWorks absolute bottom-0 right-0 !font-extrabold text-center text-lg !p-2 w-5/12
                                   from-green-500 to-rose-500 bg-gradient-to-br hover:bg-gradient-to-l text-white text-xl`},{},{default:()=>'<span class="font-digital font-extrabold ">10h 30m</span>'})}

        </div></div>`});export{_ as default};
