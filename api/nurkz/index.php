<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>

<div style="display:block" id="nurkz">
<?php
/*
    if (isset($_GET['start']) && isset($_GET['end'])) {
    $start = $_GET['start'];
    $end = $_GET['end'];
}else{
    $start = 1;
    $end = 1;
}
*/
    # there are 322 pages in super.kg
    for ($x = 1; $x <= 10; $x++) {
        echo file_get_contents('http://music.nur.kz/new?page=' . $x);
    }
    ?>
</div>
<script>
    function capitalize(str) {
        strVal = '';
        str = str.toLowerCase();
        str = str.split(' ');
        for (var chr = 0; chr < str.length; chr++) {
            strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length);
            if (chr!=str.length-1){ strVal += ' ' }
        }
        return strVal
    }
    $(document).ready(function() {
        function listSongs() {
            arr = [];
            item = $('.listenSongItem');
            $(item).each(function( index ) {
                obj = {};
                obj.index = index;
                obj.url = $(this).find("li").attr("data-mp3");
                console.log("title", index,$(this).find("a").attr("title"))
                checkTitle  = $(this).find("a").attr("title");
                console.log("...", checkTitle.indexOf("..."))
                if (checkTitle.indexOf("—") >= 0 && checkTitle.indexOf("...") == -1) {
                    title  = checkTitle.split("—");
                    // deleting space end of string
                    artistsAll = title[0].slice(0, title[0].length-1);
                    artist = artistsAll.split("&");
                    console.log("artist",artist);
                    var artistArr = [];

                    if (artist.length > 1){
                        artistArr[0] = artist[0].slice(0, artist[0].length-1);
                        for (var i=1; i < artist.length; i++) {
                            // deleting extra space in string
                            var tempArtist = artist[i].slice(1,artist[i].length);
                            artistArr[i] = capitalize(tempArtist);
                        }
                    } else {
                        var tempArtist = '';
                        if (artist[0].charAt(artist[0].length-1) == " "){
                            tempArtist = artist[0].slice(0,artist[0].length-1)
                        } else if (artist[0].charAt(0) == " "){
                            tempArtist = artist[0].slice(1,artist[0].length)
                        } else {
                            tempArtist = artist[0];
                        }
                        artistArr[0] = tempArtist;
                    }

                    obj.artist = artistArr;

                    var tempSong = title[1];
                    // deleting beginning space if exist
                    if (tempSong[0]==" ") {
                        tempSong = tempSong.slice(1,tempSong.length);
                    }

                    // deleting ".", "?", "!"
                    var newStr = '';
                    function cleanTxt(str) {


                        for (var i=0;i<str.length; i++) {


                            // deleting (sample text)
                            if (str.indexOf("(") > -1) {
                                str = str.split("(")[0];
                            }
                            if (str.indexOf("[") > -1) {
                                str = str.split("[")[0];
                            }

                            if (str.indexOf("/") > -1) {
                                str = str.split("/")[0];
                            }

                            // deleting end space if exist
                            if (str[str.length-1]==" ") {
                                str = str.slice(0,str.length-1);
                            }

                            // deleting beginning space if exist
                            if (str[0]==" ") {
                                str = str.slice(1,str.length);
                            }

                            if (str[i]=="-") {
                                str = str.substr(0, i) + ' ' + str.substr(i + 1);
                            }

                            if (str[i]=="." || str[i]=="#" || str[i]=="!" || str[i]=="?" || str[i]=="_" || str[i]=="," || str[i]=="," || str[i]+str[i+1]=="  " || str[i]=="/" || str[i]=="&" || str[i]=="-" | str[i]=="_" || str[i]==")" || (!isNaN(str[i]) && str[i]!=" ")) {
                                str = str.substring(0, i) + str.substring(i+1);
                            }
                        }
                        if (str[0]==" " || str[str.length-1]==" " || str.indexOf(".") > -1 || str.indexOf("!") > -1 || str.indexOf("?") > -1 || str.indexOf(",") > -1 || str.indexOf("-") > -1 || str.indexOf("_") > -1)  {
                            return cleanTxt(str);
                        }

                        if(/\d/.test(str) || str.indexOf("  ") > -1) {
                            cleanTxt(str);
                        }  else {
                            newStr = str;
                        }
                    }
                    cleanTxt(tempSong);
                    tempSong = newStr;

                    tempSong = capitalize(tempSong);

                    // check if song exist in array
                    var checkExist = arr.filter(function (item) {
                        return item.song == tempSong;
                    });

                    obj.index = index;
                    obj.song = tempSong;

                    if (!checkExist.length && tempSong.length < 30 && tempSong.length > 2){
                        arr.push(obj);
                    }

                }


            });
             var jsonObject = new Object();
             jsonObject.title = "Nur Kz New MP3";
             jsonObject.length = arr.length;
             jsonObject.list = arr;
             $("#nurkz").html("");
            console.log("aaa",jsonObject);
             $.ajax
             ({
             type: "POST",
             dataType : 'json',
             url: 'result.php',
             data: { data: JSON.stringify(jsonObject) },
             async: false,
             success: function () {window.location.href = 'result.json';
             },
             failure: function() {alert("Error!");}
             });
        }
        setTimeout(listSongs, 5000)

    })

</script>