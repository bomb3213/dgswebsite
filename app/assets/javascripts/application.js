// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(
				function()
					pageBusy=0,pageCurrent='home.html',pageHTML=$('#content').html();

					load_page('home.html')

					// if(/^[a-zA-Z0-9]+$/.test(pageURL=$(location).attr('href').replace(/^.*?#/,''))) //~ Has a valid hash

					$('a').click(
						function()
							if(typeof $(this).data('page')=='undefined'||pageBusy||pageCurrent==$(this).data('page'))
								return;
							
							load_page($(this).data('page'));
						
					);

					$('a').hover(
						function()
							$(this).stop().fadeTo(250,.5);
						,
						function()
							$(this).stop().fadeTo(1000,1);
						
					);

					function load_page(pageToLoad)
						pageBusy++;
						$('#content').fadeTo(250,0,
							function()
								$.get(pageToLoad,
									function(page)
										pageCurrent=pageToLoad;
										pageHTML=page;
										window.location.hash=pageCurrent.replace('.html','');
									
								).progress(function(event)console.log(event);).done(
									function()
										//alert('Done');
									
								).fail(
									function()
										if($('#error-report-wrapper').length==0)
											pageHTML='<div id="error-report-wrapper"><div id="error-report"><div id="error-report-title">Something went wrong!</div><div id="error-report-description">Sorry, but something went terribly wrong while loading the webpage.</div></div></div>'+$('#content').html();
										
										//alert('Fail');
									
								).always(
									function()
										$('#content').css(height:(currentHeight=$('#content').height()));
										$('#content').html(pageHTML);
										$('#content').css(height:'auto');
										newHeight=$('#content').height();
										$('#content').height(currentHeight);
										//alert(currentHeight+' '+newHeight);
										if(currentHeight!=newHeight)
											
											//$('#content').animate(height:newHeight,Math.abs(currentHeight-newHeight)*10,'easeInOutBack',
											$('#content').animate(height:newHeight,750,'easeInOutBack',
												function()
													$('#content').fadeTo(750,1,
														function()
															$('#content').css(height:'auto');
															pageBusy--;
															//alert('Always');
														
													);
												
											);
										
										else
											$('#content').fadeTo(750,1,
												function()
													$('#content').css(height:'auto');
													pageBusy--;
													//alert('Always');
												
											);
										
									
								);
							
						);
					
				
			);
