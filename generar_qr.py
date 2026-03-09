import qrcode
import os

# Cambia esta URL si el enlace final donde alojas el examen es distinto
url_del_examen = "https://ever1201.github.io/Clase/examen_final_qr.html"

print(f"Generando Código QR para: {url_del_examen} ...")

# Crear el código QR
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url_del_examen)
qr.make(fit=True)

# Crear imagen
img = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen en el directorio actual
output_path = "examen_qr.png"
img.save(output_path)

print(f"¡Éxito! El Código QR ha sido guardado como: {output_path}")
