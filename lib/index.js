function helloWorld() {
	return "Hello World 2.0.0"
}

function HelloWorldNPM() {
	return "Hello World NPM 2.0.0"
}

module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;