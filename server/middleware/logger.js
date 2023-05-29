import { access, mkdir, readFile, writeFile } from "fs/promises";

export default async function (req, res, next) {
  // Checks if the logs folder exists and creates the folder if it does not exist
  try {
    await access("./logs");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.info("Folder does not exist, creating logs folder");
      await mkdir("./logs");
    }
  }
  // Check if logs file exists and creates file if it does not exist
  try {
    await access("./logs/log.json");
  } catch (error) {
    console.info("Logs files does not exist, creating new logs file");
    const newLogs = [];
    await writeFile("./logs/log.json", JSON.stringify(newLogs));
  }
  // Reads the log file and adds the new log and writes the file with the new log data
  try {
    const currentDate = new Date();

    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const year = currentDate.getFullYear();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    // Determine whether it's AM or PM
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Adjust hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    const formattedDate = `${month}-${day}-${year} ${formattedHours}:${minutes}:${seconds} ${amOrPm}`;

    const newLog = `${req.method} request from ${req.ip} at ${formattedDate}`;

    const logBuffer = await readFile("./logs/log.json");

    const logs = JSON.parse(logBuffer);

    logs.push(newLog);

    await writeFile("./logs/log.json", JSON.stringify(logs));
    next();
  } catch (error) {
    console.info(error);
    next();
  }
}
