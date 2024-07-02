import { _compileUri } from "./_contact";

export interface Contacts {
    [key: string]: Contact;
}

export interface Contact {
    preferredType?: "uri" | "bitcoin" | "ethereum" | "identifier" | string;
    preferredScheme?: "mailto" | "https" | "http" | "hex" | "tel" | "sms" | "whatsapp" | "telegram" | "instagram" | "twitter" | "facebook" | "linkedin" | "github" | "matrix" | string;
    target: string;
    displayName: string;
}

/**
 * Gets the hex value of the address WITHOUT the initial 0x.
 */
export function getHexAddressValue(contact: Contact): string {
    if (contact.preferredScheme === "hex") return contact.target.substring(2);
    else if (contact.target.startsWith("0x")) return contact.target.substring(2);
    else return contact.target;
}

/**
 * Gets the hex value of the address WITH the initial 0x.
 */
export function getHexAddress(contact: Contact): string {
    if (contact.preferredScheme === "hex") return contact.target;
    else if (contact.target.startsWith("0x")) return contact.target;
    else return "0x" + contact.target;
}

/**
 * Compiles a contact into a web address. Useful if the contact is of type 'uri'.
 */
export function getContactWithUri(contact: Contact): string | undefined {
    if (contact.preferredType === "uri") {
        return _compileUri(contact);
    } else {
        return undefined;
    }
}

export function getContactBlockchainViewerUrl(contact: Contact): string | undefined {
    if (contact.preferredType === "ethereum") {
        return "https://etherscan.io/address/" + getHexAddress(contact);
    } else if (contact.preferredType === "bitcoin") {
        return "https://www.blockchain.com/btc/address/" + getHexAddressValue(contact);
    } else {
        return undefined;
    }
}
