// ui.js - Componentes UI globales para OrizonRD
const UI = {
  showLoading(message = 'Cargando datos...') {
    if (document.getElementById('loadingOverlay')) return;
    
    const overlay = document.createElement('div');
    overlay.id = 'loadingOverlay';
    overlay.className = 'fixed inset-0 bg-onyx/80 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300';
    overlay.innerHTML = `
      <div class="glass-strong rounded-2xl p-8 flex flex-col items-center gap-4 max-w-xs w-full">
        <div class="w-10 h-10 border-2 border-cerulean border-t-transparent rounded-full animate-spin"></div>
        <p class="text-sm text-frost font-medium text-center">${message}</p>
      </div>
    `;
    document.body.appendChild(overlay);
  },

  hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
    }
  },

  showToast(message, type = 'success') {
    const existing = document.getElementById('toastNotification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toastNotification';
    
    const configs = {
      success: { color: 'text-emerald-400', icon: 'check-circle' },
      error:   { color: 'text-red-400', icon: 'alert-circle' },
      info:    { color: 'text-cerulean', icon: 'info' }
    };
    const { color, icon } = configs[type] || configs.info;

    toast.className = 'fixed bottom-6 right-6 z-50 glass-strong rounded-xl px-5 py-3 flex items-center gap-3 shadow-2xl transform translate-y-full opacity-0 transition-all duration-300';
    toast.innerHTML = `
      <i data-lucide="${icon}" class="w-5 h-5 ${color}"></i>
      <span class="text-sm font-medium text-white">${message}</span>
    `;
    
    document.body.appendChild(toast);
    lucide.createIcons();

    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.transform = 'translateY(120%)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
};

window.UI = UI;