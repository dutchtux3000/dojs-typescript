/**
 * load a GIF animation.
 *
 * **Note: GIFanim module must be loaded by calling LoadLibrary("gifanim") before using!**
 *
 * @see LoadLibrary()
 *
 * @class
 *
 * @param {string} filename file name of the GIF to load
 */
declare function GIFanim(filename: string): void;
declare class GIFanim {
    /**
     * load a GIF animation.
     *
     * **Note: GIFanim module must be loaded by calling LoadLibrary("gifanim") before using!**
     *
     * @see LoadLibrary()
     *
     * @class
     *
     * @param {string} filename file name of the GIF to load
     */
    constructor(filename: string);
    /**
     * name of gif
     * @member {string}
     */
    filename: any;
    /**
     * width of GIF
     * @member {number}
     */
    width: number;
    /**
     * height of GIF
     * @member {number}
     */
    height: number;
    /**
     * total frames in file
     * @member {number}
     */
    frameCount: number;
    /**
     * duration of animation in milliseconds
     * @member {number}
     */
    duration: number;
    /**
     * maximum frame delay
     * @member {number}
     */
    maxDelay: number;
    /**
     * minimum frame delay
     * @member {number}
     */
    minDelay: number;
    /**
     * Close GIFanim after use
     */
    Close(): void;
    /**
     * get gif anim comment
     * @returns {string} the gif anim comment
     */
    GetComment(): string;
    /**
     * play the next frame of the animation. Frames are rendered consecutive with each call.
     * It is not possible to directly render a specific frame except by using SkipFrame().
     *
     * @param {number} x x position to render the left, upper edge of the animation
     * @param {number} y y position to render the left, upper edge of the animation
     * @returns {number} -1 if this was the last frame, else the delay for the next frame.
     */
    PlayFrame(x: number, y: number): number;
    /**
     * skip the rendering of a frame.
     * @returns {number} -1 if this was the last frame, else the delay for the next frame.
     */
    SkipFrame(): number;
}
//# sourceMappingURL=GifAnim.d.ts.map