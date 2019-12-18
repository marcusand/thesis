# Sharing-Station

## Struktur:
- Foto Commitment
- Über das DM
  - Verschiedene Artikel
  - Möglichkeit seine Kontaktdaten zu hinterlassen
- Spenden
  - Kontaktlos
  - evtl. Münzeinwurf
- Andere Projekte
  - Verschiedene Artikel mit QR-Code

## Anforderungen Backend
- jede Kategorie:
  - Titel
  - Beschreibung
  - Bild
- i18n
  - alles mehrsprachig?

## Templates
|       Name       |                                                          Field                                                          | Can have  siblings |                    Comment                    |
| :--------------: | :---------------------------------------------------------------------------------------------------------------------: | :----------------: | :-------------------------------------------: |
|     Category     |                          Name: Text(100, T)<br>Description: Text(100, T)<br>Image: Image Field                          |        Yes         | Appears on first level when it has no parents |
| Photo Box Module | Header: Text(100, T)<br>Description: Rich(1000, T)<br>User Photo: Form Field(Photo: Attachment, Commitment: String(50)) |         No         | form field data appears somewhere in the cms  |
|  Article Module  |             Header: Text(100, T)<br>Text: Rich(10000, T)<br>Image: Image Field<br>Url Ressource: Url Field              |         No         |                                               |
| Donation Module  |                          Header: Text(100, T)<br>Description: Rich(1000, T)<br>IBAN: Text(22)                           |         No         |         Donation sum appears in CMS?          |

### Custom Fields

|    Name     |                                  Fields                                   | Comment |
| :---------: | :-----------------------------------------------------------------------: | :-----: |
| Image Field |                Image: Attachment<br>Caption: Text(100, T)                 |         |
|  Url Field  | Url: Text(500)<br>Description(1000, T)<br>Qr-Code: Toggle<br>Mail: Toggle |         |

### Custom Field Types

|    Name    | Explanation                                                                                                                              |
| :--------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Form Field | Like a Group Filed but opens a POST Endpoint on which data can get collected. Every Form Field also appears in the CMS to view the data. |



### Foto Commitment
- File Upload
- Speichern von Meta Informationen
- Speichern des eingegebenen Commitments 
- Möglichkeit Galerie im Backend aufzurufen 
### Über das DM
- Artikel
  - Überschrift
  - RTF Feld
  - Bild
  - Link mit QR-Code und Mail-Versand
- Möglichkeit Kontaktdaten zu hinterlassen
  - Form
  - Name, Mail, Telefon
  - Abfrage aller Daten im Backend
### Spenden
- Möglichkeit im Backend die Spendenkonto-Verbindung einzugeben
- (Abrufen der Spendensummen)
### Andere Projekte
- Artikel 
  - Überschrift
  - RTF Feld
  - Bild
  - Link mit QR-Code und Mail Versand
