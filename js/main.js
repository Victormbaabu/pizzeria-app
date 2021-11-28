// backend logic section
$(document).ready(function() {
    // form submission function
    $("#get-pizza-order").submit(function(event) {
        
      // a constructor to define data needed in ordering pizza
      function UserOrder(size, crust, toppings, quantity) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
      }
  
      // fetching user data - price
      var pizzaSizePrice = function getSize() {
        var pizzaSize = document.getElementById("pizza-size").value;
        return parseInt(pizzaSize);
      };
  
      var pizzaCrustPrice = function getCrustType() {
        var pizzaCrust = document.getElementById("crust-type").value;
        return parseInt(pizzaCrust);
      };
  
      var pizzaToppingsPrice = function getToppings() {
        var pizzaToppings = document.getElementById("pizza-toppings").value;
        return parseInt(pizzaToppings);
      };
  
      var pizzaQuantityPrice = function getQuantity() {
        var pizzaQuantity = document.getElementById("pizza-quantity").value;
        return parseInt(pizzaQuantity);
      };
       //initializing a new order
       var inputForUserOrder = new UserOrder(
        pizzaSizePrice,
        pizzaCrustPrice,
        pizzaToppingsPrice,
        pizzaQuantityPrice
      );
  
      //a variable to get the total price of the user's order
      var totalPrice =
        (inputForUserOrder.size() +
          inputForUserOrder.crust() +
          inputForUserOrder.toppings()) *
        inputForUserOrder.quantity();