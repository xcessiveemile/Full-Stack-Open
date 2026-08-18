## Exercise 0.4: Diagram
```mermaid
sequenceDiagram
    participant browser
    participant server
    Note over browser: User writes text and clicks 'Save'
    browser->>server: POST /new_note
    activate server
    server-->>browser: 302 Redirect
    deactivate server
    browser->>server: GET /notes
    activate server
    server-->>browser: HTML
    deactivate server
    Note right of browser: Browser fetches static files (CSS/JS) and data.json
    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS
    deactivate server
    browser->>server: GET /main.js
    activate server
    server-->>browser: JS
    deactivate server
    browser->>server: GET /data.json
    activate server
    server-->>browser: Updated note data
    deactivate server
    Note right of browser: Browser executes JS and renders new note
```

## Exercise 0.5: Single Page App Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET /spa
    activate server
    server-->>browser: HTML document
    deactivate server
    browser->>server: GET /main.css
    activate server
    server-->>browser: main.css file
    deactivate server
    browser->>server: GET /spa.js
    activate server
    server-->>browser: spa.js file
    deactivate server
    Note right of browser: Browser executes JS and requests the JSON data
    browser->>server: GET /data.json
    activate server
    server-->>browser: [{ "content": "SPA text", "date": "2026-08-18" }, ... ]
    deactivate server
    Note right of browser: Browser runs callback function and renders notes using DOM API
```

## Exercise 0.6: New Note in Single Page App Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server
    Note over browser: User types a note and clicks 'Save'
    Note over browser: JS intercepts submit, updates the UI list locally via DOM API
    browser->>server: POST /new_note_spa (with JSON payload)
    activate server
    server-->>browser: 201 Created
    deactivate server
    Note right of browser: No page redirect or reload happens
```
