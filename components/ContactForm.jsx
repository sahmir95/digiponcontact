import ButonForm from "@/components/ButtonForm";
import ContactTitle from "@/components/ContactTitle";
import InputForm from "@/components/InputForm";
import LabelForm from "@/components/LabelForm";
import TextareaForm from "@/components/TextareaForm";


const ContactForm = () => {
  return (
    <div className="mt-20 lg:mt-5">
      <ContactTitle ContactTitle="تماس با دیجی پون"/>
      <form className="m-5 lg:flex lg:flex-wrap ">
        <div className="mb-4 lg:w-1/2 lg:px-8">
          <LabelForm text="نام و نام خانوادگی" />
          <InputForm type="text" id="name" name="name" label="نام و نام خانوادگی" />
        </div>

        <div className="mb-4 lg:w-1/2  lg:px-8">
          <LabelForm text="موضوع" />
          <InputForm type="text" id="subject" name="subject" label="موضوع" className="lg:w-full" />
        </div>

        <div className="mb-4 lg:w-1/2 lg:px-8">
          <LabelForm text="ایمیل" />
          <InputForm type="email" id="email" name="email" label="ایمیل" />
        </div>

        <div className="mb-4 lg:w-1/2 lg:px-8">
          <LabelForm text="تلفن تماس" />
          <InputForm type="tel" id="phone" name="phone" label="تلفن تماس" />
        </div>

        <div className="mb-4 lg:w-full lg:px-8 ">
          <LabelForm text="توضیحات"/>
          <TextareaForm id="description" name="description" />
        </div>
        
        <ButonForm textButton="ارسال فرم" />
      </form>
    </div>
  );
};

export default ContactForm;
