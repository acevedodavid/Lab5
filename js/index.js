function addItem() {
	let item = $('#tbItem').val();

	if(item !== "") {
		let itemTemplate =
		`<li class="listItem">
			<h2>${item}</h2>
			<button class="checkBtn ">Check</button>
			<button class="deleteBtn">Delete</button>
		</li>`;

		$('#list').append(itemTemplate);
		$('#tbItem').val("");

		let checkBtn = $(".checkBtn:last");

		checkBtn.on("click", event =>{
			checkBtn.siblings('h2').toggleClass('check');
		});

		let deleteBtn = $(".deleteBtn:last");

		deleteBtn.on("click", event =>{
			deleteBtn.parent().remove();
		});
	}
}

$("#addBtn").on("click", event=>{
	event.preventDefault();

	addItem();
});