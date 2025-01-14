const searchbar = document.getElementById('searchbar');
const searchInput = searchbar.querySelector('input[name="q"]');

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchbar.submit();
  }
});