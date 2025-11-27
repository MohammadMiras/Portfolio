import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    AboutUs,
    ContactUs,
    Header,
    Hero,
    Skills,
} from "Index"

const getData = routeLoader$(async props => {

})

const Index = component$(() => {

    const data = getData().value

    return <div class="bg-custom-color1">
        <Header />
        <Hero />
        <Skills />
        <AboutUs />
        <ContactUs />
    </div>
})

export default Index
