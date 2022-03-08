



var marks = prompt(" তোমার মার্কস লিখো :");

  if (marks >100 || marks < 0)
  document.getElementById("p1").innerHTML=("মার্কস নাই")

 else if (marks >=80 && marks<=100)
 document.getElementById("p2").innerHTML=("A+=৮৬ পেয়েছো");
 
 else if (marks >=70 &&marks<=79)
 document.getElementById("p3").innerHTML=("A- =৭৫ পেয়েছো");

else if (marks >=60 && marks<=69)
document.getElementById  ("p4").innerHTML=("B = ৬৪ পেয়েছো");

else if (marks >=50  && marks<=59)
document.getElementById("p5").innerHTML=("B- = ৫৩পেয়েছো ");

else if (marks >=40  && marks<=49)
document.getElementById("p6").innerHTML=("C =৪৪ পেয়েছো");

  else if (marks >=33  && marks<=39)
  document.getElementById("p7").innerHTML=("D =৩৩ তুমি  পাশ");

else
document.getElementById("p8").innerHTML=("তুমি ফেল ");

