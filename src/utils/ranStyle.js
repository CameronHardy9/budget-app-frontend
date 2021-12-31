function ranStyle() {
    const styles = ["faded1", "faded2", "faded3", "faded4", "faded5"];
    const rand = Math.round(Math.random() * 4);
    return styles[rand];
}

export default ranStyle;