# Planung

## Ziele
- grober Aufbau
- Rechercheplanung
- Übersicht Literatur

## Ideen:
- Abstract
- Einleitung
  - MESO vorstellen
  - Projekt für Dialogmuseum vorstellen
- Grundlagen
  - Kiosksoftware
  - Softwarestack
    - Datenbank
    - Serverapplikation
    - Frontend 
    - Microservices
- Anforderungen 
  - fast Prototyping
  - Multiplattform
  - Modular?
  - Ansprechendes User-Interface
  - Kommunikation mit Hardware
- Softwarestack
- Hardware-Kommunikation
- Continuous Deployment
- Performance

<br>
- Backend Technologien
  - Allgemeine Besprechung
  - MuseOS CMS
  - MongoDB
- Frontend Technologien
  - Allgemeine Besprechung
  - SPA
  - JavaScript
  - Electron
- 

### Recherche
- "Multimediale Kioskterminals : Infotankstellen, Telekommunikationssysteme und Smart Shops der Zukunft" // Silberer, Günter (Herausgeber) // 978-3-409-11667-1 // http://d-nb.info/959550232 
- Lex. Wirtschaftsinformatik // http://d-nb.info/gnd/4403685-1
- Erstellen eines Point of Information / Jasjotbir Singh // http://d-nb.info/119935032X
- Getting it across: layout issues for kiosk systems // https://kops.uni-konstanz.de/handle/123456789/6253
- Entwicklung eines interaktiven Informations-Kiosks // Wissenschaftliche Arbeit // https://opus4.kobv.de/opus4-hs-duesseldorf/frontdoor/index/index/docId/1580
- HTML5-Hardware-Kommunikation mit PPS-Messaging // https://www.elektronikpraxis.vogel.de/html5-hardware-kommunikation-mit-pps-messaging-a-411417/
  

<br>

- Sharing Station
  - als Platform 
- SPA 
  - kein Nachladen bei Seitenwechsel
- Typische Technologiestacks
- Point of Information // Kiosksystem
- Cache
- Hardwarekommunikation
  - Webcam
  - mit Electron eigentlich lösbar, aber im Sinne der Plattform-Kompalität Lösung über Schnittstelle
- Updatestrategie
- Nutzung reichhaltiger APIs (z.B. Media Capture and Streams)
- Nutzung großes Ökosystem
- Multiplattform
  - Electron
  - Cordova 
  - etc.
- Betreiben der Software im Vollbildmodus um Verlassen und Beenden zu Verhindern
- Performance
- Continous Deployment Strategien
  - eigentliche Applikationsfiles können statisch gehostet werden und bei Start geladen werden, darüber hinaus können diese im Browser geladen werden.
  - die installierte Anwendung ist nur noch Rahmen