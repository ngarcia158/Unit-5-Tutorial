"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author:Nicholas Garcia
   Date:   
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/
window.addEventListener("load", function() {
   var orderForm = document.forms.orderForm;
   orderForm.elements.orderDate.value = new Date().toDateString();
   orderForm.elements.model.focus();
   calcOrder();
});

function calcOrder() {
   var orderForm = document.forms.orderForm

   //calculates the inital cost of the order
   var mIndex = orderForm.elements.model.slelectedIndex;
   var mCost = orderForm.elements.model.options[mIndex].value;
   var qIndex = orderForm.elements.qty.slelectedIndex;
   var quantity = orderForm.elements.qty[qIndex].value;

   //initial cost = cost x quantity
   var initialCost = mCost*quantity;
   orderForm.elements.initialCost.value = initialCost;

   //retrieve the cost of the user protection plan
   var pCost = document.querySelector('input[name="protection"]:checked').value*quantity;
   orderForm.elements.protectionCost.value = pCost;

   //calc subtotal
   orderForm.elements.subtotal.value = initialCost + pCost;

   //calc sales tax
   var salesTax = 0.05*(initialCost +pCost);
   orderForm.elements.salesTax.value = salesTax;

   //calc the total
   var totalCost = initialCost + pCost+salesTax;
   orderForm.elements.totalCost.value = totalCost;  
}

function formatNumber(val, decimals)