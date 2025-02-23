---
title: "Faux positif"
layout: default.njk
---
<style>
/* 🌑 Arrière-plan sombre et moderne */
body {
    background: linear-gradient(135deg, #1e1e1e, #292929);
    color: #E0E0E0;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    padding: 20px;
}

/* 🔥 Titres avec effet de glow */
h1 {
    background: linear-gradient(90deg, #ff4b4b, #ff6b6b);
    padding: 14px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 28px;
    text-shadow: 0 0 12px rgba(255, 75, 75, 0.6);
    animation: glow 1.5s infinite alternate;
}

h2 {
    color: #ff6b6b;
    border-left: 6px solid #ff6b6b;
    padding-left: 12px;
    font-size: 22px;
}

/* 📦 Conteneur stylisé */
.solution-box {
    background: rgba(255, 255, 255, 0.07);
    padding: 18px;
    margin: 20px 0;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border-left: 6px solid #ff6b6b;
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
    background: linear-gradient(135deg, #ff4b4b, #ff6b6b);
    color: white;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 50px;
    margin-right: 12px;
    font-size: 15px;
    box-shadow: 0 0 10px rgba(255, 75, 75, 0.6);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.step:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 75, 75, 0.9);
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
    from { box-shadow: 0 0 10px rgba(255, 75, 75, 0.6); }
    to { box-shadow: 0 0 20px rgba(255, 75, 75, 1); }
}

@keyframes flicker {
    from { opacity: 1; }
    to { opacity: 0.8; }
}
</style>

# 🛑 Mon PC me dit que j’ai un virus quand je lance le jeu !

## ❓ Explication  
C’est un **faux positif**. Un **crack** modifie un fichier du jeu pour le rendre jouable sans achat.  
Comme il effectue une **modification non autorisée**, l’antivirus le détecte comme une **menace potentielle**.

## 🚨 Types d’alertes les plus courantes :
- **HackTool:Win32**  
- **Trojan.Generic**  
- **PUA (Potentially Unwanted Application)**  

⚠️ **Cependant, il est toujours conseillé de vérifier si le fichier est réellement sûr.**  

---

## 🛠️ Solutions  

<div class="solution-box">
<span class="step">1️⃣</span> **Vérifiez que vous avez téléchargé le bon fichier**  
✔️ Ne cliquez pas sur des **pubs trompeuses**.  
✔️ Vérifiez le **nom et la taille** avant d’ouvrir.  
</div>

<div class="solution-box">
<span class="step">2️⃣</span> **Désactivez temporairement l’antivirus**  
🔧 Allez dans les paramètres et mettez-le en pause **juste pour l’installation**.  
</div>

<div class="solution-box">
<span class="step">3️⃣</span> **Ajoutez une exclusion pour éviter la suppression du fichier**  
🖥️ Ajoutez le fichier cracké dans les exceptions de votre antivirus.  
</div>

<div class="solution-box">
<span class="step">4️⃣</span> **Analysez le fichier sur VirusTotal**  
📌 [Vérifier ici](https://www.virustotal.com) pour voir si c’est vraiment un virus.  
</div>

---

<div class="alert">
📢 **Besoin d’aide ?** Posez vos questions sur notre serveur Discord ou le forum ! 🚀
</div>
