// storage.js - Gestión de datos locales para OrizonRD
const Storage = {
  get(key) {
    const data = localStorage.getItem(`orizon_${key}`);
    return data ? JSON.parse(data) : null;
  },
  set(key, value) {
    localStorage.setItem(`orizon_${key}`, JSON.stringify(value));
  },
  initFavorites() {
    let favs = this.get('favorites');
    if (!favs) {
      favs = ORIZON_DATA.properties.map(p => p.id); // Cargar todas por defecto
      this.set('favorites', favs);
    }
    return favs;
  },
  initDashboard() {
    let stats = this.get('dashboard');
    if (!stats) {
      stats = { views: 1284, saved: 89, rate: 94, active: 4, pending: 1, expired: 1 };
      this.set('dashboard', stats);
    }
    return stats;
  }
};

window.Storage = Storage;