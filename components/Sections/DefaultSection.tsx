import Image from "next/image";
import { FC } from "react";
import { DefaultSectionProps } from "../../lib/DefaultSectionTypes";
import Section from "./Section";
import image from "../../public/Background.png";

const DefaultSection: FC<DefaultSectionProps> = ({ h1 = "Robigan", p = "I am robigan and this is my web page.", paddingBot = "10vh", paddingTop = "10vh", src = true }) => {
    return (
        <Section paddingBot={paddingBot} paddingTop={paddingTop} extraStyles={{ bottom: { maxHeight: 80 }, top: { maxHeight: 80 } }}>
            {
                (typeof src === "boolean") && src ? <Image src={image} alt="" layout="fill" objectFit="cover" className="-z-10 select-none" placeholder="blur"/> : (typeof src === "string") ? <Image src={src} alt="" layout="fill" objectFit="cover" className="-z-10 select-none" /> : <></>
            }
            <div data-sectionpadding="true">
                <h1 className="text-5xl text-center mb-5">{h1}</h1>
                <p className="text-2xl text-center">{p}</p>
            </div>
        </Section>
    );
};

export default DefaultSection;