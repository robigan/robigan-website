export interface Contacts {
    [key: string]: {
        preferredType?: "uri" | "bitcoin" | "ethereum" | "identifier" | string;
        preferredScheme?: "mailto" | "https" | "http" | "hex" | "bitcoin" | "ethereum" | "tel" | "sms" | "whatsapp" | "telegram" | "instagram" | "twitter" | "facebook" | "linkedin" | "github" | string;
        target: string;
    };
}
