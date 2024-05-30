function helloWorld() {
	return "Hello World 1.0.0"
}

function HelloWorldNPM() {
	return "Hello World NPM 1.0.0"
}

module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;