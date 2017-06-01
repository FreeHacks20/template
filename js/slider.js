$(function() {
	$("#slider-gems").slider({
		range: "max",
		value: 100,
		min: 100,
		max: 99999,
		slide: function(event, ui) {
			$("#amount-gems").text(ui.value);
		}
	});
	$("#amount-gems").text($("#slider-gems").slider("value"));

	$("#slider-gold").slider({
		range: "max",
		value: 1000,
		min: 1000,
		max: 9999999,
		slide: function(event, ui) {
			$("#amount-gold").text(ui.value);
		}
	});
	$("#amount-gold").text($("#slider-gold").slider("value"));

	$("#slider-elixir").slider({
		range: "max",
		value: 1000,
		min: 1000,
		max: 9999999,
		slide: function(event, ui) {
			$("#amount-elixir").text(ui.value);
		}
	});
	$("#amount-elixir").text($("#slider-elixir").slider("value"));
});