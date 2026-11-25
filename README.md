# Machine Control UI prototype

## Open
Open `index.html` in a modern browser. All pages share `css/style.css` and `js/main.js`.

## Included screens
1. Dashboard
2. Machine connection
3. Measurement type selection
4. Machine configuration
5. Sheet resistance setup
6. PV/IV setup
7. Live monitoring
8. Results and analysis
9. Experiment history
10. System diagnostics

## Important
This is a front-end wireframe/prototype. COM port connection, ESP32 commands, sensor readings, experiment execution, calculations, chart plotting, persistence and export are simulated or placeholders. Do not use it to operate hardware. Implement and validate hardware safety interlocks in the Java application.

## Suggested handover
Keep the page structure and styling as the UI reference. During JavaFX implementation, map each page to a view/controller and replace demo JavaScript interactions with the existing Java services and validated protocol layer.
