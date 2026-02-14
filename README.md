# HEX → RGB REST API (Express)

Toteutin REST-rajapinnan Expressillä, joka muuntaa HEX-värikoodin RGB-muotoon.  
Projektissa on mukana unit-testit ja integraatiotestit.

---

## Asennus

Projektikansiossa:

```bash
npm install
```
Käynnistys
```bash
npm start
```
## Serveri käynnistyy osoitteeseen:

http://localhost:3000
## Testireitti:

### API-reitti
'GET /api/hex-to-rgb/:hex'
- **Esimerkki:**

/api/hex-to-rgb/ff00aa
- **Onnistunut vastaus (200):**
```json
{
  "hex": "#FF00AA",
  "rgb": {
    "r": 255,
    "g": 0,
    "b": 170
  }
}
```
- **Virhetilanne (400):**
```json
{
  "error": "InvalidHex",
  "message": "hex must be 3 or 6 hex digits (optionally with #)"
}
```
## Testit
Aja kaikki testit:
```bash
npm test
```
- Unit-testit testaavat hexToRgb-funktion

- Integration-testit testaavat API-reitin