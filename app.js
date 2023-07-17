console.log("alert");
var edit = document.getElementsByClassName("invoice-editable-component");
// edit[1].addEventListener("click", content_editable());

function change(ele) {

  if (ele.hasAttribute('data-clicked'))
    return;
  ele.setAttribute('data-clicked', 'yes');
  ele.setAttribute('data-text', ele.innerHTML);
  console.log(ele.innerHTML);
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value = ele.innerHTML;
  input.style.width = ele.offsetWidth - (ele.clientLeft * 2) + "px";
  // input.style.height=ele.offsetHeight-(ele.clientTop*2)+ "px";
  input.classList = ele.classList;
  input.style.padding = "0px";
  input.style.margin = "0px";
  input.style.border = "0px";
  input.style.fontFamily = "Archivo,sans-serif;";
  input.style.fontSize = "inherit";
  input.style.textAlign = "inherit";
  ele.style.border = "1px solid blue";
  //   input.style.backgroundColor="yellow";

  input.onblur = function () {
    var t = input.parentElement;
    var orig_text = input.parentElement.getAttribute('data-text');
    var curr_text = this.value;
    console.log(ele.value);

    t.removeAttribute('data-clicked');
    t.removeAttribute('data-text');
    t.innerText = curr_text;
    // console.log(curr_text);
    // t.firstChild.remove();



    t.style.border = "1px solid transparent";

  }
  ele.innerHTML = '';
  ele.append(input);
  ele.firstElementChild.focus();


}
for (var i = 0; i < edit.length; i++) {
  edit[i].onclick = function () {

    if (this.hasAttribute('data-clicked'))
      return;
    this.setAttribute('data-clicked', 'yes');
    this.setAttribute('data-text', this.innerHTML);
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = this.innerHTML;
    input.style.width = this.offsetWidth - (this.clientLeft * 2) + "px";
    //   input.style.height=this.offsetHeight-(this.clientTop*2)+ "px";
    input.classList = this.classList;
    input.style.padding = "0px";
    input.style.margin = "0px";
    input.style.border = "0px";
    input.style.fontFamily = "Archivo,sans-serif;";
    input.style.fontSize = "inherit";
    input.style.textAlign = "inherit";
    this.style.border = "1px solid blue";
    //   input.style.backgroundColor="yellow";

    input.onblur = function () {
      var td = input.parentElement;
      var orig_text = input.parentElement.getAttribute('data-text');
      var curr_text = this.value;

      td.removeAttribute('data-clicked');
      td.removeAttribute('data-text');
      td.innerText = curr_text;
      console.log("changed");

      td.style.border = "1px solid transparent";

    }
    this.innerHTML = '';
    this.append(input);
    this.firstElementChild.focus();


  }
};
var text = document.getElementsByClassName("invoice-editable-component-text-area");

for (var i = 0; i < text.length; i++) {
  text[i].onclick = function () {
    console.log("clicked");
    // this.setAttribute("contentEditable",true);
    var text_area = document.createElement('textarea');
    text_area.setAttribute('type', 'text');

    text_area.classList = this.classList;

    text_area.innerHTML = this.innerText;
    this.parentNode.replaceChild(text_area, this);

    text_area.focus();
    text_area.onblur = function () {
      var text = this.value;
      var div = document.createElement('div');
      div.innerText = text;

      div.classList = this.classList;
      this.parentNode.replaceChild(div, this);
      div.id = "divv";

      console.log("changed");


    }
  }

};

var x = document.getElementById('tbody');
var row1 = x.rows[0]
// var add=document.getElementById("add-new-item")
function addd() {
  // Get the table body element in which you want to add row
  console.log("table");
  // console.log('hi');
  var x = document.getElementById('tbody');
  var new_row = row1.cloneNode(true);
  var len = x.rows.length;
  new_row.cells[0].firstElementChild.innerHTML = ++len;

  x.appendChild(new_row);
  getTotal();
}

function deleteRow(row) {
  var i = row.parentNode.parentNode.parentNode.rowIndex;
  document.getElementById('tableid').deleteRow(i);
}
function calc(v) {
  var counte = 0;
  var counter = 0;
  var ind = v.parentElement.parentElement.rowIndex;
  // alert(ind);
  ind--;
  if (v == document.getElementsByName("qty")[ind]) {
    var qty = document.getElementsByName("qty")[ind].firstChild.value;
    var rate = document.getElementsByName("rate")[ind].innerHTML;
  }
  if (v == document.getElementsByName("rate")[ind]) {
    var qty = document.getElementsByName("qty")[ind].innerHTML;
    var rate = document.getElementsByName("rate")[ind].firstChild.value;
  }


  var amt = qty * rate;

  document.getElementsByName("amt")[ind].innerText = amt;
  getTotal();

}

function getTotal(v) {
  var sum = 0;
  var amts = document.getElementsByName("amt");
  for (let i = 0; i < amts.length; i++) {
    var amt = amts[i].innerHTML;
    sum = +(sum) + +(amt);
  }
  document.getElementById("total").innerHTML = sum;
  if (v == document.getElementById("tax")) {
    var tax = document.getElementById("tax").firstChild.value;
  }
  else {
    var tax = document.getElementById("tax").innerHTML;
  }
  var net = +(sum) + +(tax * sum / 100);
  document.getElementById("net").innerHTML = net;
}


function tprint(areaID) {
  var printContent = document.getElementById(areaID).innerHTML;
  var originalContent = document.body.innerHTML;
  document.body.innerHTML = printContent;

  window.print();
  document.body.innerHTML = originalContent;
}


























