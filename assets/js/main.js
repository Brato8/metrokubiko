// Inicialización de componentes
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar iconos de Lucide
    lucide.createIcons();
    
    // Inicializar dropdowns
    initializeDropdowns();
    
    // Inicializar notificaciones
    initializeNotifications();
});

// Manejo de dropdowns
function initializeDropdowns() {
    const dropdownButtons = document.querySelectorAll('[data-dropdown]');
    
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdownId = this.dataset.dropdown;
            const dropdown = document.getElementById(dropdownId);
            
            // Cerrar otros dropdowns
            document.querySelectorAll('.dropdown-content').forEach(d => {
                if (d.id !== dropdownId) {
                    d.classList.add('hidden');
                }
            });
        });
    });
}