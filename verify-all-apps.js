const fs = require('fs');
const path = require('path');

async function checkApp(appName, loaderPath, databasePath) {
    console.log(`\n--- Checking ${appName} ---`);
    try {
        const fullLoaderPath = path.resolve(loaderPath);
        const fullDatabasePath = path.resolve(databasePath);

        // We can't easily require TS/ESM files in a raw node script without dynamic imports or ts-node
        // But we can check if the readdir bit works at least
        const loaderContent = fs.readFileSync(fullLoaderPath, 'utf8');
        const dirMatch = loaderContent.match(/path\.join\(process\.cwd\(\), "([^"]+)"\)/);
        if (dirMatch) {
            const dataDir = path.join('apps', appName, dirMatch[1]);
            const fullDataDir = path.resolve(dataDir);
            if (fs.existsSync(fullDataDir)) {
                const files = fs.readdirSync(fullDataDir);
                console.log(`Directory ${dataDir} exists and contains ${files.length} files.`);
            } else {
                console.error(`- Directory NOT FOUND: ${fullDataDir}`);
            }
        }
    } catch (e) {
        console.error(`- Error checking ${appName}: ${e.message}`);
    }
}

async function run() {
    await checkApp('micro-trends', 'apps/micro-trends/src/lib/trends-loader.ts', 'apps/micro-trends/src/lib/trends-database.ts');
    await checkApp('problem-helper', 'apps/problem-helper/src/lib/problems-loader.ts', 'apps/problem-helper/src/lib/problem-database.ts');
    await checkApp('quote-bot', 'apps/quote-bot/src/lib/content-loader.ts', 'apps/quote-bot/src/lib/quote-database.ts');
    await checkApp('niche-glossary', 'apps/niche-glossary/src/lib/terms-loader.ts', 'apps/niche-glossary/src/lib/glossary-database.ts');
}

run();
