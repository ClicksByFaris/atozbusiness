import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// 1. Path to your service account file (make sure this file exists in the root)
const SERVICE_ACCOUNT_FILE = './service-account.json';

// 2. Load the credentials
const key = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_FILE, 'utf8'));

// 3. Setup the authentication
const jwtClient = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

// 4. Function to notify Google
async function indexUrl(url) {
  try {
    await jwtClient.authorize();
    
    console.log(`📡 Sending ${url} for indexing...`);
    const response = await google.indexing('v3').urlNotifications.publish({
      auth: jwtClient,
      requestBody: {
        url: url,
        type: 'URL_UPDATED' // Use URL_UPDATED to add/refresh, URL_DELETED to remove
      }
    });

    console.log(`✅ Success! Response status: ${response.status}`);
    console.log(`Response data:`, response.data);
  } catch (error) {
    console.error(`❌ Error indexing ${url}:`, error.message);
  }
}

// 5. TEST URLS AS REQUESTED:
const testUrls = [
  'https://atozbusiness.ae/services/visit-visa-abu-dhabi-services/',
  'https://atozbusiness.ae/services/vat-consultancy-abu-dhabi/'
];

// Run indexing for each URL
async function runTest() {
  for (const url of testUrls) {
    await indexUrl(url);
  }
}

runTest();
