let n = 5
let symbol = "*"
let inputLine = ""
let inputPosition = n

for (i = 0; i < n; i += 1) {
    for (j = 0; j <= n; j += 1) {
        if (j < inputPosition) {
            inputLine += " ";
        } else {
            inputLine += symbol;
        }
    }
    console.log(inputLine);
    inputLine = "";
    inputPosition += -1;
}