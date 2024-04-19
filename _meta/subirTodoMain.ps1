# Hacer PR de dev -> main

# Bajar cambios en main
git fetch alpha
git checkout main
git pull alpha

# Subir a publico
git fetch publico
git push publico main

# Para que vuelva a estar alpha como default
git fetch alpha
git checkout dev