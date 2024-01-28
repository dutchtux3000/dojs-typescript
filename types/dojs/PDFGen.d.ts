/**
 * render a PDF.
 *
 * **Note: PDFGen module must be loaded by calling LoadLibrary("pdfgen") before using!**
 *
 * @see LoadLibrary()
 *
 * @class
 *
 * @param {number} width page width.
 * @param {number} height page height.
 */
declare function PDFGen(width: number, height: number): void;
declare class PDFGen {
    /**
     * render a PDF.
     *
     * **Note: PDFGen module must be loaded by calling LoadLibrary("pdfgen") before using!**
     *
     * @see LoadLibrary()
     *
     * @class
     *
     * @param {number} width page width.
     * @param {number} height page height.
     */
    constructor(width: number, height: number);
    /**
     * page width
     * @member {number}
     */
    width: number;
    /**
     * page height
     * @member {number}
     */
    height: number;
    /**
     * Save the given pdf document to the given FILE output
     * @param {string} filename Name of the file to store the PDF into
     */
    Save(filename: string): void;
    /**
     * Add a new page to the given pdf
     */
    AppendPage(): void;
    /**
     * Sets the font to use for text objects. Default value is Times-Roman if
     * this function is not called.
     * Note: The font selection should be done before text is output,
     * and will remain until pdf_set_font is called again.
     * @param {string} font New font to use. This must be one of the standard PDF fonts
     */
    SetFont(font: string): void;
    /**
     *
     * @param {number} x1 X offset of start of line
     * @param {number} y1 Y offset of start of line
     * @param {number} x2 X offset of end of line
     * @param {number} y2 Y offset of end of line
     * @param {number} width Width of the line
     * @param {Color} col Colour to draw the line
     */
    AddLine(x1: number, y1: number, x2: number, y2: number, width: number, col: typeof Color): void;
    /**
     *
     * @param {number} x X offset of the center of the circle
     * @param {number} y Y offset of the center of the circle
     * @param {number} r Radius of the circle
     * @param {number} width Width of the circle outline stroke
     * @param {Color} col Colour to draw the circle outline stroke
     * @param {Color} fill_col Colour to fill the circle
     */
    AddCircle(x: number, y: number, r: number, width: number, col: typeof Color, fill_col: typeof Color): void;
    /**
     *
     * @param {number} x X offset of the center of the ellipse
     * @param {number} y Y offset of the center of the ellipse
     * @param {number} xr Radius of the ellipse in the X axis
     * @param {number} yr Radius of the ellipse in the Y axis
     * @param {number} width Width of the ellipse outline stroke
     * @param {Color} col Colour to draw the ellipse outline stroke
     * @param {Color} fill_col Colour to fill the ellipse
     */
    AddEllipse(x: number, y: number, xr: number, yr: number, width: number, col: typeof Color, fill_col: typeof Color): void;
    /**
     * Add an outline rectangle to the document
     * @param {number} x X offset to start rectangle at
     * @param {number} y Y offset to start rectangle at
     * @param {number} w Width of rectangle
     * @param {number} h Height of rectangle
     * @param {number} width Width of rectangle border
     * @param {Color} col Colour to draw the rectangle
     */
    AddRectangle(x: number, y: number, w: number, h: number, width: number, col: typeof Color): void;
    /**
     * Add a filled rectangle to the document
     * @param {number} x X offset to start rectangle at
     * @param {number} y Y offset to start rectangle at
     * @param {number} w Width of rectangle
     * @param {number} h Height of rectangle
     * @param {number} width Width of rectangle border
     * @param {Color} col Colour to draw the rectangle
     */
    AddFilledRectangle(x: number, y: number, w: number, h: number, width: number, col: typeof Color): void;
    /**
     * Add a text string to the document
     * @param {string} txt String to display
     * @param {number} size Point size of the font
     * @param {number} x X location to put it in
     * @param {number} y Y location to put it in
     * @param {Color} col Colour to draw the text
     */
    AddText(txt: string, size: number, x: number, y: number, col: typeof Color): void;
    /**
     * Add a text string to the document, making it wrap if it is too
     * long
     * @param {string} txt String to display
     * @param {number} size Point size of the font
     * @param {number} x X location to put it in
     * @param {number} y Y location to put it in
     * @param {Color} col Colour to draw the text
     * @param {number} wwidth Width at which to wrap the text
     * @param {number} align Text alignment (see PDF_ALIGN_xxx)
     * @returns {number} the final height of the wrapped text here
     */
    AddTextWrap(txt: string, size: number, x: number, y: number, col: typeof Color, wwidth: number, align: number): number;
    /**
     * Add an image file as an image to the document.
     * Support image formats: JPEG, PNG, BMP & PPM
     * @param {number} x X offset to put BMP at
     * @param {number} y Y offset to put BMP at
     * @param {number} w Displayed width of image
     * @param {number} h Displayed height of image
     * @param {string} fname Filename of image file to display
     */
    AddImageFile(x: number, y: number, w: number, h: number, fname: string): void;
    /**
     * Adjust the width/height of current page
     * @param {number} w Width of the page in points
     * @param {number} h Height of the page in points
     */
    PageSetSize(w: number, h: number): void;
    /**
     * Calculate the width of a given string in the current font
     * @param {string} font Name of the font to get the width of.
     * @param {string} txt Text to determine width of
     * @param {number} size Size of the text, in points
     * @returns {number} text width
     */
    GetFontTextWidth(font: string, txt: string, size: number): number;
    /**
     *
     * @param {number} parent ID of a previously created bookmark that is the parent of this one. PDF_TOPLEVEL_BOOKMARK if this should be a top-level bookmark.
     * @param {string} txt String to associate with the bookmark
     * @returns {number}
     */
    AddBookmark(parent: number, txt: string): number;
    /**
     * Add a quadratic bezier curve to the document
     * @param {number} x1 X offset of the initial point of the curve
     * @param {number} y1 Y offset of the initial point of the curve
     * @param {number} x2 X offset of the final point of the curve
     * @param {number} y2 Y offset of the final point of the curve
     * @param {number} xq X offset of the control point of the curve
     * @param {number} yq Y offset of the control point of the curve
     * @param {number} width Width of the curve
     * @param {Color} col Colour to draw the curve
     */
    AddQuadraticBezier(x1: number, y1: number, x2: number, y2: number, xq: number, yq: number, width: number, col: typeof Color): void;
    /**
     * Add a cubic bezier curve to the document
     * @param {number} x1 X offset of the initial point of the curve
     * @param {number} y1 Y offset of the initial point of the curve
     * @param {number} x2 X offset of the final point of the curve
     * @param {number} y2 Y offset of the final point of the curve
     * @param {number} xq1 X offset of the first control point of the curve
     * @param {number} yq1 Y offset of the first control point of the curve
     * @param {number} xq2 X offset of the second control of the curve
     * @param {number} yq2 Y offset of the second control of the curve
     * @param {number} width Width of the curve
     * @param {Color} col Colour to draw the curve
     */
    AddCubicBezier(x1: number, y1: number, x2: number, y2: number, xq1: number, yq1: number, xq2: number, yq2: number, width: number, col: typeof Color): void;
    /**
     * Add a barcode to the document
     * @param {number} type PDF_BARCODE_128A or PDF_BARCODE_39
     * @param {number} x X offset to put barcode at
     * @param {number} y Y offset to put barcode at
     * @param {number} w Width of barcode
     * @param {number} h Height of barcode
     * @param {string} txt Barcode contents
     * @param {Color} col Colour to draw barcode
     */
    AddBarcode(type: number, x: number, y: number, w: number, h: number, txt: string, col: typeof Color): void;
    /**
     * Add a Bitmap as an image to the document
     * @param {number} x X offset to put BMP at
     * @param {number} y Y offset to put BMP at
     * @param {number} w Displayed width of image
     * @param {number} h Displayed height of image
     * @param {Bitmap} bm Bitmap to add.
     */
    AddRgb(x: number, y: number, w: number, h: number, bm: Bitmap): void;
    /**
     * Add an outline polygon to the document
     * @param {number[][]} points an array of 2-number arrays with the points of the polygon (e.g. [[10,10], [20,20], [30,30]]).
     * @param {number} width Width of polygon border
     * @param {Color} col Colour to draw the polygon
     */
    AddPolygon(points: number[][], width: number, col: typeof Color): void;
    /**
     * Add a filled polygon to the document
     * @param {number[][]} points an array of 2-number arrays with the points of the polygon (e.g. [[10,10], [20,20], [30,30]]).
     * @param {number} width Width of polygon border
     * @param {Color} col Colour to draw the polygon
     */
    AddFilledPolygon(points: number[][], width: number, col: typeof Color): void;
    /**
     * Add a custom path to the document.<BR/>
     * <BR/>
     * Each entry in the ops array must consist of an array with 7 values. Unused values have to be 0.<BR/>
     * value 1: op Operation command. Possible operators are: m = move to, l = line to, c = cubic bezier curve with two control points, v = cubic bezier curve with one control point fixed at first point, y = cubic bezier curve with one control point fixed at second point, h = close path<BR/>
     * value 2: X offset of the first point. Used with: m, l, c, v, y<BR/>
     * value 3: Y offset of the first point. Used with: m, l, c, v, y<BR/>
     * value 4: X offset of the second point. Used with: c, v, y<BR/>
     * value 5: Y offset of the second point. Used with: c, v, y<BR/>
     * value 6: X offset of the third point. Used with: c<BR/>
     * value 7: Y offset of the third point. Used with: c<BR/>
     * <BR/>
     * @param {number[][]} ops an array of 7 - value arrays with the ops of the path.
     * @param {number} width Width of polygon border
     * @param {Color} col Colour to draw the polygon
     * @param {Color} fill_col Colour to fill the path
     */
    AddCustomPath(ops: number[][], width: number, col: typeof Color, fill_col: typeof Color): void;
}
//# sourceMappingURL=PDFGen.d.ts.map