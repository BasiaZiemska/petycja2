<script>
// Twój klucz API z MailerLite
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYjJjYjc1OGY4MWE4NDFlNzY4NDA1NmM3MGFmODJhZDM3ZWNhNWZiN2I3OGI2MmFmNDRiYTRkYWRmMmU0MmFlMmNjZmE5ZWYxMjQ2NGEzY2YiLCJpYXQiOjE3MjkyNzcxOTguODExNzc5LCJuYmYiOjE3MjkyNzcxOTguODExNzgxLCJleHAiOjQ4ODQ5NTA3OTguODA4NjE4LCJzdWIiOiI2OTgyMzAiLCJzY29wZXMiOltdfQ.kE9ZUTZsfp0prFK1vpUF0VakHSEMAqsMgUWxbrh4uusLcXyA4sQ0tVEr58x6TfwEEHG0Wv4t07LWnIB4PVmOwuxomDMGkQGTQCA0KFJgPVAKvjkf-Ap_fL3LdQcz_10n9JZaFEZJ0vUTnfuHAa2A-kg-n-nosYy8y8JdQ3kNJX11pEiIwXJiWnEYiZ47XxvXvYS8FOo2hNubxO0Lm41dK4j4sNBp7Kcm-7gN13vEbR2Y1yuENYVcdYFvtxIyr_Cp9EikMLK5TMoCj1zQ-2-Y7W2dOYl1XhTkoCQ-9Nz9zqgJYL1QHhN-76WUrHREw2-Jbi7SPEbkS32mvQmSmq-TGJ7Lk7OzCa9-8xJ6GZQ5b_fWA9CPfO9Xv-4cjug6bjWGaz72kKVMqO4FOP-68y46shF7aqOJGZSn4oLQ-s92XrIdllwamRQtFvexVzJ5GbO20ObgRU9Pl2UCdB32zxn8Y9Jdi_8XZtOY1iXJ65GD7c6zyAsh1ZCrVLDULxNmF5V9Y629IM4LWCFEtCXwPPtAMd1FwlrwyZ_bnDGtnBjz09RQH9J0RDFCP_I663o4ZV9ntHAJR5FvzOhanHZHz7NCn2e1KccTtL8Ig4l3aK45dc860WnlBJBUVXmEWmQRCoo8dZXv1bkMi9GAvnexBdywpifNPnFI38Fy4tAL4zXCP18';
const groupId = '129446219967629283';

// Funkcja pobierająca liczbę subskrybentów
async function getSubscribersCount() {
    try {
        const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`, {
            method: 'GET',
            headers: {
                'X-MailerLite-ApiKey': apiKey
            }
        });
        const data = await response.json();
        // Zakładając, że liczba subskrybentów jest w "total"
        document.getElementById('counter').innerText = data.total;
    } catch (error) {
        console.error('Błąd w pobieraniu danych:', error);
    }
}

// Regularne odpytywanie API co 30 sekund
setInterval(getSubscribersCount, 30000);

// Pierwsze odpytanie
getSubscribersCount();
</script>

<div>
    Liczba podpisów: <span id="counter">Ładowanie...</span>
</div>
