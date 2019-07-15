<?php include_once '../layouts/authheader.php';?>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-3 hide-on-med-and-down">
            <ul class="" style="line-height: 4rem; position: fixed;">
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="#" id="liHover">
                        <div><i class="material-icons">home</i></div>
                        <div id="sidenavLinks">Home</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="../data.php" id="liHover">
                        <div><i class="material-icons">assessment</i></div>
                        <div id="sidenavLinks"> Analysis</div>
                    </a>
                </li>
                <li><div class="divider"></div></li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="http://developer.al-masi.com/views/mytodo.php" id="liHover">
                        <div><i class="material-icons">vpn_lock</i></div>
                        <div id="sidenavLinks"> Blog</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="<?=$_SESSION['user']['pageLink'];?>" id="liHover">
                        <div><i class="material-icons">more_vert</i></div>
                        <div id="sidenavLinks"> My Google Plus Page</div>
                    </a>
                </li>
                <li style="height: 3.5rem;">
                    <a class="mb-5" href="../logout.php" id="liHover">
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
                    <p class="waves-effect waves-light modal-trigger">
                    <?=$_SESSION['user']['name'];?><br>You Are Here To
                    give data on the Internet of Things in Higher Education
                    </p>
                </li>
            </ul>

            <div class="card">
                <div class="text-info text-center">
                    <h5>Case Study: <small>A Study of Rongo University Students.</small> </h5>
                </div>
                <div class="card-body">
                    <p class="text-primary">
                        This questionnaire is part of computer and internet use. <strong><?=$_SESSION['user']['name'];?></strong> Your participation in this study is volunatry and your answers will form part of a statistical study and will not identyyou as an individual.          
                    </p>
                    <div class="container grey lighten-4 z-depth-2 mb-5">
                        <form action="insert.php" method="post">
                            <p class="text-warning">*Please first answer these background questions, then complete the rest of the survey.</p>
                            <label for="Gender">Gender</label>
                            <label>
                                <input class="mt-3" name="gender" value="male" type="radio" />
                                <span>male</span>
                            </label>
                            <label>
                                <input class="mt-3" name="gender" value="Female" type="radio" />
                                <span>Female</span>
                            </label>
                            <label>
                                <input class="mt-3" name="gender" value="Others" type="radio" />
                                <span>Others</span>
                            </label>
                            
                            <input class="mt-3" placeholder="Age" name="age" id="first_name" type="number" class="validate">
                             <p class="text-primary">Which of the following best describe your educational leve</p>
                             <label>
                                <input class="mt-3" name="education" value="university" type="radio" />
                                <span>University</span>
                            </label>
                            <label>
                                <input class="mt-3" name="education" value="secondary" type="radio" />
                                <span>Secondary</span>
                            </label>
                            <label>
                                <input class="mt-3" name="education" value="Advanced Degree" type="radio" />
                                <span>Advanced Degree</span>
                            </label> 
                            <input hidden name="username" value="<?= $_SESSION['user']['name']; ?>">
                            <input placeholder="Your Faculty eg. Bsc Mathematics" name="faculty" id="first_name" type="text" class="mt-3 validate">
                            <input placeholder="Your Hostel" id="first_name" name="hostel" type="text" class="mt-3 validate">
                            <input placeholder="Religion" id="first_name"name="religion" type="text" class="mt-3 validate">                        
                            <p class="text-primary">In which of the following settings have you ever made use of a computer connected to the internet?</p>                     <label>
                                <input class="mt-3" name="networkarea" value="at school lecture room" type="radio" />
                                <span>at school lecture room</span>
                            </label>
                            <label>
                                <input class="mt-3" name="networkarea" value="School library" type="radio" />
                                <span>School library</span>
                            </label>
                            <label>
                                <input class="mt-3" name="networkarea" value="cybercafe" type="radio" />
                                <span>cybercafe</span>
                            </label> 
                            <label>
                                <input class="mt-3" name="networkarea" value="at the hostel" type="radio" />
                                <span>at the hostel</span>
                            </label> 
                            <p class="text-primary">How frequent do you visit the internet?</p> 
                            <label>
                                <input class="mt-3" name="networkvisit" value="Every 2 hours" type="radio" />
                                <span>Every 2 hours</span>
                            </label>
                            <label>
                                <input class="mt-3" name="networkvisit" value="After 30 minutes" type="radio" />
                                <span>After 30 minutes</span>
                            </label>
                            <label>
                                <input class="mt-3" name="networkvisit" value="at night" type="radio" />
                                <span>at night</span>
                            </label> 
                            <label>
                                <input class="mt-3" name="networkvisit" value="24/7" type="radio" />
                                <span>24/7</span>
                            </label> 
                            <p class="text-primary">When you access the Internet, Which of the following social group do you usually move to first?</p> 
                            <label>
                                <input class="mt-3" name="socialmedia" value="Facebook" type="radio" />
                                <span>Facebook</span>
                            </label> 
                            <label>
                                <input class="mt-3" name="socialmedia" value="What`sAp" type="radio" />
                                <span>What`sApp</span>
                            </label> 
                            <label>
                                <input class="mt-3" name="socialmedia" value="Twitter" type="radio" />
                                <span>Twitter</span>
                            </label>
                            <label>
                                <input class="mt-3" name="socialmedia" value="Google +" type="radio" />
                                <span>Google +</span>
                            </label> 
                            <textarea id="textarea1" name="yinternet" class="mt-3 materialize-textarea" placeholder="Why Do You Visit The Internet...."></textarea> 
                            <p class="text-primary">What Sort of websites have you visited in last month?</p>
                            <label>
                                <input name="visitedwebsites[]" value="Rongo Whisper chat room" class="mt-3" type="checkbox" />
                                <span>Rongo Whisper chat room</span>
                            </label>
                            <label>
                                <input name="visitedwebsites[]" value="Retails e.g Jumia" class="mt-3" type="checkbox" />
                                <span>Retails like Jumia</span>
                            </label>
                            <label>
                                <input name="visitedwebsites[]" value="Sport-Pesa" class="mt-3" type="checkbox" />
                                <span>Sport-Pesa</span>
                            </label>
                            <label>
                                <input name="visitedwebsites[]" value="Religion" class="mt-3" type="checkbox" />
                                <span>Religion</span>
                            </label>
                            <label>
                                <input name="visitedwebsites[]" value="Mix Cloud for music" class="mt-3" type="checkbox" />
                                <span>Mix Cloud for music</span>
                            </label>
                            <label>
                                <input name="visitedwebsites[]" value="Youtube" class="mt-3 mb-5" type="checkbox" />
                                <span>Youtube</span>
                            </label>
                            <p class="text-primary">Do you think is best for School to have ist Chatroom from Other Social medias?</p>
                            <label>
                                <input class="mt-3" name="socialschool" value="yes" type="radio" />
                                <span>yes</span>
                            </label>
                            <label>
                                <input class="mt-3" name="socialschool" value="No" type="radio" />
                                <span>No</span>
                            </label> 
                            <br>
                            <input type="submit" value="submit" name="submit" class="btn btn-outline-primary btn-block">
                        </form>
                    </div>
                </div>
            </div>

        </div>

        <div class="col-md-3"></div>
        <div class="col-md-1"></div>
    </div>
</div>

<?php include_once '../layouts/footer.php'; ?>