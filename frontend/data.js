// data.js - Base de datos centralizada para OrizonRD Demo
const ORIZON_DATA = {
  properties: [
    { id: 1, title: "Villa Moderna en Bávaro Premium", location: "Punta Cana", type: "Villa", price: 325000, beds: 4, baths: 5, sqm: 380, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80", badge: "VERIFICADO", agent: "Andrés C.", lat: 18.560, lng: -68.412, amenities: ["pool","gated","beach"], desc: "Villa de lujo con acceso directo a playa, piscina infinity y smart home integrado." },
    { id: 2, title: "Penthouse Santo Domingo Este", location: "Santo Domingo", type: "Apartamento", price: 489000, beds: 3, baths: 4, sqm: 220, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", badge: "PREMIUM", agent: "María R.", lat: 18.486, lng: -69.931, amenities: ["gym","pool","gated"], desc: "Vista panorámica al mar Caribe, acabados de mármol y terraza privada." },
    { id: 3, title: "Terreno Beachfront Samaná", location: "Samaná", type: "Terreno", price: 185000, beds: 0, baths: 0, sqm: 5000, img: "https://media.vrbo.com/lodging/45000000/44310000/44308900/44308832/e672d486.jpg?impolicy=resizecrop&rw=1200&ra=fit", badge: "NUEVO", agent: "Jorge P.", lat: 19.205, lng: -69.334, amenities: ["beach"], desc: "Listo para titulación, ideal para desarrollo turístico o residencia privada." },
    { id: 4, title: "Casa Familiar Nizao, Santiago", location: "Santiago", type: "Casa", price: 165000, beds: 4, baths: 3, sqm: 250, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", badge: "VERIFICADO", agent: "Lucía V.", lat: 19.456, lng: -70.697, amenities: ["gated"], desc: "Amplio jardín, cerca de centros educativos y rutas principales." },
    { id: 5, title: "Condominio All-Inclusive", location: "Punta Cana", type: "Apartamento", price: 210000, beds: 2, baths: 2, sqm: 120, img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80", badge: "ROI ~9%", agent: "Raúl M.", lat: 18.572, lng: -68.398, amenities: ["pool","gym","beach"], desc: "Gestión de alquiler vacacional incluida, retorno garantizado primer año." }
  ],
  agents: [
    { id: 1, name: "Andrés Castillo", role: "Platinum Agent", exp: "8 años", rating: 4.9, reviews: 127, specialty: ["Punta Cana","Luxury"], img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80", phone: "18090000001" },
    { id: 2, name: "María Rodríguez", role: "Gold Agent", exp: "12 años", rating: 5.0, reviews: 203, specialty: ["Santo Domingo","CD"], img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", phone: "18090000002" },
    { id: 3, name: "Jorge Peña", role: "Gold Agent", exp: "6 años", rating: 4.8, reviews: 89, specialty: ["Samaná","Terrenos"], img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", phone: "18090000003" },
    { id: 4, name: "Raúl Mejía", role: "Platinum Agent", exp: "15 años", rating: 5.0, reviews: 312, specialty: ["Luxury","Inversión"], img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80", phone: "18090000004" }
  ],
  banks: [
    { name: "BHD", rate: 8.5, term: "Hasta 20y", desc: "Ideal para planilla y gobierno.", color: "#FDD835", textColor: "#000" },
    { name: "BNB", rate: 9.1, term: "Hasta 20y", desc: "Tasas preferenciales BNB Hogar.", color: "#FF0000", textColor: "#FFF" },
    { name: "Popular", rate: 10.2, term: "Hasta 25y", desc: "Opción flexible para independientes.", color: "#0033A0", textColor: "#FFF" }
  ],
  advisors: [
    { id: 1, name: "Lic. Andrés Castillo", role: "Analista Financiero", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80", rating: 4.9, exp: "8 años", tags: ["ROI","Punta Cana","Luxury"] },
    { id: 2, name: "Abg. María Rodríguez", role: "Especialista Legal", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80", rating: 5.0, exp: "12 años", tags: ["Titulación","CD","Contratos"] },
    { id: 3, name: "Ing. Jorge Peña", role: "Asesor Técnico", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", rating: 4.8, exp: "6 años", tags: ["Terrenos","Samaná","Desarrollo"] }
  ],
  faqs: [
    { q: "¿Cuánto tarda la verificación de una propiedad?", a: "El proceso toma entre 24 y 48 horas hábiles. Incluye cruce con Oficina de Titulación, DGII y revisión documental." },
    { q: "¿Cómo contacto a un agente directamente?", a: "Cada tarjeta de agente tiene un botón de WhatsApp y Email. También puedes asignarte uno desde tu consulta." },
    { q: "¿Mis datos están protegidos?", a: "Absolutamente. Cumplimos con la Ley 172-13 de Protección de Datos Personales. Nunca vendemos ni compartimos tu información sin consentimiento explícito." },
    { q: "¿Ofrecen asesoría financiera gratuita?", a: "Sí. Nuestro equipo de alianzas bancarias te pre-califica sin costo y te compara tasas reales de 3+ entidades en 24h." }
  ]
};

// Exponer globalmente para que cualquier página pueda usarlo
window.ORIZON_DATA = ORIZON_DATA;