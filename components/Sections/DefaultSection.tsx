import Image from "next/image";
import { FC } from "react";
import { DefaultSectionProps } from "../../lib/DefaultSectionTypes";
import Section from "./Section";

const DefaultSection: FC<DefaultSectionProps> = ({ h1 = "Robigan", p = "I am robigan and this is my web page.", paddingBot = "10vh", paddingTop = "10vh", src = true }) => {
    return (
        <Section paddingBot={paddingBot} paddingTop={paddingTop} extraStyles={{ bottom: { maxHeight: 80 }, top: { maxHeight: 80 } }}>
            {
                (typeof src === "boolean") && src ? <Image src="/Background.png" width="2870" height="1740" alt="" layout="fill" objectFit="cover" className="-z-10" /> : (typeof src === "string") ? <Image src={src} width="2870" height="1740" alt="" layout="fill" objectFit="cover" className="-z-10" /> : <></>
            }
            <div data-sectionpadding="true">
                <h1 className="text-5xl text-center mb-5 font-bold">{h1}</h1>
                <p className="text-2xl text-center font-bold">{p}</p>
            </div>
        </Section>
    );
};

export default DefaultSection;