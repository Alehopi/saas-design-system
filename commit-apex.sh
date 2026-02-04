#!/bin/bash

# Script para hacer commit automático del rebranding APEX
# Creado por Claude Code

echo "🚀 APEX Design System - Auto Commit & Push"
echo "=========================================="
echo ""

# Ver cambios
echo "📋 Archivos modificados:"
git status --short

echo ""
echo "📝 Creando commit..."

# Agregar archivos relevantes
git add package.json
git add README.md
git add .storybook/
git add src/
git add public/apex-logo.svg
git add public/apex-logo-dark.svg

# Crear commit con mensaje descriptivo
git commit -m "$(cat <<'EOF'
Rebrand to APEX Design System with Storybook enhancements

Major Changes:
- Renamed package from 'saas-design-system' to 'apex-design-system'
- Updated all branding references across 35+ files
- Created custom Storybook branding with APEX logo (light & dark)

New Features:
- Custom manager.ts with APEX theme configuration
- Comprehensive Theming Guide documentation page
- Responsive viewport presets (Mobile/Tablet/Desktop/Large)
- Professional component organization into semantic categories

Component Organization:
- Renamed "Foundation" to "Design Tokens" (industry standard)
- Organized 30 components into 7 semantic subcategories:
  * Inputs (7): Button, Input, Textarea, Select, Checkbox, Radio, Switch
  * Display (4): Badge, Avatar, Card, Tooltip
  * Feedback (4): Alert, Toast, Progress, Spinner
  * Overlay (3): Dialog, DropdownMenu, Command
  * Navigation (3): Breadcrumb, Tabs, Accordion
  * Data Display (2): Table, EmptyState
  * Utility (6): Label, HelperText, ErrorMessage, FieldGroup, Divider, ThemeToggler

Documentation:
- Updated all 29 component MDX files with APEX branding
- Created comprehensive Theming Guide with:
  * ThemeProvider setup instructions
  * useTheme hook API reference
  * CSS Variables documentation
  * Best practices and examples

Technical Details:
- Storybook 10.2.1 with custom manager configuration
- Added viewport configuration for responsive testing
- Implemented story sort order for optimal navigation
- Fixed ThemeToggler integration in documentation

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"

if [ $? -eq 0 ]; then
    echo "✅ Commit creado exitosamente"
    echo ""
    echo "🔄 Pusheando a remote..."

    # Push a remote (si está configurado)
    git push

    if [ $? -eq 0 ]; then
        echo "✅ Push completado exitosamente"
        echo ""
        echo "🎉 ¡Todo listo! APEX Design System actualizado en el repositorio."
    else
        echo "⚠️  Push falló. Puede que necesites configurar el remote o hacer push manual."
        echo "    Ejecuta: git push origin main"
    fi
else
    echo "❌ Error al crear el commit"
fi

echo ""
echo "📊 Estado final:"
git status --short
