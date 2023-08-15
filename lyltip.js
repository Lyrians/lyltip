// By: Axel Benitez (KaoruMishimaru)

(function($){
	$.fn.lyltip = function(options){
		let settings = $.extend({
			theme: "dark",
			rounded: true,
			margin: 18,
			themes: []
		}, options);

		this.on("focus mouseenter", function(){
			// ELEMENT
			let $this 				= $(this);
			let text 				= $this.attr("data-tooltip");
			let elementWidth 		= $this.outerWidth(true);
			let elementHeight 		= $this.outerHeight();
			let elementX 			= $this.offset().left;
			let elementY 			= $this.offset().top;
			let position 			= "top";

			if($this.attr("data-tooltip-pos")){
				position = $this.attr("data-tooltip-pos");
			}

			// TOOLTIP
			let tooltip				= document.createElement("div");
				tooltip.classList.add("lyltip");
				tooltip.textContent = text;

				tooltip				= $(tooltip);
				tooltip.prependTo($("body")).css('visibility', 'hidden');

			let tooltipHeight 		= tooltip.outerHeight(),
				tooltipWidth 		= tooltip.outerWidth(true);

			let posX	 			= (elementX + elementWidth / 2) - (tooltipWidth / 2);
			let posY	 			= elementY - tooltipHeight - settings.margin;

			if(position === "left"){
				posY = (elementY + elementHeight / 2) - (tooltipHeight / 2);
				posX = (elementX - tooltipWidth - settings.margin);
				tooltip.addClass("lyltip-position-left");
			} else if(position === "right"){
				posY = (elementY + elementHeight / 2) - (tooltipHeight / 2);
				posX = (elementX + elementWidth + settings.margin - 8);
				tooltip.addClass("lyltip-position-right");
			} else if(position === "bottom"){
				posX	 			= (elementX + elementWidth / 2) - (tooltipWidth / 2);
				posY	 			= elementY + tooltipHeight + settings.margin;
				tooltip.addClass("lyltip-position-bottom");
			}

			if(settings.themes){
				let themes = settings.themes;
				let classlists = $this.attr("class");
					classlists = classlists.split(" ");

				for(var theme in themes){
					if($this.hasClass(theme)){
						tooltip.addClass(`lyltip-theme-${themes[theme]}`);
					}
				}
			}

			if(!settings.rounded){
				tooltip.css('border-radius', '0');
			}

			tooltip.css({
				left: posX,
				top: posY,
				visibility: 'visible',
				display: 'none'
			}).fadeIn(100);

			$this.on("blur mouseleave", function(e){
				tooltip.fadeOut(100).remove();
			});
		});
		this.attr("tabindex",-1)

		return this;
	}
}(jQuery));
