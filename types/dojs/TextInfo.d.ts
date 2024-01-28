/**
 * create new texture from 3df file or a Bitmap.
 * @class
 *
 * @param {(string|Bitmap)} src 3df file to load as texture or Bitmap to convert to texture
 */
declare function TexInfo(src: (string | Bitmap)): void;
declare class TexInfo {
    /**
     * create new texture from 3df file or a Bitmap.
     * @class
     *
     * @param {(string|Bitmap)} src 3df file to load as texture or Bitmap to convert to texture
     */
    constructor(src: (string | Bitmap));
    /**
     * filename
     * @member {string}
     */
    filename: any;
    /**
     * large LOD
     * @member {number}
     */
    largeLod: number;
    /**
     * small LOD
     * @member {number}
     */
    smallLod: number;
    /**
     * aspect ratio
     * @member {number}
     */
    aspectRatio: number;
    /**
     * texture format
     * @member {number}
     */
    format: number;
    /**
     * table type
     * @member {number}
     */
    tableType: number;
    /**
     * size of texture
     * @member {number}
     */
    textureSize: number;
    /**
     * texture mem address (if downloaded)
     * @member {number}
     */
    address: number;
    /**
     * TMU (if downloaded)
     * @member {number}
     */
    tmu: number;
    /**
     * download the MIP map to texture memory.
     * @param {GR_TMU} tmu the TMU unit to download to.
     * @param {number} address destination memory address in texture memory.
     * @param {GR_MIPMAPLEVELMASK} evenOdd one of GR_MIPMAPLEVELMASK.
     */
    DownloadMipMap(tmu: GR_TMU, address: number, evenOdd: GR_MIPMAPLEVELMASK): void;
    /**
     * mark the texture as 'not downloaded' again.
     */
    MarkUnused(): void;
    /**
     * specify this TexInfo as the current texture source for rendering.
     * @param {GR_MIPMAPLEVELMASK} evenOdd one of GR_MIPMAPLEVELMASK.
     */
    Source(evenOdd: GR_MIPMAPLEVELMASK): void;
    /**
     * return the texture memory consumed by a texture
     * @param {GR_MIPMAPLEVELMASK} evenOdd one of GR_MIPMAPLEVELMASK.
     * @returns {number} size of texture in bytes.
     */
    MemRequired(evenOdd: GR_MIPMAPLEVELMASK): number;
}
//# sourceMappingURL=TextInfo.d.ts.map