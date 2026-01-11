// Import built-in modules using ES Modules
import os from "os";
import fs from "fs/promises";

async function runApp() {
  try {
    // -------------------------
    // Part A – OS Module
    // -------------------------
    console.log("Free Memory:", os.freemem());
    console.log("Total CPU Cores:", os.cpus().length);

    // -------------------------
    // Part B – File System CRUD
    // -------------------------

    // 1. Create data.txt
    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    // 2. Create Readme.md
    await fs.writeFile(
      "Readme.md",
      "## This is first line in Readme"
    );
    console.log("Readme.md created");

    // 3. Read data.txt and print content
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:");
    console.log(data);

    // 4. Append new line to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Data appended to data.txt");

    // 5. Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("Readme.md deleted");

  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Execute the function
runApp();


/*
✅ Expected Console Output (Example)
Free Memory: 123456789
Total CPU Cores: 8
data.txt created
Readme.md created
Content of data.txt:
Hello World
Data appended to data.txt
Readme.md deleted*/