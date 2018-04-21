function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var customer = katzDeliLine.shift();
  return `Currently serving ${customer}.`;
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: ";
  for (var i = 0; i < katzDeliLine; i++) {
    line += `${i+1}. ${katzDeliLine[i]},`;
  }
  
}