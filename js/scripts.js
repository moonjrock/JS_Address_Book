$(document).ready(function() {
	$("form#new-contact").submit(function(event) {
		event.preventDefault();

		var inputtedFirstName = $("input#new-first-name").val();
		var inputtedLastName = $("input#new-last-name").val();
		var inputtedAddress = $("input#new-address").val();
		var inputtedNumber = $("input#new-number").val();
		var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress, number: inputtedNumber };

		$("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

		$("input#new-first-name").val("");
  	$("input#new-last-name").val("");
  	$("input#new-address").val("");
		$("input#new-number").val("");

    $(".contact").last().click(function() {
  		$("#show-contact").show();
 	 		$("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
  		$(".first-name").text(newContact.firstName);
  		$(".last-name").text(newContact.lastName);
  		$(".address").text(newContact.address);
			$(".number").text(newContact.number)
		});
  });
});
