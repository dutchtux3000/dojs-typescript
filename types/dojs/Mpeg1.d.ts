/**
 * load MPEG1 for video/audio playback.
 * Videos can be converted using ffmpeg, e.g. for converting to MPEG1 with 320 width:
 * "ffmpeg -i infile -filter:v scale=320:-1 -c:v mpeg1video -c:a mp2 -format mpeg outfile"
 *
 * **Note: MPEG1 module must be loaded by calling LoadLibrary("mpeg1") before using!**
 *
 * @see LoadLibrary()
 *
 * @class
 *
 * @param {string} filename file name of the soundfile to load.
 * @param {boolean} [audio] enable audioo playback with true, disable with false (default: false).
 */
declare function MPEG1(filename: string, audio?: boolean): void;
declare class MPEG1 {
    /**
     * load MPEG1 for video/audio playback.
     * Videos can be converted using ffmpeg, e.g. for converting to MPEG1 with 320 width:
     * "ffmpeg -i infile -filter:v scale=320:-1 -c:v mpeg1video -c:a mp2 -format mpeg outfile"
     *
     * **Note: MPEG1 module must be loaded by calling LoadLibrary("mpeg1") before using!**
     *
     * @see LoadLibrary()
     *
     * @class
     *
     * @param {string} filename file name of the soundfile to load.
     * @param {boolean} [audio] enable audioo playback with true, disable with false (default: false).
     */
    constructor(filename: string, audio?: boolean);
    /**
     * name of file
     * @member {string}
     */
    filename: any;
    /**
     * audio sample rate.
     * @member {number}
     */
    samplerate: number;
    /**
     * frame rate.
     * @member {number}
     */
    framerate: number;
    /**
     * video width
     * @member {number}
     */
    width: number;
    /**
     * video height
     * @member {number}
     */
    height: number;
    /**
    * video duration in seconds
    * @member {number}
    */
    duration: number;
    /**
     * Close MPEG1.
     */
    Close(): void;
    /**
     * seek to given time index.
     *
     * @param {number} tidx the index in seconds
     */
    Seek(tidx: number): void;
    /**
     * rewind to the start of the video.
     */
    Rewind(): void;
    /**
     * check if playback has ended.
     *
     * @returns true if the video has ended, else false.
     */
    HasEnded(): void;
    /**
     * must be called periodically (e.g. every Loop()) to render audio/video.
     *
     * @param  {number} x x position of the upper left corner of the video
     * @param  {number} y y position of the upper left corner of the video
     */
    Play(x: number, y: number): void;
    /**
     * current play pos
     *
     * @returns {number} the current video position in seconds
     */
    CurrentTime(): number;
}
//# sourceMappingURL=Mpeg1.d.ts.map