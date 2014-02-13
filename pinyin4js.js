/*******************************************************************************
 * Pinyin4JS - Translator of Chinese characters to Pinyin for Internet
 * Copyright 2014 xiuhuwang.com
 *
 * @author xiuhuwang <xiuhuwang@gmail.com>
 * @website http://www.xiuhuwang.com/
 * @version 0.0.7 (2014-02-13)
 *******************************************************************************/
var pinyin4js =
{

    /**
     * 把汉字转换为Unicode字符，初始版本使用了escape()函数，后续修改
     * @param str
     * @returns {string}
     * @constructor
     */
    ToUnicode: function (str) {
        return escape(str).replace(/%/g, "\\").toUpperCase();
    },

    UnUnicode: function (str) {
        return unescape(str.replace(/\\/g, "%"));
    },

    copyingTxt: function (str) {
        document.getElementById(str).select();
        document.execCommand("Copy");
    },

    /**
     * 去除汉字Unicode编码的前两位"\u"
     * @param str
     * @returns {string}
     * @constructor
     */
    ToUnicodeWithoutTitle: function (str) {
		alert(1);
        var unicodeArray = this.ToUnicode(str)//.split("\\u"); //取消自动分组
        var unicodeWithoutTitleArray = new Array();
        var i = 0;
        while (i < unicodeArray.length) {
            unicodeWithoutTitleArray.push(unicodeArray.substring(i + 2, i + 6));
            i += 6;
        }
        return unicodeWithoutTitleArray.toString();
    },

    /**
     *根据传入的汉字的Unicode编码数组，查找拼音
     * @param Array
     * @constructor
     */
    ToPinYin: function (array) {
        var pinyinArray = new Array();
        for (var index in array) {
            pinyinArray.push(this.findPinyinByUnicode(array[index]));
        }
        return pinyinArray;

    },

    /**
     * 根据Unicode查找拼音，由于多音字的存在，返回数组
     * @param str
     * @returns {*|unicodeToPinyinJson.pinyin}
     */
    findPinyinByUnicode: function (str) {
        
        for (var unicodeToPinyinObject in unicodeToPinyinJson) {
            if (str == unicodeToPinyinObject.unicode) {
                return unicodeToPinyinObject.pinyin;
            }
        }
    }

}
