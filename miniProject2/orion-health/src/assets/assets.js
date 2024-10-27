import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatrician from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatrician
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Meredith Grey',
        image: doc1,
        speciality: 'General physician',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Grey is known for her excellent diagnostic skills and her dedication to her patients. She focuses on preventive care and providing personalized medical solutions.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Miranda Bailey',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '3 Years',
        about: 'Dr. Bailey is a skilled gynecologist and surgeon, known for her thorough approach to patient care and her commitment to advancing women’s health.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Mark Sloan',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '1 Year',
        about: 'Dr. Sloan is recognized for his expertise in skin treatments and cosmetic procedures, bringing a blend of science and aesthetics to his dermatology practice.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Arizona Robbins',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MD',
        experience: '2 Years',
        about: 'Dr. Robbins has a passion for pediatrics and provides compassionate care to children, specializing in both general health and pediatric surgeries.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Derek Shepherd',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Shepherd, a renowned neurologist and neurosurgeon, excels in complex brain surgeries and has a reputation for saving lives in critical situations.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Amelia Shepherd',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Shepherd is a brilliant neurosurgeon who specializes in innovative and high-risk procedures, often taking on cases others would avoid.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Richard Webber',
        image: doc7,
        speciality: 'General physician',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Webber is a respected figure in the medical community, known for his leadership and extensive knowledge in general medicine and patient care.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Addison Montgomery',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '3 Years',
        about: 'Dr. Montgomery is an expert in obstetrics and gynecology, renowned for her ability to handle both complex deliveries and high-risk pregnancies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Jackson Avery',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '1 Year',
        about: 'Dr. Avery combines his dermatology practice with an interest in reconstructive surgery, offering a holistic approach to skin health and cosmetic solutions.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Alex Karev',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MD',
        experience: '2 Years',
        about: 'Dr. Karev is a dedicated pediatrician, passionate about caring for children and specializing in neonatal surgery and intensive care.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Maggie Pierce',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Pierce is an accomplished cardiothoracic and neurosurgeon, known for her precision and ability to solve complex medical cases.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Owen Hunt',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Hunt brings a military background to his neurosurgery practice, applying his trauma expertise to save lives in extreme conditions.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. April Kepner',
        image: doc13,
        speciality: 'General physician',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr. Kepner is known for her thorough and empathetic approach to general medicine, always striving to provide the best care for her patients.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Jo Wilson',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '3 Years',
        about: 'Dr. Wilson is a highly skilled gynecologist, dedicated to improving women’s health and specializing in reproductive medicine and prenatal care.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Lexie Grey',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '1 Year',
        about: 'Dr. Lexie Grey is a bright and talented dermatologist with a deep passion for both cosmetic and clinical skin care treatments.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Seattle'
        }
    },
]