# Thesis: Marcus Schreiter

*Stand:* 17.01.2020

## Titel
*Möglichkeiten und Grenzen eines webtechnologiebasierten Softwarestacks für Kiosk-Software-Systeme anhand der Entwicklung einer Sharing-Station für Museen und Ausstellungen*

Alternativ:
*Möglichkeiten und Grenzen von Webtechnologien bei der Entwicklung von Kiosksoftware anhand der Implementierung einer Sharing-Station für Museen und Ausstellungen*

## Abstract
Diese Bachelor-Thesis untersucht das Entwickeln einer Kiosksoftware mit einem webtechnologiebasiertem Softwarestack anhand eines realen Praxisbeispiels. Dabei werden typische und spezifische Anforderungen besprochen, sowie der Technologiestack schichtweise betrachtet und Vor- und Nachteile diskutiert. Der Fokus liegt hierbei klar auf der Frontend-Applikation und der Kommunikation mit Hardwarekomponenten, welches durch Entwickeln einer generischen MQTT-Schnittstelle gelöst wird.

## Outline
- Abstract
- Einleitung
  - MESO<br>
    *Kurze Darlegung der Geschichte und Expertise von MESO*
  - Dialogmuseum<br>
    *Darlegung der Geschichte des Museums und des Projektauftrags an MESO*
  - Zielsetzung
    - Zielsetzung Sharing Station
    - Zielsetzung der Arbeit
    - Zielgruppe 
- Grundlagen
  - Kiosksoftware / POI<br>
    *Ausführliche Definition und Erklärung des Begriffs*
  - Webtechnologien<br>
    *Erklärung des Begriffs 'Webtechnologien' und Bedeutung im Zusammenhang mit der Arbeit*
- Anforderungsanalyse
  - funktionale Anforderungen<br>
    *Erläuterung der funktionalen Anforderungen an Kiosksoftware beispielhaft an den spezifischen Anforderungen der Sharing Station*
  - nicht-funktionale Anforderungen<br>
    *Erläuterung typischer nicht-funktionaler Anforderungen an Kiosksoftware im Allgemeinen, anhand vom Beispiel der Sharing Station. z.B: Offline-Verfügbarkeit, Portierbarkeit, Modularität, Testbarkeit, usw.*
- Systemarchitektur<br>
  *Erläuterung der gesamten Systemarchitektur. Zusammenhang zwischen Server, Exponat, Hardware, Netzen etc. anhand eines Diagrams. Eingehen auf typische Systemanforderungen für Kiosksysteme.*
- Softwarestack<br>
   *Erläuterung des verwendeten Softwarestacks bei der Sharing Station. Darlegung der Entscheidung für die einzelnen Technologien und inwiefern diese die zuvor genannten Anforderungen bereits lösen. Dabei u.U. Abhandlung über Alternativen und Eingehen auf Kiosksoftware im Allgemeinen.*
  - Backend<br>
    *Kurze Abhandlung über CMS und Datenbank.*
  - Frontend<br>
    *Kurze Erklärung SPA mit React und Redux. Erläuterung der Frontend-Applikation und Visualisierung mit UML-Diagram.*
  - Plattform<br>
    *Möglichkeiten der Distribution von Webanwendungen. Z.B. Browser, Cordova, Electron, PWA, usw.*
    *Fokus auf PWA, da es voraussichtlich die Plattform für die Sharing Station sein wird*
- Hardware Anbindung
  - JavaScript Sandbox Prinzip
  - Web-APIs<br>
    *Möglichkeiten und Grenzen der Web-APIs. Hier am Beispiel Webcam.*
  - Individuelle Geräte über MQTT<br>
    *Entwickeln einer Standardlösung um jegliche Geräte an eine Webanwendung anzubinden. Umsetzung durch ein MQTT-Interface auf Basis der 'Homie'-Konvention (https://homieiot.github.io/)*
- Fazit