<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Контакт | Дулене</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/utilities.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-29W6MF8WXY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-29W6MF8WXY');
</script>
<style>
/*Da bi futer bio na dnu*/
body{ 
    display:flex; 
    height: 100vh;
  flex-direction:column; 

}
/*Da bi tekst bio na sredini*/
main{
    display: flex;
    justify-content:center;
    align-items:center;
    height: 100%;
}
.btn-form{
    width: 100px;
}
.poruka{
    text-align:center;
}

footer{
  margin-top:auto; 
}
</style>

</head>

<body class="primary-color-gradiant ">
    
<?php 
   require_once 'obrada.php';
?>


    <header>
	<div id="navbar" class="navbar">
	    <img src="img/logo.png" draggable="false"  class="nav-logo" alt="dulene logo">
	    <nav>

	    <ul id="meny" class="desktop-meny">
                    <li> <a href="index">Почетна</a> </li>
                    <li> <a href="znamenitosti"> Знаменитости</a></li>
                    <li> <a href="istorija">Историја</a> </li>
                    <li> <a href="vremenska-prognoza-dulene">Време</a> </li>
                    <li> <a href="kontakt">Контакт</a></li>
                </ul>
	</nav>
	<div id="phone-nav">
	    <i class="fa fa-bars fa-lg"></i>
	</div>
	</div>

    </header>
            <main>
<section class="text-white poruka">

<?php      if($messageIsSent){ ?>
       <h2>Порука је послата</h2>
<?php }
  else{?>
       <h2>Порука није послата</h2>
 <?php }?> 

    <em>Кликните назад за повратак на почетну страницу</em>
    <div class="center"> <a class="btn btn-form secondary-color" href="index.html">Назад</a> </div>
</section>

</main>

<footer>
    <div class="footer-text footer-color">
        <p>&copy;  <span id="year"></span>  DULENE.IN.RS</p>
    </div>
</footer>
    <script type="module" src="./js/dulenski.js"></script>

    </script>
</body>
</html>
