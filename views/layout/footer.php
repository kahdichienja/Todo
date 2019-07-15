<script type="text/javascript" src="../js/app.js"></script>
    <script>
        // launching the popup
        // let btn = document.getElementById('btnLaunch');
        // notify();
        // setInterval(() => {
        //     // ajax call to the php file linkig the data in the database real time  updates
        //     function getAll() {
        //         var xhr = new XMLHttpRequest();
        //         xhr.open('GET', 'realDbtest.php', true);
        //         xhr.onload = function() {
        //                 if (this.status == 200) {
        //                     var rowNum = JSON.parse(this.responseText);
        //                     // console.log(this.responseText);
        //                     var output = '';
        //                     for (var i in rowNum) {
        //                         output += rowNum[i];
        //                     }
        //                     console.log(rowNum);
        //                     document.getElementById('test2').innerHTML = rowNum;
        //                 }
        //             }
        //             // xhr.send();
        //     }

        //     getAll()
        //         // btn.click();
        // }, 2000);

        $(document).ready(function(){
            $('.sidenav').sidenav();
            $('.modal').modal();
            $('.fixed-action-btn').floatingActionButton();
            $('.dropdown-trigger').dropdown();
            $('.materialboxed').materialbox();
            $('.collapsible').collapsible();
            $('.carousel').carousel();
            $('.chips').chips();
        });

</script>
</body>

</html>