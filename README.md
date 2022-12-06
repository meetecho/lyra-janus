Lyra demo (Janus WebRTC Server)
===============================

This is a simple demo to showcase how to use the Lyra codec in the browser, using [lyra-js](https://www.npmjs.com/package/lyra-codec), and involving the [Janus WebRTC Server](https://janus.conf.meetecho.com) in the process. For more information about the demo itself, please refer to this [blog post](https://www.meetecho.com/blog/playing-with-lyra/), that describes it in detail.

# Preparing the demo

In order to use this demo, you'll need to install a version of Janus that supports L16. At the time of writing, this is provided by this [pull request](https://github.com/meetecho/janus-gateway/pull/3116).

Besides, since specific CORS policies are required to use WASM and ArrayBuffers, we prepared a basic web server to host the demo page itself. You'll need to install the dependencies first:

	npm install

and then launch it:

	npm start

This will launch a web server on port `9000`.

# Testing the demo

To open the demo, just open the related web page:

	http://localhost:9000/lyratest.html

The page will automatically try and load the lyra-js bundle, and when done, you'll be able to start the demo. Clicking `Start` will have the page connect to the Janus EchoTest plugin and establish a WebRTC PeerConnection using the L16 codec, all while using Insertable Streams to encode and decode the audio stream with Lyra. If you hear the audio being echoed back correctly, then it works!

Notice that, since Insertable Streams are used in this demo, you may have to use Chrome to test it.
