# Kata
# Spanish Syllable Separator

This is an exercise to practice TDD focusing on the selection of examples. The nature of the problem adds some difficult to choose the right examples. This happens because several separation rules can be applied to the same word. This can require more than one reason for a test to fail.

The goal of the exercise is to help you to develop a sense for identifying good examples for making new tests which can fail for a unique reason.

## The Challenge

Imagine that you are working in some text visualization tool that requires hyphenation. To achieve that, you will need and algorithm to separate Spanish words into syllables.

Spanish language has a bunch of rules for separating a word into Syllables. They are described in different ways depending on the source of information. We decided to use the following, adapted from this document by [Instituto Cervantes](https://cvc.cervantes.es/aula/didactired/anteriores/octubre_08/06102008_05.htm)

### Rule 1

A consonant and the following vowel are pronounced in the same syllable, for example:

```
ma–ra-ca
ti–je-ra
```

Remember that the letter `h` is not pronounced except when combined with the letter `c` to form `ch`. Keep in mind that `ch`, `ll`, and `rr`, although written as two letters each (hence called "digraphs"), are pronounced as a single sound each, and this is what counts when dividing syllables, for example:

```
chi-llar
cho-rro
```

### Rule 2

When two consonants are found between two vowels, the first generally forms a syllable with the preceding vowel and the second forms a syllable with the following vowel, for example:

```
cam-po
sal-to
har-to
an-da
```

### Rule 3

When three consonants are found between two vowels, the first two generally form a syllable with the preceding vowel, and the third forms a syllable with the following vowel, for example:


```
ins-ta
obs-ti-na-do
su-pers-ti-ción
```

### Exceptions to Rules 2 and 3

The following consonant pairs (consonant groups) are normally pronounced as a single syllable: `bl, br, cl, cr, dr, fl, fr, gl, kl, gr, pl, pr, tr`. Examples:


```
ha-blar
te-cla
sa-cro
si-glo
ma-dre
de-trás
a-grio
hom-bre
in-flar
san-gre
du-pli-ca-do
com-pren-der
en-trar
```

### Rule 4

When four consonants are found between two vowels, the first two form a syllable with the preceding vowel, and the last two form a syllable with the following vowel, for example:

```
cons-truir
trans–plan-te
abs-trac-to
obs-truir
```

### Rule 5

When an `i` or a `u` are next to another vowel, they are usually pronounced as a single syllable, for example:

```
hay 
fui
pues
cual
```

### Rule 6

When two vowels come together, but neither of them is `i` nor `u`, they are usually pronounced in a different syllable, for example: 

```
a-é-re-o
O-es-te
bo-a
Bil-ba-o
```

## Variants

For starting, we suggest to forgot about tildes and capitalized words.

# Credits
Fran Iglesias: https://github.com/franiglesias/cutwords



# Base para hacer tests

Configuración básica para empezar a hacer una kata o aprender a hacer tests en los siguientes lenguajes:

- PHP con PHPUnit
- Javascript con Jest
- Typescript con Node
- Typescript con Deno
- Java con Junit y Mockito
- Scala con Munit y Scalacheck
- Kotlin con JUnit5 y MockK
- C# con xUnit (FluentAsertion) y NSubstitute (para mock)
- Go con testing (standard library)

# Configuración específica por lenguaje

## PHP con PHPUnit

1. Instalar [composer](https://getcomposer.org/) `curl -sS https://getcomposer.org/installer | php`
2. `composer install` (estando en la carpeta php)
3. `vendor/bin/phpunit` o `composer test`

### 📚 Documentación
- [PHPUnit](https://phpunit.readthedocs.io/)

## Javascript con Jest

1. Instalar [Node](http://nodejs.org/)
2. `npm install` (Estando en la carpeta javascript)
3. `npm test`

### 📚 Documentación
- [Jest](https://jestjs.io)

## [Typescript con Node](/typescript/README.md)

## Typescript con Deno

1. Instalar [Deno](https://deno.land/#installation)
2. `deno test` (Estando en la carpeta typescript)

### 📚 Documentación
- [Deno](https://deno.land/manual)
- [BDD module](https://deno.land/manual/testing/behavior_driven_development)
- [Expect module](https://deno.land/x/expect)

## Java con Junit y Mockito

1. Instalar las dependencias y tests con Maven [mvn test]
2. Ejecutar los tests con el IDE

### 📚 Documentación
- [JUnit](https://github.com/junit-team/junit/wiki)
- [Mockito](http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html)

## Scala con Munit y Scalacheck

1. `sbt` (en la carpeta scala)
2. `~test` para ejecutar los test en hot reload

### 📚 Documentación
- [Munit](https://scalameta.org/munit/docs/tests.html)
- [Scalacheck](https://github.com/typelevel/scalacheck/blob/main/doc/UserGuide.md) para testing basado en propiedades

### Linux/Mac
1. Instalar [SDKMan](https://sdkman.io/)
2. `sdk install java 11.0.12-open` instala OpenJDK
3. `sdk install sbt` una vez instalado SDKMan

### Windows
1. Instalar [OpenJDK](https://docs.microsoft.com/es-es/java/openjdk/download#openjdk-110141-lts--see-previous-releases)
2. Instalar [SBT](https://www.scala-sbt.org/download.html)

### Visual Studio Code
1. Descargar [Visual Studio Code](https://code.visualstudio.com/)
2. Instalar para VS Code [Metals](https://scalameta.org/metals/docs/editors/vscode)

## Kotlin con JUnit5 y MockK

1. Por consola: Puedes instalar dependencias y lanzar los tests con `gradlew test`
2. Usando IDE: Simplemente abre el proyecto desde el raiz de la plantilla Kotlin

### 📚 Documentación
- [JUnit5](https://junit.org/junit5/)
- [MockK](https://mockk.io/)

## C# con xUnit (con FluentAsertion) y NSubstitute (para mock)

1. Instalar Microsoft Visual Studio Community 2022
2. Abre el proyecto y se descargaran automáticamente los paquetes Nuguet necesarios

### 📚 Documentación
- [xUnit](https://xunit.net/)
- [NSubstitute](https://nsubstitute.github.io/help.html)
- [FluentAssertions](https://fluentassertions.com/introduction)

## Python

1. Instalar python 3.x
2. Una vez descargado el código fuente dentro de la carpeta */python/ creamos un virtual enviroment:
3. `python3 -m venv env`
4. Activamos en virtual environment:
- windows: `.\env\Scripts\activate.bat`
- linux/mac: `source env/bin/activate`
5. `pytest` para ejecutar los tests.

## Go (Golang) con testing (standard library)

1. Instalar [Go](https://go.dev/dl/)
2. `go test -v` (en la carpeta con el archivo xxx_test.go)
  
### 📚 Documentación
- [Go](https://go.dev/doc/)
- [Testing Package](https://pkg.go.dev/testing)
