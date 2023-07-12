import React, { useRef } from 'react'
import Nav from './nav'
import Hero from './hero'
import Footer from './footer'
const Page = () => {
    const top = useRef(null)
    const about = useRef(null)
    const services = useRef(null)
    const contact = useRef(null)
    const projects = useRef(null)
    const scrolltosection = (section) => {
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: "smooth"

        })
    }

    return (
        <>
            <Nav about={about} services={services} contact={contact} projects={projects} top={top} scrolltosection={scrolltosection} />
            <Hero about={about} services={services} contact={contact} projects={projects} top={top} scrolltosection={scrolltosection} />
            <Footer about={about} services={services} contact={contact} projects={projects} top={top} scrolltosection={scrolltosection} />
        </>
    )
}
export default Page;