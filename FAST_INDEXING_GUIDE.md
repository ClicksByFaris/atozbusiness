# 🚀 Google Fast Indexing Guide

This guide explains how to use the Google Indexing API to get your pages indexed in minutes instead of days.

---

## 📈 Daily Quota & Limits
By default, Google provides a free tier that is more than enough for most websites:

*   **Daily Limit:** **200 URLs per day**.
*   **Cost:** Completely **FREE**.
*   **Action Types:** You can notify Google of "Updated" pages or "Deleted" pages.

> [!TIP]
> If you have a very large site and need more than 200/day, you can request a quota increase in the [Google Cloud Console](https://console.cloud.google.com/apis/api/indexing.googleapis.com/quotas).

---

## 🛠️ How to Use It (Step-by-Step)

### 1. The Setup
I have already configured the following for you:
1.  Installed `googleapis` library.
2.  Created the `scripts/fast-index.js` file.
3.  Connected it to your `service-account.json`.

### 2. Adding New URLs
When you have new pages to index:
1.  Open `scripts/fast-index.js`.
2.  Find the `testUrls` array at the bottom of the file.
3.  Add your new URLs inside the brackets:
    ```javascript
    const testUrls = [
      'https://atozbusiness.ae/new-page-1/',
      'https://atozbusiness.ae/new-page-2/'
    ];
    ```

### 3. Running the Indexer
Run this command in your terminal:
```powershell
node scripts/fast-index.js
```

---

## 🔍 Troubleshooting

### Error: 403 Forbidden
*   **Cause:** The service account email is not an "Owner" in Search Console.
*   **Fix:** Go to Search Console > Settings > Users > Add User. Use the email found in your `service-account.json` (ending in `.iam.gserviceaccount.com`). Set permission to **Owner**.

### Error: Indexing API not enabled
*   **Cause:** The API is disabled in Google Cloud.
*   **Fix:** Go to [this link](https://console.cloud.google.com/apis/library/indexing.googleapis.com) and click **Enable**.

---

## 🤖 Next Steps
If you want to fully automate this, we can make the script read your `sitemap.xml` so it automatically finds all new pages every time you build the site. Just let me know!
