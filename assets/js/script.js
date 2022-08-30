function getConfig() {
    const { default: json } = import("../config/config.json", { assert: { type: "json" } });
    return json;
}