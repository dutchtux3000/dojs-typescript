/**
 * Create a artificial neural network.
 *
 * **Note: Neural module must be loaded by calling LoadLibrary("neural") before using!**
 *
 * @see LoadLibrary()
 * @constructor
 * @param {number} inputs size of input layer
 * @param {number} num_hidden number of hidden layers
 * @param {number} hidden size of the hidden layers
 * @param {number} outputs size of output layer
 */ /**
* Create a artificial neural network.
*
* **Note: Neural module must be loaded by calling LoadLibrary("neural") before using!**
*
* @see LoadLibrary()
* @constructor
* @param {string} fname file name of training data previously stored by Save()
* @see Save()
*/
declare function Neural(inputs: any, num_hidden: any, hidden: any, outputs: any): void;
declare class Neural {
    /**
     * Create a artificial neural network.
     *
     * **Note: Neural module must be loaded by calling LoadLibrary("neural") before using!**
     *
     * @see LoadLibrary()
     * @constructor
     * @param {number} inputs size of input layer
     * @param {number} num_hidden number of hidden layers
     * @param {number} hidden size of the hidden layers
     * @param {number} outputs size of output layer
     */ /**
   * Create a artificial neural network.
   *
   * **Note: Neural module must be loaded by calling LoadLibrary("neural") before using!**
   *
   * @see LoadLibrary()
   * @constructor
   * @param {string} fname file name of training data previously stored by Save()
   * @see Save()
   */
    constructor(inputs: any, num_hidden: any, hidden: any, outputs: any);
    /**
     * free ressources of the neural network.
     */
    Close(): void;
    /**
     * Run the network on some input and get a response.
     *
     * @param {number[]|DoubleArray} inp Input data. must contain at least the number of input values as specified when creating the ANN.
     *
     * @returns {number[]} The networks response to the input.
     */
    Run(inp: number[] | DoubleArray): number[];
    /**
     * Train the network with a single dataset.
     *
     * @param {number[]|DoubleArray} inp Input data. Must contain at least the number of input values as specified when creating the ANN.
     * @param {number[]|DoubleArray} outp Expected output data. Must contain at least the number of output values as specified when creating the ANN.
     * @param {number} rate Learning rate (>0).
     */
    Train(inp: number[] | DoubleArray, outp: number[] | DoubleArray, rate: number): void;
    /**
     * Store training data of the network to disk.
     *
     * @param {string} fname The file name.
     */
    Save(fname: string): void;
}
/**
 * Create an empty DoubleArray. DoubleArrays can be used to very fast store a large number of float values.
 * For now it it only available when used with Neural
 *
 * @see Neural
 *
 * @class
 *
 * @param {number[]|string[]|string} data numbers will be used as given.
 */
declare function DoubleArray(data: number[] | string[] | string): void;
declare class DoubleArray {
    /**
     * Create an empty DoubleArray. DoubleArrays can be used to very fast store a large number of float values.
     * For now it it only available when used with Neural
     *
     * @see Neural
     *
     * @class
     *
     * @param {number[]|string[]|string} data numbers will be used as given.
     */
    constructor(data: number[] | string[] | string);
    /**
     * current number of entries in DoubleArray.
     * @member {number}
     */
    length: number;
    /**
     * current allocation size of DoubleArray (internal value).
     * @member {number}
     */
    alloc_size: number;
    /**
     * truncate DoubleArray to zero length.
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
     * append value to DoubleArray.
     * @param {number} val the new value.
     */
    Push(val: number): void;
    /**
     * retrieve and remove the last value in the DoubleArray.
     * @returns {number} the former last value.
     */
    Pop(): number;
    /**
     * retrieve and remove the first value in the DoubleArray.
     * @returns {number} the former first value.
     */
    Shift(): number;
    /**
     * convert DoubleArray to Javascript array.
     * @returns {number[]} the contents of the DoubleArray as Javascript array.
     */
    ToArray(): number[];
    /**
     * append the contents of the Javascript array to the DoubleArray.
     *
     * @param {number[]|string[]} data numbers will be used as given, string arrays will be intepreted as "characters" and only the first char is added to the DoubleArray. Strings will be added char by char.
     */
    Append(data: number[] | string[]): void;
}
//# sourceMappingURL=Neural.d.ts.map