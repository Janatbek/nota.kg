<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>

<div style="display:block" id="nurkz">
    <?php


    $url = "http://music.nur.kz/artists_kz";
    $start = 1;
    $end = 200;

    # there are 322 pages in super.kg
    for ($x = $start; $x <= $end; $x++) {
        echo file_get_contents($url . '?page=' . $x);
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
        /*function listSongs() {
            arr = [];
            item = $('.listenSongItem');
            $(item).each(function( index ) {
                obj = {};
                obj.url = $(this).find("li").attr("data-mp3");
                console.log("title", index,$(this).find("a").attr("title"))
                checkTitle  = $(this).find("a").attr("title");

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

                    var params = {};

                    if (location.search) {
                        var parts = location.search.substring(1).split('&');

                        for (var i = 0; i < parts.length; i++) {
                            var nv = parts[i].split('=');
                            if (!nv[0]) continue;
                            params[nv[0]] = nv[1] || true;
                        }
                    }
                    var genres = [];

                    if (params.genre1) {genres.push(params.genre1);}
                    if (params.genre2) {genres.push(params.genre2);}
                    if (params.genre3) {genres.push(params.genre3);}
                    if (params.genre4) {genres.push(params.genre4);}
                    if (params.genre5) {genres.push(params.genre5);}
                    if (params.genre6) {genres.push(params.genre6);}
                    if (params.genre7) {genres.push(params.genre7);}
                    if (params.genre8) {genres.push(params.genre8);}
                    if (params.genre9) {genres.push(params.genre9);}

                    obj.genres = genres;

                    var altName = [];

                    if (params.altName1) {altName.push(params.altName1);}
                    if (params.altName2) {altName.push(params.altName2);}
                    if (params.altName3) {altName.push(params.altName3);}
                    if (params.altName4) {altName.push(params.altName4);}
                    if (params.altName5) {altName.push(params.altName5);}
                    if (params.altName6) {altName.push(params.altName6);}
                    if (params.altName7) {altName.push(params.altName7);}
                    if (params.altName8) {altName.push(params.altName8);}
                    if (params.altName9) {altName.push(params.altName9);}

                    for (var i=0; i<altName.length; i++) {
                        altName[i] = altName[i].replace("%20", " ")
                    }

                    obj.altName = altName;

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
        setTimeout(listSongs, 3000)*/

        function listSongs (){
            var artistArr = document.getElementsByClassName("arhiveArtistItem");
            var arr = [];
            $(artistArr).each(function( index ) {
                var obj = {};
                obj.index = index;
                var url = $(this).find("a").attr("href");
                url = url.replace("http://music.nur.kz/artist-", "http://music.nur.kz/artist-music-");
                obj.name = $(this).find(".arhiveArtistItemTitle")[0].innerText;
                obj.songNumber = $(this).find(".arhiveArtistItemBtn a")[0].innerText.split(" ")[0];
                var pages = Math.round(obj.songNumber/20) + 1;
                obj.url = 'http://nota.kg/api/nurkz/artist.php?url='+url+'&end='+pages;
                var genres = $(this).find(".arhiveArtistItemGenres a");
                var genresArr = [];
                for (var i =0; i<genres.length; i++){
                    genresArr.push(genres[i].innerText)
                }
                obj.genres = genresArr;
                arr.push(obj)

            });

            var jsonObject = new Object();
            jsonObject.title = "All Artist";
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

        setTimeout(listSongs, 3000)



    })

</script>