/**
 * Load a WAV-file.
 * @class
 * @param {string} filename
 */
declare function Sample(filename: string): void;
declare class Sample {
    /**
     * Load a WAV-file.
     * @class
     * @param {string} filename
     */
    constructor(filename: string);
    /**
     * Name of the WAV.
     * @member {string}
     */
    filename: any;
    /**
     * Sound length.
     * @member {number}
     */
    length: number;
    /**
     * Sound frequency.
     * @member {number}
     */
    frequency: number;
    /**
     * Sound resolution.
     * @member {number}
     */
    bits: number;
    /**
     * mono/stereo indicator.
     * @member {boolean}
     */
    stereo: boolean;
    /**
     * Play the WAV.
     * @param {number} volume between 0-255.
     * @param {number} panning between (left) 0-255 (right).
     * @param {boolean} loop true := sample will loop, false := sample will only be played once.
     * @returns {number} used voice number or null if not played.
     */
    Play(volume: number, panning: number, loop: boolean): number;
    /**
     * Stop playing.
     */
    Stop(): void;
    /**
     * Get sample data.
     * @param {number} idx index to return.
     * @returns {number} The sample value at that position. The sample data are always in unsigned format.
     */
    Get(idx: number): number;
}
//# sourceMappingURL=Sample.d.ts.map