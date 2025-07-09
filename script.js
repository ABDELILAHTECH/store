        let products = document.querySelectorAll(".product");
        let priceTotal = document.querySelector("#priceTotal span");
        let resetBtn = document.querySelector("#reset")
        let total = parseFloat(localStorage.getItem("total")) || 0;
        let panier = JSON.parse(localStorage.getItem("panier")) || [];
        priceTotal.innerHTML = total.toFixed(2);

       cd class Panier {
          constructor(img, nom, price) {
            this.img = img;
            this.nom = nom;
            this.price = price;
        }
}

products.forEach((product) => {
  let img = product.querySelector("img");
  let button = product.querySelector("button");
  let nom = product.querySelector("p");
  let priceSpan = product.querySelector("span");

  button.addEventListener("click", () => {
    let price = parseFloat(priceSpan.textContent.replace(",", "."));
    const newPr = new Panier(img.src, nom.textContent, price);

    panier.push(newPr);
    total += price;

    localStorage.setItem("newProduct", JSON.stringify(panier));
    localStorage.setItem("total", total);

    priceTotal.textContent = total.toFixed(2).replace(".", ",");
  });
});




        resetBtn.addEventListener("click",()=>{
            total = 0
            localStorage.setItem("total",total)
            priceTotal.innerHTML = total.toFixed(2);
        })