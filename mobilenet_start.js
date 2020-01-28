let MBNET = null;

async function run() {
    // Start the camera
    let videoElement = document.getElementById("webcam");
    // TODO

    // Take a snapshot every second
    setInterval(async () => {
        // TODO
    }, 1000);
}

async function main() {
    // Initialize MobileNet and wait for is to load all it's required data files over the internet
    console.log("Models Loading...");
    // TODO
    console.log("Models Loaded");
    await run();
}
main();