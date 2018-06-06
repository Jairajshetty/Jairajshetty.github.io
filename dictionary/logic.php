<?php include('index.html'); ?><br><br><br>
<?php

        if(!empty($_GET["search"])){
            $search_url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=".urlencode($_GET["search"]);
            $search_json=file_get_contents($search_url);
            $search_array=json_decode($search_json,true);
            echo "<p class='display-4 text-light ml-1'>Related Searches:<p>";
        for($c=1;$c<count($search_array[1]);$c++){
              $out=$search_array[2][$c];
              $lin=$search_array[3][$c];
              echo "<a href='$lin'><button class='btn btn-outline-light ml-2 mt-2' data-toggle='tooltip' data-placement='bottom' title='$out'>";
              echo($search_array[1][$c]);
              echo "</button></a>";
            }
        echo "<br><br>";
        echo "<p class='display-4 text-light ml-1'>Search Results:<p>";

/*search result display section*/

       echo "<div class='bg-light col-md-10 px-2 py-3 mt-2 ml-2 lead' style='border-radius:20px;font-weight:600;opacity:0.7;'>";
       if(!empty($search_array[2][0])){
            echo($search_array[2][0]);
          }
       else{
            echo("Search Result not found!.Click on the button for more info.");
          }
                 $output=$search_array[3][0];
                 echo "<br>";
                 echo "<a href='$output'><button class='btn btn-outline-dark mt-2 col-md-3'>More Info</button></a>";
                 echo "</div>";
    }

?>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

<script>
    $('[data-toggle="tooltip"]').tooltip();
    <?php if(!$_GET["search"]){?>
        alert("Enter Search Item!");
    <?php }?>
</script>
