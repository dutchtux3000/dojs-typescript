/**
 * Create an empty IntArray. IntArrays can be used to very fast store a large number of integer values.
 * Note: IntArrays are no longer used for IO. Fast File/ZIP/Socket is now provided by ByteArray.
 * @see ByteArray
 * @class
 *
 * @param {number[]|string[]|string} data numbers will be used as given, string arrays will be intepreted as "characters" and only the first char is added to the IntArray. Strings will be added char by char.
 */
declare function IntArray(data: number[] | string[] | string): void;
declare class IntArray {
    /**
     * Create an empty IntArray. IntArrays can be used to very fast store a large number of integer values.
     * Note: IntArrays are no longer used for IO. Fast File/ZIP/Socket is now provided by ByteArray.
     * @see ByteArray
     * @class
     *
     * @param {number[]|string[]|string} data numbers will be used as given, string arrays will be intepreted as "characters" and only the first char is added to the IntArray. Strings will be added char by char.
     */
    constructor(data: number[] | string[] | string);
    /**
     * current number of entries in IntArray.
     * @member {number}
     */
    length: number;
    /**
     * current allocation size of IntArray (internal value).
     * @member {number}
     */
    alloc_size: number;
    /**
     * truncate IntArray to zero length.
     * Note: this does not free any memory, it just declares the length of the array as 0.
     */
    Clear(): void;
    /**
     * get value from specific index.
     * @param {number} idx the indext to retrieve.
     * @returns {number} the store value.
     */
    Get(idx: number): number;
    /**
     * replace value at the given index.
     * @param {number} idx the indext to change.
     * @param {number} val the new value.
     */
    Set(idx: number, val: number): void;
    /**
     * append value to IntArray.
     * @param {number} val the new value.
     */
    Push(val: number): void;
    /**
     * retrieve and remove the last value in the IntArray.
     * @returns {number} the former last value.
     */
    Pop(): number;
    /**
     * retrieve and remove the first value in the IntArray.
     * @returns {number} the former first value.
     */
    Shift(): number;
    /**
     * append the contents of the Javascript array to the IntArray.
     *
     * @param {number[]|string[]} data numbers will be used as given, string arrays will be intepreted as "characters" and only the first char is added to the IntArray. Strings will be added char by char.
     */
    Append(data: number[] | string[]): void;
    ToString(): void;
    ToArray(): void;
}
//# sourceMappingURL=IntArray.d.ts.map