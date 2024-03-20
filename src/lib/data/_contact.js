/**
 * @param {import('./contact').Contact} contact 
 * @returns {string}
 */
export function _compileUri(contact) {
    let prefix = "";
            
    if (contact.preferredScheme === "mailto") prefix = "mailto:";
    else if (contact.preferredScheme === "http") prefix = "http://";
    else if (contact.preferredScheme === "https") prefix = "https://";
    else if (contact.preferredScheme === "tel") prefix = "tel:";
    else if (contact.preferredScheme === "sms") prefix = "sms:";
    else if (contact.preferredScheme === "whatsapp") prefix = "https://wa.me/";
    else if (contact.preferredScheme === "telegram") prefix = "https://t.me/";
    else if (contact.preferredScheme === "instagram") prefix = "https://instagram.com/";
    else if (contact.preferredScheme === "twitter") prefix = "https://twitter.com/";
    else if (contact.preferredScheme === "facebook") prefix = "https://facebook.com/";
    else if (contact.preferredScheme === "linkedin") prefix = "https://linkedin.com/in/";
    else if (contact.preferredScheme === "github") prefix = "https://github.com/";

    return prefix + contact.target;
}