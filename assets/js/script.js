function getConfig() {
    const { default: json } = await import("../config/config.json", { assert: { type: "json" } });
    return json;
}