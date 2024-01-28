/**
 * Open a ZIP, for file modes see {@link ZIPFILE}.
 * @class
 * @param {string} filename the name of the file.
 * @param {ZIPFILE} mode READ, WRITE or APPEND.
 * @param {number} [compression] 1..9 to specify compression level.
 */
declare function Zip(filename: string, mode: ZIPFILE, compression?: number): void;
declare class Zip {
    /**
     * Open a ZIP, for file modes see {@link ZIPFILE}.
     * @class
     * @param {string} filename the name of the file.
     * @param {ZIPFILE} mode READ, WRITE or APPEND.
     * @param {number} [compression] 1..9 to specify compression level.
     */
    constructor(filename: string, mode: ZIPFILE, compression?: number);
    /**
     * close ZIP.
     */
    Close(): void;
    /**
     * get number of entries in ZIP.
     *
     * @returns {number} number of entries in this ZIP.
     */
    NumEntries(): number;
    /**
     * get an array with the file entries in the ZIP.
     *
     * @returns {Object[]} an array containing the file entries of the ZIP in the following format:
     * @example
     * [
     *      {name:string, is_directory:bool, size:number, crc32:number},
     *      ...
     * ]
     */
    GetEntries(): any[];
    /**
     * add a file to a ZIP.
     *
     * @param {string} zip_name the full path the file shall have in the ZIP.
     * @param {string} hdd_name the full path to the file to add.
     */
    AddFile(zip_name: string, hdd_name: string): void;
    /**
     * extract a file from a ZIP.
     *
     * @param {string} zip_name the full path of the file in the ZIP.
     * @param {string} hdd_name the full path the extracted file should have on the HDD.
     */
    ExtractFile(zip_name: string, hdd_name: string): void;
    /**
     * get file contents as number array.
     * @param {string} zip_name the full path of the file in the ZIP.
     * @returns {number[]} the content of the file as array of numbers.
     */
    ReadBytes(zip_name: string): number[];
    /**
     * Write a bytes to a file in the ZIP.
     * @param {string} zip_name the full path of the file in the ZIP.
     * @param {number[]} data the data to write as array of numbers (must be integers between 0-255).
     */
    WriteBytes(zip_name: string, data: number[]): void;
    /**
     * get file contents as ByteArray.
     * @param {string} zip_name the full path of the file in the ZIP.
     * @returns {ByteArray} the content of the file as ByteArray.
     */
    ReadInts(zip_name: string): ByteArray;
    /**
    * remove file from ZIP.
    * @param {string} zip_name the full path of the file to remove from ZIP.
    */
    DeleteFile(zip_name: string): void;
    /**
     * Write a bytes to a file in the ZIP.
     * @param {string} zip_name the full path of the file in the ZIP.
     * @param {ByteArray} data the data to write as ByteArray (must be integers between 0-255).
     */
    WriteInts(zip_name: string, data: ByteArray): void;
}
//# sourceMappingURL=Zip.d.ts.map