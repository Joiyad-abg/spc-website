import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion"
import Heading from "../Heading/Heading";
 
const Faq = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="px-4 md:px-40">
    <Heading title="Frequently Asked Questions"/>
    <motion.div
    initial={{ opacity: 0, y:100 }}
    transition={{ ease: "easeOut", duration: 2 }}
    whileInView={{opacity:1, y:0}}
    className="m-auto pb-8 md:pb-16 flex flex-col gap-4">
    <Fragment>
      <Accordion className="text-white border-slate-500 border px-2 md:px-4 py-1 cursor-pointer rounded-lg" open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader className="text-black">What are your store hours?</AccordionHeader>
        <AccordionBody>
        Our store is open Monday through Sunday from 8:00 AM to 8:00 PM.
        </AccordionBody>
      </Accordion>
      <Accordion className="text-white border-slate-500 border px-2 md:px-4 py-1 cursor-pointer rounded-lg" open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader className="text-black">Where are you located?</AccordionHeader>
        <AccordionBody>
        We are located at BDS circle, Sujangarh, Rajasthan. You can find a map and directions on our contact page.
        </AccordionBody>
      </Accordion>
      <Accordion className="text-white border-slate-500 border px-2 md:px-4 py-1 cursor-pointer rounded-lg" open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader className="text-black">What types of pets do you cater to?</AccordionHeader>
        <AccordionBody>
        We cater to a wide variety of pets including dogs, cats, birds, fish, and small animals.
        </AccordionBody>
      </Accordion>
      <Accordion className="text-white border-slate-500 border px-1 md:px-4 py-1 cursor-pointer rounded-lg" open={open === 4} onClick={() => handleOpen(4)}>
        <AccordionHeader className="text-black">What brands of pet food do you carry?</AccordionHeader>
        <AccordionBody>
        We carry a wide range of high-quality pet food brands including Drools, Royal Canin, Pedigree and many more.
        </AccordionBody>
      </Accordion>
    </Fragment>
    </motion.div>
    </div>
  );
}
export default Faq;
