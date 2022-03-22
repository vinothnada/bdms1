var testData = {};
	

// The object that the JSON string should represent, can use this as it is if you want.
testData.webSites = [
	{
		id: 1,
		text: 'Nirman Sri Chathuranga',
		image: 'images/user.png',
		extra: 'O+,Horana 12400',
		url:'#'		
		
	},
	{
		id: 2,
		text: 'Chamil Jayasanka Rupasinghe',
		image: 'images/user.png',
		extra: 'AB,Homagama',
		url:'#'	
	},
	{
		id: 3,
		text: 'Kasun Hasaranga',
		image: 'images/user.png',
		extra: 'A-,Horana 12400',
		url:'#'				
	},
	{
		id: 4,
		text: 'Sumudu Prasadinie',
		image: 'images/user.png',
		extra: 'B+,Hambantota',
		url:'#'		
	},
	{
		id: 5,
		text: 'Dimuthu Sampath',
		image: 'images/user.png',
		extra: 'A+,Colombo',
		url:'#'		
	},
	{
		id: 6,
		text: 'Isuru Sameera',
		image: 'images/user.png',
		extra: 'A+,Colombo',
		url:'#'				
	},
	{
		id: 7,
		text: 'Sachira Ruchiranga Fernando',
		image: 'images/user.png',
		extra: 'B+,Colombo',
	    url:'#'		
	},
	{
		id: 8,
		text: 'Gayan Madusanka',
		image: 'images/user.png',
		extra: 'A+,Colombo',
	    url:'#'		
	},
	{
		id: 9,
		text: 'Janaka Madusanka',
		image: 'images/user.png',
		extra: 'AB-,Colombo',
		url:'#'		
	},
	{
		id: 10,
		text: 'Harshani Athukorala',
		image: 'images/user.png',
		extra: 'O-,Raddoluwa',
		url:'http://www.facebook.com/suelopl'		
	},
	{
		id: 11,
		text: 'Waruni Priyangika',
		image: 'images/user.png',
		extra: 'A+,Colombo',
		url:'#'		
	}
	];
	
// JSON string of the above object, just as an example
testData.webSitesJSON = JSON.stringify(testData.webSites);