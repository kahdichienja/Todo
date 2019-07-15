<script type="text/javascript" src="../js/app.js"></script>
    <script>
      
        // my gellery
        const current = document.querySelector('#current');
        const imgs = document.querySelectorAll('.imgs img');
        const opacity = 0.4;
        // ist img opacity
        // imgs[0].style.opacity = opacity;

        imgs.forEach(img => img.addEventListener('click', imgclick));

        function imgclick(e) {
            //Reset the opacity to initial state
            imgs.forEach(img => img.style.opacity = 1);
            // change the current img src when clicked
            current.src = e.target.src;
            // add fading class

            current.classList.add('fade-in');
            // remove fadein class
            setTimeout(() => current.classList.remove('fade-in', 500));
            // change the opacity to the const
            e.target.style.opacity = opacity;
        }


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