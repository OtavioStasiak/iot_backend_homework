module.exports = {
    presets: [
    "@babel/preset-env", {targets: { node: "current"}},
    "@babel/preset-typescript"
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "@modules": ["./src/modules"],
                    "@config": ["./src/config"],
                    "@middlewares": ["./src/middlewares"],
                    "@utils": ["./src/utils"],
                    "@database": ["./src/database"]
                },
            },
        ],
        "babel-plugin-transform-typescript-metadata",
        ["@babel/plugin-proposal-decorators", {legacy: true}],
        ["@babel/plugin-proposal-class-properties", {loose: true}],

    ]
}