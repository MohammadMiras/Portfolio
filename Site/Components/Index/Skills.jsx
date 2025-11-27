import { component$ } from "@builder.io/qwik"
import {
    Agile,
    Csharp,
    Docker,
    DotNetCore,
    GitHub,
    Html,
    Javascript,
    MariaDB,
    NextJs,
    Qwik,
    React,
    Sql,
    Tailwindcss,
    Ubuntu,
} from "Svg"

const Skills = component$(() => {

    const classItems = "flex flex-col gap-12 md:gap-6 items-center justify-center border border-solid border-primary border-opacity-30 lg:px-6 lg:py-6 px-3 py-12 rounded-md transition-all duration-500 group hover:bg-gray-100 hover:text-custom-color1 hover:scale-105"

    const classTitle = "text-3xl text-center lg:text-xl"

    const classIcon = "w-28 lg:w-12 h-28 lg:h-12"

    return <section class="max-w-7xl lg:max-w-7xl px-5 mx-auto relative py-.5 md:py-3 text-gray-200">
        <div class="grid lg:grid-cols-3 lg:gap-16 gap-8 items-start">
            <div class="lg:col-span-2 w-full grid place-items-center">
                <h3 class="text-3xl mb-8 pb-1 border-b border-solid font-medium w-fit text-center">Skills</h3>
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                    <div class={classItems}>
                        <Html class={classIcon} />
                        <h3 class={classTitle}>Html5</h3>
                    </div>

                    <div class={classItems}>
                        <Javascript class={classIcon} />
                        <h3 class={classTitle}>JavaScript</h3>
                    </div>

                    <div class={classItems}>
                        <Qwik class={classIcon} />
                        <h3 class={classTitle}>Qwik</h3>
                    </div>
                    <div class={classItems}>
                        <NextJs class={classIcon} />
                        <h3 class={classTitle}>Next.js</h3>
                    </div>
                    <div class={classItems}>
                        <DotNetCore class={classIcon} />
                        <h3 class={classTitle}>Dot Net</h3>
                    </div>

                    <div class={classItems}>
                        <Csharp class={classIcon} />
                        <h3 class={classTitle}>C#</h3>
                    </div>

                    <div class={classItems}>
                        <Tailwindcss class={classIcon} />
                        <h3 class={classTitle}>Tailwindcss</h3>
                    </div>

                    <div class={classItems}>
                        <Agile class={classIcon} />
                        <h3 class={classTitle}>Agile</h3>
                    </div>
                    <div class={classItems}>
                        <Docker class={classIcon} />
                        <h3 class={classTitle}>Docker</h3>
                    </div>

                    <div class={classItems}>
                        <React class={classIcon} />
                        <h3 class={classTitle}>React</h3>
                    </div>

                </div>
            </div>
            <div class="w-full grid place-items-center">
                <h3 class="text-3xl mb-8 pb-1 border-b border-solid font-medium  w-fit">Tools</h3>
                <div class="grid grid-cols-2 gap-3 w-full ml-10">
                    <div class={classItems}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            style="color:#1883CB"
                            xmlns="http://www.w3.org/2000/svg"
                            class={classIcon}
                        ><path d="m21.29 4.1-4.12-2a1.36 1.36 0 0 0-.48-.1h-.08a1.18 1.18 0 0 0-.72.24l-.14.12-7.88 7.19L4.44 7a.83.83 0 0 0-.54-.17.88.88 0 0 0-.53.17l-1.1 1a.8.8 0 0 0-.27.61.84.84 0 0 0 .27.62l3 2.71-3 2.72a.84.84 0 0 0 0 1.23l1.1 1a.89.89 0 0 0 .6.22.93.93 0 0 0 .47-.17l3.43-2.61 7.88 7.19a1.2 1.2 0 0 0 .76.36h.17a1 1 0 0 0 .49-.12l4.12-2a1.25 1.25 0 0 0 .71-1.1V5.23a1.26 1.26 0 0 0-.71-1.13zM17 16.47l-6-4.53 6-4.53z">
                            </path></svg>
                        <h3 class={classTitle}>VS Code</h3>
                    </div>

                    <div class={classItems}>
                        <GitHub class={classIcon} />
                        <h3 class={classTitle}>Git Hub</h3>
                    </div>


                    <div class={classItems}>
                        <Ubuntu class={classIcon} />
                        <h3 class={classTitle}>Ubuntu</h3>
                    </div>


                    <div class={classItems}>
                        <Sql class={classIcon} />
                        <h3 class={classTitle}>Sql Server</h3>
                    </div>

                    <div class={classItems}>
                        <MariaDB class={classIcon} />
                        <h3 class={classTitle}>MariaDb</h3>
                    </div>

                </div>
            </div>
        </div>
    </section>
})
export default Skills
