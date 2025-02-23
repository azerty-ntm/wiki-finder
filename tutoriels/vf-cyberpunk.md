---
title: "VF Cyberpunk 2077"
layout: default.njk
---
<style>
/* 🌑 Arrière-plan et texte */
body {
    background: linear-gradient(135deg, #1e1e1e, #292929);
    color: #E0E0E0;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    padding: 20px;
}

/* 🔥 Titres stylisés */
h1 {
    background: linear-gradient(90deg, #ff3b3b, #ff9800);
    padding: 14px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 28px;
    text-shadow: 0 0 12px rgba(255, 59, 59, 0.6);
    animation: glow 1.5s infinite alternate;
}

h2 {
    color: #ff9800;
    border-left: 6px solid #ff9800;
    padding-left: 12px;
    font-size: 22px;
}

/* 📦 Conteneurs dynamiques */
.solution-box {
    background: rgba(255, 255, 255, 0.07);
    padding: 18px;
    margin: 20px 0;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border-left: 6px solid #ff9800;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.solution-box:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}

/* 🟢 Étapes sous forme de badges élégants */
.step {
    display: inline-block;
    background: linear-gradient(135deg, #ff3b3b, #ff9800);
    color: white;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 50px;
    margin-right: 12px;
    font-size: 15px;
    box-shadow: 0 0 10px rgba(255, 59, 59, 0.6);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 59, 59, 0.9);
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

/* 🔗 Liens */
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

/* 🌟 Animations */
@keyframes glow {
    from { box-shadow: 0 0 10px rgba(255, 59, 59, 0.6); }
    to { box-shadow: 0 0 20px rgba(255, 59, 59, 1); }
}

@keyframes flicker {
    from { opacity: 1; }
    to { opacity: 0.8; }
}
</style>

# 🇫🇷 Installer la version française de Cyberpunk 2077  

---

## 📥 **Télécharger le pack de langue FR**  
<div class="solution-box">
<span class="step">1️⃣</span> **Téléchargez le pack de langue ici** :  
   👉 <a href="https://pixeldrain.com/u/BVGLDNki" target="_blank"><b>Lien du pack VF (Patch 2.01)</b></a>  
<span class="step">2️⃣</span> **Lors de l’installation**, choisissez uniquement la langue que vous souhaitez utiliser.  
</div>

---

## 📂 **Supprimer les autres langues**  
<div class="solution-box">
<span class="step">1️⃣</span> Allez dans le dossier d’installation du jeu :  
   🗂 **`Cyberpunk 2077 > archive > pc > contenu`**  
   🗂 **`Cyberpunk 2077 > archive > pc > ep1`**  
<span class="step">2️⃣</span> Supprimez **toutes les autres langues** comme montré ici :  
   👉 <a href="https://imgur.com/keHrYSW" target="_blank"><b>Voir l’exemple</b></a>  
<span class="step">3️⃣</span> **⚠️ Ne supprimez pas** les fichiers **audio/basegame/ep1** !  
   - Si vous les avez supprimés par erreur, **restaurez-les depuis la corbeille**.  
</div>

---

## 🔧 **Changer la langue du jeu**  
<div class="solution-box">
### **➡️ Version Steam**  
<span class="step">1️⃣</span> Ouvrez le fichier :  
   📂 **`bin\x64\steam_emu.ini`**  
<span class="step">2️⃣</span> Modifiez :  
   - `"Language="` → `"french"`  
   - `"Languages="` → `"french"`  
</div>

<div class="solution-box">
### **➡️ Version GOG**  
<span class="step">1️⃣</span> Ouvrez ces fichiers :  
   📂 **`goggame-1423049311.info`** *(jeu de base)*  
   📂 **`goggame-1256837418.info`** *(Liberté Fantôme DLC)*  
<span class="step">2️⃣</span> Changez `"language"` et `"languages"` en `"french"`.  
</div>

---

## ✅ **Conclusion**  
<div class="solution-box">
✔️ **Lancez Cyberpunk 2077 et profitez du jeu en VF !**  
✔️ **Si la langue ne change pas, redémarrez votre PC et vérifiez les fichiers.**  
</div>

<div class="alert">
📢 **Besoin d’aide ?** Rejoignez la communauté pour plus d’infos ! 🚀
</div>
