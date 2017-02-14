var orderCount=0; 
function takeOrder(topping,crustType) {
  console.log('Order: pizza'+topping+crustType);
  orderCount=orderCount+1;
}
function getSubTotal(itemCount){
  return itemCount*7.5
};
takeOrder('topping','crustType');
takeOrder('crustType','crustType');
takeOrder('topping','crustType');
console.log(getSubTotal(orderCount));
