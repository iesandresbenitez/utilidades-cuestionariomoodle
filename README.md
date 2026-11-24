# Moodle Prompt Lab

Herramienta docente estática para construir prompts técnicos destinados a generar preguntas del banco de Moodle. No ejecuta una IA ni valida directamente la importación XML.

## Funcionalidades
- Catálogo de 15 formatos: multichoice, truefalse, matching, shortanswer, numerical, gapselect, randomsamatch, ddwtos, cloze, Formulas, GeoGebra, Kprime, Ordering, Regex y STACK.
- Campos específicos y ayudas contextuales por formato.
- Generadores especializados para formatos estándar, numérico, Cloze, plugins y STACK.
- Contextualización LOMLOE Andalucía activada por defecto, con cautelas para no inventar referencias oficiales.
- Salida Moodle XML completo predeterminada o XML más explicación técnica.
- Copiar, descargar TXT, plantillas e historial de 30 prompts mediante LocalStorage.
- Diseño responsive con identidad visual STEAM 4.0.

## Uso
Abre `index.html` mediante un servidor estático local o publica el repositorio con GitHub Pages. Selecciona formato, completa los campos, genera el prompt y pégalo en tu IA habitual. Revisa siempre el XML antes de importarlo.

## GitHub Pages
En GitHub: Settings → Pages → Deploy from a branch → `main` → `/(root)`. Guarda los cambios y espera a que finalice el workflow de publicación.

## Arquitectura
- `js/data/question-types.js`: catálogo y campos de los formatos.
- `js/data/curriculum-andalucia.js`: cautelas curriculares.
- `js/generators/`: generadores especializados.
- `js/storage.js`: plantillas e historial local.
- `js/ui.js`: renderizado seguro de campos y listas.
- `js/app.js`: navegación, formulario y eventos.
- `assets/css/`: identidad visual y responsive.

## Añadir formatos
Añade una entrada al catálogo con id, name, group, plugin, description y fields. Después conecta requisitos específicos en el generador especializado que corresponda. No inventes XML de plugins: exige documentación y versión.

## Limitaciones
No hay backend, base de datos externa ni conexión a APIs de IA. LocalStorage es local al navegador y dispositivo; borrar datos del navegador puede eliminar plantillas e historial. Los formatos de terceros dependen del plugin y su versión. La aplicación construye prompts, no garantiza que la IA genere XML válido ni que Moodle lo importe. STACK debe probarse en una instalación real antes de considerarlo validado.

## Licencia
MIT.

## Pruebas funcionales
Abre `tests/index.html` desde un servidor estático para ejecutar las comprobaciones de humo de los 15 generadores, campos específicos, reglas STACK, advertencias de numerical y cautelas de plugins. Estas pruebas comprueban la construcción del prompt en el navegador; no sustituyen la importación en Moodle ni la validación real de plugins/STACK.
