//Coding challenge Cashier Change

//Programme input:
  //Amount due
  var amountDue = prompt("Enter the amount due: ");
  amountDue = parseFloat(amountDue).toFixed(2);

  //Amount paid by the customer
  var amountPaid = prompt("Enter the amount paid");
  amountPaid = parseFloat(amountPaid).toFixed(2);

//Programme output:
  //Print change amount
  var change = amountPaid - amountDue;
  change = change.toFixed(2);

  console.log(`Your change is: £${change}`);

  //Print change breakdown: notes and coins
  //Create objects for Each Note and Penny
  var note_coin;
  
  //£50 note object and its calculations
  note_coin = {
    name : "£50 coin note: ",
    value : 50,
    return : 0
  };
  //calculating the number of £50 notes to return
  note_coin.return = Math.floor(change/note_coin.value);
  //calculating the change after removing the number of £50 notes
  change = (change%note_coin.value).toFixed(2);
  //printing the results of the logic
  note_coin.return > 0 ? console.log(note_coin.name + note_coin.return) : 0;
  
  //£20 note object and its calculations
  note_coin = {
    name : "£20 coin note: ",
    value : 20,
    return: 0
  };
  //calculating the number of £20 notes to return
  note_coin.return = Math.floor(change/note_coin.value);
  //calculating the change after removing the number of £20 notes
  change = (change%note_coin.value).toFixed(2);
  //printing the results of the logic
  note_coin.return > 0 ? console.log(note_coin.name + note_coin.return) : 0;
  
  //£10 note object and its calculations
  note_coin = {
    name : "£10 coin note: ",
    value : 10,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;
  
  //£5 note object and its calculations
  note_coin = {
    name : "£5 coin note: ",
    value : 5,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //£2 (2pounds) coin object and its calculations
  note_coin = {
    name : "£2 coin note: ",
    value : 2,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //£1 (1 pound) coin object and its calculations
  note_coin = {
    name : "£1 coin note: ",
    value : 1,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //50 pennies coin object and its calculations
  note_coin = {
    name : "50 pennies: ",
    value : 0.50,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //20 pennies coin object and its calculations
  note_coin = {
    name : "20 pennies: ",
    value : 0.20,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //10 pennies coin object and its calculations
  note_coin = {
    name : "10 pennies: ",
    value : 0.10,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //5 pennies coin object and its calculations
  note_coin = {
    name : "5 pennies: ",
    value : 0.05,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //2 pennies coin object and its calculations
  note_coin = {
    name : "2 pennies: ",
    value : 0.02,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

  //1 pennies coin object and its calculations
  note_coin = {
    name : "1 penny: ",
    value : 0.01,
    return : 0
  };
  note_coin.return = Math.floor(change/note_coin.value);
  change = (change%note_coin.value).toFixed(2);
  change > 0 ? console.log(note_coin.name + note_coin.return) : 0;

