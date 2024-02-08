document.getElementById('fetchDataButton').addEventListener('click', async () => {
    try {
      const response = await fetch('/data');
      const data = await response.json();
      const jsonDataContainer = document.getElementById('jsonDataContainer');
      jsonDataContainer.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Errore:', error);
    }
  });
  