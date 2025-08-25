# Configuración de Flujo de Trabajo

## Idioma del Proyecto
- **Todas las respuestas del asistente deben ser en español**
- **Toda la documentación debe escribirse en español**
- **Los comentarios en el código deben estar en español**
- **Los mensajes de commit deben estar en español**
- **Los nombres de archivos y carpetas pueden estar en inglés (convención técnica)**

## Proceso de Finalización de Tareas

### Al completar cualquier tarea, SIEMPRE:

1. **Actualizar el CHANGELOG.md** con los cambios realizados
2. **Generar mensaje de commit en español** siguiendo el formato:
   ```
   feat: descripción breve de la funcionalidad
   fix: descripción breve de la corrección
   docs: descripción breve de la documentación
   style: descripción breve de los cambios de estilo
   refactor: descripción breve de la refactorización
   ```

### Formato del CHANGELOG.md
```markdown
# Changelog

## [Unreleased]

### Agregado
- Nueva funcionalidad implementada

### Cambiado
- Funcionalidad existente modificada

### Corregido
- Bugs o problemas solucionados

### Removido
- Funcionalidad eliminada

## [Versión] - YYYY-MM-DD
...
```

### Ejemplos de Mensajes de Commit
- `feat: implementar componente Header con navegación responsive`
- `fix: corregir problema de accesibilidad en formulario de contacto`
- `docs: actualizar documentación de componentes`
- `style: ajustar colores del tema según paleta de marca`

## Estándares de Código
- Usar TypeScript estricto
- Seguir convenciones de Astro y Tailwind CSS
- Mantener componentes pequeños y reutilizables
- Priorizar accesibilidad y SEO
- Comentarios en español para explicar lógica compleja