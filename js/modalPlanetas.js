function openModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;

    // Actualiza la imagen segun el planeta
    let imageSrc = '';
    switch (title) {
        case 'Mercurio':
            imageSrc = 'assets/img/mercurio.jpg';
            break;
        case 'Venus':
            imageSrc = 'assets/img/venus.webp';
            break;
        case 'Tierra':
            imageSrc = 'assets/img/Tierra.jpg';
            break;
        case 'Marte':
            imageSrc = 'assets/img/marte.png';
            break;
        case 'Júpiter':
            imageSrc = 'assets/img/jupiter.jpg';
            break;
        case 'Saturno':
            imageSrc = 'assets/img/saturno.jpg';
            break;
        case 'Urano':
            imageSrc = 'assets/img/urano.png';
            break;
        case 'Neptuno':
            imageSrc = 'assets/img/neptune.jpg';
            break;
        default:
            imageSrc = '';
            break;
    }
    document.getElementById('modal-image').src = imageSrc;

    // Mostrar el modal
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}