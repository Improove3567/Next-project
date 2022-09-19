import Contact_content from "../components/Contact_content/Contact_content";
import Hero from "../components/hero/Hero"

const Contact = () => {
    return (
        <div>
            <Hero heading="Contact" message="Submit the form below for more work and quotes." />
            <Contact_content />
        </div>
    );
}

export default Contact;
