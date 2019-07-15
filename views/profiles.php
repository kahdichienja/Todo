<?php require_once 'layout/header.php'?>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 hide-on-med-and-down">
            <ul class="" style="line-height: 4rem; position: fixed;">
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="mytodo.php" id="liHover">
                        <div><i class="material-icons">home</i></div>
                        <div id="sidenavLinks">Home</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="trending.php" id="liHover">
                        <div><i class="material-icons">star_half</i></div>
                        <div id="sidenavLinks"> Trending</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="#" id="liHover">
                        <div><i class="material-icons">bubble_chart</i></div>
                        <div id="sidenavLinks"> Groups</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="profiles.php?details=<?= $_SESSION['user']['email']; ?>" id="liHover">
                        <div><i class="material-icons">star_half</i></div>
                        <div id="sidenavLinks"> My Profiles</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="#" id="liHover">
                        <div><i class="material-icons">person_add</i></div>
                        <div id="sidenavLinks"> Followers</div>
                    </a>
                </li>
                <li><div class="divider"></div></li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="<?= $_SESSION['user']['pageLink']; ?>" id="liHover">
                        <div><i class="material-icons">more_vert</i></div>
                        <div id="sidenavLinks"> My Google Plus Page</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="../views/logout.php" id="liHover">
                        <div><i class="material-icons">visibility_off</i></div>
                        <div id="sidenavLinks"> logout</div>
                    </a>
                </li>            
            </ul>
        </div>
        <div class="col-md-7">
            <ul class="collection card">
                <li class="collection-item avatar">
                <img src="<?= $_SESSION['user']['picture']; ?>" alt="" class="circle">
                <a class="waves-effect waves-light modal-trigger" href="#modal1">
                    <input type="text" placeholder="Add A Caption.....">
                </a>
                <!-- Modal Trigger -->
                <a href="#modal1" class="secondary-content waves-effect waves-light modal-trigger"><i class="material-icons">camera</i></a>
                </li>
            </ul>
            <?php foreach ($profiles as $profile): ?>
            <div class="card">
                <div class="parallax-container">
                    <div class="">
                        <img style="width: 100%; height: 100%; border-radius: 5px;" src="<?php echo $profile['file_url']; ?>">
                    </div>
                </div>
                <div class="section white">
                    <div class="row container">
                        <h5 class="header"><?= $_SESSION['user']['name']; ?> You Posted This On: <?php echo $profile['created_at']; ?></h5>
                        <blockquote>
                            <?php echo $profile['message']; ?>
                        </blockquote>
                        <br>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="col-md-2">
            <span class="ml-2">My Friends on Todos</span>
                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header">
                            <img style="height: 40px; width: 40px;" src="<?= $_SESSION['user']['picture']; ?>" alt="" class="circle">
                            <p  style="margin-top: 0.5rem; margin-left: 0.5rem;"><?= $_SESSION['user']['name']; ?></p>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>
<!-- All required stuff -->
<!-- floating button for add caption -->
<div class="fixed-action-btn">
    <a href="#modal1" class="btn-floating btn-large red waves-effect waves-light modal-trigger">
        <i class="large material-icons">mode_edit</i>
    </a>
</div>
<!-- Modal Structure -->
<div id="modal1" class="modal modal-fixed-footer" style="height: 65%;">
    <div class="modal-body">
    <img style="height: 40px;" src="<?=$_SESSION['user']['picture'];?>" alt="" class="circle">
        <span>  <?=$_SESSION['user']['name'];?></span>
        <div class="row">
            <form class="col s12" method="POST" action="process/Insert.php">
                <div class="row" style="margin-bottom: -1rem;">
                    <div class="input-field col s12">
                        <textarea id="textarea1" name="message" placeholder="Add a Caption . . ." style="min-height: 11rem;" class="materialize-textarea"></textarea>

                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <div class="file-field input-field" style="margin-top: -1rem;">
                        <input type="hidden" style="margin-top: -15px;" role="uploadcare-uploader" name="qs-file" data-upload-url-base="" data-integration=""  />
                                <?php
// echo $api->widget->getInputTag('qs-file');
?>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="email" value="<?=$_SESSION['user']['email'];?>">
                <input type="hidden" name="username" value="<?=$_SESSION['user']['name'];?>">
                <input type="hidden" name="user_imgurl" value="<?=$_SESSION['user']['picture'];?>">
                <div class="row" id="btnfooter">
                    <div class="input-field col s12">
                        <button type="submit" name="submit" class="btn blue lighten-4 left">Post</button>
                    </div>
                    <a href="#!" style="top: 10px;" class="modal-close waves-effect right waves-green btn-flat">
                        <i class="large material-icons">remove_circle</i>
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
<?php require_once 'layout/footer.php'?>