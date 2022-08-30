async function getConfigJSON() {
    const response = await fetch("../config/config.json");
    const json = await response.json();
    console.log(json);
}