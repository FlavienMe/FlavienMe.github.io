// JavaScript Document

var menu = new Array();
menu[0]="<ul><li><a target='_self' href=''>1.1. </a></li><li><a target='_self' href=''>1.2. </a></li></ul>";
menu[1]="<ul><li><a target='_self' href=''>2.1. </a></li><li><a target='_self' href=''>2.2. </a></li></ul>";
menu[2]="<ul><li><a target='_self' href=''>3.1. </a></li><li><a target='_self' href=''>3.2. </a></li><li><a target='_self' href=''>3.3. </a></li><li><a target='_self' href=''>3.4. </a></li></ul>";
menu[3]="<ul><li><a target='_self' href=''>4.1. </a></li><li><a target='_self' href=''>4.2. </a></li></ul>";

var image = new Array();
image[0]="<img id='imgage' src='../D_IMG/experiment_list0.jpg'>";
image[1]="<img id='imgage' src='../D_IMG/experiment_list1.jpg'>";
image[2]="<img id='imgage' src='../D_IMG/experiment_list2.jpg'>";
image[3]="<img id='imgage' src='../D_IMG/experiment_list3.jpg'>";

var liste;
var aff;

var ancIndex=-1;
var ancLigne="";

function init()
{
	liste=document.getElementById("menu").getElementsByTagName("Li");
	aff=document.getElementById("affichage");
}

function debut(i)
{	
	numimage(i);
			if (ancIndex>=0)
			{
				liste[ancIndex].innerHTML=ancLigne;
			}
			ancLigne=liste[i].innerHTML
			ancIndex=i;
			liste[i].innerHTML+=menu[i];
}


function numimage(i)
{
	aff.innerHTML=image[i];
}
	