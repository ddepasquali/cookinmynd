# Cookinmynd

Cookinmynd is an interactive smart board designed to support individuals affected by Alzheimer's disease in managing their weekly nutrition, while providing a safer and more connected home environment.

This system was developed using a User-Centered Design (UCD) approach, and includes both a web-based application and a microcontroller-based hardware setup. The goal is to enhance the daily experience of patients and their caregivers through intuitive interactions and real-time monitoring.

## Repository Structure

- `web/`: single-page web app meant for iOS fullscreen use, served locally.  
  Uses `index.html` with background-image screens, UI logic in `scripts/app.js`, styling in `styles/main.css`, MQTT bridge in `scripts/sketch.js` (p5.js + Paho), assets in `images/`, custom fonts in `fonts/`, vendor libs in `scripts/lib/`.
- `firmware/`: Arduino sketch that connects the ESP32 to Wi‑Fi + MQTT, drives the NeoPixel strip, and handles the physical button for meal confirmation. DS3231 RTC is included but not used in the current logic.

## Versions

- `v1.0.0` — first prototype: single HTML with inline JS/CSS, MQTT bridge, and UI logic embedded. Tested and working (as per original implementation).
- `v2.0.0-internal` — current refactor: codebase reorganized (HTML in `web/html/`, JS split into `scripts/`, CSS in `styles/`, vendor libs under `scripts/lib/`), same functionality. Internal-only, not yet tested end-to-end.

## How It Works

- The caregiver configures profiles, meal times, and color codes in the web app (data is kept in `localStorage`; no backend).
- The web app publishes MQTT messages on `esp32/control` (over WebSocket, default port 9001) to trigger LED patterns or color previews.
- The ESP32 listens on the same topic (MQTT TCP, port 1883 by default) and runs the matching light sequence. A hardware button on GPIO 4 advances the acknowledgement flow on the strip.

### MQTT payloads on `esp32/control`

- `ON`: runs the guided white-light sequence.
- `OFF`: clears all LEDs.
- `color1` … `color6`: lights the whole strip with predefined colors for 5 seconds, then turns off (useful for selecting meal colors).

## Quick Start

1. Configure endpoints  
   - Copy `config/.env.example` to `config/.env` and fill in broker/SSID if desired (left blank by default).  
   - In `web/sketch.js` set the MQTT broker host (WebSocket port 9001).  
   - In `firmware/ESP32-MQTT.ino` set `ssid`, `password`, and `mqtt_server` (TCP port 1883).
2. Start an MQTT broker reachable on both ports (e.g., Mosquitto with TCP 1883 + WebSocket 9001).
3. Serve the web app  
   ```bash
   cd web
   python3 -m http.server 8000
   ```  
   Open `http://<host>:8000` on the iOS device and add it to the home screen for fullscreen use.
4. Flash the ESP32 firmware  
   - Open `firmware/ESP32-MQTT.ino` in the Arduino IDE (or PlatformIO).  
   - NeoPixel strip on pin 18, 250 LEDs (`EL1`), button on GPIO 4 with pull-up.  
   - Upload and monitor via serial at 115200 baud.

## Data and persistence

- Current state: all user inputs and configuration stay in the browser via `localStorage` (no server/database). MQTT messages are ephemeral.
- Future direction (suggested): add a lightweight backend that exposes REST/GraphQL for profiles and schedules, paired with the existing MQTT broker. A minimal stack could be Node.js + SQLite/Postgres (or a hosted service like Supabase) to persist caregiver/patient profiles, meal schedules, and LED color mappings; the backend can also publish MQTT commands when the schedule triggers.

## Project Context

This project was developed as part of an academic research and design process focused on improving the lives of people affected by neurodegenerative diseases. The full design process included:

- User research with caregivers and domain experts
- Prototyping and iterative design
- Functional testing of the digital and physical components

## Author

Domenico De Pasquali <br>
MSc's student in *Interaction & Experience Design*  
BSc in *Information and Communications Technologies*

## License

This project is released under the [MIT License](https://mit-license.org).
