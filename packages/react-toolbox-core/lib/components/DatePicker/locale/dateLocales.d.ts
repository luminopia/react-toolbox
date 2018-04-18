export interface Locale {
    /**
     * Month names.
     */
    months?: string[];
    /**
     * Month short names.
     */
    monthsShort?: string[];
    /**
     * Day names starting from Sunday.
     */
    weekdays?: string[];
    /**
     * Day short names starting from Sunday.
     */
    weekdaysShort?: string[];
    /**
     * Day letters starting from Sunday.
     */
    weekdaysLetter?: string[];
}
export interface Locales {
    /**
     * German.
     */
    de: Locale;
    /**
     * Norwegian.
     */
    no: Locale;
    /**
     * English.
     */
    en: Locale;
    /**
     * Spanish.
     */
    es: Locale;
    /**
     * Afrikaans.
     */
    af: Locale;
    /**
     * Arabic.
     */
    ar: Locale;
    /**
     * Belarusian.
     */
    be: Locale;
    /**
     * Bulgarian.
     */
    bg: Locale;
    /**
     * Bengali - Indian.
     */
    bn: Locale;
    /**
     * Tibetan.
     */
    bo: Locale;
    /**
     * Breton.
     */
    br: Locale;
    /**
     * Bosnian.
     */
    bs: Locale;
    /**
     * Catalan.
     */
    ca: Locale;
    /**
     * Galician.
     */
    gl: Locale;
    /**
     * Basque.
     */
    eu: Locale;
    /**
     * Portuguese.
     */
    pt: Locale;
    /**
     * Italian.
     */
    it: Locale;
    /**
     * French.
     */
    fr: Locale;
    /**
     * Russian.
     */
    ru: Locale;
    /**
     * Ukrainian.
     */
    ua: Locale;
}
export default function getLocaleObject(locale: keyof Locales | Locale): Locale;
export declare const locales: Locales;
