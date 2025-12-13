#include <WiFi.h>
#include <PubSubClient.h>
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif
#include <Wire.h> // Library for data exchange
#include <RTClib.h> // Library for RTC management

RTC_DS3231 rtc; // Create an RTC instance

#define EL1 250 // Numero LED
#define PIN1 18 // PIN Digitale LED

Adafruit_NeoPixel light = Adafruit_NeoPixel(EL1, PIN1, NEO_GRB + NEO_KHZ800); // Creo istanza LED

// Credenziali Wi-Fi
const char* ssid = "SSID_NAME";
const char* password = "PASSWORD";

// Indirizzo del broker MQTT locale
const char* mqtt_server = "MQTT_SERVER_IP"; // Inserisci l'indirizzo IP del tuo broker MQTT locale

WiFiClient espClient;
PubSubClient client(espClient);
const int buttonPin = 4;
int buttonState = HIGH;
int lastButtonState = HIGH;
int buttonStateBis = 1;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;


void setup() {
  Serial.begin(115200);
  light.begin(); // Avvio LED
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
  reconnect();
  pinMode(buttonPin, INPUT_PULLUP);
}

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;

  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();

  if (String(topic) == "esp32/control") {
    Serial.print("Changing output to ");
    if(messageTemp == "ON"){
      Serial.println("ON");
      
      light.begin();
      light.setPixelColor(140, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(141, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(142, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(143, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(144, light.Color(255, 255, 255)); // Spegni tutti i LED

      light.show();

      delay(5000);

      light.setPixelColor(147, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(148, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(149, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(150, light.Color(255, 255, 255)); // Spegni tutti i LED
      light.setPixelColor(151, light.Color(255, 255, 255)); // Spegni tutti i LED
      
      light.show();

      
      delay(5000);
      light.setPixelColor(6, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
      light.setPixelColor(5, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
      light.setPixelColor(4, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
      light.setPixelColor(3, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
      light.setPixelColor(2, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
      light.setPixelColor(1, light.Color(255,255,255));
 light.show();
      Serial.print("Sei nel step 0");
    }

    else if(messageTemp == "OFF"){
      Serial.println("OFF");

      light.begin();
      
      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(0, 0, 0)); // Spegni tutti i LED
      light.show();
       }
    }
    else if(messageTemp == "color1"){
      Serial.println("color1");

      light.begin();
      
      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(52, 59, 76)); // Spegni tutti i LED
      light.show();
      }

      delay(5000);

      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(0, 0, 0)); // Spegni tutti i LED
      light.show();
    }
}

else if(messageTemp == "color2"){
      Serial.println("color2");

      light.begin();
      
      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(247, 196, 68)); // Spegni tutti i LED
      light.show();
      }

      delay(5000);

      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(0, 0, 0)); // Spegni tutti i LED
      light.show();
    }
}

else if(messageTemp == "color3"){
      Serial.println("color3");

      light.begin();
      
      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(194, 91, 46)); // Spegni tutti i LED
      light.show();
      }

      delay(5000);

      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(0, 0, 0)); // Spegni tutti i LED
      light.show();
    }
}

else if(messageTemp == "color4"){
      Serial.println("color4");

      light.begin();
      
      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(143, 205, 192)); // Spegni tutti i LED
      light.show();
      }

      delay(5000);

      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(0, 0, 0)); // Spegni tutti i LED
      light.show();
    }
}


else if(messageTemp == "color5"){
      Serial.println("color5");

      light.begin();
      
      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(86, 92, 99)); // Spegni tutti i LED
      light.show();
      }

      delay(5000);

      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(0, 0, 0)); // Spegni tutti i LED
      light.show();
    }
}


else if(messageTemp == "color6"){
      Serial.println("color6");

      light.begin();
      
      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(194, 134, 142)); // Spegni tutti i LED
      light.show();
      }

      delay(5000);

      for(int i=0; i < 250; i++)
      {
      light.setPixelColor(i, light.Color(0, 0, 0)); // Spegni tutti i LED
      light.show();
    }
}

}
}


void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP32Client")) {
      Serial.println("connected");
      client.subscribe("esp32/control");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}


void loop() {
  if (!client.connected()) {
    Serial.println("MQTT client disconnected, attempting reconnect");
    reconnect();
  }
  client.loop();

int reading = digitalRead(buttonPin);

  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != buttonState) {
      buttonState = reading;




if (buttonState == LOW) {
        if (buttonStateBis == 1)
      {
        
        light.begin();
        light.setPixelColor(147, light.Color(0,0,0));
        light.setPixelColor(148, light.Color(0,0,0));
        light.setPixelColor(149, light.Color(0,0,0));
        light.setPixelColor(150, light.Color(0,0,0));
        light.setPixelColor(151, light.Color(0,0,0));
        light.setPixelColor(152, light.Color(0,0,0));
        light.setPixelColor(6, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(5, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(4, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(3, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(2, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(1, light.Color(0,0,0));
        light.show();

        delay(5000);
        
        
        light.setPixelColor(154, light.Color(255,255,255));
        light.setPixelColor(155, light.Color(255,255,255));
        light.setPixelColor(156, light.Color(255,255,255));
        light.setPixelColor(157, light.Color(255,255,255));
        light.setPixelColor(158, light.Color(255,255,255));
        light.setPixelColor(159, light.Color(255,255,255));
        light.setPixelColor(160, light.Color(255,255,255));
        light.show();

        delay(5000);
        light.setPixelColor(6, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
        light.setPixelColor(5, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
        light.setPixelColor(4, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
        light.setPixelColor(3, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
        light.setPixelColor(2, light.Color(255,255,255)); // Imposta il colore del pixel a bianco
        light.setPixelColor(1, light.Color(255,255,255));
        light.show();
        buttonStateBis = 2;
        Serial.print("Sei nel step 1");
        }

      else if (buttonStateBis == 2) 
      {
    
        light.begin();
        light.setPixelColor(154, light.Color(0,0,0));
        light.setPixelColor(155, light.Color(0,0,0));
        light.setPixelColor(156, light.Color(0,0,0));
        light.setPixelColor(157, light.Color(0,0,0));
        light.setPixelColor(158, light.Color(0,0,0));
        light.setPixelColor(159, light.Color(0,0,0));
        light.setPixelColor(160, light.Color(0,0,0));
        light.setPixelColor(6, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(5, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(4, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(3, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(2, light.Color(0,0,0)); // Imposta il colore del pixel a bianco
        light.setPixelColor(1, light.Color(0,0,0));
        light.show();

          delay(5000);
          buttonStateBis = 1;
         Serial.print("Sei nel step 2");
      }
        }
          }
            }

        
        lastButtonState = reading;


  delay(100); // Aggiungi un piccolo delay per evitare loop troppo veloci
}