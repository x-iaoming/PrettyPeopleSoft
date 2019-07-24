$(document).ready(function(){


    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEREQ_1.css"]').remove();
    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEREQ_1.css"]').remove();
    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PT_PRCS_USER_NOTIFY_CSS_1.css"]').remove();
    // $('link[rel=stylesheet][href~="https://vbm.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEDEF_TANGERINE_1.css"]').remove();
    // $('link[rel=stylesheet][href~="m.brynmawr.edu/cs/CS92PRD/cache/PSSTYLEDEF_TANGERINE_1.css"]').remove();

    // var script = document.createElement("SCRIPT");
    // script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    // script.type = 'text/javascript';
    // script.onload = function() {
    //     var $ = window.jQuery;
    //     // Use $ here...
    // };

    // var script2 = document.createElement("SCRIPT");
    // script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
    // script2.type = 'text/javascript';
    // script2.onload = function() {
    //     var $ = window.jQuery;
    //     // Use $ here...
    // };

    // var script3 = document.createElement("SCRIPT");
    // script3.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
    // script3.type = 'text/javascript';
    // script3.onload = function() {
    //     var $ = window.jQuery;
    //     // Use $ here...
    // };
    
    // var bootstrap = document.createElement("LINK");
    // bootstrap.rel = 'stylesheet';
    // bootstrap.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
    // bootstrap.intergity = 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
    // bootstrap.crossorigin = 'anonymous'
    
    // document.getElementsByTagName("body")[0].appendChild(script);
    // document.getElementsByTagName("body")[0].appendChild(script2);
    // document.getElementsByTagName("body")[0].appendChild(script3);
    // document.getElementsByTagName("head")[0].appendChild(bootstrap);

    // $("div").attr( "class", "container" )

    
    
    //Prepending navbar
    // $('body').prepend('<div id="pthdr2container" class="pthdr2container"><div id="pthdr2logoswan"\
    //  class="">&nbsp;</div><span id="ptgreetingmessage" class="greeting">Bi-Co Online Information \
    //  Center</span><div id="pthdr2syslinks" class="pthdr2syslinks"><a id="pthdr2home" class="PSHYPERLINK"\
    //   title="Home" target="_top" href="https://vbm.brynmawr.edu/psp/CS92PRD/EMPLOYEE/HRMS/h/?tab=DEFAULT" \
    //   onclick="bcUpdater.removeStoredData(bcUpdater.isMenuCrefNav); if ((typeof ptIframeHdr != 'undefined') \
    //   &amp;&amp; (ptIframeHdr)) {return ptIframeHdr.hdrLinkClicked(this);} else {saveWarning(&quot;&quot;, \
    //     null, &quot;_top&quot;, this.href); return false;}" proxied="false"><span>Home</span></a><div class="pthdr2sep">\
    //   <!--divider--></div><a id="pthdr2atf" class="PSHYPERLINK" title="Add to Favorites" target="_top" \
    //   href="../../../EMPLOYEE/HRMS/s/WEBLIB_PTIFRAME.ISCRIPT1.FieldFormula.IScript_PT_Popup" onclick="if \
    //   ((typeof ptIframeHdr != 'undefined') &amp;&amp; (ptIframeHdr)) {return ptIframeHdr.hdrLinkClicked(this);} \
    //   else {saveWarning(&quot;&quot;, null, &quot;_top&quot;, this.href); return false;}" name="AddToFavorites">\
    //   <span>Add to Favorites</span></a><div class="pthdr2sep"><!--divider--></div><a id="pthdr2logout" class="PSHY\
    //   PERLINK" title="Sign Out" target="_top" href="https://vbm.brynmawr.edu/psp/CS92PRD/EMPLOYEE/HRMS/?cmd=logout"\
    //   onclick="if ((typeof ptIframeHdr != 'undefined') &amp;&amp; (ptIframeHdr)) {return ptIframeHdr.hdrLinkClicked\
    //     (this);} else {saveWarning(&quot;&quot;, null, &quot;_top&quot;, this.href); return false;}"><span>Sign Out</span></a></div></div>')
    // $("#ptifrmtgtframe").on('load',function(){ 
    //     event.preventDefault();
    // })


    $('head').prepend('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">');
    $('body').append('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>')
    $('body').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>');
    $('body').append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>');

    // $("#ptifrmtgtframe").wrap('<div class="embed-responsive"></div>')
    // $("#ptifrmtgtframe").attr( "class", "embed-responsive-item")
    // $("#ptifrmtgtframe").attr( "onload", "")

    //Changing fonts and navbar
    // $('head').prepend('<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato"/>')
    $("body").css({"background-color":"transparent"})
    // $('span').css({"font-family":"Lato",'color':'rgb(152,30,50)','font-size':'14px'})
    // $('a').css({"font-family":"Lato",'color':'#1b0000','font-size':'14px'})
    $('#pthnavcontainer').css({"background-color":"transparent"})
    $('div').css({"background-image":"none"})
    $('nav').css({"background-image":"none"})
    $('li').css({"background-color":"none"})
    $('#ptbr_header_container').css({"background":"url('https://cdn3.vectorstock.com/i/1000x1000/25/02/blue-crystal-pattern-background-vector-19752502.jpg')"})
    $('#pthdr2container').css({"background-color":"transparent"})

    //Making iframe run faster and nicer
    // $("#ptifrmtgtframe").attr('id','annoying_iframe')
    // $('#annoying_iframe').unwrap();
    // $('#annoying_iframe').unwrap();
    // $("#annoying_iframe").wrap('<div class="embed-responsive embed-responsive-4by3"></div>')
    $("#ptifrmtgtframe").attr('loading','lazy')
    // $("#annoying_iframe").attr( "class", "embed-responsive-item")
    
    //$("#annoying_iframe").css({"width": "100%","height": "100%"})

    // jQuery.fn.swapWith = function(to) {
    // return this.each(function() {
    //     var copy_to = $(to).clone(true);
    //     var copy_from = $(this).clone(true);
    //     $(to).replaceWith(copy_from);
    //     $(this).replaceWith(copy_to);
    //     });
    // };
    // $("#pthdr2container").swapWith("#ptdropdownmenu");

    
    // Tried to get rid of iframe entirely
    // var direction = $("#ptifrmtgtframe").attr('src')
    // $(location).attr('href', direction)



    $("#ptifrmtgtframe").on('load',function(){ 
    //     event.preventDefault();
        // $("#annoying_iframe").contents().find('head').prepend('<style>body{webkitTransform:scale(1.2);msTransform:scale(1.2);transform:scale(1.2) translateX(10%) translateY(10%)}</style>')  
           
        //Changing font 
        $("#ptifrmtgtframe").contents().find('head').prepend('<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato"/>')
        $("#ptifrmtgtframe").contents().find('span').css({"font-family":"Lato",'color':'#1b0000','background-color':'none','font-size':'14px'})
        $("#ptifrmtgtframe").contents().find('td').css({"font-family":"Lato"})
        $("#ptifrmtgtframe").contents().find('a').css({"font-family":"Lato",'font-size':'14px'})
        $("#ptifrmtgtframe").contents().find('label').css({"font-family":"Lato",'color':'#1b0000','font-size':'14px'})
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOXLABEL').css({"font-family":"Lato",'color':'#1b0000','font-size':'14px'})
    
        //Load bootstrap classes
        $("#ptifrmtgtframe").contents().find('head').prepend('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">');
        $("#ptifrmtgtframe").contents().find('body').append('<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>')
        $("#ptifrmtgtframe").contents().find('body').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>');
        $("#ptifrmtgtframe").contents().find('body').append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>');
        //$("#ptifrmtgtframe").contents().find('.PSGROUPBOXNBO').attr( "class", "table table-sm table-borderless" )
        //$("#ptifrmtgtframe").contents().find('.PAGROUPBOXLABELINVISIBLEWBO').attr( "class", "table table-sm table-borderless" )
        //$("#ptifrmtgtframe").contents().find('.PSLEVEL1GRID').attr( "class", "table table-sm table-borderless" )
        $("#ptifrmtgtframe").contents().find('.PSPUSHBUTTON').attr( "class", "btn btn-info btn-sm" )
        $("#ptifrmtgtframe").contents().find('.PSDROPDOWNLIST').attr( "class", "form-control" )
        $("#ptifrmtgtframe").contents().find('.PSEDITBOX').attr("class", "form-control-sm")

        
        //Change CSS
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOX').css({'background-color':'rgba(256,256,256,0.8)'})
        // $("#ptifrmtgtframe").contents().find('.PSGROUPBOXLABEL').attr("class","card-header")
        $("#ptifrmtgtframe").contents().find('.PABACKGROUNDINVISIBLE').css({'background-color':'transparent'})
        $("#ptifrmtgtframe").contents().find('.PSLEVEL2GRIDLABEL').css({'color':'rgb(152,30,50)','background-color':'#F1F3F4'})
        $("#ptifrmtgtframe").contents().find('.PSLEVEL3GRIDLABEL').css({'color':'rgb(152,30,50)','background-color':'#F1F3F4'})
        $("#ptifrmtgtframe").contents().find('.PSLEVEL1GRIDWBO').css({'border-width':'0px'}) 
        $("#ptifrmtgtframe").contents().find('.PSLEVEL1GRIDWBO').attr("frame","box")
        $("#ptifrmtgtframe").contents().find('.card-header').css({'padding':'0px','padding-left':'10px'})
        $("#ptifrmtgtframe").contents().find('.card-body').css({'padding':'0px','padding-left':'20px','background-color':'rgba(256,256,256,0.8)'})
        // $("#ptifrmtgtframe").contents().find('.PSGROUPBOXNBO').css({'padding':'5px','margin':'0px'})
        // $("#ptifrmtgtframe").contents().find('.PAGROUPBOXLABELINVISIBLEWBO').css({'padding':'0px','margin':'0px'})
        // $("#ptifrmtgtframe").contents().find('.PSLEVEL1GRID').css({'padding':'0px','margin':'0px'})

        // $("#ptifrmtgtframe").contents().find('tr').css({"padding":"1","margin":"0","background-color":"rgba(255,255,255, 0)"})
        // $("#ptifrmtgtframe").contents().find('td').css({"padding":"1","margin":"0","background-color":"rgba(255,255,255, 0)",'color':'#1b0000'})
        //$("#ptifrmtgtframe").contents().find('.PSGROUPBOX').css({'background-color':'white'})
        $("#ptifrmtgtframe").contents().find('.PATRANSACTIONTITLE').css({'color':'rgb(152,30,50)',"font-size":"18px",'font-weight':'700'})
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOXWBO').css({'border-width':'0px','padding':'0px','margin':'0px','background-color':'rgba(256,256,256,0.8)'})
        $("#ptifrmtgtframe").contents().find('.PSGROUPBOXLABEL').css({'border-width':'0px','border-bottom':'0px','color':'rgb(152,30,50)','background-color':'#F1F3F4','font-size':'16px'})
        $("#ptifrmtgtframe").contents().find('body').css({"background-color":"rgba(250,250,250,0.9)"})
        $("#ptifrmtgtframe").contents().find('div').css({'color':'rgb(152,30,50)','font-weight':'700'})
        //$("#ptifrmtgtframe").contents().find('input').css({"border":"none","background":"none","background-color":'rgb(152,30,50)',"font-family":"Lato","color":"white"})
        
        //Give credits
        $("#ptifrmtgtframe").contents().find('body').append('<div style="font-size: 8px; font-weight: 300 ; align: center;">&nbsp&nbsp&nbsp&nbspYou are using a beautified version of Bionic by ruiming100@gmail.com | Background by Manora </div>')

        //Making 4.0s
        var x = $("#ptifrmtgtframe").contents().find('body')
        // if( x.find('#STATS_CUMS\\$13').length ){
        //     var num = x.find("#STATS_CUMS\\$13").text()
        //     num = parseInt(num) * 4
        //     var total = num.toString().concat(".000")
        //     x.find("#win0divSTATS_CUMS\\$12").html(total)
        //     x.find("#win0divSTATS_CUMS\\$14").html('4.000')
            
        //     var gradeoff = "#win0divSTDNT_ENRL_SSV1_CRSE_GRADE_OFF\\$"
        //     var grade_input = "#win0divSTDNT_ENRL_SSV1_CRSE_GRADE_INPUT\\$"
        //     var graded_points = "#win0divSTDNT_ENRL_SSV1_GRADE_POINTS\\$"
        //     for (i = 0; i < 5; i++) {
        //         var item = i.toString()
        //         var find1 = gradeoff.concat(item)
        //         var find2 = grade_input.concat(item)
        //         var find3 = graded_points.concat(item)
        //         x.find(find1).html('4.0');
        //         x.find(find2).html('4.0');
        //         x.find(find3).html('4.000');
        //     }
        // };
        arr=[]

        if( x.find('#win0divCRSE_GRADE\\$0').length ){
            var grade = '#win0divCRSE_GRADE\\$'
            for (i = 0; i < 70; i++) {
        	    var item = i.toString()
                var find = grade.concat(item) 
                var y = x.find(find)
                if( y.length ){
                    var temp = y.text();
                    arr.push(temp);
                    y.html('4.0');
                } 
                
            }
        }


        function show_popup(arr){
            if( x.find('#win0divCRSE_GRADE\\$0').length )         // use this if you are using id to check
            {
                var result = confirm('The grade you see below has been beautified. This is for fun only!【Click CANCEL below to uncover your real grade】') 
                if ( result ) {} 
                else {
                    for (i = 0; i < arr.length; i++) {
                        var grade = '#win0divCRSE_GRADE\\$'
                        var item = i.toString()
                        var find = grade.concat(item) 
                        x.find(find).html(arr[i])
                    }
                }
            }
            // if( x.find('#win0divSTDNT_ENRL_SSV1_CRSE_GRADE_OFF\\$0').length )         // use this if you are using id to check
            // {
            // confirm('The grade you see below has been beautified. Have a good day! 【This is for fun and personal use only】') 
            // }

        }

        window.setTimeout(function () {show_popup(arr);}, 3000 );

    });
    


});

