selected=document.querySelector(".selected");
seats=document.querySelector(".seats");
let section=[
    eie={
        column:25,
        rows:12,
        seats:360,
    },
    shboys1={
        column:1,
        row:1,
        seats:1,
    },
    shboys2={
        column:1,
        row:1,
        seats:1,
    },
    shgirls1={
        column:1,
        row:1,
        seats:1,
    },
    shgirls2={
        column:1,
        row:1,
        seats:1,
    },
    eee={
        column:1,
        row:1,
        seats:1,
    },
    ece1={
        column:1,
        row:1,
        seats:1,
    },
    ece2={
        column:1,
        row:1,
        seats:1,
    },
    mba={
        column:1,
        row:1,
        seats:1,
    },
    mca={
        column:1,
        row:1,
        seats:1,
    },
    voulnteers={
        column:1,
        row:1,
        seats:1,
    },
    csa1={
        column:1,
        row:1,
        seats:1,
    },
    cse2={
        column:1,
        row:1,
        seats:1,
    },

];
v=1;
count=0;
const Alph = [" ","A ", "B ", "C ", "D ", "E ", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for(j=1;j<=section[0].rows;j++)
{
    l=document.createElement("span");
    l.classList.add("flex");
    g=document.createElement("div");
    g.classList.add("alpha");
    g.innerHTML=Alph[j]+" ";
    l.appendChild(g);

    for(i=1;i<=section[0].column;i++)
{
    
k=document.createElement("div");
k.classList.add("seat");
k.innerHTML=v;
v++;
l.appendChild(k);

}
v=1;
seats.appendChild(l);


}
amount=0;
book=document.querySelector(".book");

document.querySelectorAll(".seat").forEach(element => {
element.addEventListener("click",(e)=>{
    
j=e.target;

        v=j.innerHTML;
        z=j.parentNode.querySelector(".alpha").innerHTML;
        v=z+v;
if(j.classList=="seat" && count<=5)
{
        j.classList.add("green");
        
        li=document.createElement("span");
        li.classList.add("dd");
        li.innerHTML=v;
        selected.appendChild(li);
        
       amount=amount+100;
}
else{
     j.classList.remove("green");
     document.querySelectorAll(".dd").forEach(element => {
        if(element.innerHTML==v)
        {
            element.parentNode.removeChild(element);
        }
    
       
     });
     
     amount=amount-100;
     
     
}
book.innerHTML="Book and continue ₹"+amount; 
});
});



