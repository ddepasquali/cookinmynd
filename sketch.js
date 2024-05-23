let client;
let buttonOn, buttonOff;

function setup() {
  noCanvas();
  
  // Configura il client MQTT
  client = new Paho.MQTT.Client("test.mosquitto.org", Number(8080), "p5Client");
  
  // Imposta le callback
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  
  // Opzioni di connessione
  let options = {
    onSuccess: onConnect,
    onFailure: onFailure,
  };

  // Connetti al broker MQTT
  client.connect(options);

  // Crea i pulsanti
  buttonOn = createButton('ON');
  buttonOn.position(50, 50);
  buttonOn.mousePressed(() => sendMessage("ON"));

  buttonOff = createButton('OFF');
  buttonOff.position(150, 50);
  buttonOff.mousePressed(() => sendMessage("OFF"));
}

function onConnect() {
  console.log("Connected to MQTT broker");
  client.subscribe("esp32/control");
}

function onFailure(responseObject) {
  console.log("Connection to MQTT broker failed: " + responseObject.errorMessage);
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost: " + responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log("onMessageArrived: " + message.payloadString);
}

function sendMessage(message) {
  let mqttMessage = new Paho.MQTT.Message(message);
  mqttMessage.destinationName = "esp32/control";
  client.send(mqttMessage);
}
