
function calculateTotal(quantity, productPrice, deliveryPrice, giftPrice) {

    let total = quantity * productPrice;
  
    total = total + deliveryPrice + giftPrice;
  
    return total;
  }
  
  function placeOrder() {
  
    let product = document.getElementById("product");
  
    let productName =
      product.options[product.selectedIndex].text;
  
    let productPrice = Number(product.value);
  
    let quantity = Number(
      document.getElementById("quantity").value
    );
  
    let deliveryPrice = Number(
      document.getElementById("delivery").value
    );
  
    let gift = document.getElementById("gift").checked;
  
    let giftPrice = 0;
  
    if (gift == true) {
      giftPrice = 5;
    }
  
    if (quantity < 1 || quantity > 20) {
      document.getElementById("result").innerHTML =
        "Please enter a quantity between 1 and 20.";
      return;
    }
  
    let total = calculateTotal(
      quantity,
      productPrice,
      deliveryPrice,
      giftPrice
    );
  
    document.getElementById("result").innerHTML =
  
      "<h3>🛒 Order Confirmed!</h3>" +
  
      "Product: " + productName + "<br>" +
  
      "Quantity: " + quantity + "<br>" +
  
      "Product Price: $" + productPrice + "<br>" +
  
      "Delivery: $" + deliveryPrice + "<br>" +
  
      "Gift Wrapping: $" + giftPrice + "<br><br>" +
  
      "<b>Total: $" + total.toFixed(2) + "</b>";
  }
  