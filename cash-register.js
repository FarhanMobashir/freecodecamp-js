function checkCashRegister(price, cash, cid) {



  // variables
  let change = cash - price;
  // let currency = [["Penny", 0.01], ["Nickel", 0.05], ["Dime", 0.1], ["Quarter", 0.25], ["One", 1], ["Five ", 5], ["Ten", 10], ["Twenty", 20], ["Hundred Dollar", 100]]
  let result = { status: '', change: [] }
  console.log('Initial change :' + change);
  while (change != 0) {
    // HUNDRED
    if (change >= 100 && cid[8][1] != 0) {
      change = (change % 100).toFixed(2);
      result.status = "OPEN";
      result.change.push([cid[8][0], change]);
    }

    // TWENTY
    if (change >= 20 && change < 100 && cid[7][1] !== 0) {
      if (Math.floor(change / 20) * 20 >= cid[7][1]) {
        result.change.push([cid[7][0], cid[7][1]]);
        change = (change % 20 + ((Math.floor(change / 20) * 20) - cid[7][1])).toFixed(2);
        cid[7][1] = 0;
        result.status = "OPEN";


      }
      else if (Math.floor(change / 20) * 20 === cid[7][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {
        result.change.push([cid[7][0], Math.floor(change / 20) * 20]);
        change = (change % 20).toFixed(2);
        result.status = "OPEN";

      }





    }

    // TEN
    if (change >= 10 && cid[6][1] != 0) {
      if (Math.floor(change / 10) * 10 >= cid[6][1]) {
        result.change.push([cid[6][0], cid[6][1]]);
        change = (change % 10 + (Math.floor(change / 10) * 10 - cid[6][1])).toFixed(2);
        cid[6][1] = 0;
        result.status = "OPEN";

      }
      else if (Math.floor(change / 10) * 10 === cid[6][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {

        result.change.push([cid[6][0], Math.floor(change / 10) * 10]);
        change = (change % 10).toFixed(2);
        result.status = "OPEN";
      }
      // console.log(change)


    }
    // FIVE
    if (change >= 5 && cid[5][1] != 0) {
      if (Math.floor(change / 5) * 5 >= cid[5][1]) {
        result.change.push([cid[5][0], cid[5][1]]);
        change = (change % 5 + (Math.floor(change / 5) * 5 - cid[5][1])).toFixed(2);
        cid[5][1] = 0;
        result.status = "OPEN";


      }
      else if (Math.floor(change / 5) * 5 === cid[5][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {

        result.change.push([cid[5][0], Math.floor(change / 5) * 5]);
        change = (change % 5).toFixed(2);
        result.status = "OPEN";
      }
    }
    // ONE
    if (change >= 1 && cid[4][1] != 0) {
      if (Math.floor(change / 1) * 1 >= cid[4][1]) {
        result.change.push([cid[4][0], cid[4][1]]);
        change = (change % 1 + (Math.floor(change / 1) * 1 - cid[4][1])).toFixed(2);
        cid[4][1] = 0;
        result.status = "OPEN";


      }
      else if (Math.floor(change / 1) * 1 === cid[4][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {

        result.change.push([cid[4][0], Math.floor(change / 1) * 1]);
        change = (change % 1).toFixed(2);
        result.status = "OPEN";
      }
    }
    // QUARTER
    if (change >= 0.25 && cid[3][1] != 0) {
      if (Math.floor(change / 0.25) * 0.25 >= cid[3][1]) {
        result.change.push([cid[3][0], cid[3][1]]);
        change = (change % 0.25 + (Math.floor(change / 0.25) * 0.25 - cid[3][1])).toFixed(2);
        cid[3][1] = 0;
        result.status = "OPEN";

      }
      else if (Math.floor(change / 0.25) * 0.25 === cid[3][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {

        result.change.push([cid[3][0], Math.floor(change / 0.25) * 0.25]);
        change = (change % 0.25).toFixed(2);
        result.status = "OPEN";
      }
    }
    // DIME
    if (change >= 0.1 && cid[2][1] != 0) {
      if (Math.floor(change / 0.1) * 0.1 >= cid[2][1]) {
        result.change.push([cid[2][0], cid[2][1]]);
        change = (change % 0.1 + (Math.floor(change / 0.1) * 0.1 - cid[2][1])).toFixed(2);
        cid[2][1] = 0;
        result.status = "OPEN";


      }
      else if (Math.floor(change / 0.1) * 5 === cid[2][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {

        result.change.push([cid[2][0], Math.floor(change / 0.1) * 0.1]);
        change = (change % 0.1).toFixed(2);
        result.status = "OPEN";
      }

    }
    // NICKEL
    if (change >= 0.05 && cid[1][1] != 0) {
      if (Math.floor(change / 0.05) * 0.05 >= cid[1][1]) {
        result.change.push([cid[1][0], cid[1][1]]);
        change = (change % 0.05 + (Math.floor(change / 0.05) * 0.05 - cid[1][1])).toFixed(2);
        cid[1][1] = 0;
        result.status = "OPEN";


      }
      else if (Math.floor(change / 0.05) * 0.05 === cid[1][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {

        result.change.push([cid[1][0], Math.floor(change / 0.05) * 0.05]);
        change = (change % 0.05).toFixed(2);
        result.status = "OPEN";
      }

    }
    // PENNY
    if (change >= 0.01 && cid[0][1] != 0) {
      if (Math.floor(change / 0.01) * 0.01 > cid[0][1]) {
        result.change.push([cid[0][0], cid[0][1]]);
        change = (change % 0.01 + (Math.floor(change / 0.01) * 0.01 - cid[0][1])).toFixed(2);
        cid[0][1] = 0;
        result.status = "OPEN";
        console.log('if :' + change);
      }
      else if (Math.floor(change / 0.01) * 0.01 === cid[0][1]) {
        result.change = cid;
        result.status = 'CLOSED';
        change = 0;
      }
      else {
        result.change.push([cid[0][0], Math.floor(change / 0.01) * 0.01]);
        change = (change % 0.01).toFixed(2);
        result.status = "OPEN";
        console.log('change :' + change)
      }
    }
    console.log(change)
    if (parseFloat(change) > 0) {
      result.status = "INSUFFICIENT_FUNDS",
        result.change = []
      return result
    }
  }
  return result;
}



// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// )
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// should return { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }.

