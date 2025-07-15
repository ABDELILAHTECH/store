        let products = document.querySelectorAll(".product");
        let priceTotal = document.querySelector("#priceTotal span");
        let resetBtn = document.querySelector("#reset")
        let total = parseFloat(localStorage.getItem("total")) || 0;
        let panier = JSON.parse(localStorage.getItem("panier")) || [];
        

        class Panier {
          constructor(img, nom,counter, price) {
            this.img = img;
            this.nom = nom;
            this.counter = counter;
            this.price = price;
        }
}

products.forEach((product) => {
  let img = product.querySelector("img");
  let button = product.querySelector("button");
  let nom = product.querySelector("p");
  let priceSpan = product.querySelector("span");
  let counter = 0;

  button.addEventListener("click", () => {

    counter++
    let price = parseFloat(priceSpan.textContent.replace(",", "."));
    const newPr = new Panier(img.src, nom.textContent,counter, price);

    panier.push(newPr);
    total += price;
    console.log(total.toFixed(2));
    

    localStorage.setItem("newProduct", JSON.stringify(panier));
    localStorage.setItem("total", total);

    // priceTotal.textContent = total.toFixed(2).replace(".", ",");
  });
});




        // resetBtn.addEventListener("click",()=>{
        //     total = 0
        //     localStorage.setItem("total",total)
        //     priceTotal.innerHTML = total.toFixed(2);
        // })