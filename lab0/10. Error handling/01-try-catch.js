function example() {
  try {
    console.log("Working...");
    return; 
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("Cleanup complete");
  }
}

example();