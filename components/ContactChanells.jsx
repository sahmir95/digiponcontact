import ContactTitle from "./ContactTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactChanells = () => {
    return (
        <div className="mt-5 lg:w-full">
            <ContactTitle ContactTitle="راه های ارتباطی" />
          <div className="mt-5">
          <div className="mx-5 flex mb-5">
            <FontAwesomeIcon icon={faPhone} className="w-5 text-purple-800 " />
             <div className="flex flex-col mr-4 ">
              <p>تلفن پشتیبانی:</p>
              <p className="text-sm text-gray-600">۰۲۱۲۸۴۲۷۱۱۴</p> 
             </div>
            </div>
           <div className="mx-5 flex mb-5">
           <FontAwesomeIcon icon={faEnvelope} className="w-5 text-purple-800"/>
            <div className="flex flex-col mr-4">
              <p>ایمیل:</p>
               <p className="text-sm text-gray-600">support@digipon.ir</p>
             </div>
           </div>

           <div className="mx-5 flex mb-5"> 
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 text-purple-800"/>
            <div className="flex flex-col mr-4 ">
              <p >دفتر مرکزی:</p>
              <p className="text-sm text-gray-600">شهر: تهران، محله: نعمت آباد، خیابان مهرآور، خیابان شهید حسین غفوری، پلاک: 0، سهیل، بلوک A3 ورودی 4، طبقه: 4، واحد: 420،</p>
             </div></div>
          </div>
        </div>
    );
};

export default ContactChanells;
