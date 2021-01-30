export function parseTimeFromTimestamp(timestamp) {
    const options = { weekday: 'long', month: 'numeric', day: 'numeric', year: "numeric" };
    const s = new Date(timestamp);

    const timeStr = `${s.toLocaleTimeString("en-GB")} | ${s.toLocaleDateString("en-GB", options)}`
    
    return timeStr
}