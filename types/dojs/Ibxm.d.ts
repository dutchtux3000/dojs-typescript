/**
 * load MOD, S3M or XM module for sound playback.
 *
 * **Note: IBXM module must be loaded by calling LoadLibrary("ibxm") before using!**
 *
 * @see LoadLibrary()
 *
 * @class
 *
 * @param {string} filename file name of the soundfile to load.
 * @param {number} [buffersize] playback buffer size, default is 16KiB.
 */
declare function IBXM(filename: string, samplerate: any): void;
declare class IBXM {
    /**
     * load MOD, S3M or XM module for sound playback.
     *
     * **Note: IBXM module must be loaded by calling LoadLibrary("ibxm") before using!**
     *
     * @see LoadLibrary()
     *
     * @class
     *
     * @param {string} filename file name of the soundfile to load.
     * @param {number} [buffersize] playback buffer size, default is 16KiB.
     */
    constructor(filename: string, samplerate: any);
    /**
     * name of file
     * @member {string}
     */
    filename: any;
    /**
     * number of channels.
     * @member {number}
     */
    channels: number;
    /**
     * sample rate.
     * @member {number}
     */
    samplerate: number;
    /**
     * number of instruments
     * @member {number}
     */
    instruments: number;
    /**
     * number of patterns
     * @member {number}
     */
    patterns: number;
    /**
     * MOD file duration
     * @member {number}
     */
    duration: number;
    /**
     * Close MOD after use.
     */
    Close(): void;
    /**
     * rewind to the start of the MOD.
     */
    Rewind(): void;
    /**
     * must be called periodically (e.g. every Loop()) to update the playback buffer.
     */
    Play(): void;
    /**
     * move audio to specified sample index.
     *
     * @param {number} idx new play index
     */
    Seek(idx: number): void;
}
//# sourceMappingURL=Ibxm.d.ts.map