import baseConfig from "./TailwindBase.js"

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: "#171717",
                    color2: "#00a78e",
                    color3: "#161614",
                    color4: "#f48024"
                }
            }
        },
        fontFamily: {
            yekanbakh: ["YekanBakh"],
        }
    },
}

export default config
