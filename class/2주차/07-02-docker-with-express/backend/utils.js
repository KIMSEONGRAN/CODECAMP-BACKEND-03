export function getToday() {
    const createAt = new Date();
    const yyyy = createAt.getFullYear();
    const mm = createAt.getMonth() + 1;
    const mm2 = String(mm).padStart(2, '0');
    const dd = createAt.getDate();
    const today = `${yyyy}-${mm2}-${dd}`;

    return today;
}