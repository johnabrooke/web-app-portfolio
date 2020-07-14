const form = document.forms['search'];
const input = form.elements.searchInput;

//input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);

//input.addEventListener('change', () => alert('changed'), false);

form.addEventListener ('submit', search, false);
function search(event) {
    alert(' Form Submitted');
    event.preventDefault();
}
