/**
 * Latin replacements. Note that accents are not included here, as they are handled by
 * calling normalize("NFKD") and removing non alpha numeric characters.
 */
export class LatinReplacements {
  /**
   * The latin replacements singleton.
   */
  public static Value: Map<string, string[]> = new Map<string, string[]>([
    ['a', ['ᶏ', 'ⱥ', 'ɑ', 'ᴀ', 'ɐ', 'ɒ']],
    ['aa', ['å', 'ꜳ']],
    ['ae', ['ä', 'æ', 'ᴁ', 'ᴭ', 'ᵆ', 'ǽ', 'ǣ', 'ᴂ']],
    ['ao', ['ꜵ']],
    ['au', ['ꜷ']],
    ['av', ['ꜹ', 'ꜻ']],
    ['ay', ['ꜽ']],
    ['b', ['ƀ', 'ɓ', 'ƃ', 'ᵬ', 'ᶀ', 'ʙ']],
    ['c', ['ȼ', 'ƈ', 'ɕ', 'ᴄ', 'ꜿ', 'ↄ']],
    ['d', ['đ', 'ð', 'ɖ', 'ɗ', 'ƌ', 'ᵭ', 'ᶁ', 'ᶑ', 'ȡ', 'ᴅ', 'ꝺ']],
    ['db', ['ȸ']],
    ['e', ['ᶒ', 'ɇ', 'ⱸ', 'ᴇ', 'ə', 'ǝ', 'ɛ']],
    ['eo', ['ᴔ']],
    ['f', ['ƒ', 'ᵮ', 'ᶂ', 'ꜰ', 'ꝼ']],
    ['g', ['ǥ', 'ɠ', 'ᶃ', 'ɢ', 'ȝ', 'ŋ', 'ꞡ', 'ᵹ', 'ꝿ']],
    ['h', ['ħ', 'ⱨ', 'ɦ', 'ʜ', '̃', 'ɧ', 'ⱶ', 'ɥ']],
    ['hv', ['ƕ']],
    ['i', ['ɨ', 'ᵻ', 'ᶖ', 'ı', 'ɪ', 'ɩ']],
    ['j', ['ɉ', 'ȷ', 'ʝ', 'ɟ', 'ʄ', 'ᴊ']],
    ['k', ['ƙ', 'ⱪ', 'ᶄ', 'ꝁ', 'ᴋ', 'ꝃ', 'ꝅ', 'ꞣ']],
    ['l', ['ł', 'ƚ', 'ⱡ', 'ɫ', 'ɬ', 'ᶅ', 'ɭ', 'ȴ', 'ʟ', 'ꝉ', 'ꞁ', 'ꝇ']],
    ['m', ['ᵯ', 'ᶆ', 'ɱ', 'ᴍ', 'ɯ']],
    ['n', ['ɲ', 'ƞ', 'ᵰ', 'ᶇ', 'ɳ', 'ȵ', 'ɴ', 'ꞑ', 'ꞥ']],
    ['o', ['ø', 'ǿ', 'ɵ', 'ɔ', 'ⱺ', 'ᴏ', 'ꝋ', 'ꝍ']],
    ['oe', ['ö', 'œ']],
    ['oi', ['ƣ']],
    ['oo', ['ꝏ']],
    ['ou', ['ȣ']],
    ['p', ['ᵽ', 'ƥ', 'ᵱ', 'ᶈ', 'ᴘ', 'ƿ', 'ꝑ', 'ꝓ', 'ꝕ']],
    ['q', ['ɋ', 'ʠ', 'ꝗ', 'ꝙ']],
    ['qp', ['ȹ']],
    ['r', ['ɍ', 'ɽ', 'ꝛ', 'ᵲ', 'ᶉ', 'ɼ', 'ɾ', 'ᵳ', 'ʀ', 'ɹ', 'ʁ', 'ꞧ', 'ꞃ']],
    ['s', ['ᵴ', 'ᶊ', 'ʂ', 'ȿ', 'ꜱ', 'ʃ', 'ꞩ', 'ꞅ', 'ſ']],
    ['ss', ['ß']],
    ['t', ['ŧ', 'ⱦ', 'ƭ', 'ʈ', 'ᵵ', 'ƫ', 'ȶ', 'ᴛ', 'ꞇ']],
    ['th', ['þ']],
    ['tz', ['ꜩ']],
    ['u', ['ʉ', 'ʊ', 'ᵾ', 'ᴜ', 'ᶙ']],
    ['ue', ['ü', 'ᵫ']],
    ['v', ['ʋ', 'ᶌ', 'ⱱ', 'ⱴ', 'ᴠ', 'ʌ', 'ꝟ']],
    ['vy', ['ꝡ']],
    ['w', ['ⱳ', 'ᴡ', 'ʍ']],
    ['x', ['ᶍ']],
    ['y', ['ɏ', 'ƴ', 'ʏ', 'ỿ']],
    ['z', ['ƶ', 'ȥ', 'ⱬ', 'ᵶ', 'ᶎ', 'ʐ', 'ʑ', 'ɀ', 'ᴢ', 'ʒ', 'ƹ', 'ꝣ']]
  ]);
}
