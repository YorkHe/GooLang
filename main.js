/**
 *
 * Created by 宇 on 2016/8/10.
 */


$(function(){
    var language = "简体中文";

    function getLanguage(language){
        var dict = {
            "简体中文" : "lang_zh-CN",
            "繁體中文" : "lang_zh-TW",
            "日本語" : "lang_ja",
            "English": "lang_en",
            "Français": "lang_fr"
        };

        if (dict[language] != undefined)
            return dict[language];
        else
            return dict["简体中文"];
    }

    $(".dropdown-menu a").click(function(){
        console.log(this.text);
        $("#language").text(this.text);
        language = this.text;
    })

    $("#btn-search").click(function(){
        var search_text = $("#search_content").val();
        window.open("https://www.google.com/webhp#lr="+getLanguage(language) + "&q=" + search_text);
    })
});

