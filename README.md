# Cookinmynd

Cookinmynd is an interactive smart board designed to support individuals affected by Alzheimer's disease in managing their weekly nutrition, while providing a safer and more connected home environment.

This system was developed using a User-Centered Design (UCD) approach, and includes both a web-based application and a microcontroller-based hardware setup. The goal is to enhance the daily experience of patients and their caregivers through intuitive interactions and real-time monitoring.

## Repository Structure

The repository is divided into two main components:

### 1. `iOS code/`  
This folder contains the web-based frontend, designed to be used on iOS devices in full-screen mode via a local server.

- `start_1.html`: A single-page HTML interface that dynamically switches between views using JavaScript. All screens are rendered as background images to simulate the native app experience.
- `sketch.js`: Manages the MQTT communication with the ESP32 and handles the creation of dynamic UI elements using the p5.js library.
- `p5.min.js` and `mqttws31.min.js`: Libraries used for UI rendering and MQTT over WebSocket.

The web app is intended to be served locally using a Python HTTP server on macOS.

### 2. `ESP32 code/`  
This folder contains the Arduino code for the ESP32 microcontroller. The firmware manages:

- Connection to a local MQTT broker (hosted on the Mac)
- Communication with the LED strip (Adafruit NeoPixel)
- Processing of MQTT messages from the iOS app
- Handling physical inputs from a button on the board
- Support for real-time feedback and potential future integration with sensors (e.g., gas or smoke detectors)

## System Overview

- The user configures the application by setting caregiver and patient profiles, preferred mealtimes, and corresponding color codes.
- When it's time to eat, the ESP32 board receives an MQTT message and triggers the appropriate LED signal.
- The patient confirms meal completion via a physical button, changing the board state.
- All views in the web app are managed from a single HTML file, using JavaScript to toggle visibility without reloading pages. This approach avoids issues with fullscreen web apps on iOS opening links in new tabs.

## Technologies

- HTML / CSS / JavaScript (frontend)
- p5.js for interactive UI
- MQTT over WebSocket (Paho client for JavaScript; PubSubClient for ESP32)
- ESP32 (Arduino framework)
- Adafruit NeoPixel LED control
- Optional DS3231 RTC module
- Local HTTP server in Python for serving the web app

## Project Context

This project was developed as part of an academic research and design process focused on improving the lives of people affected by neurodegenerative diseases. The full design process included:

- User research with caregivers and domain experts
- Prototyping and iterative design
- Functional testing of the digital and physical components

## Author

Domenico De Pasquali <br>
MSc student in *Interaction & Experience Design*  
BSc in *Information and Communications Technologies*

## License

This project is released under the [MIT License](LICENSE).
