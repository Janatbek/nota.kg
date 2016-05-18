
<div style="display:none" id="superkg">
    <?php
/*
    if (isset($_GET['start']) && isset($_GET['end'])) {
        $start = $_GET['start'];
        $end = $_GET['end'];
    }else{
        $start = 1;
        $end = $_GET['end'];
    }
*/
    # there are 322 pages in super.kg
    for ($x = 1; $x <= 10; $x++) {
    echo file_get_contents('http://www.super.kg/media/audio/?pg=' . $x);
    }
    ?>
</div>
<script>
    $(document).ready(function() {

        var arr = [];
        //var item = $('.audioItemFP a');
        var item = $('.audio-block .audio-item');
        $(item).each(function( index ) {
            var obj = {};
            obj.index = index;
            //obj.id = $(this).attr("href").split("/")[3];
            obj.id = $(this).attr("data-id");
            //obj.song = $(this).text().split('"')[1];
            obj.song = $(this).find("a").attr("title").split('"')[1];
            //var artistsAll = $(this).text().split('"')[0];
            tempArt = $(this).find("a").attr("title").split('"')[0];
            var artistsAll = tempArt.slice(8,tempArt.indexOf("</strong>")).split(", ");
            obj.artist = artistsAll;
            obj.genre = 164;
            arr.push(obj);
        });
        var jsonObject = new Object();
        jsonObject.title = "Super Kg New MP3";
        jsonObject.length = arr.length;
        jsonObject.list = arr;
        console.log("marat",jsonObject)
        $("#superkg").html("");
        $.ajax
        ({
            type: "POST",
            dataType : 'json',
            async: false,
            url: 'result.php',
            data: { data: JSON.stringify(jsonObject) },
            success: function () {
                window.location.href = 'result.json';
             },
            failure: function() {alert("Error!");}
        });
    })

</script>