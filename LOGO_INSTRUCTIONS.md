# Instructions pour ajouter le logo SARSARA

## Remplacement du logo

1. **Remplacez le fichier placeholder** : `public/sarsara-logo.png` par votre vrai logo
2. **Format recommandé** : PNG avec fond transparent pour une meilleure adaptation au mode sombre
3. **Taille recommandée** : Minimum 800x400px pour une bonne qualité sur tous les écrans

## Optimisation pour le mode sombre

Le code est déjà configuré pour :
- Appliquer un filtre d'inversion en mode sombre (`invert(1) hue-rotate(180deg)`)
- Utiliser un mode de fusion (`mixBlendMode: 'screen'`) pour une meilleure intégration
- Ajouter une ombre portée pour la profondeur

## Si votre logo a un fond noir

Le code actuel gère automatiquement l'adaptation au mode sombre, mais pour un résultat optimal :
1. **Option 1** : Fournissez une version avec fond transparent (PNG)
2. **Option 2** : Le filtre CSS actuel inversera les couleurs en mode sombre

## Test

Après avoir ajouté votre logo :
1. Redémarrez le serveur : `npm run dev`
2. Testez en mode clair et sombre
3. Vérifiez la responsivité sur mobile et desktop
