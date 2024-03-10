const { onboardDeveloper } = require('tea-demo-arsen');

console.log("Starting tea-digital-market project...");

const developerInfo = {
    name: "Dana",
    email: "dana@teadigitalmarket.com"
};

// Onboarding the developer to create a wallet for transactions
const walletAddress = onboardDeveloper(developerInfo);

console.log(`Tea-digital-market setup completed. Wallet address: ${walletAddress}`);
