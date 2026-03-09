# Guía para Configurar el Examen y Google Sheets

Has solicitado que los resultados del examen se guarden automáticamente y de manera oculta en una hoja de cálculo en tu Google Drive. Para lograr esto sin necesidad de pagar un servidor web, utilizaremos un **Google Apps Script** gratuito asociado a Google Sheets.

Sigue estos pasos cuidadosamente:

## PASO 1: Crear la Hoja de Cálculo
1. Entra a tu Google Drive y crea una nueva **Hoja de Cálculo de Google (Google Sheets)** en blanco.
2. Nómbrala como prefieras (por ejemplo: `Resultados Examen Postécnico`).

## PASO 2: Agregar el Scripts (El Código Puente)
1. En el menú superior de esa misma hoja de cálculo, haz clic en **Extensiones** y luego en **Apps Script**.
2. Se abrirá una nueva pestaña con un editor de código. Borra todo lo que esté ahí (`function myFunction() { ... }`).
3. Abre el archivo `google_apps_script.gs` que acabo de crear en tu computadora, copia todo su contenido y **pégalo** en este editor web.
4. Presiona el ícono de **Guardar** (el pequeño disquete arriba) o presiona `Ctrl + S`. Dale un nombre al proyecto (ej. "Recepción de Exámenes").

## PASO 3: Publicar como Web App
1. En ese mismo editor de Apps Script, busca el botón azul arriba a la derecha que dice **Implementar** (o *Deploy* en inglés), y selecciona **Nueva implementación** (*New deployment*).
2. Haz clic en el ícono del **Engrane** junto a "Seleccionar tipo" y elige **Aplicación Web** (*Web app*).
3. Configura los siguientes accesos (¡ESTO ES MUY IMPORTANTE!):
   - **Descripción:** (Pon lo que quieras, ej. "v1")
   - **Ejecutar como:** Selecciónate a ti mismo (tu correo de Gmail/IMSS).
   - **Quién tiene acceso:** Selecciona **Cualquier persona** (*Anyone*).
4. Dale clic a **Implementar**. 
   > **Nota de Seguridad:** Te pedirá "Autorizar acceso". Haz clic en autorizar. Como el script es tuyo y no está verificado por Google, te mostrará una advertencia de "Esta app no está verificada". Haz clic en **Configuración Avanzada** (abajo) y luego en **Ir a Recepción de Exámenes (no seguro)**. Finalmente dale a **Permitir**.
5. ¡LISTO! Te dará una **URL de la aplicación web** que empieza con `https://script.google.com/macros/s/.../exec`. **Copia esa URL.**

## PASO 4: Conectar el HTML con tu Hoja de Cálculo
1. Abre el archivo `examen_final_qr.html` que he creado en tu Visual Studio Code.
2. Ve al final del archivo, alrededor de la línea 170.
3. Busca la línea que dice: 
   `const GOOGLE_SCRIPT_URL = "Reemplaza_Esto_Con_Tu_URL_De_Google_Script";`
4. Reemplaza el texto entre comillas con la URL larga que copiaste en el Paso 3. Debe quedar así:
   `const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/.../exec";`
5. ¡Guarda el archivo!

## PASO 5: Subir a Internet
Asegúrate de *pushear* / subir los cambios a tu repositorio `Clase` en GitHub, de manera que el archivo `examen_final_qr.html` ya esté en vivo (por ejemplo en `https://ever1201.github.io/Clase/examen_final_qr.html`).

## EL CÓDIGO QR
He dejado un script de Python llamado `generar_qr.py` en tu carpeta que genera el código QR (también acabo de ejecutarlo, así que ya tienes la imagen guardada como `examen_qr.png`).
Si la URL de tu examen cambia en el futuro, sólo entra al script `generar_qr.py`, modifica la URL y vuelve a ejecutarlo.

¡Felicidades! Ya tienes tu sistema de evaluación automatizado. Los alumnos sólo verán el mensaje de éxito, y en tu hoja de cálculo aparecerán sus nombres, las calificaciones y exactamente en qué preguntas acertaron o fallaron.
