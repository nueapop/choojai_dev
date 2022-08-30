async function getConfigJSON() {
    const response = await fetch("../assets/config/config.json");
    const json = await response.json();
    console.log(json);
}