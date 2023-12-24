import ContactChanells from "../../components/ContactChanells"
import ContactForm from "../../components/ContactForm"

const ContactUs = () => {
    return (
        <div className="lg:flex lg:flex-row-reverse ">
            <div className="lg:w-2/3 ">
                <ContactChanells />
            </div>
            <div className="lg:w-2/3">
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs