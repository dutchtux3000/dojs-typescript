/**
 * load RAW sound file (signed 16 bit, stereo, interleaved) for playback. This was just a test module for vorbis and mpeg1 sound output but I decided to keep it.
 *
 * **Note: Rawplay module must be loaded by calling LoadLibrary("rawplay") before using!**
 *
 * @see LoadLibrary()
 *
 * @class
 *
 * @param {string} filename file name of the soundfile to load.
 * @param {number} samplerate sample rate in Hz.
 * @param {number} [buffersize] playback buffer size, default is 4KiB.
 */
declare function Rawplay(filename: string, samplerate: number, buffersize?: number): void;
declare class Rawplay {
    /**
     * load RAW sound file (signed 16 bit, stereo, interleaved) for playback. This was just a test module for vorbis and mpeg1 sound output but I decided to keep it.
     *
     * **Note: Rawplay module must be loaded by calling LoadLibrary("rawplay") before using!**
     *
     * @see LoadLibrary()
     *
     * @class
     *
     * @param {string} filename file name of the soundfile to load.
     * @param {number} samplerate sample rate in Hz.
     * @param {number} [buffersize] playback buffer size, default is 4KiB.
     */
    constructor(filename: string, samplerate: number, buffersize?: number);
    /**
     * name of file
     * @member {string}
     */
    filename: any;
    /**
     * sample rate.
     * @member {number}
     */
    samplerate: number;
    /**
     * playback buffer size
     * @member {number}
     */
    buffersize: number;
    /**
    * length of the file in samples (file size / 2 channels / 16 bit)
    * @member {number}
    */
    length: number;
    /**
     * Close sample after use
     */
    Close(): void;
    /**
     * rewind to the start of the sample.
     */
    Rewind(): void;
    /**
     * current play pos
     * @returns {number} the last used sample index
     */
    CurrentSample(): number;
    /**
     * must be called periodically (e.g. every Loop()) to update the playback buffer
     * @param  {boolean} left true to play left channel
     * @param  {boolean} right true to play right channel
     */
    Play(left: boolean, right: boolean): void;
    /**
     * move audio to specified sample index.
     *
     * @param {number} idx new play index
     */
    Seek(idx: number): void;
}
//# sourceMappingURL=Rawplay.d.ts.map