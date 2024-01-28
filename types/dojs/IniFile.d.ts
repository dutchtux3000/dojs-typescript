/**
 * Open an INI file.
 * @class
 *
 * @param {string} filename the name of the file.
 */
declare function IniFile(filename: string): void;
declare class IniFile {
    /**
     * Open an INI file.
     * @class
     *
     * @param {string} filename the name of the file.
     */
    constructor(filename: string);
    /**
     * Name of the file.
     * @member {string}
     */
    filename: any;
    /**
     * get a key from a section of the INI.
     *
     * @param {string} [section] the section to search for the key, can be omitted.
     * @param {string} key the key to search.
     *
     * @returns {string} the value if found or null.
     */
    Get(section: string, key: string): string;
}
//# sourceMappingURL=IniFile.d.ts.map