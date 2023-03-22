const fs = require("fs");

const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file doesnt exist");
});

// fs.writeFile("file.txt", "Hello, world!", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("file.txt created!");
// });
