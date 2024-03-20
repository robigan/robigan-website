import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { NavBarDesktop, NavBarMobile, NavBarMobileSpacer } from "../../components/NavBar";
import { BsDiscord, BsGithub, BsKeyFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiMatrix } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { BiWallet, BiBitcoin } from "react-icons/bi";
import ContactTile from "../../components/ContactTile";
import ModalTile from "../../components/ModalTile";
import { FC } from "react";
import { Contact, getContactAddressWithUri, getContactBlockchainViewerUrl } from "../../lib/data/contact";

const CryptoWalletsContent: FC<{ wallets: Contact[] }> = ({ wallets }) => (
    <div className="flex-grow flex flex-flow justify-center items-center flex-nowrap">
        {/* <div className="flex-grow">
            <ContactTile title="Bitcoin" href="https://www.blockchain.com/explorer/addresses/btc/bc1qd5vxks668xywjg4w4ere495pycrxjp45wqdkuf">
                <BiBitcoin />
            </ContactTile>
        </div>
        <div className="flex-grow">
            <ContactTile title="Ethereum" href="https://etherscan.io/address/0xb9B089388879F9e82125e7f5C6C73da574A0A6c1">
                <FaEthereum />
            </ContactTile>
        </div> */}
        {
            wallets.map((contact, i) => {
                return (
                    <div key={i} className="flex-grow">
                        <ContactTile title={contact.displayName} href={getContactBlockchainViewerUrl(contact)}>
                            {contact.preferredType === "bitcoin" ? <BiBitcoin /> : <></>}
                            {contact.preferredType === "ethereum" ? <FaEthereum /> : <></>}
                        </ContactTile>
                    </div>
                )
            })
        }
    </div>
);

const ContactPage = ({ discord, email, github, matrix, openpgp, wallets }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
        <Head>
            <title>Contact</title>
            <meta name="description" content="Robigan's contacts and how to contact him" />
        </Head>

        <div className="h-screen w-screen flex flex-col justify-between">

            {/* Top title */}
            <div className="text-center my-8 select-none">
                <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10">WHERE YOU CAN <span className="text-primary">FIND ME</span></div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[18vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">CONTACT</div>
            </div>

            <div className="flex items-start w-full h-full">

                {/* Different links */}
                <div className="container h-full flex-auto mx-auto flex flex-row justify-between items-start flex-wrap text-center">
                    <ContactTile title={discord.displayName} href={getContactAddressWithUri(discord)}>
                        <BsDiscord />
                    </ContactTile>

                    <ContactTile title={email.displayName} href={getContactAddressWithUri(email)} blankTarget={false} overwriteBlankTargetVisuals={true}>
                        <MdEmail />
                    </ContactTile>

                    <ContactTile title={github.displayName} href={getContactAddressWithUri(github)}>
                        <BsGithub />
                    </ContactTile>

                    <ContactTile title={matrix.displayName} href={getContactAddressWithUri(matrix)}>
                        <SiMatrix />
                    </ContactTile>

                    <ModalTile title="Crypto Wallets" modalContent={<CryptoWalletsContent wallets={wallets} />}>
                        <BiWallet />
                    </ModalTile>

                    <ContactTile title={openpgp.displayName} href={getContactAddressWithUri(openpgp)}>
                        <BsKeyFill />
                    </ContactTile>
                    <div className="basis-full lg:hidden h-16" />
                </div>

                <NavBarMobileSpacer />
            </div>

            <NavBarMobile pathname="/contact" />
        </div>

        <NavBarDesktop pathname="/contact" />
    </>
);

export const getStaticProps: GetStaticProps<{
    discord: Contact,
    email: Contact,
    github: Contact,
    matrix: Contact,
    wallets: Contact[],
    openpgp: Contact
}> = async () => {
    const { default: contactsImport } = await import("../../../public/contacts.json");
    const contacts = contactsImport.contacts;

    return {
        props: {
            discord: contacts.discord,
            email: contacts.email,
            github: contacts.github,
            matrix: contacts.matrix,
            wallets: Object.values(contacts).filter((contact: Contact) => contact.preferredType === "bitcoin" || contact.preferredType === "ethereum"),
            openpgp: contacts.openpgp
        }
    }
}

export default ContactPage;