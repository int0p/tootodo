import{c as f,n as d,h as n,i as h,v as b}from"./index2.js";/* empty css                                       */import"classnames";/* empty css                                       */import{C as p}from"./Checkbox.js";import{t as x}from"./useLocStorage.js";import"@iconify/icons-material-symbols/delete-outline-rounded.js";import"./functions.js";const g={code:".font-digital.svelte-c0rdml{font-family:'Quantico', sans-serif}",map:null},y=8,D=f((o,i,c,m)=>{let r=[10,20,30,40,50,60],s=Array.from({length:24},(t,l)=>(l+y)%12+1),e=Array.from(Array(r.length),()=>Array(s.length).fill(!1));return e[1][1]=!0,e[1][2]=!0,e[1][3]=!0,e[1][4]=!0,e[1][5]=!0,e[2][0]=!0,e[2][1]=!0,e[2][2]=!0,o.css.add(g),`<div class="w-full h-full overflow-y-scroll "><table class="w-full border-collapse"><tr class="sticky top-0"><th class="p-2 border bg-gray-100"></th>
            ${d(r,t=>`<td class="text-xs sticky text-center py-1 px-1 border bg-zinc-500 text-white font-bold"><span class="font-digital svelte-c0rdml">${n(t)}</span>

                    
                    
                    
                    
                    
                </td>`)}</tr>

        ${d(s,t=>`<tr class="border"><th class="text-xs py-2 border bg-zinc-700 text-white font-bold"><span class="font-digital  svelte-c0rdml">${n(t)}</span></th>
                ${d(r,l=>'<td class="py-2 border"></td>')}
            </tr>`)}</table>
</div>`}),j=f((o,i,c,m)=>{let r,s;s=h(x,a=>r=a);let e=[],{todoSelected:t=[]}=i;i.todoSelected===void 0&&c.todoSelected&&t!==void 0&&c.todoSelected(t);let l,u;do l=!0,t=e,u=`<div class="w-full h-full relative border-l"><div class="flex justify-start relative"><div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white "></div>
        <div class="text-sm font-normal leading-none text-gray-400 absolute left-3 ">Do List</div></div>
    <ul class="my-1 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200 h-[calc(100%-2.7rem)] w-[calc(100%-1rem)] overflow-y-scroll absolute right-0 top-5">${r?`${d(r,({title:a,id:$})=>`${b(p,"Checkbox").$$render(o,{custom:!0,class:"cursor-pointer !border-t-0 peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50",value:a,group:e},{group:v=>{e=v,l=!1}},{default:()=>`<li class="max-h-[64px] px-2 py-3 line-clamp-2 w-full border-b border-dashed "><div class="w-full relative space-x-2 flex justify-start items-centers w-max-[214px] "><div class="self-center w-[3.5px] h-full bg-blue-600 absolute -left-0"></div>
                            <p class="text-[0.9rem] max-w-[calc(100%-40px)] line-clamp-2 relative left-1">${n(a)}</p>
                            ${b(p,"Checkbox").$$render(o,{checked:!0,class:"self-center absolute right-0 "},{},{})}






                        </div></li>
                `})}`)}
            `:""}</ul></div>`;while(!l);return s(),u});export{j as D,D as T};
