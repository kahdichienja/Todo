<?php require_once 'layout/header.php'?>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 hide-on-med-and-down">
            <ul class="" style="line-height: 4rem; position: fixed;">
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="#" id="liHover">
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
                    <a class="mb-5" href="profiles.php?details=<?=$_SESSION['user']['email'];?>" id="liHover">
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
                    <a class="mb-5" href="http://developer.al-masi.com/stats" id="liHover">
                        <div><i class="material-icons">vpn_lock</i></div>
                        <div id="sidenavLinks"> Internet Of Things</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="<?=$_SESSION['user']['pageLink'];?>" id="liHover">
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
        <div class="col-md-5">
            <ul class="collection card">
                <li class="collection-item avatar">
                <img src="<?=$_SESSION['user']['picture'];?>" alt="" class="circle">
                <a class="waves-effect waves-light modal-trigger" href="#modal1">
                    <input type="text" placeholder="Add A Caption.....">
                </a>
                <!-- Modal Trigger -->
                <a href="#modal1" class="secondary-content waves-effect waves-light modal-trigger"><i class="material-icons">camera</i></a>
                </li>
            </ul>
            <?php foreach ($posts as $post): ?>
            <div class="card">
                <div class="card-header white">
                    <img style="height: 40px;" src="<?=$post->user_imgurl?>" alt="" class="circle">
                    <span> <?=$post->username?></span>
                    <form action="process/Likes.php" method="POST">
                        <input type="text" hidden name="email" value="<?=$_SESSION['user']['email'];?>">
                        <input type="text" hidden name="userprofile" value="<?=$_SESSION['user']['picture'];?>">
                        <input type="text" hidden name="post_id" value="<?=$post->id?>">
                        <input type="text" hidden name="like_count" value="1">
                        <button type="submit" name="submit" class='right ml-3 btn-floating blue lighten-2' value="like">
                            <i class="material-icons">thumb_up</i>
                        </button>
                    </form>
                    <?php foreach ($post->likes as $like): ?>
                        <div class="chip truncate">
                            <img class="" src="<?= $like->userprofile; ?>" alt="Contact Person">
                        </div>
                    <?php endforeach;?>
                    <!-- dropdown -->
                    <a class='dropdown-trigger right' href='#' data-target='dropdown1'>
                        <i class="material-icons">share</i>
                    </a>

                    <!-- Dropdown Structure -->
                    <ul id='dropdown1' class='dropdown-content'>
                        <li><a href="#!"><i class="material-icons">share</i></a></li>
                        <li class="divider" tabindex="-1"></li>
                        <li><a class="twitter-share-button" target="_blank" href="https://twitter.com/intent/tweet?text=<?=$post->file_url?>">Tweet</a></li>
                    </ul>
                    <!-- end dropdown -->
                </div>
                <div class="card-content">
                    <span class="blue-text"><?=$post->created_at?></span>
                    <p><?=$post->message?></p>
                </div>
                <div class="card-image">
                    <img class="materialboxed" src="<?=$post->file_url?>">
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">comment</i></a>
                </div>
                <div class="card-footer">
                    <ul class="collapsible">
                        <li>
                            <div class="collapsible-header">
                            <img style="height: 40px;" src="<?=$_SESSION['user']['picture'];?>" alt="" class="circle">
                            <form action="process/Comments.php" method="POST">
                                <input type="hidden" name="user_imgurl" value="<?=$_SESSION['user']['picture'];?>">
                                <input type="hidden" name="email" value="<?=$_SESSION['user']['email'];?>">
                                <input type="hidden" name="username" value="<?=$_SESSION['user']['name'];?>">
                                <input type="hidden" name="post_id" value="<?=$post->id?>">
                                <textarea class="materialize-textarea" style="margin: 5px;" name="comment" placeholder="Add a comment..."></textarea>
                                <button 
                                    type="submit" 
                                    class="btn-sm btn" 
                                    id="moveinlne" 
                                    name="submit"
                                    style="position: relative;
                                        margin-right: 10px;
                                        margin-top: -80px;
                                        margin-left: 100%;">
                                    <i class="material-icons">send</i>
                                </button>
                            </form>
                            </div>
                            <div class="collapsible-body">
                            <?php foreach ($post->comments as $comment): ?>
                                <blockquote>
                                    <?=$comment->comment?>
                                    <div class="chip">
                                        <img src="<?=$comment->user_imgurl?>" alt="Contact Person">
                                        <?=$comment->username?>
                                    </div>
                                </blockquote>
                            <?php endforeach;?>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <?php endforeach;?>
        </div>

        <div class="col-md-4">
            <span class="ml-2">Trending on Todos</span>
            <?php foreach ($posttrends as $posttrend): ?>
            <div class="card">
                <ul class="collapsible popout">
                    <li>
                        <div class="collapsible-header">
                        <img style="height: 40px; width: 40px;" src="<?=$posttrend->file_url?>" alt="" class="circle">
                        <p class="truncate" style="margin-top: 0.5rem; margin-left: 0.5rem;">
                        Posted By: <small class="red-text"><?=$posttrend->username?></small> ,
                            <?=$posttrend->message?>
                        </p>
                        </div>
                        <div class="collapsible-body">
                            <div class="card-header white">
                                <img style="height: 40px;" src="<?=$posttrend->user_imgurl?>" alt="" class="circle">
                                <span>  <?=$posttrend->username?></span>
                            </div>
                            <div class="card-content">
                                <!-- <span class="blue-text">11/01/2019</span> -->
                                <p><?=$posttrend->message?></p>
                            </div>
                            <div class="card-image">
                                <img class="materialboxed" src="<?=$posttrend->file_url?>">
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">comment</i></a>
                            </div>
                            <div class="card-footer">
                                <ul class="collapsible">
                                    <li>
                                        <div class="collapsible-header">
                                        <img style="height: 40px;" src="<?=$_SESSION['user']['picture'];?>" alt="" class="circle">
                                        <form action="process/Comments.php" method="POST">
                                            <input type="hidden" name="user_imgurl" value="<?=$_SESSION['user']['picture'];?>">
                                            <input type="hidden" name="email" value="<?=$_SESSION['user']['email'];?>">
                                            <input type="hidden" name="username" value="<?=$_SESSION['user']['name'];?>">
                                            <input type="hidden" name="post_id" value="<?=$post->id?>">
                                            <textarea class="materialize-textarea" style="margin: 5px;" name="comment" placeholder="Add a comment..."></textarea>
                                            <button type="submit" class="btn-sm circle btn btn-floating" name="submit"><i class="material-icons">comment</i></button>
                                        </form>
                                            <a href="#!"><i class="material-icons">share</i></a>
                                        </div>
                                        <div class="collapsible-body">
                                        <?php foreach ($posttrend->comments as $comment): ?>
                                            <blockquote>
                                                <?=$comment->comment?>
                                                <div class="chip">
                                                    <img src="<?=$comment->user_imgurl?>" alt="Contact Person">
                                                    <?=$comment->username?>
                                                </div>
                                            </blockquote>
                                        <?php endforeach;?>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <?php endforeach;?>
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