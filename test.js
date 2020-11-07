function fun1()
{
    var a=confirm("Do want to go next page:");
    if(a)
    {
     location.href="page3.html";
    }
    
}
function fun2()
{
    var a=confirm("Do want to go next page:");
    if(a)
    {
     location.href="page4.html";
    }
    
}
function backfun1()
{
    var a=confirm("Do you want to go back:");
    if(a)
    {
        location.href="index.html";
    }
}
function backfun2()
{
    var a=confirm("Do you want to go back:");
    if(a)
    {
        location.href="page2.html";
    }
}
function backfun3()
{
    var a=confirm("Do you want to go back:");
    if(a)
    {
        location.href="page3.html";
    }
}


function backhome()
{
    var a=confirm("Do you want go back to Home:");
    if(a)
    {
        location.href="index.html";
    }
}

