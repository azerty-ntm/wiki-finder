---
title: "Problème avec LootLabs"
layout: default.njk
---

<style>
/* 🌌 Arrière-plan texturé et plus dynamique */
body {
    background: radial-gradient(circle, #1b1b1b, #161616);
    color: #E0E0E0;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    padding: 20px;
}

/* 🔥 Titres lumineux */
h1 {
    background: linear-gradient(90deg, #ff4b4b, #ff6b6b);
    padding: 14px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 32px;
    text-shadow: 0 0 15px rgba(255, 75, 75, 0.8);
    animation: glow 1.5s infinite alternate;
}

h2 {
    color: #ff6b6b;
    border-left: 6px solid #ff6b6b;
    padding-left: 12px;
    font-size: 24px;
    margin-top: 25px;
}

/* 📦 Conteneurs dynamiques */
.solution-box {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin: 20px 0;
    border-radius: 12px;
    backdrop-filter: blur(12px);
    border-left: 6px solid #ff6b6b;
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
}

.solution-box:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.25);
}

/* 🟢 Étapes sous forme de badges élégants */
.step {
    display: inline-block;
    background: linear-gradient(135deg, #ff4b4b, #ff6b6b);
    color: white;
    font-weight: bold;
    padding: 10px 18px;
    border-radius: 50px;
    font-size: 16px;
    box-shadow: 0 0 12px rgba(255, 75, 75, 0.8);
    margin-right: 15px;
    min-width: 50px;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 75, 75, 1);
}

/* ⚠️ Alertes dynamiques */
.alert {
    border-left: 6px solid #ffeb3b;
    background: rgba(255, 235, 59, 0.2);
    padding: 14px;
    color: #ffeb3b;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(255, 235, 59, 0.8);
    animation: flicker 1.5s infinite alternate;
}

/* 🔗 Liens stylés */
a {
    color: #64b5f6;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

a:hover {
    text-decoration: underline;
    color: #42a5f5;
}

/* 🔙 Bouton retour */
.back-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    background: #ff4b4b;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(255, 75, 75, 0.5);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.back-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 18px rgba(255, 75, 75, 0.8);
}

/* 🌟 Animations */
@keyframes glow {
    from { box-shadow: 0 0 12px rgba(255, 75, 75, 0.8); }
    to { box-shadow: 0 0 22px rgba(255, 75, 75, 1); }
}

@keyframes flicker {
    from { opacity: 1; }
    to { opacity: 0.85; }
}
</style>

# ❌ Token invalide ou problèmes avec LootLabs ?  

## 🔵 Erreur :
Vous voyez un message indiquant **Token invalide** ou vous ne pouvez pas accéder à LootLabs ?  

## 🤔 Explication :
Certains paramètres de votre navigateur ou de votre réseau peuvent empêcher l'accès à LootLabs ou causer une erreur de token invalide.

## 🛠 Solution :
<div class="solution-box">
    <span class="step">1️⃣</span> <span>**Désactivez votre bloqueur de pub** *(AdBlock, uBlock Origin, etc.)*</span>
</div>

<div class="solution-box">
    <span class="step">2️⃣</span> <span>**Assurez-vous que JavaScript est activé** dans votre navigateur.</span>
</div>

<div class="solution-box">
    <span class="step">3️⃣</span> <span>**Désactivez votre VPN ou proxy** s'il est activé.</span>
</div>

<div class="solution-box">
    <span class="step">4️⃣</span> <span>**Utilisez des DNS classiques** :</span>
</div>
<ul>
    <li>🟢 **Google** → `8.8.8.8` et `8.8.4.4`</li>
    <li>🔵 **Cloudflare** → `1.1.1.1` et `1.0.0.1`</li>
</ul>

<div class="solution-box">
    <span class="step">5️⃣</span> <span>**Videz le cache de votre navigateur** :</span>
</div>
<ul>
    <li>Chrome : `Ctrl + Shift + Suppr` → *Effacer les images et fichiers en cache*</li>
    <li>Firefox : `Ctrl + Shift + Suppr` → *Cache*</li>
</ul>

<div class="solution-box">
    <span class="step">6️⃣</span> <span>**Essayez un autre navigateur** *(Chrome, Edge, Firefox…)*</span>
</div>

<div class="alert">
⚠️ Toujours bloqué ? Contactez le support ou essayez depuis un autre réseau !
</div>

<!-- 🔙 Bouton retour -->
<a href="/easy" class="back-btn">⬅️ Retour à la liste des erreurs</a>
