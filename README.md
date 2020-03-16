# vub_scraping_corona

#### Setup (see https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)
   ```
   # Install puppeteer
   $
   npm install puppeteer
   
   # Install Node.js and npm
   $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
   $ nvm install node
   $ nvm use node
   ```
 #### To run: 
   ```
   $ node node.js
   ```  
   
 Output wanneer we op elke vraag neen antwoorden: 
 ```
###  Op elke vragen hebben we "NEEN" geantwoord!

Webiste =
 https://huis.vub.ac.be/corona/evaluatie.php?uid=465603337158319&geslacht=1&geboortejaar=1993&land=+Belgium&koorts=2&hoesten=2&keel=2&spier=2&adem=2&hoofdpijn=2&pijn=2&dyspnoe=2&slijm=2&neus=2&contact=2&contact2=2&china=2&risico=2&Submit=Klik%C2%A0hier%C2%A0voor%C2%A0uw%C2%A0resultaat

Eerste deel results =

 Op basis van uw antwoorden kunnen wij stellen dat u <b>NIET moet getest worden</b> op besmetting met het coronavirus. Een andere aandoening is uiteraard niet uitgesloten. Neem contact op met uw huisarts bij twijfel. U kan de test opnieuw uitvoeren indien u de komende dagen toch nog bijkomende klachten zou ontwikkelen.

Tweede deel results =

 Het advies dat u via deze website krijgt is zuiver indicatief en zal nooit een doktersconsult vervangen. De Vrije Universiteit Brussel, de Vakgroep Huisartsgeneeskunde en de ontwerpers van deze internetmodule wijzen alle verantwoordelijkheid af voor de gevolgen die zouden kunnen voortvloeien uit het gebruik van deze module. De adviezen zijn gebaseerd op internationaal onderzoek. Gelieve bij twijfel over de resultaten contact op te nemen met uw huisarts.
 ```
 
### Output wanneer we op elke vraag neen antwoorden: 

 ```
 Op elke vragen hebben we "JA" geantwoord!

Webiste =
 https://huis.vub.ac.be/corona/evaluatie.php?uid=465603337158319&geslacht=1&geboortejaar=1993&land=+Belgium&koorts=1&hoesten=1&keel=1&spier=1&adem=1&hoofdpijn=1&pijn=1&dyspnoe=1&slijm=1&neus=1&contact=1&contact2=1&china=1&risico=1&Submit=Klik%C2%A0hier%C2%A0voor%C2%A0uw%C2%A0resultaat

Eerste deel results =

 Op basis van uw antwoorden kunnen wij besluiten dat u een <font color="red"><b>RISICO LOOPT indien u besmet zou zijn met het COVID-19 virus</b></font>. 	Gelieve dringend uw huisarts telefonisch te contacteren en contact met andere personen te vermijden.

Tweede deel results =

 Het advies dat u via deze website krijgt is zuiver indicatief en zal nooit een doktersconsult vervangen. De Vrije Universiteit Brussel, de Vakgroep Huisartsgeneeskunde en de ontwerpers van deze internetmodule wijzen alle verantwoordelijkheid af voor de gevolgen die zouden kunnen voortvloeien uit het gebruik van deze module. De adviezen zijn gebaseerd op internationaal onderzoek. Gelieve bij twijfel over de resultaten contact op te nemen met uw huisarts.
 ``` 
