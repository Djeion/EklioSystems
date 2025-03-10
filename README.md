# 🌍 Eklio Systems - Guide d'installation & de contribution

Bienvenue sur **Eklio Systems** ! 🚀  
Ce guide est destiné aux **collaborateurs** et explique comment **installer, configurer et contribuer** au projet.

---

## 📦 1. Forker le projet
Avant de commencer, **forkez** ce dépôt sur GitHub en cliquant sur le bouton **"Fork"** en haut à droite.  
Cela créera une copie du projet sur **votre propre compte GitHub**.

---

## 🔽 2. Cloner votre fork
Après avoir forké le projet, clonez votre version en local :

```sh
git clone https://github.com/VOTRE-UTILISATEUR/EklioSystems.git
cd EklioSystems
```

⚠️ Remplacez `VOTRE-UTILISATEUR` par votre pseudo GitHub.

---

## 📥 3. Installer les dépendances

Installez toutes les bibliothèques nécessaires avec :

```sh
npm install
```

```sh
npm install maplibre-gl
```

```hs
npm install react-router-dom

```
```hs
npm install aos
```

```hs
npm install @aws-amplify/ui-react
```

Vous n'allez pas avoir accès à Cognito, il faut désactiver l'authentification en mettant :

```sh
VITE_ENABLE_AUTH=false
```


Cela vous permettra de tester l'UI sans vous connecter.

📌 Comment ajouter le fichier .env ?

Créez un fichier .env à la racine du projet (même endroit que package.json).
Ajoutez la ligne suivante :

```sh
VITE_ENABLE_AUTH=false
```

Enregistrez et tester le projet en local:

```sh
npm run dev
```



---

## 🤝 4. Contribuer au projet

### 🛠 Règles de contribution :

1. Créez une branche pour votre contribution :

    ```sh
    git checkout -b feature/nom-de-votre-branche
    ```

2. Ajoutez votre code, puis committez :

    ```sh
    git commit -m "Ajout d'une nouvelle fonctionnalité"
    ```

3. Poussez la branche sur votre fork :

    ```sh
    git push origin feature/nom-de-votre-branche
    ```

4. Créez une **Pull Request (PR)** vers le dépôt principal.

### 🛠 Bonnes pratiques :

✔️ Suivez le style de code existant.  
✔️ Faites des commits clairs et précis.  
✔️ Testez bien votre code avant de faire une PR.  
✔️ Soyez respectueux et collaboratifs dans les discussions GitHub.  

---

## 🔑 5. Configuration des Variables d'Environnement

Pour exécuter le projet, vous devez configurer un fichier `.env`.

1️⃣ Créez un fichier `.env` à la racine du projet.  
2️⃣ Ajoutez cette ligne avec votre clé API :

```sh
VITE_AMAZON_LOCATION_API_KEY=VOTRE_CLE_API_ICI
```

⚠️ Ne partagez pas cette clé API publiquement.

---

## 🚀 6. Lancer le projet en local

Démarrez l'application avec :

```sh
npm run dev
```

ou

```sh
yarn dev
```

L'application sera accessible à [http://localhost:5173](http://localhost:5173) (ou un autre port selon Vite).

---

## 🛠 7. Dépendances utilisées

Ce projet utilise :

- **React + TypeScript**  
- **Vite** pour le développement rapide  
- **AWS Amplify** pour l'authentification  
- **MapLibre GL JS** pour la carte  
- **React Router** pour la navigation  

Si vous ajoutez une nouvelle dépendance, pensez à exécuter :

```sh
npm install NOM_DU_PACKAGE
```

---

## 🗺️ 8. Fonctionnalités du projet

Eklio Systems est un dashboard interactif permettant :

📍 L'affichage de trackers IoT sur une carte interactive.  
✅ La sélection dynamique des trackers via un menu déroulant.  
🔐 Une authentification sécurisée via AWS Amplify.  
🌍 Une carte personnalisée avec Amazon Location Service.  
📊 Un affichage des données en temps réel (à venir !).  

---

## 🚀 9. Déploiement sur AWS Amplify

Le projet est automatiquement déployé sur **AWS Amplify** dès qu'un commit est poussé sur `main`.

Si vous voulez forcer un build manuel, allez sur : 🔗 **[AWS Amplify Console](https://aws.amazon.com/amplify/)**

---

## 🛠 10. Dépannage & erreurs fréquentes

### ❌ Amazon Location Service API Key is missing!
➡ **Solution** : Assurez-vous que votre fichier `.env` contient bien votre clé API et que vous avez redémarré le projet :

```sh
npm run dev
```



### ❌ Login/Logout ne fonctionne pas correctement
➡ **Solution** : Vérifiez que vous utilisez bien `useAuthenticator()` de `@aws-amplify/ui-react`.
