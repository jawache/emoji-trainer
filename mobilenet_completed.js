let MBNET = null;

async function run() {
    // Start the camera
    let videoElement = document.getElementById("webcam");
    const camera = await tf.data.webcam(videoElement);

    // Take a snapshot every second
    setInterval(async () => {

        // Classify what's in the image using the MobileNet model
        const image = await camera.capture();
        let predictions = await MBNET.classify(image);

        console.log(predictions)

        // Get the raw inferred model data and print out
        const logits = await MBNET.infer(image);
        logits.print();
    }, 1000);
}

async function main() {
    // Initialize MobileNet and wait for is to load all it's required data files over the internet
    console.log("Models Loading...");
    MBNET = await mobilenet.load();
    console.log("Models Loaded");
    await run();
}
main();