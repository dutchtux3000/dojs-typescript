/**
 * Open a file, for file modes see {@link FILE}. Files can only either be read or written, never both. Writing to a closed file throws an exception.
 * @class
 *
 * @param {string} filename the name of the file.
 * @param {FILE} mode READ, WRITE or APPEND.
 */
declare function File(filename: string, mode: {
    READ: string;
    WRITE: string;
    APPEND: string;
}): void;
declare class File {
    /**
     * Open a file, for file modes see {@link FILE}. Files can only either be read or written, never both. Writing to a closed file throws an exception.
     * @class
     *
     * @param {string} filename the name of the file.
     * @param {FILE} mode READ, WRITE or APPEND.
     */
    constructor(filename: string, mode: {
        READ: string;
        WRITE: string;
        APPEND: string;
    });
    /**
     * Name of the file.
     * @member {string}
     */
    filename: any;
    /**
     * file open mode
     * @member {FILE}
     */
    mode: any;
    /**
     * Close the file.
     */
    Close(): void;
    /**
     * get file size.
     * @returns {number} the size of the file in bytes.
     */
    GetSize(): number;
    /**
     * Write a string to a file.
     * @param {string} txt the string to write.
     */
    WriteString(txt: string): void;
    /**
     * Read a line of text from file. The maximum line length is 4096 byte.
     * @returns {string} the next line or null for EOF.
     */
    ReadLine(): string;
    /**
     * Write a NEWLINE terminated string to a file.
     * @param {string} txt the string to write.
     */
    WriteLine(txt: string): void;
    /**
     * Read a single byte from file and return it as number.
     * @returns {number} the byte as a number or null for EOF.
     */
    ReadByte(): number;
    /**
     * Write a single byte to a file.
     * @param {number} ch the byte to write.
     */
    WriteByte(ch: number): void;
    /**
     * get file (remaining) contents as number array.
     * @param {number} [num] max number of bytes to return.
     * @returns {number[]} the (remaining) contents of the file as array of numbers.
     */
    ReadBytes(num?: number): number[];
    /**
     * Write a bytes to a file.
     * @param {number[]} data the data to write as array of numbers (must be integers between 0-255).
     * @param {number} [num] max number of bytes to write.
     */
    WriteBytes(data: number[], num?: number): void;
    /**
     * get file (remaining) contents as number ByteArray.
     * @param {number} [num] max number of bytes to return.
     * @returns {ByteArray} the (remaining) contents of the file as ByteArray.
     */
    ReadInts(num?: number): ByteArray;
    /**
     * Write a bytes to a file.
     * @param {ByteArray} data the data to write as ByteArray (must be integers between 0-255).
     * @param {number} [num] max number of bytes to write.
     */
    WriteInts(data: ByteArray, num?: number): void;
}
//# sourceMappingURL=File.d.ts.map