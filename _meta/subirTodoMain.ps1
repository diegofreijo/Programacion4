git checkout main
git pull alpha

git fetch publico
git push publico main

# Para que vuelva a estar alpha como default
git push alpha main dev
git checkout dev