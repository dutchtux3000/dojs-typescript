/**
 * load OggVorbis for sound playback.
 *
 * **Note: OggVorbis module must be loaded by calling LoadLibrary("vorbis") before using!**
 *
 * @see LoadLibrary()
 *
 * @class
 *
 * @param {string} filename file name of the soundfile to load.
 * @param {number} [buffersize] playback buffer size, default is 16KiB.
 */
declare function Ogg(filename: string, buffersize?: number): void;
declare class Ogg {
    /**
     * load OggVorbis for sound playback.
     *
     * **Note: OggVorbis module must be loaded by calling LoadLibrary("vorbis") before using!**
     *
     * @see LoadLibrary()
     *
     * @class
     *
     * @param {string} filename file name of the soundfile to load.
     * @param {number} [buffersize] playback buffer size, default is 16KiB.
     */
    constructor(filename: string, buffersize?: number);
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
     * max frame size
     * @member {number}
     */
    maxframesize: number;
    /**
     * playback buffer size
     * @member {number}
     */
    buffersize: number;
    /**
     * vendor field
     * @member {string}
     */
    vendor: any;
    /**
     * ogg vorbis comments
     * @member {string[]}
     */
    comments: any[];
    /**
     * length of the ogg in samples
     * @member {number}
     */
    numsamples: number;
    /**
     * length of the ogg in seconds
     * @member {number}
     */
    duration: number;
    /**
     * Close Ogg after use.
     */
    Close(): void;
    /**
     * rewind to the start of the Ogg.
     */
    Rewind(): void;
    /**
     * current play pos
     * @returns {number} the current sample index.
     */
    CurrentSample(): number;
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
//# sourceMappingURL=Vorbis.d.ts.map