# 🏥 API de Gestion des Rapports de Visite

## 📌 Présentation
Cette API Express.js permet de gérer les **rapports de visite** réalisés par des **visiteurs médicaux** lors de leurs rencontres avec des **praticiens**.  
Elle offre des fonctionnalités pour **ajouter, modifier, consulter et supprimer** des rapports de visite.

## 🛠️ Technologies utilisées
- **Node.js** : Runtime pour exécuter JavaScript côté serveur.
- **Express.js** : Framework web rapide et minimaliste pour créer l'API REST.
- **MongoDB (ou PostgreSQL)** : Base de données pour stocker les rapports.
- **JWT (JSON Web Token)** : Authentification et sécurisation des accès.
- **Express-rate-limit** : Protection contre les attaques par force brute sur l’authentification.

## 🚀 Fonctionnalités
- 🔹 **Gestion des utilisateurs** (inscription, connexion avec JWT).
- 🔹 **Création de rapports de visite** pour chaque visiteur médical.
- 🔹 **Modification et suppression des rapports** par leurs auteurs.
- 🔹 **Consultation des rapports** selon les droits d’accès.
- 🔹 **Sécurisation de l’API** avec JWT et rate-limiting.

## 🔧 Installation et Configuration
### 1️⃣ **Cloner le projet**
```bash
git clone https://github.com/mon-projet/api-gestion-rapports.git
cd api-gestion-rapports
