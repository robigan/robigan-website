import Head from "next/head";
import { NavBarDesktop, NavBarMobile, NavBarMobileSpacer } from "../../components/NavBar";
import { BsDiscord, BsGithub, BsKeyFill, BsReddit } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiMatrix } from "react-icons/si";
import { FaSteam, FaEthereum } from "react-icons/fa";
import { BiWallet, BiBitcoin } from "react-icons/bi";
import ContactTile from "../../components/ContactTile";
import ModalTile from "../../components/ModalTile";
import { FC } from "react";

const CryptoWalletsContent: FC = () => (
    <div className="flex-grow flex flex-flow justify-center items-center flex-nowrap">
        <div className="flex-grow">
            <ContactTile title="Bitcoin" href="https://www.blockchain.com/explorer/addresses/btc/bc1qd5vxks668xywjg4w4ere495pycrxjp45wqdkuf">
                <BiBitcoin />
            </ContactTile>
        </div>
        <div className="flex-grow">
            <ContactTile title="Ethereum" href="https://etherscan.io/address/0xb9B089388879F9e82125e7f5C6C73da574A0A6c1">
                <FaEthereum />
            </ContactTile>
        </div>
    </div>
);

const About = () => (
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
                    <ContactTile title="Discord" href="https://discord.com/users/315526915828219906">
                        <BsDiscord />
                    </ContactTile>

                    <ContactTile title="Email" href="mailto:robigan@robigan.com" blankTarget={false} overwriteBlankTargetVisuals={true}>
                        <MdEmail />
                    </ContactTile>

                    <ContactTile title="GitHub" href="https://github.com/robigan">
                        <BsGithub />
                    </ContactTile>

                    <ContactTile title="Reddit" href="https://reddit.com/u/robigan">
                        <BsReddit />
                    </ContactTile>

                    <ContactTile title="Matrix" href="https://matrix.to/#/@robigan:matrix.org">
                        <SiMatrix />
                    </ContactTile>

                    <ContactTile title="Steam" href="https://steamcommunity.com/id/robigan">
                        <FaSteam />
                    </ContactTile>

                    <ModalTile title="Crypto Wallets" modalContent={<CryptoWalletsContent />}>
                        <BiWallet />
                    </ModalTile>

                    <ContactTile title="OpenPGP Key" href="https://keys.openpgp.org/search?q=robigan%40robigan.com">
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

export default About;