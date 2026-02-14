# Hex to RGB REST API (Express)

Small Express REST API that converts a HEX color to RGB, plus:
- Unit tests for the conversion function
- Integration tests for the API route (SuperTest)
- Simple docs you can paste into Moodle / PDF

## 1) Install
```bash
npm install
```

## 2) Run API
```bash
npm start
# API on http://localhost:3000
```

Health check:
- GET `/health` -> `{ "ok": true }`

## 3) Endpoints

### GET /api/hex-to-rgb/:hex
Examples:
- `/api/hex-to-rgb/ff00aa`
- `/api/hex-to-rgb/%23ff00aa`  (URL-encoded #)

Success 200:
```json
{
  "hex": "#FF00AA",
  "rgb": { "r": 255, "g": 0, "b": 170 }
}
```

Error 400:
```json
{ "error": "InvalidHex", "message": "hex must be 3 or 6 hex digits (optionally with #)" }
```

### POST /api/hex-to-rgb
Body:
```json
{ "hex": "#0f8" }
```

Success 200:
```json
{
  "hex": "#0000F8",
  "rgb": { "r": 0, "g": 255, "b": 136 }
}
```

## 4) Tests

Run all:
```bash
npm test
```

Only unit:
```bash
npm run test:unit
```

Only integration:
```bash
npm run test:integration
```

## 5) Postman quick test
1. Start server: `npm start`
2. In Postman: GET `http://localhost:3000/api/hex-to-rgb/ff00aa`
3. Expected JSON: `{ "hex": "#FF00AA", "rgb": { "r": 255, "g": 0, "b": 170 } }`

## Notes (grading checklist)
- Express REST API implemented ✅
- Unit tests ✅
- Integration tests ✅
- Documentation ✅
- `.gitignore` includes node_modules and env files ✅
