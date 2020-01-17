# Planung

## Ziele
- grober Aufbau
- Rechercheplanung
- Übersicht Literatur



## Ideen:
- UML für React
- weiter Anforderungen
- PWA oder Electron
- Homie
- Deployment?
- Sicherheit???
- 

<br>

- Anforderungen 
  - schnelles Prototyping
  - Multiplattform
  - (Modularität)
  - User Interface
    - ansprechend
    - responsive
  - Kommunikation mit Hardware
  - Soll sich wie Native Software anfühlen 
    - SPA
    - (Offline-Verfügbarkeit)
  - touch-friendly
- Softwarestack Sharing Station
- Hardware-Kommunikation
- Continuous Deployment
  - alle Systeme bekommen update gleichzeitig durch deploy auf Server
- Performance
- UML für React
- Caching
  - durch webworker bei PWA
- Cross-browser capability spielt keine Rolle
- Homie Controller für JavaScript mit Websockets entwickeln

### Gliederung
- Abstract
- Einleitung
  - Meso
  - Dialogmuseum
  - Zielsetzung der Arbeit
- Grundlagen
  - Kiosksoftware / POI
  - Webtechnologien
- Anforderungsanalyse
  - funktionale Anforderungen
    - Allgemein
    - Sharing Station
  - nicht-funktionale Anforderungen
    - Offline Verfügbarkeit
    - Intuitiv
    - Plattformunabhängig / Portierbar
    - Modular / Erweiterbar
    - Testbar
- Softwarestack
  - Architektur
  - Backend
    - CMS 
    - Datenbank
  - Frontend
    - React
    - Redux
    - ...
- Hardware Anbindung
  - JavaScript Sandbox Prinzip
  - Media Devices API
  - Individuelle Geräte über MQTT
    - Kartenterminal
    - Münzeinwurf
- Deployment / Plattform
  - Browser
  - Electron
  - PWA


### Recherche
- "Multimediale Kioskterminals : Infotankstellen, Telekommunikationssysteme und Smart Shops der Zukunft" // Silberer, Günter (Herausgeber) // 978-3-409-11667-1 // http://d-nb.info/959550232 
- Lex. Wirtschaftsinformatik // http://d-nb.info/gnd/4403685-1
- Erstellen eines Point of Information / Jasjotbir Singh // http://d-nb.info/119935032X
- Getting it across: layout issues for kiosk systems // https://kops.uni-konstanz.de/handle/123456789/6253
- Entwicklung eines interaktiven Informations-Kiosks // Wissenschaftliche Arbeit // https://opus4.kobv.de/opus4-hs-duesseldorf/frontdoor/index/index/docId/1580
- HTML5-Hardware-Kommunikation mit PPS-Messaging // https://www.elektronikpraxis.vogel.de/html5-hardware-kommunikation-mit-pps-messaging-a-411417/
- Characterizing Architecturally Significant Requirements // https://ieeexplore.ieee.org/document/6365165
- Java Point of Sale // https://en.wikipedia.org/wiki/JavaPOS
- Bachelorarbeit Design und Implementierung eines POS-SystemsVerkaufssoftware zum Einsatz auf spezifischerKassenhardware in einer Kennzeichenprägestelle // http://edoc.sub.uni-hamburg.de/haw/volltexte/2012/1472/pdf/DIPOSS.pdf
- Kiosksimple // Softwareprodukt // https://www.kiosksimple.com
- Kiosksimple-Blog // https://blog.kiosksimple.com/2014/08/18/6-reasons-to-develop-your-kiosk-application-as-a-native-windows-application/
  

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