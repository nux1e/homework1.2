let bonusBalance = 500;

let purchaseInMonth = 2;

let standardPercent = 10;

let premiumPercent = 20;

let boostedCashback = 5;

let ultimateRate;

if (bonusBalance > 5000) {
   ultimateRate = premiumPercent;
} else {
    ultimateRate = standardPercent;
}

if (purchaseInMonth > 1) {
   ultimateRate = ultimateRate + boostedCashback;
}

console.log("Процент от покупки: " + ultimateRate + "%");
