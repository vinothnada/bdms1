/* [ ---- Ebro Admin - user Event ---- ] */

    $(function() {
		//* edit form
		$('.edit_form').click(function(e) {
			e.preventDefault();
			$('.user_form .editable p').hide();
			$('.user_form .editable .hidden_control,.user_form .form_submit').show();
		})
		//* delete user
		$('.remove_user').click(function(e) {
			e.preventDefault();
			bootbox.dialog({
				message: '<div class="text-center lead">Are you sure?</div>',
				title: 'Deleting This Event',
				buttons: {
					cancel: {
						label: "Cancel",
						className: "btn-link",
						callback: function() {
						}
					},
					confirm: {
						label: "Delete",
						className: "btn-primary",
						callback: function() {
							alert('Event deleted!');
							window.location=$('.remove_user').attr("href");
						}
					}
				}
			});
		})
		$('.remove_doner').click(function(e) {
			e.preventDefault();
			bootbox.dialog({
				message: '<div class="text-center lead">Are you sure?</div>',
				title: 'Deleting This Doner',
				buttons: {
					cancel: {
						label: "Cancel",
						className: "btn-link",
						callback: function() {
						}
					},
					confirm: {
						label: "Delete",
						className: "btn-primary",
						callback: function() {
							alert('User deleted!');
							window.location=$('.remove_doner').attr("href");
						}
					}
				}
			});
		})
		
	})