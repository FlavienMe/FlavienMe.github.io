window.printDiv = function(divName) {
	
	devis();
	
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;
 
     document.body.innerHTML = printContents;
 
     window.print();
 
     document.body.innerHTML = originalContents;
}

function devis() {
            
			var in1 = document.getElementById("champ1");
			var in2 = document.getElementById("champ2");
			var in3 = document.getElementById("champ3");
			var in4 = document.getElementById("champ4");
			var in5 = document.getElementById("champ5");
			var in6 = document.getElementById("champ6");
			var in7 = document.getElementById("champ7");
			var in8 = document.getElementById("case1");
			var in9 = document.getElementById("case2");
			
			var t1 = document.getElementById("text1");
			var t2 = document.getElementById("text2");
			var t3 = document.getElementById("text3");
			var t4 = document.getElementById("text4");
			var t5 = document.getElementById("text5");
			var t6 = document.getElementById("text6");
			var t7 = document.getElementById("text7");
			var t8 = document.getElementById("text8");
			var t9 = document.getElementById("text9");
			var t10 = document.getElementById("text10");
			
			var prix = 250;
			var f1 = 0;
			var f2 = 0;
			
              
            t1.innerHTML = in1.value;
			t2.innerHTML = in2.value;
			t3.innerHTML = in3.value;
			t4.innerHTML = in4.value;
			t5.innerHTML = in5.value;
			t6.innerHTML = in6.value;
			t10.innerHTML = "Experemorque";
			
			if (in8.checked == true)
			{
				t7.innerHTML = " + Axe de velo";
				f1 = 1;
			}
			else
			{
				t7.innerHTML = "";
				f1 = 0;
			}
			
			if (in9.checked == true)
			{
				t8.innerHTML = " + Sac avec attaches";
				f2 = 1;
			}
			else
			{
				t8.innerHTML = "";
				f2 = 0;
			}
			
			t9.innerHTML = prix + f1 * 50 + f2 * 150;
			
            
        }