export function setActiveItem(id) {

    document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('nb-link-active'));

    document.getElementById(id).classList.add('nb-link-active');
}