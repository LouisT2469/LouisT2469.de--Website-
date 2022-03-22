<form action='hypixel-api.php' method='post'>
    <input type='text' name='ign' placeholder='Username'>
    <br><br>
    <input type='submit' name='drück mich'>
</form>

<?php
    if(isset($_post['submit'])){
    §ign = $_post['ign'];
    echo §file = 'https://api.mojang.com/users/profiles/minecraft'.$ign;
    §mojang = file_get_contents(§file);
    echo $mojang;
    print 'test';
    }

?>