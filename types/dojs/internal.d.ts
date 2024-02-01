/**
 * Load and initialize a native library (DXE). Native libraries must reside in the directory jSH.EXE was started from!
 *
 * @param {string} name the base name of the library (e.g. if the library is called "foo.dxe" on disk you need to call LoadLibrary("foo")).
 */
declare function LoadLibrary(name: string): void;
/**
 * Get a list of loaded native libraries.
 *
 * @returns {string[]} a list of loaded libraries.
 */
declare function GetLoadedLibraries(): string[];
/**
 * Flushes, closes and re-opens the current logfile. This is useful if you want to read the current logfile contents from a runing program.
 */
declare function FlushLog(): void;
/**
 * @param {string} varname the name of the variable
 *
 * @returns {string} the value of the var or NULL if it does not exists.
 */
declare function GetEnv(varname: string): string;
/**
 * IPX network functions.
 *
 * **Note: IPX module must be loaded by calling LoadLibrary("ipx") before using!**
 *
 * @module ipx
 */
/**
 * Open an IPX socket. See {@link IPX} for DEFAULT_SOCKET.
 * @param {*} num the socket number to use.
 *
 */
declare function IpxSocketOpen(num: any): void;
/**
 * Close IPX socket (if any).
 */
declare function IpxSocketClose(): void;
/**
 * Send packet via IPX. Max length 79 byte. Node addresses are arrays of 6 numbers between 0-255. See {@link IPX} for BROADCAST address.
 * @param {string} data data to send.
 * @param {IpxAddress} dest destination address.
 */
declare function IpxSend(data: string, dest: IpxAddress): void;
/**
 * Check for packet in receive buffer.
 * @returns {boolean} true if a packet is available.
 */
declare function IpxCheckPacket(): boolean;
/**
 * Get packet from receive buffer(or NULL).
 * @returns {IpxPacket} a data packet or null if none available.
 */
declare function IpxGetPacket(): IpxPacket;
/**
 * Get the local address.
 * @returns {IpxAddress} an array containing the own address.
 */
declare function IpxGetLocalAddress(): IpxAddress;
/**
 * sound recording functions.
 *
 * @module sndout
 */
/**
 * Get current play position for given voice.
 * @param {number} voc the voice number.
 * @returns {number} the position or -1 if not playing.
 */
declare function VoiceGetPosition(voc: number): number;
/**
 * select sound input source.
 *
 * @param {*} src a value from {@link SOUND}.
 */
declare function SoundInputSource(src: any): void;
/**
 * start sound recording with given parameters.
 *
 * @param {number} rate sample rate.
 * @param {number} bits 8 or 16 bits.
 * @param {boolean} stereo true for stereo recording.
 */
declare function SoundStartInput(rate: number, bits: number, stereo: boolean): void;
/**
 * stop sound recording.
 */
declare function SoundStopInput(): void;
/**
 * get the actuall sound data.
 *
 * @returns {number[]} returns one or two arrays with sound data or null if no data available.
 */
declare function ReadSoundInput(): number[];
/**
* get the actuall sound data as IntArray.
*
* @returns {IntArray|IntArray[]} returns one or two IntArrays with sound data or null if no data available.
*/
declare function ReadSoundInputInts(): IntArray | IntArray[];
/**
 * MIDI music functions. See {@link Midi} on how to load MIDI files.
 *
 * @module midi
 */
/**
 * Check if the file is still playing.
 * @returns {boolean} true if the file is still playing.
 */
declare function MidiIsPlaying(): boolean;
/**
 * Stop playing midi.
 */
declare function MidiStop(): void;
/**
 * Pause playing midi.
 */
declare function MidiPause(): void;
/**
 * Resume playing midi after MidiPause().
 */
declare function MidiResume(): void;
/**
 * Get song position.
 * @returns {number} current song position in seconds.
 */
declare function MidiGetTime(): number;
/**
 * Get song position.
 * @returns {number} current song position in MIDI file.
 */
declare function MidiGetPos(): number;
/**
 * Send MIDI commands to output.
 * @param {number[]} data an array of midi commands.
 */
declare function MidiOut(data: number[]): void;
/**
 * All graphics functions.
 *
 * @module gfx
 */
/**
 * set the current render destination.
 * @param {Bitmap} bm A Bitmap to render on or null to use the screen as rendering destination.
 */
declare function SetRenderBitmap(bm: Bitmap): void;
/**
 * get the width of the drawing area.
 * @returns {number} the width of the drawing area.
 */
declare function SizeX(): number;
/**
 * get the height of the drawing area.
 * @returns {number} the height of the drawing area.
 */
declare function SizeY(): number;
/**
 * Get color depth info.
 * @returns {number} bits per pixel.
 */
declare function GetScreenMode(): number;
/**
 * clear the screen with given color.
 * @param {number} c the color.
 */
declare function ClearScreen(c: number): void;
/**
 * draw a point.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} c color.
 */
declare function Plot(x: number, y: number, c: number): void;
/**
 * draw a line.
 * @param {number} x1 start x coordinate.
 * @param {number} y1 start y coordinate.
 * @param {number} x2 end x coordinate.
 * @param {number} y2 end y coordinate.
 * @param {number} c color.
 */
declare function Line(x1: number, y1: number, x2: number, y2: number, c: number): void;
/**
 * draw a line with given width.
 * @param {number} x1 start x coordinate.
 * @param {number} y1 start y coordinate.
 * @param {number} x2 end x coordinate.
 * @param {number} y2 end y coordinate.
 * @param {number} w line width.
 * @param {number} c color.
 */
declare function CustomLine(x1: number, y1: number, x2: number, y2: number, w: number, c: number): void;
/**
 * draw a box.
 * @param {number} x1 start x coordinate.
 * @param {number} y1 start y coordinate.
 * @param {number} x2 end x coordinate.
 * @param {number} y2 end y coordinate.
 * @param {number} c color.
 */
declare function Box(x1: number, y1: number, x2: number, y2: number, c: number): void;
/**
 * draw a circle.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} r radius.
 * @param {number} c color.
 */
declare function Circle(x: number, y: number, r: number, c: number): void;
/**
 * draw a circle with given width.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} r radius.
 * @param {number} w line width.
 * @param {number} c color.
 */
declare function CustomCircle(x: number, y: number, r: number, w: number, c: number): void;
/**
 * draw a ellipse.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} xr radius.
 * @param {number} yr radius.
 * @param {number} c color.
 */
declare function Ellipse(x: number, y: number, xr: number, yr: number, c: number): void;
/**
 * draw a ellipse with given width.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} xr radius.
 * @param {number} yr radius.
 * @param {number} w line width.
 * @param {number} c color.
 */
declare function CustomEllipse(x: number, y: number, xr: number, yr: number, w: number, c: number): void;
/**
 * Draw a circle arc.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} r radius.
 * @param {number} start start angle with 256 representing a full circle.
 * @param {number} end end angle with 256 representing a full circle.
 * @param {*} style value from {@link ARC}.
 * @param {number} c color.
 * @returns {ArcInfo} detailed info about the drawn arc.
 */
declare function CircleArc(x: number, y: number, r: number, start: number, end: number, style: any, c: number): ArcInfo;
/**
 * Draw a circle arc with given width.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} r radius.
 * @param {number} start start angle with 256 representing a full circle.
 * @param {number} end end angle with 256 representing a full circle.
 * @param {*} style value from {@link ARC}.
 * @param {number} w line width.
 * @param {number} c color.
 * @returns {ArcInfo} detailed info about the drawn arc.
 */
declare function CustomCircleArc(x: number, y: number, r: number, start: number, end: number, style: any, w: number, c: number): ArcInfo;
/**
 * draw a filled box.
 * @param {number} x1 start x coordinate.
 * @param {number} y1 start y coordinate.
 * @param {number} x2 end x coordinate.
 * @param {number} y2 end y coordinate.
 * @param {number} c color.
 */
declare function FilledBox(x1: number, y1: number, x2: number, y2: number, c: number): void;
/**
 * draw a filled circle.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} r radius.
 * @param {number} c color.
 */
declare function FilledCircle(x: number, y: number, r: number, c: number): void;
/**
 * draw a filled ellipse.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} rx radius.
 * @param {number} ry radius.
 * @param {number} c color.
 */
declare function FilledEllipse(x: number, y: number, rx: number, ry: number, c: number): void;
/**
 * do a flood fill.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @param {number} bound bound color.
 * @param {number} c fill color.
 */
declare function FloodFill(x: number, y: number, bound: number, c: number): void;
/**
 * draw a filled polygon.
 * @param {number[][]} points an array of arrays with two coordinates (e.g. [[1, 1], [1, 10], [10, 10], [10, 1]]).
 * @param {number} c color.
 */
declare function FilledPolygon(points: number[][], c: number): void;
/**
 * Draw a text with the default font.
* @param {number} x x coordinate.
* @param {number} y y coordinate.
* @param {*} text the text to display.
* @param {number} fg foreground color.
* @param {number} bg background color.
*/
declare function TextXY(x: number, y: number, text: any, fg: number, bg: number): void;
/**
 * set the character to print for missing codepoints in the current font. Default is "^".
 * @param {string} ch a one character string.
 */
declare function SetMissingCharacter(ch: string): void;
/**
 * converts the UTF8 string to the internal encoding (only useful if internal encoding is not UTF8).
 *
 * @param {string} str string to convert.
 * @returns {string} converted string.
 */
declare function FromUTF8(str: string): string;
/**
 * converts the internal string encoding to UTF8 (only useful if internal encoding is not UTF8).
 *
 * @param {string} str string to convert.
 * @returns {string} converted string.
 */
declare function ToUTF8(str: string): string;
/**
 * Save current screen to BMP file.
 * @param {string} fname filename.
 */
declare function SaveBmpImage(fname: string): void;
/**
 * Save current screen to PCX file.
 * @param {string} fname filename.
 */
declare function SavePcxImage(fname: string): void;
/**
 * Save current screen to TGA file.
 * @param {string} fname filename.
 */
declare function SaveTgaImage(fname: string): void;
/**
 * Save current screen to PNG file.
 *
 * **Note: PNG module must be loaded by calling LoadLibrary("png") before using this function!**
 *
 * @see LoadLibrary()
 *
 * @param {string} fname filename.
 */
declare function SavePngImage(fname: string): void;
/**
 * Save current screen to QOI file.
 *
 * **Note: QOI module must be loaded by calling LoadLibrary("qoi") before using this function!**
 *
 * @see LoadLibrary()
 *
 * @param {string} fname filename.
 */
declare function SaveQoiImage(fname: string): void;
/**
 * Save current screen to WEBP file.
 *
 * **Note: WEBP module must be loaded by calling LoadLibrary("webp") before using this function!**
 *
 * @see LoadLibrary()
 *
 * @param {string} fname filename.
 */
declare function SaveWebpImage(fname: string): void;
/**
 * get color of on-screen pixel.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 * @returns {number} pixel color.
 */
declare function GetPixel(x: number, y: number): number;
/**
 * Set the blend mode for drawing.
 * @param {number} mode one of the blend modes, e.g. BLEND.ALPHA or BLEND.REPLACE.
 * @see BLEND in the color module
 */
declare function TransparencyEnabled(mode: number): void;
/**
 * @module other
 */
/**
 * Set mouse speed.
 * @param {number} x horizontal speed.
 * @param {number} y vertical speed.
 */
declare function MouseSetSpeed(x: number, y: number): void;
/**
 * Limit mouse movement.
 * @param {number} x1 start x coordinate.
 * @param {number} y1 start y coordinate.
 * @param {number} x2 end x coordinate.
 * @param {number} y2 end y coordinate.
 */
declare function MouseSetLimits(x1: number, y1: number, x2: number, y2: number): void;
/**
 * Move mouse cursor.
 * @param {number} x x coordinate.
 * @param {number} y y coordinate.
 */
declare function MouseWarp(x: number, y: number): void;
/**
 * Show hide mouse cursor.
 * @param {boolean} b true or false.
 */
declare function MouseShowCursor(b: boolean): void;
/**
 * Change mode of the mouse cursor.
 * @param {*} mode a mode from {@link MOUSE}.
 */
declare function MouseSetCursorMode(mode: any): void;
/**
 * Write data to JSLOG.TXT logfile.
 * @param {string} s the string to print.
 */
declare function Print(s: string): void;
/**
 * Write data to JSLOG.TXT logfile with a newline.
 * @param {string} s the string to print.
 */
declare function Println(s: string): void;
/**
 * DOjS will exit after the current call to {@link Loop}.
 */
declare function Stop(): void;
/**
 * Sleep for the given number of ms.
 * @param {number} ms time to sleep.
 */
declare function Sleep(ms: number): void;
/**
 * Get ms timestamp.
 * @returns {number} ms time.
 */
declare function MsecTime(): number;
/**
 * check for existence of a file.
 * @param {string} filename name of file to check.
 * @returns {boolean} true if the file exists, else false.
 */
declare function FileExists(filename: string): boolean;
/**
* check for existence of a directory.
* @param {string} dirname name of directory to check.
* @returns {boolean} true if the directory exists, else false.
*/
declare function DirExists(dirname: string): boolean;
/**
* Load the contents of a file into a string. Throws exception if loading fails.
* @param {string} filename name of file to read.
* @returns {string} the contents of the file.
* @throws Throws an error if reading fails.
*/
declare function Read(filename: string): string;
/**
 * Load the contents of a ZIP file entry into a string. Throws exception if loading fails.
 * @param {string} filename name of file to read.
 * @param {string} entryname name of entry in the ZIP file to read.
 * @returns {string} the contents of the file.
 * @throws Throws an error if reading fails.
 */
declare function ReadZIP(filename: string, entryname: string): string;
/**
 * Get directory listing.
 * @param {string} dname name of directory to list.
 * @returns {string[]} array of entry names.
 * @throws Throws an error if listing fails.
 */
declare function List(dname: string): string[];
/**
 * rename file/directory.
 * @param {string} from old name
 * @param {string} to new name
 */
declare function Rename(from: string, to: string): void;
/**
 * remove a directory (must be empty).
 * @param {string} name path/name of the directory.
 */
declare function RmDir(name: string): void;
/**
 * remove a file.
 * @param {string} name path/name of the file.
 */
declare function RmFile(name: string): void;
/**
 * make a directory.
 * @param {string} name path/name of the new directory
 */
declare function MkDir(name: string): void;
/**
 * Get information about a file / directory.
 * @param {string} name name of the file to get info for.
 * @returns {StatInfo} an info object.
 * @throws Throws an error if stat fails.
 */
declare function Stat(name: string): StatInfo;
/**
 * This function determine the current default drive.
 * This is a wrapper for DOS IN21, ah=0Eh.
 *
 * @returns the current default drive (1=A:, 2=B:, etc.).
 */
declare function GetDrive(): void;
/**
 * This function set the current default drive based on drive (1=A:, 2=B:, etc.) and determines the number of available logical drives.
 * This is a wrapper for DOS IN21, ah=19h.
 *
 * @param {number} drive the new default drive.
 *
 * @returns the number of available logical drives.
 */
declare function SetDrive(drive: number): void;
/**
 * Run garbage collector, print statistics to logfile if 'info==true'.
 * @param {boolean} info true to print collection stats to logfile.
 */
declare function Gc(info: boolean): void;
/**
 * Get information system memory.
 * @returns {MemInfo} an info object.
 */
declare function MemoryInfo(): MemInfo;
/**
 * Set maximum frame rate. If {@link Loop} takes longer than '1/rate' seconds then the framerate will not be reached.
 * @param {number} rate max frame rate wanted.
 */
declare function SetFramerate(rate: number): void;
/**
 * Current frame rate.
 * @returns {number} current framerate.
 */
declare function GetFramerate(): number;
/**
 * Change the exit key from ESCAPE to any other keycode from {@link KEY}}.
 * @param {number} key
 */
declare function SetExitKey(key: number): void;
/**
 * set a console message to display at shutdown of DOjS.
 * @param {string} msg the message.
 */
declare function SetExitMessage(msg: string): void;
/**
 * Run a DOS command.
 * @param {string} cmd the command to execute with its parameters.
 * @param {SYSTEM} flags flags indicating which subsystems to shutdown (if any) during execution of cmd.
 * @returns {number} the return code of the command.
 */
declare function System(cmd: string, flags: {
    MOUSE: number;
    SOUND: number;
    JOYSTICK: number;
    KEYBOARD: number;
    TIMER: number; /**
     * write a byte value to a hardware io-port.
     * @param {number} port port address to write to.
     * @param {number} value 8-bit value to write to port.
     */
}): number;
/**
 * write a byte value to a hardware io-port.
 * @param {number} port port address to write to.
 * @param {number} value 8-bit value to write to port.
 */
declare function OutPortByte(port: number, value: number): void;
/**
 * write a word value to a hardware io-port.
 * @param {number} port port address to write to.
 * @param {number} value 16-bit value to write to port.
 */
declare function OutPortWord(port: number, value: number): void;
/**
 * write a long value to a hardware io-port.
 * @param {number} port port address to write to.
 * @param {number} value 32-bit value to write to port.
 */
declare function OutPortLong(port: number, value: number): void;
/**
 * read a byte value from a hardware io-port.
 * @param {number} port port address to read from.
 * @returns {number} 8-bit value read from port.
 */
declare function InPortByte(port: number): number;
/**
 * read a word value from a hardware io-port.
 * @param {number} port port address to read from.
 * @returns {number} 16-bit value read from port.
 */
declare function InPortWord(port: number): number;
/**
 * read a long value from a hardware io-port.
 * @param {number} port port address to read from.
 * @returns {number} 32-bit value read from port.
 */
declare function InPortLong(port: number): number;
/**
 * get available parallel ports.
 * @returns {number[]} list of available parallel ports and their addresses.
 */
declare function GetParallelPorts(): number[];
/**
 * get available serial ports.
 * @returns {number[]} list of available serial ports and their addresses.
 */
declare function GetSerialPorts(): number[];
/**
 * Convert byte array to ASCII string. The string is terminated at the first NULL byte or at array length (whichever comes first).
 *
 * @param {number[]} data array of numbers.
 * @returns {string} a string.
 */
declare function BytesToString(data: number[]): string;
/**
 * Convert ASCII string to byte array.
 *
 * @param {string} str string to convert.
 * @returns {number[]} array of numbers.
 */
declare function StringToBytes(str: string): number[];
/**
 * parse a string into a function. Works like Function() by a source file name can be provided.
 *
 * @param {string} p name of the single parameter.
 * @param {string} s the source of the function.
 * @param {string} [f] an optional filename where the source came from.
 */
declare function NamedFunction(p: string, s: string, f?: string): void;
/** @module color */
/**
 * create RGBA color.
 *
 * @param {number} r red (0-255)
 * @param {number} g green (0-255)
 * @param {number} b blue (0-255)
 * @param {number} [a] alpha (0-255) (optional)
 * @returns {number} a color.
 */
declare function Color(r: number, g: number, b: number, a?: number): number;
/**
 * get red part of color.
 * @param {number} c a color
 * @returns {number} the red part.
 */
declare function GetRed(c: number): number;
/**
 * get green part of color.
 * @param {number} c a color
 * @returns {number} the green part.
 */
declare function GetGreen(c: number): number;
/**
 * get blue part of color.
 * @param {number} c a color
 * @returns {number} the blue part.
 */
declare function GetBlue(c: number): number;
/**
 * get alpha part of color.
 * @param {number} c a color
 * @returns {number} the alpha part.
 */
declare function GetAlpha(c: number): number;
/**
 * **Note: al3d module must be loaded by calling LoadLibrary("al3d") before using!**
 *
 * @module a3d
 */
/**
 * This number (default value = 100.0) controls the behaviour of the z-sorting algorithm. When an edge is very close to another's polygon plane, there is an interval of uncertainty in which you cannot tell which object is visible (which z is smaller). This is due to cumulative numerical errors for edges that have undergone a lot of transformations and interpolations.<br/>
 * The default value means that if the 1/z values (in projected space) differ by only 1/100 (one percent), they are considered to be equal and the x-slopes of the planes are used to find out which plane is getting closer when we move to the right.<br/>
 * Larger values means narrower margins, and increasing the chance of missing true adjacent edges/planes. Smaller values means larger margins, and increasing the chance of mistaking close polygons for adjacent ones. The value of 100 is close to the optimum. However, the optimum shifts slightly with resolution, and may be application-dependent. It is here for you to fine-tune. <br/>
 * @param {number} gap gap value.
 */
declare function SetSceneGap(gap: number): void;
/**
 * Draw 3d polygons using the specified rendering mode. Unlike the regular polygon() function, these routines don't support concave or self-intersecting shapes. The width and height of the texture bitmap must be powers of two, but can be different, eg. a 64x16 texture is fine
 * How the vertex data is used depends on the rendering mode:
 * <br/><br/>
 * The `x' and `y' values specify the position of the vertex in 2d screen coordinates.
 * <br/><br/>
 * The `z' value is only required when doing perspective correct texture mapping, and specifies the depth of the point in 3d world coordinates.
 * <br/><br/>
 * The `u' and `v' coordinates are only required when doing texture mapping, and specify a point on the texture plane to be mapped on to this vertex. The texture plane is an infinite plane with the texture bitmap tiled across it. Each vertex in the polygon has a corresponding vertex on the texture plane, and the image of the resulting polygon in the texture plane will be mapped on to the polygon on the screen.
 * <br/><br/>
 * We refer to pixels in the texture plane as texels. Each texel is a block, not just a point, and whole numbers for u and v refer to the top-left corner of a texel. This has a few implications. If you want to draw a rectangular polygon and map a texture sized 32x32 on to it, you would use the texture coordinates (0,0), (0,32), (32,32) and (32,0), assuming the vertices are specified in anticlockwise order. The texture will then be mapped perfectly on to the polygon. However, note that when we set u=32, the last column of texels seen on the screen is the one at u=31, and the same goes for v. This is because the coordinates refer to the top-left corner of the texels. In effect, texture coordinates at the right and bottom on the texture plane are exclusive.
 * <br/><br/>
 * There is another interesting point here. If you have two polygons side by side sharing two vertices (like the two parts of folded piece of cardboard), and you want to map a texture across them seamlessly, the values of u and v on the vertices at the join will be the same for both polygons. For example, if they are both rectangular, one polygon may use (0,0), (0,32), (32,32) and (32,0), and the other may use (32,0), (32,32), (64,32), (64,0). This would create a seamless join.
 * Of course you can specify fractional numbers for u and v to indicate a point part-way across a texel. In addition, since the texture plane is infinite, you can specify larger values than the size of the texture. This can be used to tile the texture several times across the polygon.
 *
 * @param {POLYTYPE} type one of POLYTYPE.
 * @param {Bitmap} texture texture Bitmap.
 * @param {V3D[]} v an array of vertices.
 */
declare function Polygon3D(type: {
    FLAT: number;
    GCOL: number;
    GRGB: number;
    ATEX: number;
    PTEX: number;
    ATEX_MASK: number;
    PTEX_MASK: number;
    ATEX_LIT: number;
    PTEX_LIT: number;
    ATEX_MASK_LIT: number;
    PTEX_MASK_LIT: number;
    ATEX_TRANS: number;
    PTEX_TRANS: number;
    ATEX_MASK_TRANS: number;
    PTEX_MASK_TRANS: number;
    MAX: number;
    ZBUF: number;
}, texture: Bitmap, v: V3D[]): void;
/**
 * Draw 3d triangles, using vertices.
 *
 * @param {POLYTYPE} type one of POLYTYPE.
 * @param {Bitmap} texture texture Bitmap.
 * @param {V3D} v1 a vertex.
 * @param {V3D} v2 a vertex.
 * @param {V3D} v3 a vertex.
 */
declare function Triangle3D(type: {
    FLAT: number;
    GCOL: number;
    GRGB: number;
    ATEX: number;
    PTEX: number;
    ATEX_MASK: number;
    PTEX_MASK: number;
    ATEX_LIT: number;
    PTEX_LIT: number;
    ATEX_MASK_LIT: number;
    PTEX_MASK_LIT: number;
    ATEX_TRANS: number;
    PTEX_TRANS: number;
    ATEX_MASK_TRANS: number;
    PTEX_MASK_TRANS: number;
    MAX: number;
    ZBUF: number;
}, texture: Bitmap, v1: V3D, v2: V3D, v3: V3D): void;
/**
 * Draw 3d quads using vertex.
 *
 * @param {POLYTYPE} type one of POLYTYPE.
 * @param {Bitmap} texture texture Bitmap.
 * @param {V3D} v1 a vertex.
 * @param {V3D} v2 a vertex.
 * @param {V3D} v3 a vertex.
 * @param {V3D} v4 a vertex.
 */
declare function Quad3D(type: {
    FLAT: number;
    GCOL: number;
    GRGB: number;
    ATEX: number;
    PTEX: number;
    ATEX_MASK: number;
    PTEX_MASK: number;
    ATEX_LIT: number;
    PTEX_LIT: number;
    ATEX_MASK_LIT: number;
    PTEX_MASK_LIT: number;
    ATEX_TRANS: number;
    PTEX_TRANS: number;
    ATEX_MASK_TRANS: number;
    PTEX_MASK_TRANS: number;
    MAX: number;
    ZBUF: number;
}, texture: Bitmap, v1: V3D, v2: V3D, v3: V3D, v4: V3D): void;
/**
 * Clips the polygon given in `v'. The frustum (viewing volume) is defined by -z&lt;x&lt;z, -z&lt;y&lt;z, 0&lt;min_z&lt;z&lt;max_z. If max_z&lt;=min_z, the z&lt;max_z clipping is not done. As you can see, clipping is done in the camera space, with perspective in mind, so this routine should be called after you apply the camera matrix, but before the perspective projection. The routine will correctly interpolate u, v, and c in the vertex structure. However, no provision is made for high/truecolor GCOL.
 *
 * @param {POLYTYPE} type one of POLYTYPE.
 * @param {number} min_z minimum z value.
 * @param {number} max_z maximum z value.
 * @param {V3D[]} v an array of vertices.
 *
 * @returns {V3D[]} an array of vertices.
 */
declare function Clip3D(type: {
    FLAT: number;
    GCOL: number;
    GRGB: number;
    ATEX: number;
    PTEX: number;
    ATEX_MASK: number;
    PTEX_MASK: number;
    ATEX_LIT: number;
    PTEX_LIT: number;
    ATEX_MASK_LIT: number;
    PTEX_MASK_LIT: number;
    ATEX_TRANS: number;
    PTEX_TRANS: number;
    ATEX_MASK_TRANS: number;
    PTEX_MASK_TRANS: number;
    MAX: number;
    ZBUF: number;
}, min_z: number, max_z: number, v: V3D[]): V3D[];
/**
 * Construct X axis rotation matrices. When applied to a point, these matrices will rotate it about the X axis by the specified angle (given in radians).
 *
 * @param {number} r rotation in radians.
 *
 * @returns a {@link Matrix}.
 */
declare function GetXRotateMatrix(r: number): void;
/**
 * Construct Y axis rotation matrices. When applied to a point, these matrices will rotate it about the Y axis by the specified angle (given in radians).
 *
 * @param {number} r rotation in radians.
 *
 * @returns a {@link Matrix}.
 */
declare function GetYRotateMatrix(r: number): void;
/**
 * Construct Z axis rotation matrices. When applied to a point, these matrices will rotate it about the Z axis by the specified angle (given in radians).
 *
 * @param {number} r rotation in radians.
 *
 * @returns a {@link Matrix}.
 */
declare function GetZRotateMatrix(r: number): void;
/**
 * Constructs a transformation matrix which will rotate points around all three axes by the specified amounts (given in radians).
 * The direction of rotation can simply be found out with the right-hand rule: Point the dumb of your right hand towards the origin along the axis of rotation, and the fingers will curl in the positive direction of rotation.
 * E.g. if you rotate around the y axis, and look at the scene from above, a positive angle will rotate in clockwise direction.
 *
 * @param {*} x x value or a vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns a {@link Matrix}.
 */
declare function GetRotationMatrix(x: any, y: number, z: number): void;
/**
 * Constructs a transformation matrix which will rotate points around all three axes by the specified amounts (given in radians), scale the result by the specified amount (pass 1 for no change of scale), and then translate to the requested x, y, z position.
 *
 * @param {number} scale scaling value.
 * @param {number} xrot x-rotation value.
 * @param {number} yrot y-rotation value.
 * @param {number} zrot z-rotation value.
 * @param {number} x x value.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns a {@link Matrix}.
 */
declare function GetTransformationMatrix(scale: number, xrot: number, yrot: number, zrot: number, x: number, y: number, z: number): void;
/**
 * Multiplies two matrices.
 * The resulting matrix will have the same effect as the combination of m1 and m2, ie. when applied to a point p, (p * out) = ((p * m1) * m2).
 * Any number of transformations can be concatenated in this way.
 * Note that matrix multiplication is not commutative, ie. matrix_mul(m1, m2) != matrix_mul(m2, m1).
 *
 * @param {Matrix} m1 first {@link Matrix}.
 * @param {Matrix} m2 second {@link Matrix}.
 *
 * @returns a new {@link Matrix}.
 */
declare function MatrixMul(m1: Matrix, m2: Matrix): void;
/**
 * Finds the Z component of the normal vector to the specified three vertices (which must be part of a convex polygon).
 * This is used mainly in back-face culling. The back-faces of closed polyhedra are never visible to the viewer, therefore they never need to be drawn.
 * This can cull on average half the polygons from a scene.
 * If the normal is negative the polygon can safely be culled. If it is zero, the polygon is perpendicular to the screen.
 * However, this method of culling back-faces must only be used once the X and Y coordinates have been projected into screen space using PerspProject() (or if an orthographic (isometric) projection is being used).
 * Note that this function will fail if the three vertices are co-linear (they lie on the same line) in 3D space.
 *
 * @param {number[]} v1 first vector.
 * @param {number[]} v2 second vector.
 * @param {number[]} v3 third vector.
 *
 * @returns {number} z component.
 */
declare function PolygonZNormal(v1: number[], v2: number[], v3: number[]): number;
/**
 * Multiplies the point (x, y, z) by the transformation matrix m.
 *
 * @param {Matrix} m the matrix
 * @param {*} x x value or vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns {number[]} a new vector.
 */
declare function ApplyMatrix(m: Matrix, x: any, y: number, z: number): number[];
/**
 * Projects the 3d point (x, y, z) into 2d screen space and using the scaling parameters previously set by calling SetProjectionViewport().
 * This function projects from the normalized viewing pyramid, which has a camera at the origin and facing along the positive z axis.
 * The x axis runs left/right, y runs up/down, and z increases with depth into the screen.
 * The camera has a 90 degree field of view, ie. points on the planes x=z and -x=z will map onto the left and right edges of the screen, and the planes y=z and -y=z map to the top and bottom of the screen.
 * If you want a different field of view or camera location, you should transform all your objects with an appropriate viewing matrix, eg. to get the effect of panning the camera 10 degrees to the left, rotate all your objects 10 degrees to the right.
 *
 * @param {*} x x value or vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 */
declare function PerspProject(x: any, y: number, z: number): void;
/**
 * save joystick calibration info to file.
 *
 * @param {string} file the file to save to.
 */
declare function JoystickSaveData(file: string): void;
/**
 * load joystick calibration info from file.
 *
 * @param {string} file the file to load from.
 */
declare function JoystickLoadData(file: string): void;
/**
 * Pass the number of the joystick you want to calibrate as the parameter.
 *
 * @param {number} num joystick index (starting with 0).
 *
 * @returns {string} Returns a text description for the next type of calibration that will be done on the specified joystick, or null if no more calibration is required.
 */
declare function JoystickCalibrateName(num: number): string;
/**
 * Most joysticks need to be calibrated before they can provide full analogue input. This function performs the next operation in the calibration series for the specified stick, assuming that the joystick has been positioned in the manner described by a previous call to calibrate_joystick_name().
 *
 * @param {number} num joystick index (starting with 0).
 */
declare function JoystickCalibrate(num: number): void;
/**
 * The joystick handler is not interrupt driven, so you need to call this function every now and again to update the global position values.
 *
 * @param {number} num joystick index (starting with 0).
 *
 * @returns {JoyInfo} Information about the joystick state.
 */
declare function JoystickPoll(num: number): JoyInfo;
/**
 * init 3dfx glide.
 * the following parameters are used:
 * GR_RESOLUTION_640x480,
 * GR_REFRESH_60Hz,
 * GR_COLORFORMAT_ARGB,
 * GR_ORIGIN_UPPER_LEFT,
 * GR_WINDOW_COORDS
 */
declare function fxInit(): void;
/**
 * shut down the Glide library
 */
declare function fxShutdown(): void;
/**
 * flush the graphics FIFO
 */
declare function fxFlush(): void;
/**
 * Reset grVertexLayout parameter offset to zero, and all parameter modes to GR_PARAM_DISABLE.
 */
declare function fxResetVertexLayout(): void;
/**
 * specify the format of by-vertex arrays
 * @param {GR_PARAM[]} layout list of layout parameters.
 */
declare function fxVertexLayout(layout: {
    XY: number;
    Z: number;
    W: number;
    Q: number;
    EXT: number;
    A: number;
    RGB: number;
    PARGB: number;
    ST0: number;
    ST1: number;
    ST2: number;
    Q0: number;
    Q1: number; /**
    * @property {string} JSBOOT_ZIP path/name of the JSBOOT.ZIP
    */
    Q2: number;
}[]): void;
/**
 * @returns {number} the size of the currently active vertex layout in 'number of entries'.
 */
declare function fxGetVertexSize(): number;
/**
 * force completion of all outstanding graphics commands.
 */
declare function fxFinish(): void;
/**
 * exchange front and back buffers
 * @param {number} interval The number of vertical retraces to wait before swapping the front and back buffers.
 */
declare function fxBufferSwap(interval: number): void;
/**
 * clear the buffers to the specified values
 * @param {number} color The color value used for clearing the draw buffer.
 * @param {number} alpha The alpha value used for clearing the alpha buffer
 * @param {number} depth An unsigned value used for clearing the depth buffer
 */
declare function fxBufferClear(color: number, alpha: number, depth: number): void;
/**
 * set the size and location of the hardware clipping window
 * @param {number} minx The lower x screen coordinate of the clipping window.
 * @param {number} miny The lower y screen coordinate of the clipping window.
 * @param {number} maxx The upper x screen coordinate of the clipping window.
 * @param {number} maxy The upper y screen coordinate of the clipping window.
 */
declare function fxClipWindow(minx: number, miny: number, maxx: number, maxy: number): void;
/**
 * draw a point
 * @param {number[]} v1 a vertex.
 */
declare function fxDrawPoint(v1: number[]): void;
/**
 * draw a one-pixel-wide arbitrarily oriented line
 * @param {number[]} v1 a vertex.
 * @param {number[]} v2 a vertex.
 */
declare function fxDrawLine(v1: number[], v2: number[]): void;
/**
 * draw a triangle
 * @param {number[]} v1 a vertex.
 * @param {number[]} v2 a vertex.
 * @param {number[]} v3 a vertex.
 */
declare function fxDrawTriangle(v1: number[], v2: number[], v3: number[]): void;
/**
 * set the global constant color
 * @param {number} color The new constant color.
 */
declare function fxConstantColorValue(color: number): void;
/**
 * set the cull mode.
 * @param {GR_CULL} mode the noew mode.
 */
declare function fxCullMode(mode: {
    DISABLE: number;
    NEGATIVE: number;
    POSITIVE: number;
}): void;
/**
 * specify the alpha blending function
 * @param {GR_BLEND} rgb_sf rgb source blending factor
 * @param {GR_BLEND} rgb_df rgb destination blending factor
 * @param {GR_BLEND} alpha_sf alpha source blending factor
 * @param {GR_BLEND} alpha_df alpha destination blending factor
 */
declare function fxAlphaBlendFunction(rgb_sf: {
    ZERO: number;
    SRC_ALPHA: number;
    SRC_COLOR: number;
    DST_COLOR: number;
    DST_ALPHA: number;
    ONE: number;
    ONE_MINUS_SRC_ALPHA: number;
    ONE_MINUS_SRC_COLOR: number;
    ONE_MINUS_DST_COLOR: number;
    ONE_MINUS_DST_ALPHA: number;
    RESERVED_8: number;
    RESERVED_9: number;
    RESERVED_A: number;
    RESERVED_B: number;
    RESERVED_C: number;
    RESERVED_D: number;
    RESERVED_E: number;
    ALPHA_SATURATE: number;
    PREFOG_COLOR: number;
}, rgb_df: {
    ZERO: number;
    SRC_ALPHA: number;
    SRC_COLOR: number;
    DST_COLOR: number;
    DST_ALPHA: number;
    ONE: number;
    ONE_MINUS_SRC_ALPHA: number;
    ONE_MINUS_SRC_COLOR: number;
    ONE_MINUS_DST_COLOR: number;
    ONE_MINUS_DST_ALPHA: number;
    RESERVED_8: number;
    RESERVED_9: number;
    RESERVED_A: number;
    RESERVED_B: number;
    RESERVED_C: number;
    RESERVED_D: number;
    RESERVED_E: number;
    ALPHA_SATURATE: number;
    PREFOG_COLOR: number;
}, alpha_sf: {
    ZERO: number;
    SRC_ALPHA: number;
    SRC_COLOR: number;
    DST_COLOR: number;
    DST_ALPHA: number;
    ONE: number;
    ONE_MINUS_SRC_ALPHA: number;
    ONE_MINUS_SRC_COLOR: number;
    ONE_MINUS_DST_COLOR: number;
    ONE_MINUS_DST_ALPHA: number;
    RESERVED_8: number;
    RESERVED_9: number;
    RESERVED_A: number;
    RESERVED_B: number;
    RESERVED_C: number;
    RESERVED_D: number;
    RESERVED_E: number;
    ALPHA_SATURATE: number;
    PREFOG_COLOR: number;
}, alpha_df: {
    ZERO: number;
    SRC_ALPHA: number;
    SRC_COLOR: number;
    DST_COLOR: number;
    DST_ALPHA: number;
    ONE: number;
    ONE_MINUS_SRC_ALPHA: number;
    ONE_MINUS_SRC_COLOR: number;
    ONE_MINUS_DST_COLOR: number;
    ONE_MINUS_DST_ALPHA: number;
    RESERVED_8: number;
    RESERVED_9: number;
    RESERVED_A: number;
    RESERVED_B: number;
    RESERVED_C: number;
    RESERVED_D: number;
    RESERVED_E: number;
    ALPHA_SATURATE: number;
    PREFOG_COLOR: number;
}): void;
/**
 * configure the alpha combine unit.
 * @param {GR_COMBINE_FUNCTION} func function
 * @param {GR_COMBINE_FACTOR} factor scaling factor
 * @param {GR_COMBINE_LOCAL} local local alpha
 * @param {GR_COMBINE_OTHER} other other alpha
 * @param {boolean} invert invert generated alpha.
 */
declare function fxAlphaCombine(func: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    LOCAL_ALPHA: number;
    SCALE_OTHER: number;
    BLEND_OTHER: number;
    SCALE_OTHER_ADD_LOCAL: number;
    SCALE_OTHER_ADD_LOCAL_ALPHA: number;
    SCALE_OTHER_MINUS_LOCAL: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND_LOCAL: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
}, factor: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    OTHER_ALPHA: number;
    LOCAL_ALPHA: number;
    TEXTURE_ALPHA: number;
    TEXTURE_RGB: number;
    DETAIL_FACTOR: number;
    LOD_FRACTION: number;
    ONE: number;
    ONE_MINUS_LOCAL: number;
    ONE_MINUS_OTHER_ALPHA: number;
    ONE_MINUS_LOCAL_ALPHA: number;
    ONE_MINUS_TEXTURE_ALPHA: number;
    ONE_MINUS_DETAIL_FACTOR: number;
    ONE_MINUS_LOD_FRACTION: number;
}, local: {
    ITERATED: number;
    CONSTANT: number;
    NONE: number;
    DEPTH: number;
}, other: {
    ITERATED: number;
    TEXTURE: number;
    CONSTANT: number;
    NONE: number;
}, invert: boolean): void;
/**
 * configure the color combine unit.
 * @param {GR_COMBINE_FUNCTION} func function
 * @param {GR_COMBINE_FACTOR} factor scaling factor
 * @param {GR_COMBINE_LOCAL} local local alpha
 * @param {GR_COMBINE_OTHER} other other alpha
 * @param {boolean} invert invert generated alpha.
 */
declare function fxColorCombine(func: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    LOCAL_ALPHA: number;
    SCALE_OTHER: number;
    BLEND_OTHER: number;
    SCALE_OTHER_ADD_LOCAL: number;
    SCALE_OTHER_ADD_LOCAL_ALPHA: number;
    SCALE_OTHER_MINUS_LOCAL: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND_LOCAL: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
}, factor: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    OTHER_ALPHA: number;
    LOCAL_ALPHA: number;
    TEXTURE_ALPHA: number;
    TEXTURE_RGB: number;
    DETAIL_FACTOR: number;
    LOD_FRACTION: number;
    ONE: number;
    ONE_MINUS_LOCAL: number;
    ONE_MINUS_OTHER_ALPHA: number;
    ONE_MINUS_LOCAL_ALPHA: number;
    ONE_MINUS_TEXTURE_ALPHA: number;
    ONE_MINUS_DETAIL_FACTOR: number;
    ONE_MINUS_LOD_FRACTION: number;
}, local: {
    ITERATED: number;
    CONSTANT: number;
    NONE: number;
    DEPTH: number;
}, other: {
    ITERATED: number;
    TEXTURE: number;
    CONSTANT: number;
    NONE: number;
}, invert: boolean): void;
/**
 * enable/disable writing into the color and alpha buffers
 * @param {number} rgb color mask
 * @param {number} alpha alpha mask
 */
declare function fxColorMask(rgb: number, alpha: number): void;
/**
 * enable/disable writing into the depth buffer
 * @param {boolean} enable enable/disable
 */
declare function fxDepthMask(enable: boolean): void;
/**
 * draw a list of by-vertex vertices
 * @param {GR_VERTEX} mode vertex type
 * @param {number[][]} vertices array of vertices.
 */
declare function fxDrawVertexArray(mode: {
    POINTS: number;
    LINE_STRIP: number;
    LINES: number;
    POLYGON: number;
    TRIANGLE_STRIP: number;
    TRIANGLE_FAN: number;
    TRIANGLES: number;
    TRIANGLE_STRIP_CONTINUE: number;
    TRIANGLE_FAN_CONTINUE: number;
}, vertices: number[][]): void;
/**
 * enable Glide operating modes
 * @param {GR_ENABLE} val one of GR_ENABLE.
 */
declare function fxEnable(val: {
    AA_ORDERED: number;
    ALLOW_MIPMAP_DITHER: number;
    PASSTHRU: number;
    SHAMELESS_PLUG: number;
    VIDEO_SMOOTHING: number;
}): void;
/**
 * enable Glide operating modes
 * @param {GR_ENABLE} val one of GR_ENABLE.
 */
declare function fxDisable(val: {
    AA_ORDERED: number;
    ALLOW_MIPMAP_DITHER: number;
    PASSTHRU: number;
    SHAMELESS_PLUG: number;
    VIDEO_SMOOTHING: number;
}): void;
/**
 * disable all special effects in the graphics subsystem
 */
declare function fxDisableAllEffects(): void;
/**
 * draw an anti-aliased triangle
 * @param {number[]} a a vertex
 * @param {number[]} b a vertex
 * @param {number[]} c a vertex
 * @param {boolean} b1 anti alias AB edge
 * @param {boolean} b2 anti alias BC edge
 * @param {boolean} b3 anti alias CA edge
 */
declare function fxAADrawTriangle(a: number[], b: number[], c: number[], b1: boolean, b2: boolean, b3: boolean): void;
/**
 * set dither mode.
 * @param {GR_DITHER} mode the new dither mode.
 */
declare function fxDitherMode(mode: {
    DISABLE: number;
    D2x2: number;
    D4x4: number;
}): void;
/**
 * enables/disables alpha controlled lighting
 * @param {boolean} enable enable/disable
 */
declare function fxAlphaControlsITRGBLighting(enable: boolean): void;
/**
 * set up gamma correction tables
 * @param {number} r
 * @param {*} g
 * @param {*} b
 */
declare function fxGammaCorrectionRGB(r: number, g: any, b: any): void;
/**
 * establishes a y origin
 * @param {GR_ORIGIN} origin set y origin.
 */
declare function fxOrigin(origin: {
    UPPER_LEFT: number;
    LOWER_LEFT: number;
    ANY: number;
}): void;
/**
 * set the depth buffering mode
 * @param {GR_DEPTHBUFFER} mode the mode
 */
declare function fxDepthBufferMode(mode: {
    DISABLE: number;
    ZBUFFER: number;
    WBUFFER: number;
    ZBUFFER_COMPARE_TO_BIAS: number;
    WBUFFER_COMPARE_TO_BIAS: number;
}): void;
/**
 * specify the depth buffer comparison function
 * @param {GR_CMP} func the new function
 */
declare function fxDepthBufferFunction(func: {
    NEVER: number;
    LESS: number;
    EQUAL: number;
    LEQUAL: number;
    GREATER: number;
    NOTEQUAL: number;
    GEQUAL: number;
    ALWAYS: number;
}): void;
/**
 * set the depth bias level
 * @param {number} level th new level.
 */
declare function fxDepthBiasLevel(level: number): void;
/**
 * specify viewport depth range
 * @param {number} near min range
 * @param {number} far max range
 */
declare function fxDepthRange(near: number, far: number): void;
/**
 * define a viewport
 * @param {number} x The origin of the viewport, relative to the screen origin
 * @param {number} y The origin of the viewport, relative to the screen origin
 * @param {number} width The width and height of the viewport.
 * @param {number} height The width and height of the viewport.
 */
declare function fxViewport(x: number, y: number, width: number, height: number): void;
/**
 * enable/disable per-pixel fog blending operations
 * @param {GR_FOG} mode the new fog mode.
 */
declare function fxFogMode(mode: {
    DISABLE: number;
    WITH_TABLE_ON_FOGCOORD_EXT: number;
    WITH_TABLE_ON_Q: number;
    WITH_TABLE_ON_W: number;
    WITH_ITERATED_Z: number;
    MULT2: number;
    ADD2: number;
}): void;
/**
 * set the global fog color
 * @param {number} color the new fog color
 */
declare function fxFogColorValue(color: number): void;
/**
 * convert a fog table index to a floating point eye-space w value
 * @param {number} i The fog table index, between 0 and GR_FOG_TABLE_SIZE.
 */
declare function fxFogTableIndexToW(i: number): void;
/**
 * download a fog table
 * @param {number[]} table a new table with at least fxGetFogTableEntries() entries
 */
declare function fxFogTable(table: number[]): void;
/**
 * generate an exponential fog table
 * @param {number} density The fog density, typically between 0.0 and 1.0.
 * @returns {number[]} a fog table.
 */
declare function fxFogGenerateExp(density: number): number[];
/**
 * generate an exponential squared fog table
 * @param {*} density The fog density, typically between 0.0 and 1.0.
 * @returns {number[]} a fog table.
 */
declare function fxFogGenerateExp2(density: any): number[];
/**
 * generate a linear fog table
 * @param {number} near The eye-space w coordinate where minimum fog exists.
 * @param {number} far The eye-space w coordinate where maximum fog exists.
 * @returns {number[]} a fog table.
 */
declare function fxFogGenerateLinear(near: number, far: number): number[];
/**
 * enable/disable hardware chroma-keying
 * @param {boolean} mode enable/disable
 */
declare function fxChromakeyMode(mode: boolean): void;
/**
 * set the global chroma-key reference value
 * @param {number} val The new chroma-key reference value.
 */
declare function fxChromakeyValue(val: number): void;
/**
 * specify the alpha test function
 * @param {GR_CMP} func the function
 */
declare function fxAlphaTestFunction(func: {
    NEVER: number;
    LESS: number;
    EQUAL: number;
    LEQUAL: number;
    GREATER: number;
    NOTEQUAL: number;
    GEQUAL: number;
    ALWAYS: number;
}): void;
/**
 * specify the alpha test reference value
 * @param {number} value The new alpha test reference value.
 */
declare function fxAlphaTestReferenceValue(value: number): void;
/**
 * specify the texture minification and magnification filters
 * @param {GR_TMU} tmu the TMU.
 * @param {GR_TEXTUREFILTER} minFilter The minification filter
 * @param {GR_TEXTUREFILTER} magFilter The magnification filter
 */
declare function fxTexFilterMode(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}, minFilter: {
    POINT_SAMPLED: number;
    BILINEAR: number;
}, magFilter: {
    POINT_SAMPLED: number;
    BILINEAR: number;
}): void;
/**
 * set the texture map clamping/wrapping mode
 * @param {GR_TMU} tmu the TMU.
 * @param {GR_TEXTURECLAMP} sMode The new mode for the s direction
 * @param {GR_TEXTURECLAMP} tMode The new mode for the t direction
 */
declare function fxTexClampMode(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}, sMode: {
    WRAP: number;
    CLAMP: number;
    MIRROR_EXT: number;
}, tMode: {
    WRAP: number;
    CLAMP: number;
    MIRROR_EXT: number;
}): void;
/**
 * set the mipmapping mode
 * @param {GR_TMU} tmu the TMU.
 * @param {GR_MIPMAP} mode The new mipmapping mode
 * @param {boolean} lodBlend enables/disables LOD blending
 */
declare function fxTexMipMapMode(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}, mode: {
    DISABLE: number;
    NEAREST: number;
    NEAREST_DITHER: number;
}, lodBlend: boolean): void;
/**
 * set the LOD bias value
 * @param {GR_TMU} tmu the TMU.
 * @param {number} bias The new LOD bias value, a signed floating point value in the range [-8..7.75].
 */
declare function fxTexLodBiasValue(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}, bias: number): void;
/**
 * configure a texture combine unit
 * @param {GR_TMU} tmu the TMU.
 * @param {GR_COMBINE_FUNCTION} rgb_func Specifies the function used in texture color generation
 * @param {GR_COMBINE_FACTOR} rgb_factor Specifies the scaling factor f used in texture color generation
 * @param {GR_COMBINE_FUNCTION} alpha_func Specifies the function used in texture alpha generation
 * @param {GR_COMBINE_FACTOR} alpha_factor Specifies the scaling factor f used in texture alpha generation
 * @param {boolean} rgb_invert Specifies whether the generated texture color should be bitwise inverted as a final step.
 * @param {boolean} alpha_invert Specifies whether the generated texture alpha should be bitwise inverted as a final step.
 */
declare function fxTexCombine(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}, rgb_func: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    LOCAL_ALPHA: number;
    SCALE_OTHER: number;
    BLEND_OTHER: number;
    SCALE_OTHER_ADD_LOCAL: number;
    SCALE_OTHER_ADD_LOCAL_ALPHA: number;
    SCALE_OTHER_MINUS_LOCAL: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND_LOCAL: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
}, rgb_factor: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    OTHER_ALPHA: number;
    LOCAL_ALPHA: number;
    TEXTURE_ALPHA: number;
    TEXTURE_RGB: number;
    DETAIL_FACTOR: number;
    LOD_FRACTION: number;
    ONE: number;
    ONE_MINUS_LOCAL: number;
    ONE_MINUS_OTHER_ALPHA: number;
    ONE_MINUS_LOCAL_ALPHA: number;
    ONE_MINUS_TEXTURE_ALPHA: number;
    ONE_MINUS_DETAIL_FACTOR: number;
    ONE_MINUS_LOD_FRACTION: number;
}, alpha_func: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    LOCAL_ALPHA: number;
    SCALE_OTHER: number;
    BLEND_OTHER: number;
    SCALE_OTHER_ADD_LOCAL: number;
    SCALE_OTHER_ADD_LOCAL_ALPHA: number;
    SCALE_OTHER_MINUS_LOCAL: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND: number;
    SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL: number;
    BLEND_LOCAL: number;
    SCALE_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
}, alpha_factor: {
    ZERO: number;
    NONE: number;
    LOCAL: number;
    OTHER_ALPHA: number;
    LOCAL_ALPHA: number;
    TEXTURE_ALPHA: number;
    TEXTURE_RGB: number;
    DETAIL_FACTOR: number;
    LOD_FRACTION: number;
    ONE: number;
    ONE_MINUS_LOCAL: number;
    ONE_MINUS_OTHER_ALPHA: number;
    ONE_MINUS_LOCAL_ALPHA: number;
    ONE_MINUS_TEXTURE_ALPHA: number;
    ONE_MINUS_DETAIL_FACTOR: number;
    ONE_MINUS_LOD_FRACTION: number;
}, rgb_invert: boolean, alpha_invert: boolean): void;
/**
 * set the detail texturing controls
 * @param {GR_TMU} tmu the TMU.
 * @param {number} lodBias Controls where the blending between the two textures begins. This value is an LOD bias value in the range [–32.. +31].
 * @param {number} detailScale Controls the steepness of the blend. Values are in the range [0..7] are valid. The scale is computed as 2^detailScale.
 * @param {number} detailMax Controls the maximum blending that occurs. Values in the range [0.0..1.0] are valid.
 */
declare function fxTexDetailControl(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}, lodBias: number, detailScale: number, detailMax: number): void;
/**
 * return the texture memory consumed by a texture.
 * @param {GR_LOD} smallLod smallest level of detail
 * @param {GR_LOD} largeLod larges level of detail
 * @param {GR_ASPECT} aspect texture aspect ratio
 * @param {GR_TEXFMT} format texture format
 *
 * @returns {number} number of bytes required
 */
declare function fxTexCalcMemRequired(smallLod: {
    LOG2_256: number;
    LOG2_128: number;
    LOG2_64: number;
    LOG2_32: number;
    LOG2_16: number;
    LOG2_8: number;
    LOG2_4: number;
    LOG2_2: number;
    LOG2_1: number;
}, largeLod: {
    LOG2_256: number;
    LOG2_128: number;
    LOG2_64: number;
    LOG2_32: number;
    LOG2_16: number;
    LOG2_8: number;
    LOG2_4: number;
    LOG2_2: number;
    LOG2_1: number;
}, aspect: {
    LOG2_8x1: number;
    LOG2_4x1: number;
    LOG2_2x1: number;
    LOG2_1x1: number;
    LOG2_1x2: number;
    LOG2_1x4: number;
    LOG2_1x8: number;
}, format: {
    BIT8: number;
    RGB_332: number;
    YIQ_422: number;
    ALPHA_8: number;
    INTENSITY_8: number;
    ALPHA_INTENSITY_44: number;
    P_8: number;
    RSVD0: number;
    P_8_6666: number;
    P_8_6666_EXT: number;
    RSVD1: number;
    BIT16: number;
    ARGB_8332: number;
    AYIQ_8422: number;
    RGB_565: number;
    ARGB_1555: number;
    ARGB_4444: number;
    ALPHA_INTENSITY_88: number;
    AP_88: number;
    RSVD2: number;
    RSVD4: number;
}): number;
/**
 * selects the current color buffer for drawing and clearing
 * @param {GR_BUFFER} buffer Selects the current color buffer. Valid values are GR_BUFFER_FRONTBUFFER and GR_BUFFER_BACKBUFFER.
 */
declare function fxRenderBuffer(buffer: {
    FRONTBUFFER: number;
    BACKBUFFER: number;
    AUXBUFFER: number;
    DEPTHBUFFER: number;
    ALPHABUFFER: number;
    TRIPLEBUFFER: number;
}): void;
/**
 * return the lowest start address for texture downloads
 * @param {GR_TMU} tmu the TMU.
 */
declare function fxTexMinAddress(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}): void;
/**
 * return the highest start address for texture downloads
 * @param {GR_TMU} tmu the TMU.
 */
declare function fxTexMaxAddress(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}): void;
/**
 * select an NCC table
 * @param {GR_TEXTABLE} table NCC table to use for decompressing compressed textures. Valid values are GR_TEXTABLE_NCC0 and GR_TEXTABLE_NCC1.
 */
declare function fxTexNCCTable(table: {
    NCC0: number;
    NCC1: number;
    PALETTE: number;
    PALETTE_6666_EXT: number;
}): void;
/**
 * @returns {number[]} The minimum and maximum allowable z buffer values.
 */
declare function fxGetZDepthMinMax(): number[];
/**
 * @returns {number[]} The minimum and maximum allowable w buffer values.
 */
declare function fxGetWDepthMinMax(): number[];
/**
 * @returns {number} The number of bits of depth (z or w) in the frame buffer.
 */
declare function fxGetBitsDepth(): number;
/**
 * @returns {number} The number of entries in the hardware fog table.
 */
declare function fxGetFogTableEntries(): number;
/**
 * @returns {number} The number of entries in the hardware gamma table. Returns FXFALSE if it is not possible to manipulate gamma (e.g. on a Macronix card, or in windowed mode).
 */
declare function fxGetGammaTableEntries(): number;
/**
 * @returns {number} Returns FXFALSE if idle, FXTRUE if busy.
 */
declare function fxIsBusy(): number;
/**
 * @returns {number} The total number of bytes per Pixelfx chip if a non-UMA configuration is used, else 0. In non-UMA configurations, the total FB memory is GR_MEMORY_FB * GR_NUM_FB.
 */
declare function fxGetMemoryFb(): number;
/**
 * @returns {number} The total number of bytes per Texelfx chip if a non-UMA configuration is used, else FXFALSE. In non-UMA configurations, the total usable texture memory is GR_MEMORY_TMU * GR_NUM_TMU.
 */
declare function fxGetMemoryTmu(): number;
/**
 * @returns {number} The total number of bytes if a UMA configuration, else 0.
 */
declare function fxGetMemoryUma(): number;
/**
 * @returns {number} The width of the largest texture supported on this configuration (e.g. Voodoo Graphics returns 256).
 */
declare function fxGetMaxTextureSize(): number;
/**
 * @returns {number} The logarithm base 2 of the maximum aspect ratio supported for power-of-two, mipmap-able textures (e.g. Voodoo Graphics returns 3).
 */
declare function fxGetMaxTextureAspectRatio(): number;
/**
 * @returns {number} The number of installed boards supported by Glide.
 */
declare function fxGetNumBoards(): number;
/**
 * @returns {number} The number of Pixelfx chips present. This number will always be 1 except for SLI configurations.
 */
declare function fxGetNumFb(): number;
/**
 * @returns {number} The number of Texelfx chips per Pixelfx chip. For integrated chips, the number of TMUs will be returned.
 */
declare function fxGetNumTmu(): number;
/**
 * @returns {number} The number of buffer swaps pending.
 */
declare function fxGetNumPendingBufferSwaps(): number;
/**
 * @returns {number} The revision of the Pixelfx chip(s).
 */
declare function fxGetRevisionFb(): number;
/**
 * @returns {number} The revision of the Texelfx chip(s).
 */
declare function fxGetRevisionTmu(): number;
/**
 * Alpha value to use for direct framebuffer access.
 *
 * @param {number} val the constant alpha value.
 */
declare function fxLfbConstantAlpha(val: number): void;
/**
 * Depth value to use for direct framebuffer access.
 *
 * @param {number} val the constant depth value.
 */
declare function fxLfbConstantDepth(val: number): void;
/**
 * @module tcpip
 */
/**
 * get the local IP address.
 * @returns {IpAddress} the local IP address as an array of numbers
 */
declare function GetLocalIpAddress(): IpAddress;
/**
 * get the netmask.
 * @returns {IpAddress} the netmask as an array of numbers
 */
declare function GetNetworkMask(): IpAddress;
/**
 * get the hostname.
 * @returns {string} the hostname
 */
declare function GetHostname(): string;
/**
 * get the domain name.
 * @returns {string} the domain name
 */
declare function GetDomainname(): string;
/**
 * look up a hostname in DNS.
 * @param {string} host the hostname.
 * @returns {IpAddress} The IP address of the host or an exception.
 */
declare function Resolve(host: string): IpAddress;
/**
 * reverse look up a host in DNS.
 * @param {IpAddress} ip the ip address.
 * @returns {string} The name of the host or an exception.
 */
declare function ResolveIp(ip: IpAddress): string;
/**
 * RawWrite() only works when DOjS was started with "-x"
 * @module rawdisk
 */
/**
 * @returns {number} number of FDD found in system.
 */
declare function GetNumberOfFDD(): number;
/**
 * @returns {number} number of HDD found in system.
 */
declare function GetNumberOfHDD(): number;
/**
 * query the status if a given disk.
 *
 * @param {number} disk 0..GetNumberOfFDD() for FDD (0..GetNumberOfHDD())+RAW_HDD_FLAG for HDD.
 *
 * @returns {number} disk status.
 *
 * @see http://www.ctyme.com/intr/rb-0606.htm
 */
declare function GetDiskStatus(disk: number): number;
/**
 * get number of (LBA) sectors for a drive.
 *
 * @param {number} drive 0..GetNumberOfFDD() for FDD (0..GetNumberOfHDD())+RAW_HDD_FLAG for HDD.
 *
 * @returns {number} number of sectors for that disk.
 */
declare function GetRawSectorSize(drive: number): number;
/**
 * read a disk sector.
 *
 * @param {number} disk 0..GetNumberOfFDD() for FDD (0..GetNumberOfHDD())+RAW_HDD_FLAG for HDD.
 * @param {number} sector number 0..GetRawSectorSize()
 *
 * @returns {number[]} an array with 512 bytes.
 */
declare function RawRead(disk: number, sector: number): number[];
/**
 * write a disk sector.
 * RawWrite() only works when DOjS was started with "-x"
 *
 * @param {number} disk 0..GetNumberOfFDD() for FDD (0..GetNumberOfHDD())+RAW_HDD_FLAG for HDD.
 * @param {number} sector number 0..GetRawSectorSize()
 * @param {number[]} data an array with 512 bytes.
 */
declare function RawWrite(disk: number, sector: number, data: number[]): void;
/**
 * Open a FLIC file. Only one FLIC can be open at a given time. FLIC files can NOT be read from ZIP files.
 *
 * @param {string} fname file name to open.
 */
declare function FlicOpen(fname: string): void;
/**
 * close FLIC file.
 */
declare function FlicClose(): void;
/**
 * Display the next frame from the currently open FLIC.
 *
 * @param {number} x the top left point where the FLIC shall be rendered
 * @param {number} y the top left point where the FLIC shall be rendered
 * @param {boolean} loop true to loop the animation, false to only play it once.
 *
 * @returns {number} if 'loop' is false this function returns '-1' after the last frame was decoded. In all other cases the current frame number is returned.
 */
declare function FlicPlay(x: number, y: number, loop: boolean): number;
//# sourceMappingURL=internal.d.ts.map