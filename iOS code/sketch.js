let client;
let buttonOn, buttonColor, buttonOffEX, colore1, colore2, colore3, colore4, colore5, colore6;


function setup() {
  noCanvas();

  // Configura il client MQTT
  client = new Paho.MQTT.Client("xxx.xxx.xxx.xxx", Number(9001), "p5Client"); //Parametri del Broker MQTT

  // Imposta le callback
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  // Opzioni di connessione
  let options = 
  {
    onSuccess: onConnect,
    onFailure: onFailure,
    useSSL: false,
    timeout: 3,
  };

  // Connetti al broker MQTT
  client.connect(options);
  
  // Creo il pulsante ON (usato per avviare la modalità Experience)
  buttonOn = createButton('ON');
  buttonOn.position(285, 660);
  buttonOn.class('my-button'); // Usa class di p5.js per aggiungere la classe CSS
  buttonOn.parent('p5-buttons'); // Aggiungi il pulsante al contenitore p5-buttons
  buttonOn.mousePressed(() => sendMessage("ON"));

  // Creo il pulsante OFFEX (usato per fermare la modalità Experience)
  buttonOn = createButton('STOP');
  buttonOn.position(210, 660);
  buttonOn.class('my-button3'); // Usa class di p5.js per aggiungere la classe CSS
  buttonOn.parent('p5-buttons3'); // Aggiungi il pulsante al contenitore p5-buttons
  buttonOn.mousePressed(() => sendMessage("OFF"));

// Creo il pulsante ANTEPRIMA (usato in fase di debug)
  buttonColor = createButton('Anteprima');
  buttonColor.position(20, 665);
  buttonColor.class('my-button2'); // Usa class di p5.js per aggiungere la classe CSS
  buttonColor.parent('p5-buttons2'); // Aggiungi il pulsante al contenitore p5-buttons2
  buttonColor.mousePressed(() => sendMessage("OFF"));

// Crea il pulsante COLORE1 (usato impostare il colore personalizzato)  
  buttonColor = createButton('color1');
  buttonColor.position(20, 364);
  buttonColor.class('my-button4'); // Usa class di p5.js per aggiungere la classe CSS
  buttonColor.parent('p5-buttons4'); // Aggiungi il pulsante al contenitore p5-buttons2
  buttonColor.mousePressed(() => sendMessage("color1"));

// Crea il pulsante COLORE2 (usato impostare il colore personalizzato)  
buttonColor = createButton('color2');
  buttonColor.position(20, 430);
  buttonColor.class('my-button5'); // Usa class di p5.js per aggiungere la classe CSS
  buttonColor.parent('p5-buttons5'); // Aggiungi il pulsante al contenitore p5-buttons2
  buttonColor.mousePressed(() => sendMessage("color2"));

// Crea il pulsante COLORE3 (usato impostare il colore personalizzato)  
  buttonColor = createButton('color3');
  buttonColor.position(138, 364);
  buttonColor.class('my-button6'); // Usa class di p5.js per aggiungere la classe CSS
  buttonColor.parent('p5-buttons6'); // Aggiungi il pulsante al contenitore p5-buttons2
  buttonColor.mousePressed(() => sendMessage("color3"));

// Crea il pulsante COLORE4 (usato impostare il colore personalizzato)  
  buttonColor = createButton('color4');
  buttonColor.position(138, 430);
  buttonColor.class('my-button7'); // Usa class di p5.js per aggiungere la classe CSS
  buttonColor.parent('p5-buttons7'); // Aggiungi il pulsante al contenitore p5-buttons2
  buttonColor.mousePressed(() => sendMessage("color4"));

// Crea il pulsante COLORE5 (usato impostare il colore personalizzato)  
  buttonColor = createButton('color5');
  buttonColor.position(256, 363);
  buttonColor.class('my-button8'); // Usa class di p5.js per aggiungere la classe CSS
  buttonColor.parent('p5-buttons8'); // Aggiungi il pulsante al contenitore p5-buttons2
  buttonColor.mousePressed(() => sendMessage("color5"));

// Crea il pulsante COLORE6 (usato impostare il colore personalizzato)  
  buttonColor = createButton('color6');
  buttonColor.position(256, 430);
  buttonColor.class('my-button9'); // Usa class di p5.js per aggiungere la classe CSS
  buttonColor.parent('p5-buttons9'); // Aggiungi il pulsante al contenitore p5-buttons2
  buttonColor.mousePressed(() => sendMessage("color6"));
}


function onConnect() 
{
  console.log("Connected to MQTT broker");
  client.subscribe("esp32/control");
}

function onFailure(responseObject) 
{
  console.log("Connection to MQTT broker failed: " + responseObject.errorMessage);
}

function onConnectionLost(responseObject) 
{
  if (responseObject.errorCode !== 0) 
    {
    console.log("onConnectionLost: " + responseObject.errorMessage);
    }
}

function onMessageArrived(message) 
{
  console.log("onMessageArrived: " + message.payloadString);
}

function sendMessage(message) 
{
  let mqttMessage = new Paho.MQTT.Message(message);
  mqttMessage.destinationName = "esp32/control";
  client.send(mqttMessage);
}
