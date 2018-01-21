const changeClass = () => {
    
    const el = document.getElementById("nav");

    if (el.className === 'navigation') {

        el.className += ' responsive';
    } else {
        el.className = 'navigation';
    }
};