// utils.js - ÚNICO sistema UI para OrizonRD (50 líneas, auto-activo)
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// 1. Toast auto-removable (máximo 1 a la vez)
function toast(msg, type = 'success') {
  $$('.fixed.bottom-6.right-6').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = `fixed bottom-6 right-6 z-50 glass-strong rounded-xl px-5 py-3 flex items-center gap-3 shadow-2xl transform translate-y-12 opacity-0 transition-all duration-300 border-l-4 ${type === 'error' ? 'border-red-500' : 'border-emerald-500'}`;
  t.innerHTML = `<i data-lucide="${type === 'error' ? 'alert-circle' : 'check-circle'}" class="w-5 h-5 ${type === 'error' ? 'text-red-400' : 'text-emerald-400'}"></i><span class="text-sm font-medium text-white">${msg}</span>`;
  document.body.appendChild(t);
  lucide.createIcons?.();
  requestAnimationFrame(() => t.classList.remove('translate-y-12', 'opacity-0'));
  setTimeout(() => {
    t.classList.add('translate-y-12', 'opacity-0');
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

// 2. Loading global
function showLoading(text = 'Cargando...') {
  if ($('#loadingOverlay')) return;
  const o = document.createElement('div');
  o.id = 'loadingOverlay';
  o.className = 'fixed inset-0 bg-onyx/80 backdrop-blur-sm z-50 flex items-center justify-center';
  o.innerHTML = `<div class="glass-strong rounded-2xl p-6 flex flex-col items-center gap-3"><div class="w-8 h-8 border-2 border-cerulean border-t-transparent rounded-full animate-spin"></div><p class="text-sm text-frost">${text}</p></div>`;
  document.body.appendChild(o);
}
function hideLoading() {
  const o = $('#loadingOverlay');
  if (o) { o.style.opacity = '0'; setTimeout(() => o.remove(), 200); }
}

// 3. AUTO-INTERCEPTA TODOS LOS FORMULARIOS (sin tocar nada más)
document.addEventListener('submit', async (e) => {
  const form = e.target;
  if (!form.action) return;
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.innerHTML;
  btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Procesando...`;
  btn.disabled = true;
  lucide.createIcons?.();

  try {
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
    if (res.ok) {
      toast('✅ Enviado correctamente');
      setTimeout(() => window.location.href = form.querySelector('input[name="_next"]')?.value || 'dashboard.html', 900);
    } else throw new Error();
  } catch {
    toast('❌ Error de conexión. Intenta de nuevo.', 'error');
    btn.innerHTML = orig;
    btn.disabled = false;
    lucide.createIcons?.();
  }
}, true);

// Exponer global
window.toast = toast;
window.showLoading = showLoading;
window.hideLoading = hideLoading;