# Partiel Design Pattern

## 1. Observer
`ShopService` émet des événements métier sans connaitre les notifications qui en découlent. Il ignore tout des SMS, des Emails etc, les notifications sont envoyé car il y a des observers. Si l'entreprise souhaite rajouter un autre type de notification, il n'y aura rien à modifier dans la logique `ShopService`. Il suffira de brancher un nouveau Listener à EventManager.

## 2. Factory
L'instanciation des différents Notifiers dans `NotifierFactory` isole la logique de création et facilite l'ajout de nouveaux canaux.

## 3. Injection de Dépendances
En passant les dépendances via le constructeur de `ShopService` il devient testable unitairement car il n'est pas vraiment lié à `EventManager`.

## Lancer le Projet

```bash
npm start
```

Le fichier `main.ts` contient la simulation de différents scénarios :
1. Une commande basique.
2. Un paiement refusé.
3. Une commande expédiée.
4. Une commande d'un montant élevé.