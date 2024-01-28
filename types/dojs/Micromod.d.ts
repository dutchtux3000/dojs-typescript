/**
 * Micromod MOD player plugin.
 *
 * **Note: Micromod module must be loaded by calling LoadLibrary("micromod") before using!**
 *
 * @see LoadLibrary()
 *
 * @module micromod
 */
/**
 * Load a MOD file and initialize Micromod.
 *
 * @param {String} filename the file name of the module.
 * @param {number} [samplerate] samplerate, default is 22kHz
 * @param {number} [buffersize] decoding buffer size, default is 4KiB.
*/
declare function MicromodInit(filename: string, samplerate?: number, buffersize?: number): void;
/**
 * unload the current MOD. this needs to be called before another module can be loaded.
 */
declare function MicromodDeInit(): void;
/**
 * rewind to the start of the current MOD.
 */
declare function MicromodRewind(): void;
/**
 * must be called periodically (e.g. every Loop()) to update the playback buffer.
 */
declare function MicromodPlay(): void;
//# sourceMappingURL=Micromod.d.ts.map