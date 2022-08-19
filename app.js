document.querySelector(".tip-form").onchange = function() {

  var bill = Number(document.getElementById('billtotal').value)
  var tip = Number(document.getElementById('tipinput').value)
  document.getElementById('tipoutput').innerHTML = `${tip}%`

  var tipValue = bill * (tip / 100)
  var finalValue = bill + tipValue
  var tipAmount = document.querySelector('#tipamount')
  var totalBillWithTip = document.querySelector('#totalbill')

  tipAmount.value = parseFloat(tipValue).toFixed(2)
  totalBillWithTip.value = parseFloat(finalValue).toFixed(2)
  
  document.getElementById('result').style.display='block'
}
