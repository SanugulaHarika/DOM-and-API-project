fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
   displayProducts(data.products);
})
.catch((err)=>{
    console.log(err);
});

function displayProducts(products){
   let main=document.querySelector("#main");
   for(let i=0;i < products.length; i++){
   let item=document.createElement('div');
   item.classList.add('one');

   let items=document.createElement('div');
   items.classList.add('two');
   
   item.innerHTML=`
   <img src="${products[i].thumbnail}" alt="${products[i].title}"/>
   <h2>id:${products[i].id}</h2>
   <h2>${products[i].title}</h2>`;

   items.innerHTML=`
   <p>Price:$${products[i].price}</p>
   <p>Rating:${products[i].rating}</p>`;

   main.appendChild(item);
   item.appendChild(items);
   }
}

