document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('title');
    let words = title.textContent.split(' ');
    let intervalId, frozen = false, stopped = false;
    const shuffleTitle = () => {
        if (!frozen && !stopped) {
            title.textContent = words.sort(() => 0.5 - Math.random()).join(' ');
        }};
    const startShuffling = () => intervalId = setInterval(shuffleTitle, 2000);

    const stopShuffling = () => clearInterval(intervalId);

    title.addEventListener('mouseenter', () => frozen = true);
    title.addEventListener('mouseleave', () => frozen = false);

    title.addEventListener('click', () => {
        stopped = true;
        navigator.clipboard.writeText(title.textContent);
        stopShuffling();
    });
    document.addEventListener('click', (e) => {
        if (!title.contains(e.target) && stopped) {
            stopped = false;
            startShuffling();
        }});
    document.addEventListener('keydown', (e) => {
        if (e.key === '!') {
            setTimeout(() => alert('42!'), 42000);
        }});

    startShuffling();
});
