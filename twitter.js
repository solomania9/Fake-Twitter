// Main kickoff function
$( document ).ready(function() {

	showIntro();

}); // End Doc ready

function showIntro(){

	$("html").addClass("intro");

	var modal = `<div class="modal">
		<div class="modal-body">
			<p>Welcome to Fake Twitter,<br />where nothing is real.</p>
			<p>Or is it? 😏</p>
			<p>
				<a href="#" class="button">
					Enter Fake Twitter
					<svg viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
				</a>
			</p>
		</div>
		<div class="modal-footer">
			<p>
				Made with ❤️ by <a href="https://twitter.com/solomania" target="_blank">@solomania</a>
				| <a href="https://thecleverest.com/about-fake-twitter/" target="_blank">About Fake Twitter</a>
			</p>
		</div>
	</div>`;
	$(".main").append(modal);

	// Click the button, load the thing
	$( ".button" ).click(function(e) {

		e.preventDefault();
		$(this).addClass("clicked")
		var screenWidth = screen.width;
		var screenHeight = screen.height;

		var targetHeight = screenHeight * 5; // Make the bird a little wider than screen
		var targetTop = targetHeight / 2; // make the bird a little toward the top half

		var svg = $(this).find("svg")
		
		svg.height(targetHeight+"px")
		svg.css({"top":"-"+targetTop+"px"})
		

		
		setTimeout(function(){
			$(".modal").fadeOut();
		}, 800);

		setTimeout(function(){
			$("html").removeClass("intro");
			begin();
		}, 800);

	});

} // end showIntro


function begin() {
		
	// Start the timer
	var startTime = moment();
	
	/* Generate a few tweets to kick things off */
	for (i = 0; i < 30; i++) {
		addTweetToPage();
	}
	activatTweetTracking() // Do this after rendering tweets to track when they're in/out of view
	
	// Add a footer
	$(".main").append('<div id="footer"><img src="ajax-loader.gif" />Faking More Tweets...</div>');

	// Add the nav
	var nav = `
	<div id="nav">
		<span class="icon icon-home">
			<svg viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path></g></svg>
		</span>
		<span class="icon icon-search">
			<svg viewBox="0 0 24 24" class="r-1re7ezh r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
		</span>
		<span class="icon icon-alerts">
			<span class="badge-holder">
				<!-- badges go here -->
			</span>
			<svg viewBox="0 0 24 24" class="r-1re7ezh r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path></g></svg>
		</span>
		<span class="icon icon-messages">
			<span class="badge-holder">
			<!-- badges go here -->
			</span>
			<svg viewBox="0 0 24 24" class="r-1re7ezh r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path></g></svg>
		</span>
	</div>`;
	$(".main").append(nav);
	
	// Check when the footer's in viewm then generate some more tweets. That's it!
	$('#footer').on('inview', function(event, isInView) {

	  if (isInView) {
		// element is now visible in the viewport

		// Small delay, then load more!
		setTimeout(function(){ 
		
			/* Generate more tweets */
			for (i = 0; i < 30; i++) {
				addTweetToPage();
			}
			activatTweetTracking() // Do this after rendering tweets to track when they're in/out of view
			
		}, 1000);

		
	  } else {
		// element has gone out of viewport
		// Not used here
	  }
	});


	// Make nav elements clickable
	$( "#nav .icon-alerts" ).click(function(e) {

		e.preventDefault();

		var now = moment();
		var start = startTime;

		var alertText = ``;

		var seconds = now.diff(start, "seconds")
	
		var status = pickARandom("statuses")
		status = status.replace("_",seconds+" seconds")+" "+pickARandom("kudos")
		status = status.replace("*",tweetsViewed)
		
		alertText += status
		
		alert(alertText)

		notifications = 0;
		updateNotificationsAndDMs();

	});


	// Generate useless alerts every so often
	var t;
	t = setInterval(newNotification, returnRandom(5000, 30000)); 

	function newNotification(){
		notifications++;
		// Increase the value, show
		console.log("new notification: current count is "+notifications)
		updateNotificationsAndDMs();
		
		// Clear old internal
		clearInterval(t)

		// Make a new random interval
		t = setInterval(newNotification, returnRandom(5000, 30000));	
	}
	
}/* End function */

function addTweetToPage() {
		
	// First make an object for the tweet
	var tweetObj = generateTweet();

	// Now feed that object into the function to render it, and get HTML
	var tweetHTML = renderTweet(tweetObj)

	// Now pop that HTML onto the page
	$("#container").append(tweetHTML);
	
	// Fade it in. We're done here
	$(".item").fadeIn(300);
				
}

function generateTweet() {
	
	// Here's the object that will tumble through this big function and 
	// pick up data along the way (like a katamari!), until it's returned at the end
	// only to be rendered by a different function
	var status = {};
	
	// Let's roll a dice and decide what kind of tweet to make...
	
	if (percentChance(60)) {
		var tweetType = "news";
	} else {
		var tweetType = "person";
	}
	

	if (tweetType == "person"){

		if (percentChance(1)) {
			// Just amram for now
			var tweetSubType = "personalTweets"
		} else if (percentChance(25)) {
			var tweetSubType = "mansplaining"
			//debugger;
		} else if (percentChance(25)) {
			var tweetSubType = "magareply"
			//debugger;
		} else if (percentChance(25)) {
			var tweetSubType = "trumpretweet"
			//debugger;
		} else {
			var tweetSubType = "weirdtwitter"
		}

	}


	// If it's personalTweets, filter the people that have tweets
	// Anyone from "people" who you add a "tweets" array to, should work
	if (tweetSubType == "personalTweets"){

		// Filter just people who have tweets
		var peopleWithTweets = people.filter( x => x["tweets"] != undefined );
		status["user"] = pickARandom(peopleWithTweets)

		var text = pickARandom(status["user"]["tweets"])
		status["text"] = text;

		status["retweet_count"] = returnRandom(100, 1000);
		status["favorite_count"] = returnRandom(1000, 80000);
		status["reply_count"] = returnRandom(10, 100);

		status["timestamp"] = pickARandom(timestamps)
		//debugger;

	}

	
	
	// If it's weirdtwitter, piece together some bullshit nonsense and give it tons of likes
	if (tweetSubType == "weirdtwitter"){

		status["type"] = "weirdtwitter";

		var text = ``;

		if (percentChance(50)){ // should be 50 in prod
			text += pickARandom("weirdTwitterIntros") // "hey buddy ""
		}

		text += pickARandom("weirdTwitterNounPrefixes") // "this is my"
		text += " " // space
		text += pickARandom("weirdTwitterNouns") // "bidet"

		if (percentChance(50)){ // should be 50 in prod
			text += " " // space
			text += pickARandom("weirdTwitterSuffixes") // "friendo"
		}

		//console.log("weirdtwitter: "+text) // hey buddy this is my bidet friendo
		status["text"] = text;

		// put username
		status["user"] = pickARandom("weirdTwitterPeople")
	

		var person = pickARandom("people")
		//var reason = pickARandom("reasonsForShowingTweet")
		//var reasonFull = reasonPerson["name"]+" "+reason
		
		//status["reason"] = reason
		status["person"] = person["name"];

		status["retweet_count"] = returnRandom(100, 1000);
		status["favorite_count"] = returnRandom(1000, 80000);
		status["reply_count"] = returnRandom(10, 100);

		status["timestamp"] = pickARandom(timestamps)
		//debugger;

	}






	// If it's mansplaining, make a man replying to a women with unsolicited assholey stuff
	if (tweetSubType == "mansplaining"){

		// Pick a random topic that the women's tweeting about
		var randomTopic = pickARandom("topics")
		
		// Pick a subtopic the mansplainer will reply about
		var subTopic = pickARandom(randomTopic["subTopics"])

		// Start crafting the woman's original tweet...
		var womanTweetWithPlaceholder = pickARandom("womanTweets")

			// Replace the placeholder _ with the topic name
			var womanTweet = womanTweetWithPlaceholder.replace("_TOPIC",randomTopic["name"])
		
		// Here comes the asshole... "Let's take her down a peg!" he thinks...
		var manTweetWithPlaceholders = pickARandom("mansplaining");

			// Replace the placeholder _TOPIC and _SUBTOPIC with the right topic and subtopics
			var manTweet = manTweetWithPlaceholders.replace("_TOPIC",randomTopic["name"])
			manTweet = manTweet.replace("_SUBTOPIC",subTopic)

		// Attach the man's tweet to the main status object
		status["text"] = manTweet

		// Make a new sub object for the original tweet (the woman's tweet), to which this is a reply
		status["in_reply_to_status"] = {};
		status["in_reply_to_status"]["text"] = womanTweet;
		
		// Add stats for woman's tweet
		status["in_reply_to_status"]["retweet_count"] = returnRandom(0, 5);
		status["in_reply_to_status"]["favorite_count"] = returnRandom(0, 10);
		status["in_reply_to_status"]["reply_count"] = returnRandom(0, 10);
		status["in_reply_to_status"]["user"] = pickARandom("women");

		// Add stats for man's tweet
		status["retweet_count"] = returnRandom(0, 1);
		status["favorite_count"] = returnRandom(0, 1);
		status["reply_count"] = returnRandom(0, 10);
		status["user"] = pickARandom("men");

		status["timestamp"] = pickARandom(timestamps)

	}





	// If it's a maga reply, make a rangom semi-rambling but thoughtful tweet by a man or woman, and make a maga reply, similar to mansplaining
	if (tweetSubType == "magareply"){

		// Pick a man or woman
		if (percentChance(50)){ 
			var op = "women"
		} else {
			var op = "men"
		}
		
		// Make a new sub object for the original tweet, to which this is a reply
		status["in_reply_to_status"] = {};
		status["in_reply_to_status"]["user"] = pickARandom(op);

		// Craft the OPs tweet
		var tweet = ``;
		tweet += pickARandom("randomTweetIntros")
		tweet += " "
		tweet += pickARandom("randomTweetTopics")
		tweet += " "
		tweet += pickARandom("randomTweetRealized")
		tweet += " "
		tweet += pickARandom("randomTweetNeed")
		tweet += " "
		tweet += pickARandom("randomTweetMoreOf")
		tweet += " "
		tweet += pickARandom("randomTweetLessOf")
		status["in_reply_to_status"]["text"] = tweet;


		// Add stats for OPs tweet
		status["in_reply_to_status"]["retweet_count"] = returnRandom(0, 5);
		status["in_reply_to_status"]["favorite_count"] = returnRandom(0, 10);
		status["in_reply_to_status"]["reply_count"] = returnRandom(0, 10);

		// Add stats for maga tweet
		status["retweet_count"] = returnRandom(0, 1);
		status["favorite_count"] = returnRandom(0, 1);
		status["reply_count"] = returnRandom(0, 10);
		status["user"] = pickARandom("magaReplyPeople");
		
		// Attach the maga tweet to the main status object
		status["text"] = pickARandom("magaReplies")

		status["timestamp"] = pickARandom(timestamps)

	}





	if (tweetSubType == "trumpretweet"){

		// Someone's retweeting without a comment
		status["user"] = pickARandom("trump")

		// Make their retweet 
		status["retweeted_status"] = {}
		status["retweeted_status"]["user"] = pickARandom("trumpRetweets")
		status["retweeted_status"]["text"] = pickARandom(status["retweeted_status"]["user"].tweets)

		// Add stats
		status["retweeted_status"]["retweet_count"] = returnRandom(100, 1000);
		status["retweeted_status"]["favorite_count"] = returnRandom(1000, 10000);
		status["retweeted_status"]["reply_count"] = returnRandom(10, 100);

		status["timestamp"] = pickARandom(timestamps)

	}



	// If it's news, generate some "news" consisting of a mishmash from the trump news cycle
	if (tweetType == "news"){

		/*
		News formats:
			- as a card: text/image/domain
			- retweeted: as text/link/image with news source user
		The types of ways news can appear
			- in regular tweet (as card)
			- as retweet
		*/

		// Generate some stuff then decide how/where to use it 
		var fakeNews = generateFakeNews();
		//debugger;
		
		if (percentChance(33)) {

			// Someone's sharing an actual link in their tweet
			status["user"] = pickARandom("people")
			status["text"] = pickARandom("readyMadeTweets")
			status["card"] = {}
			status["card"]["image"] = fakeNews["image"]
			status["card"]["headline"] = fakeNews["headline"]
			
			// Pick a source for the attribution
			var source = pickARandom("sources")
			status["card"]["domain"] = source["domain"]

			// Add stats
			status["retweet_count"] = returnRandom(100, 1000);
			status["favorite_count"] = returnRandom(1000, 10000);
			status["reply_count"] = returnRandom(10, 100);

			status["timestamp"] = pickARandom(timestamps)
			

		} else if (percentChance(33)) {

			// Someone's retweeting WITH a comment
			status["user"] = pickARandom("people")
			status["text"] = pickARandom("readyMadeTweets")

			// Make their retweet 
			var source = pickARandom("sources")
			status["retweeted_status"] = {}
			status["retweeted_status"]["text"] = `${fakeNews["headline"]} <span class="url">${source.url}/${makeid()}</span>`
			status["retweeted_status"]["image"] = fakeNews["image"]
			status["retweeted_status"]["user"] = source

			// Add stats
			status["retweet_count"] = returnRandom(100, 1000);
			status["favorite_count"] = returnRandom(1000, 10000);
			status["reply_count"] = returnRandom(10, 100);

			status["timestamp"] = pickARandom(timestamps)

		} else {

			// Someone's retweeting without a comment
			status["user"] = pickARandom("people")

			// Make their retweet 
			var source = pickARandom("sources")
			status["retweeted_status"] = {}
			status["retweeted_status"]["text"] = `${fakeNews["headline"]} <span class="url">${source.url}/${makeid()}</span>`
			status["retweeted_status"]["image"] = fakeNews["image"]
			status["retweeted_status"]["user"] = source

			// Add stats
			status["retweeted_status"]["retweet_count"] = returnRandom(100, 1000);
			status["retweeted_status"]["favorite_count"] = returnRandom(1000, 10000);
			status["retweeted_status"]["reply_count"] = returnRandom(10, 100);

			status["timestamp"] = pickARandom(timestamps)

		}


		
		

		function generateFakeNews() {

			var h = ``;

			//debugger;

			/* Quoted Headline, ie "According to Trump: Blah blah blah..." */
			if (percentChance(20)) { // should be 20
				var quotedHeadline = true; 
			}
			
			if (quotedHeadline) {
				//console.log("quoted headline, show the quoted person's photo");
				//var randomNounIndex = returnRandom(0, nounsClone.length-1);
				var randomNoun = pickARandom("nouns")
				var quotedName = randomNoun["name"];
				
				if (percentChance(50)) {
					h += "According to "+quotedName+", ";
				} else if (percentChance(50)) {
					h += "BREAKING: "+quotedName+", ";
				} else {
					var quotedHeadlineTypeBrief = true;
					h += quotedName+": \""; // Don't forget to end the quote at the end...
				}

				var headlineImage = pickARandom(randomNoun["images"])
				//debugger;
				
			}


			if (percentChance(50)) { 
				var usePrefixes = true;
			} else {
				var usePrefixes = false;
			}
			// should be 50 or less?
			if (usePrefixes) {
				h += pickARandom("nounPrefixes");
			}

			
			
			// Pick the main subject of the headline
			var mainPersonObj = pickARandom("nouns")
			var mainPerson = mainPersonObj["name"];
			var mainPersonSide = mainPersonObj["side"];
			h += mainPerson;
			//console.log("main person is: "+mainPerson);
			if (!quotedHeadline) { 
				var headlineImage = pickARandom(mainPersonObj["images"]); // get the image of the person who's the main subject of the headline
			}
			
			
			if (usePrefixes) {
				h += " "+pickARandom("nounSuffixes");
			}
			
			// Main Verb
			var randomVerb = pickARandom("verbs");
			h += randomVerb["text"]; // "Paul Manafort Moves On"
			

			// Don't show the last details if it's a short quoted headline; doesn't seem believable
			if (percentChance(50) && !quotedHeadlineTypeBrief) { // should be around 50?
				//debugger;
				var detailsWithPlaceholder = pickARandom("details");
				var nounForDetails = pickARandom("nouns")
				
				var details = detailsWithPlaceholder.replace("_",nounForDetails["name"])
				h += details;
			}
			
			if (quotedHeadlineTypeBrief) {
				h += '"';
			}
			
			var objectToReturn = {
				"headline":h,
				"image":headlineImage
			};
			//console.table("headline: "+h)
			//debugger;
			return objectToReturn 
			

		} // end generateFakeNews

	} // end if tweet type is news

	//console.table(status)
	//debugger;
	return status;

	
} /* End generateTweet */


function renderTweet(tweetObj){

	//debugger;

	var output = ''; // This is the main string we'll append to. React Shmreact!

	// Create the shell item
	output += '<div class="item" style="display:none;">'; // Set to display none, then fadeIn once built and added to dom
	
		// If there's no tweet text and a retweeted status, say why it's on your timeline
		if (!tweetObj.text && tweetObj.retweeted_status) {
			output += `<span class="reason reason-retweeted">
			<svg viewBox="0 0 24 24" class="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xzupcd"><g><path d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path></g></svg>
			${tweetObj.user.name} Retweeted
			</span>`;
		}

		// Left column, just contains avatars and reply line
		if (tweetObj.in_reply_to_status){
			var replyClass = "has-reply"
		} else {
			var replyClass = ""
		}
		output += `<div class="leftcol ${replyClass}">`;				
			if (tweetObj.text == undefined){
				var avatarURL = tweetObj.retweeted_status.user.image
			} else if (tweetObj.in_reply_to_status){
				var avatarURL = tweetObj.in_reply_to_status.user.image
			} else {
				var avatarURL = tweetObj.user.image
			}
			output += '<span class="avatar" style="background-image:url('+avatarURL+')"></span>';
		output += '</div>';// end leftcol


		output += `<div class="content ${replyClass}">`;

			output += '<div class="header">';

				// Make the name the person being replied to, or retweeted, or just who's tweeting
				if (tweetObj.in_reply_to_status){
					var mainUser = tweetObj.in_reply_to_status.user;
				} else if (tweetObj.retweeted_status && !tweetObj.text){
					var mainUser = tweetObj.retweeted_status.user;
				} else {
					var mainUser = tweetObj.user;
				}
				output += '<h3>'+mainUser.name+'</h3>';
				if (mainUser.verified == "true") {
					output += '<span class="verified"></span>';
				}
				output += `<span class="handle">@${mainUser.handle}</span> <span class="dot">•</span> <span class="time">${tweetObj.timestamp}</span> </span>`;
				
			output += '</div>'; // end header

			
			
			output += '<div class="tweet">';

				// Make the tweet the person being replied to, or retweeted, or just who's tweeting
				if (tweetObj.in_reply_to_status){
					var tweet = tweetObj.in_reply_to_status;
				} else if (tweetObj.retweeted_status && !tweetObj.text){
					var tweet = tweetObj.retweeted_status;
					var image = tweetObj.retweeted_status.image;
				} else {
					var tweet = tweetObj;
				}
				output += '<p>'+tweet.text+'</p>';
				if (image){
					output += `<span class="bg-image">
						<img src="${image}" />
					</span>`;
				}
				
				// Show a card if it's there. Otherwise, show the retweeted status :-)
				if (tweet.card){
					
					output += '<div class="card" style="background-color:white;">';
						output += `<span class="bg-image">
							<img src="${tweet.card.image}" />
						</span>`;
						output += '<h3>'+tweet.card.headline+'</h3>';
						output += `<p class="domain">
						<svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g></svg>
							${tweet.card.domain}
						</p>`;
					output += '</div>';	
				
				} else if (tweet.retweeted_status){

					output += '<div class="card" style="background-color:white;">';
						output += '<div class="header">';
							output += '<span class="avatar" style="background-image:url('+tweet.retweeted_status.user.image+')"></span>';
							output += '<h3>'+tweet.retweeted_status.user.name+'</h3>';
							if (tweet.retweeted_status.user.verified == "true") {
								output += '<span class="verified"></span>';
							}
							output += `<span class="handle">@${tweet.retweeted_status.user.handle}</span> <span class="dot">•</span> <span class="time">${tweetObj.timestamp}</span> </span>`;	
						output += '</div>';
						output += '<p>'+tweet.retweeted_status.text+'</p>';
						output += `<span class="bg-image">
							<img src="${tweet.retweeted_status.image}" />
						</span>`;
					output += '</div>';	

					
				
				}
				// end if card

			output += '</div>'; // end tweet

			output += renderTweetStats()
			
		output += '</div>'; // end content



		// Add any replies if they exist
		if (tweetObj.in_reply_to_status) {

			output += `<div class="reply-spacer"></div>`;
			
			output += `<div class="leftcol is-reply">`;				
				output += '<span class="avatar" style="background-image:url('+tweetObj.user.image+')"></span>';
			output += '</div>';// end leftcol


			output += '<div class="content">';

				output += '<div class="header">';

					var mainUser = tweetObj.user;
					output += '<h3>'+mainUser.name+'</h3>';
					if (mainUser.verified == "true") {
						output += '<span class="verified"></span>';
					}
					output += `<span class="handle">@${mainUser.handle}</span> <span class="dot">•</span> <span class="time">${tweetObj.timestamp}</span> </span>`;
					
				output += '</div>'; // end header

				
				
				output += '<div class="tweet">';

					var tweet = tweetObj;
					output += '<p>'+tweet.text+'</p>';

				output += '</div>'; // end tweet

				output += renderTweetStats()
				
			output += '</div>'; // end content
		
		
		
		
		
		} // end reply check

		

		function renderTweetStats(){
			var output = `
			<div class="stats">
				<span class="replies">
					<svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
					${abbrNum(tweet.reply_count, 1)}
				</span>
				<span class="retweets">
					<svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
					${abbrNum(tweet.retweet_count, 1)}
				</span>
				<span class="likes">
					<svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
					${abbrNum(tweet.favorite_count, 1)}
				</span>
			</div>`;

			return output;
		}


	output += '</div>'; // end item div

	return output;

} // end renderTweet


function updateNotificationsAndDMs(){

	// Make the front-end match the values for
	if (notifications == 0) {
		var badgeHTML = ``;
	} else {
		var badgeHTML = `<span class="badge">${notifications}</span>`;
	}
	$(".icon-alerts .badge-holder").html(badgeHTML);

}

function activatTweetTracking(){

	// Remove all existing listeners, so we don't double-count
	$('.item').unbind('inview');
	
	// Check when the footer's in viewm then generate some more tweets. That's it!
	$('.item').on('inview', function(event, isInView) {

		if (isInView) {
		  
		} else {
		  // element has gone out of viewport
		  console.log("tweet viewed")
		  tweetsViewed++;
		}
	});

} // end function


function pickARandom(array){

	// If it's a string, we want to cache it and prevent duplicates
	if (typeof array === 'string') {
		//console.log("string")
		// See if we already have a cached, pruned version
		var matchFromCache = cache[array]

		// If it's undefined, make it!
		if (matchFromCache == undefined){
			var originalArray = eval(array).slice(0);
			cache[array] = originalArray
		}

		// Pick a random one
		var randomIndex = returnRandom(0, cache[array].length-1);
		var itemToReturn = cache[array][randomIndex]

		// Remove it!
		cache[array].splice(randomIndex, 1);

		// If we've removed them all, add it back
		if (cache[array].length == 0){
			var originalArray = eval(array).slice(0);
			cache[array] = originalArray
		}

	} else {
		// If it's an array, just pick one and return it
		var randomIndex = returnRandom(0, array.length-1);
		var itemToReturn = array[randomIndex];
		
	}

	return itemToReturn;

}


function smartPlural(number, denom){
	// Divide by the number - if it's 1
	try{
	  // For example 60 / 1 seconds: 1 second, so it should be singluar
	  if (denom / number == denom) {
		return "";
	  } else {
		return "s"; // Otherwise return nothing
	  }
	}
	catch(e){
	  return "s"; // catch divide by zero
	}
  }


function getName(index, nounsClone){
	return nounsClone[index]["name"];
}

function getImage(index, source){
	//debugger;
	//var person = G.nouns[Math.floor(Math.random()*G.nouns.length)];
	var images = source[index]["images"];
	var randomImageIndex = returnRandom(0, images.length-1);
	return images[randomImageIndex];
}

function getRandomNounImage(){
	var randomIndex = returnRandom(0, nounsClone.length-1);
	
	
	//var person = G.nouns[Math.floor(Math.random()*G.nouns.length)];
	//var randomIndex = returnRandom(0, G.readymade.length-1)
	//var randomName = G.readymade[randomIndex];
	//debugger; //TODO get random index from length of images array, and return a random 1
	//return person["name"];
}

function getRandom(x){
	return G[x][Math.floor(Math.random()*G[x].length)]
}

function randomWord(x, nounsClone) { //x is word type
	var word = x[Math.floor(Math.random()*x.length)];
	// if word contains an underscore, replace it with an unused noun, otherwise just return the whole thing
	if (word.indexOf('_') > -1) {
		var fields = word.split('_');
		var o = fields[0];
		//o += "Solomon";
		//debugger;
		var randomNounIndex = returnRandom(0, nounsClone.length-1);
		var name = getName(randomNounIndex, nounsClone);
		o += name;
		o += fields[1];
		return o;
		//debugger;
		
	} else {
		return word;
	}
		// split the string to get the token
		// 
	
}

function percentChance(percent){
	var randomnumber = Math.floor(Math.random()*101);
	if(percent>randomnumber){
		return true;
	}else{
		return false;
	}
}


function getFirstWord(x) {
	var arr = x.split(/\s+/);
	return arr[0];
}


function returnRandom(x,y,z) {
	//debugger;
	if (z == "negOrPos") {
		if (percentChance(50)) {
			return Math.floor(Math.random()*(y-x+1)+x);
		} else {
			return -Math.floor(Math.random()*(y-x+1)+x);
		}
	} else {
		return Math.floor(Math.random()*(y-x+1)+x);
	}
}

function abbreviateNumber(value) {
	var newValue = value;
	if (value >= 1000) {
		var suffixes = ["", "k", "m", "b","t"];
		var suffixNum = Math.floor( (""+value).length/3 );
		var shortValue = '';
		for (var precision = 2; precision >= 1; precision--) {
			shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
			var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
			if (dotLessShortValue.length <= 2) { break; }
		}
		if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
		newValue = shortValue+suffixes[suffixNum];
	}
	return newValue;
}

function abbrNum(number, decPlaces) {
	// 2 decimal places => 100, 3 => 1000, etc
	decPlaces = Math.pow(10,decPlaces);

	// Enumerate number abbreviations
	var abbrev = [ "k", "m", "b", "t" ];

	// Go through the array backwards, so we do the largest first
	for (var i=abbrev.length-1; i>=0; i--) {

		// Convert array index to "1000", "1000000", etc
		var size = Math.pow(10,(i+1)*3);

		// If the number is bigger or equal do the abbreviation
		if(size <= number) {
			 // Here, we multiply by decPlaces, round, and then divide by decPlaces.
			 // This gives us nice rounding to a particular decimal place.
			 number = Math.round(number*decPlaces/size)/decPlaces;

			 // Handle special case where we round up to the next abbreviation
			 if((number == 1000) && (i < abbrev.length - 1)) {
				 number = 1;
				 i++;
			 }

			 // Add the letter for the abbreviation
			 number += abbrev[i];

			 // We are done... stop
			 break;
		}
	}

	return number;
}

function removeEndVowell(x) {
	var trimmed = x.trim();
	var chars = trimmed.split("");
	var lastIndex = chars.length-1;
	if (chars[lastIndex] == "a" || chars[lastIndex] == "e" || chars[lastIndex] == "i" || chars[lastIndex] == "o" || chars[lastIndex] == "u" || chars[lastIndex] == "y") {
		//alert("vowell!");
		return x.slice(0, -1);
	} else {
		//no vowell found, so return the normal string
		return x;
	}
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
	text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}





var cache = {} // Make a global object to hold the cached arrays so we don't get repeats until all the options have been used

var notifications = 0;
var dms = 0;
var tweetsViewed = 0;

var statuses = [
	`So far you've spent _ on Fake Twitter and seen * bullshit Tweets.`,
	`It's been _ since you started browsing Fake Twitter, and you've seen * fake Tweets.`,
	`You've been here for _ and seen * fake Tweets.`
]

var kudos = [
	`Well done!`,
	`Rock on.`,
	`Sweet.`,
	`It's kinda therapeutic isn't it?`
]

var people = [
	{
		name: "Megan Amram",
		handle: "meganamram",
		image: "https://pbs.twimg.com/profile_images/890366092/n31883_33925212_8870_400x400.jpg",
		verified: "false",
		tweets:[
			"Today was the day Donald trump finally became president"
		]
	},
	{
		name: "Elon Musk",
		handle: "elonmusk",
		image: "https://pbs.twimg.com/profile_images/1215572708336865280/_8lVTX2z_400x400.jpg",
		verified: "true"
	},
	{
		name: "Patton Oswalt",
		handle: "pattonoswalt",
		image: "http://pbs.twimg.com/profile_images/948289341322702853/gAHQK9vY.jpg",
		verified: "true"
	},
	{
		name: "Sarah Silverman",
		handle: "SarahKSilverman",
		image: "http://pbs.twimg.com/profile_images/869453546298646528/BAgmD_Vn.jpg",
		verified: "true"
	},
	{
		name: "Piers Morgan",
		handle: "piersmorgan",
		image: "http://pbs.twimg.com/profile_images/1183782816234033152/xz1YeU-X.jpg",
		verified: "true"
	},
	{
		name: "Ted Cruz",
		handle: "tedcruz",
		image: "http://pbs.twimg.com/profile_images/727845526805188614/Becds2yE.jpg",
		verified: "true"
	},
	{
		name: "George Takei",
		handle: "GeorgeTakei",
		image: "http://pbs.twimg.com/profile_images/1150127868673966080/nwy-SGez.jpg",
		verified: "true"
	},
	{
		name: "Ron Howard",
		handle: "RealRonHoward",
		image: "http://pbs.twimg.com/profile_images/1012088938440212480/sqKBvT7y.jpg",
		verified: "true"
	},
	{
		name: "Judd Apatow",
		handle: "JuddApatow",
		image: "http://pbs.twimg.com/profile_images/2189158656/image.jpg",
		verified: "true"
	},
	{
		name: "Ilhan Omar",
		handle: "IlhanMN",
		image: "http://pbs.twimg.com/profile_images/1168345705586601987/6xDfGUfx.jpg",
		verified: "true"
	},
	{
		name: "Alexandria Ocasio-Cortez",
		handle: "AOC",
		image: "https://pbs.twimg.com/profile_images/923274881197895680/AbHcStkl_400x400.jpg",
		verified: "true"
	},
	{
		name: "Chris Sacca",
		handle: "sacca",
		image: "http://pbs.twimg.com/profile_images/1005962140421771264/hDfGcMd3.jpg",
		verified: "true"
	},
	{
		name: "Mike Monteiro",
		handle: "monteiro",
		image: "https://pbs.twimg.com/profile_images/803718083864989696/HmANkE-1_400x400.jpg",
		verified: "true"
	},
	{
		name: "Veronica Belmont",
		handle: "Veronica",
		image: "http://pbs.twimg.com/profile_images/1191404509068705797/fRIjaTnl.jpg",
		verified: "true"
	},
	{
		name: "Paul F. Tompkins",
		handle: "PFTompkins",
		image: "https://pbs.twimg.com/profile_images/1214401159135281153/fFTgnlqp_400x400.jpg",
		verified: "true"
	},
	{
		name: "Maggie Haberman",
		handle: "maggieNYT",
		image: "http://pbs.twimg.com/profile_images/1213848155210563585/cu54X160.jpg",
		verified: "true"
	},
	{
		name: "Soledad O'Brien",
		handle: "soledadobrien",
		image: "http://pbs.twimg.com/profile_images/1037341609678053376/Jd0ZJipT.jpg",
		verified: "true"
	},
	{
		name: "marc maron",
		handle: "marcmaron",
		image: "http://pbs.twimg.com/profile_images/678971145/63226917-2.jpg",
		verified: "true"
	},
	{
		name: "Mehdi Hasan",
		handle: "mehdirhasan",
		image: "http://pbs.twimg.com/profile_images/848875864917979137/C2nZtLkd.jpg",
		verified: "true"
	},
	{
		name: "Seth Abramson",
		handle: "SethAbramson",
		image: "http://pbs.twimg.com/profile_images/1188673360231833601/8lwhEkl9.jpg",
		verified: "true"
	},
	{
		name: "Rick Wilson",
		handle: "TheRickWilson",
		image: "http://pbs.twimg.com/profile_images/1212477294901702656/ACjWbt9d.jpg",
		verified: "true"
	},
	{
		name: "Anil Dash",
		handle: "anildash",
		image: "http://pbs.twimg.com/profile_images/1040592282032984071/RC8We7BG.jpg",
		verified: "true"
	},
	{
		name: "John Gruber",
		handle: "gruber",
		image: "http://pbs.twimg.com/profile_images/3065313266/7d563f0c22918aba2d6be2eaa9fb92a7.png",
		verified: "true"
	},
	{
		name: "Alexis Ohanian Sr. 🚀",
		handle: "alexisohanian",
		image: "http://pbs.twimg.com/profile_images/975128915533426688/JEGHXFiz.jpg",
		verified: "true"
	},
	{
		name: "Pomp 🌪",
		handle: "APompliano",
		image: "http://pbs.twimg.com/profile_images/901117601933348865/pPKWVpQu.jpg",
		verified: "true"
	},
	{
		name: "Jason Kottke",
		handle: "jkottke",
		image: "http://pbs.twimg.com/profile_images/1039539665446027264/ubq7kYEB.jpg",
		verified: "true"
	},
	{
		name: "christine teigen",
		handle: "chrissyteigen",
		image: "https://pbs.twimg.com/profile_images/680889019073454080/GMxn5fuf_400x400.jpg",
		verified: "true"
	}  
];


var men = [
	{
		name: "Terry Hosler",
		handle: "TerryHosler",
		image: "https://thecleverest.com/judgefakepeople/images/zJDKicZ5.jpg",
		verified: "false",
	},
	{
		name: "Allan V",
		handle: "RealAllanV",
		image: "https://thecleverest.com/judgefakepeople/images/kGm0iye5.jpg",
		verified: "false",
	},
	{
		name: "💥 Dan Alcott 💥",
		handle: "DanAlcott",
		image: "https://thecleverest.com/judgefakepeople/images/NKg7zp2k.jpg",
		verified: "false",
	},
	{
		name: "dave baratta",
		handle: "davebaratta",
		image: "https://thecleverest.com/judgefakepeople/images/qdrYuMxB.jpg",
		verified: "false",
	},
	{
		name: "Máté Petránik",
		handle: "matepert",
		image: "https://thecleverest.com/judgefakepeople/images/bumn5Z4C.jpg",
		verified: "false",
	},
	{
		name: "Ken",
		handle: "IAmKen1977",
		image: "https://thecleverest.com/judgefakepeople/images/Jlv1UZdj.jpg",
		verified: "false",
	},
	{
		name: "Chadd Klapper",
		handle: "cklapps",
		image: "https://thecleverest.com/judgefakepeople/images/VduXVbLL.jpg",
		verified: "false",
	},
	{
		name: "Don DeAngelis",
		handle: "DonDeAngelis",
		image: "https://thecleverest.com/judgefakepeople/images/omeREr28.jpg",
		verified: "false",
	},
	{
		name: "Canard LaForge",
		handle: "CanardLaForge",
		image: "https://thecleverest.com/judgefakepeople/images/Mi1HqxAp.jpg",
		verified: "false",
	},
	{
		name: "Ben",
		handle: "4ubenjamin1971",
		image: "https://thecleverest.com/judgefakepeople/images/dfiDNkLb.jpg",
		verified: "false",
	}
];

var women = [
	{
		name: "Kara Dobbins",
		handle: "kdobbs452",
		image: "https://thecleverest.com/judgefakepeople/images/0XgWXl45.jpg",
		verified: "false",
	},
	{
		name: "Ava Tudor 🐯",
		handle: "avtudes",
		image: "https://thecleverest.com/judgefakepeople/images/8aB6Vwcj.jpg",
		verified: "false",
	},
	{
		name: "Amanda Miller",
		handle: "amalls333",
		image: "https://thecleverest.com/judgefakepeople/images/QeYIgyet.jpg",
		verified: "true",
	},
	{
		name: "GlitterGeekGurl",
		handle: "GlitterGeekGurl",
		image: "https://thecleverest.com/judgefakepeople/images/bKr39MMi.jpg",
		verified: "false",
	},
	{
		name: "Carolyn Hoffner",
		handle: "CarolynHoffner",
		image: "https://pbs.twimg.com/profile_images/1149493665770770432/vgY0pzZd_400x400.jpg",
		verified: "false",
	},
	{
		name: "Bridget Coxley, Maker",
		handle: "BridgetCoxley",
		image: "https://thecleverest.com/judgefakepeople/images/6ajTity8.jpg",
		verified: "false",
	},
	{
		name: "Heather Finlay",
		handle: "HeatherFinlay",
		image: "https://thecleverest.com/judgefakepeople/images/o0RDYoLL.jpg",
		verified: "false",
	},
	{
		name: "Erika Rasmussen🇺🇸🇪🇸",
		handle: "ErikaRasmussen",
		image: "https://thecleverest.com/judgefakepeople/images/XXmkbzp1.jpg",
		verified: "false",
	},
	{
		name: "erin mccainn",
		handle: "erinmccainn",
		image: "https://thecleverest.com/judgefakepeople/images/Ehw0BfRo.jpg",
		verified: "false",
	},
	{
		name: "Kimberly Haas",
		handle: "KimberlyHaas",
		image: "https://thecleverest.com/judgefakepeople/images/Q9vS8ws3.jpg",
		verified: "false",
	},
	{
		name: "Caitlyn Salem",
		handle: "CaitlynSalem",
		image: "https://thecleverest.com/judgefakepeople/images/SzRbfaKI.jpg",
		verified: "false",
	}
];


var timestamps = [
	"1m",
	"2m",
	"3m",
	"4m",
	"5m",
	"6m",
	"7m",
	"8m",
	"9m",
	"10m",
	"1h",
	"2h",
	"3h",
	"4h",
	"5h",
	"6h",
	"7h",
	"9h",
	"9h",
	"10h",
	"11h",
	"12h"
];

var tweetPrefixes = [
	"There's no way",
	"How can any sane person believe",
	"Seriously Doubt",
	"I'm sure",
];

var tweetSuffixes = [
	"'s telling the truth...",
	" is bad for America.",
	"'s going down.",
	" is what's wrong with this country.",
	" lies!",
];

var readyMadeTweets = [
	"Sad!",
	"Get the popcorn...",
	"Told you so.",
	"I AM SHOOK",
	"Is anyone surprised?",
	"Disgusting",
	"Just beautiful",
	"Good read",
	"Paging Republicans...",
	"How do you like them apples?",
	"Paging Democrats...",
	"They're not fooling anyone",
	"Not the last we'll hear of this...",
	"Called it!",
	"Truth!",
	"Hmm.....",
	"Game over.",
	"Check. Mate.",
	"I can't even",
	"I've been tweeting about this since March",
	"libtards",
];



var weirdTwitterPeople = [
	{
		name: "deg",
		handle: "degg",
		image: "https://pbs.twimg.com/profile_images/58546628/goat22_400x400.jpg",
		verified: "false",
	},
	{
		name: "wint",
		handle: "dril",
		image: "https://pbs.twimg.com/profile_images/847818629840228354/VXyQHfn0_400x400.jpg",
		verified: "false",
	},
	{
		name: "Jacy Catlin",
		handle: "ieatanddrink",
		image: "https://pbs.twimg.com/profile_images/515143232724803584/8YTcx9jU_400x400.jpeg",
		verified: "false",
	}
];


var weirdTwitterIntros = [
	"remember: ",
	"like i always say: ",
	"hey ",
	"hey asshole ",
	"hey buddy ",
	"sir, ",
	"goddammit ",
	"bro ",
	"help "
]


var weirdTwitterNounPrefixes = [
	"fuck a",
	"this is my",
	"i'm done with your",
	"im eating a",
	"be ashamed of your",
	"you should holster your",
	"this is one spicy",
	"i just farted all over my",
	"i just ate an entire",
	"just sharted out my",
	"i just ordered a new",
	"where the hell is my",
	"has anyone seen my",
	"mind your own goddamn",
	"just invented a new",
	"get your hands off my"
]


var weirdTwitterNouns = [
	"salad",
	"taco saladd",
	"daughter",
	"nephew",
	"fun zone",
	"\"private area\"",
	"god-son",
	"dennys",
	"dodge dart",
	"6 pack",
	"bidet",
	"roomba",
]

var weirdTwitterSuffixes = [
	"buddy",
	"guy",
	"friendo",
	"- it smells awful",
	"with jesus",
	"prove me wrong",
	"come at me bro",
	"send help",
	"and thats how i met your mother"
]

// For women and mansplaining...
var topics = [
	{
		"name":"React",
		"subTopics":[
			"hooks",
			"redux",
			"react native",
			"jsx"
		]
	},
	{
		"name":"CSS",
		"subTopics":[
			"inheritance",
			"the DOM",
			"psuedo selectors",
			"css grid",
			"flexbox"
		]
	},
	{
		"name":"JavaScript",
		"subTopics":[
			"const vs let",
			"vanilla JS",
			"react",
			"Vue.js"
		]
	},
	{
		"name":"Women's Rights",
		"subTopics":[
			"reproductive law",
			"Ruth Bader Ginsberg",
			"julia steinem"
		]
	},
	{
		"name":"Architecture",
		"subTopics":[
			"Jane Jacobs",
			"Le Corbusier",
			"Frank Lloyd Wright",
			"Robert Moses"
		]
	},
	{
		"name":"UX",
		"subTopics":[
			"user interviews",
			"qualitative data analysis",
			"quantitative data analysis",
			"wireframing"
		]
	}
]

var womanTweets = [
	"Almost ready to post the video from my talk about _TOPIC",
	"Just posted my _TOPIC tutorial - check it out!",
	"About to dive into some _TOPIC reading",
	"So many misconceptions about _TOPIC out there.",
	"Where my _TOPIC peeps at!",
	"A little underwhelmed by the discourse around _TOPIC on Twitter..."
]

var mansplaining = [
	"I don't think you really understand _TOPIC. You should look into _SUBTOPIC.",
	"Sorry. Any real _TOPIC expert knows you need to also consider _SUBTOPIC.",
	"Hmm. Why no mention of _SUBTOPIC?",
	"Thanks for sharing. But you do realize that you don't sound like a real _TOPIC expert right? You totally left out any mention of _SUBTOPIC.",
	"If you ever want to learn more about _TOPIC I'm happy to teach you a thing or two about _SUBTOPIC",
	"You'll find _TOPIC to be a rich and rewarding area of expertise, m'lady. I'm quite a _SUBTOPIC expert myself.",
	"Wrong. _SUBTOPIC is a key part of _TOPIC, yet you make no mention of that. Hmm...",
	"do you even know about _SUBTOPIC? _TOPIC expert my ass..."
]



var trumpRetweets = [
	{
		name: "Frank the Dentist🇺🇸",
		handle: "OKCuspid",
		image: "images/dentist.jpg",
		verified: "false",
		tweets:[
			"Press-a-dental harassment! ;-P",
			"Down with the Molar Investigation! ;-p",
			"The American People need to hear The Tooth!",
			`When it comes to the courts, I approve of Our President's "Fillings"`,
			`Our country's been less painfull since it received a big injection of NoMcCain!`
		]
	}
]

var trump = [
	{
		name: "Donald J. Trump",
		handle: "realDonaldTrump",
		image: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg",
		verified: "true"
	}
]


var magaReplyPeople = [
	{
		name: "🇺🇸Nationalist Sal🇺🇸",
		handle: "sal4g66h8",
		image: "https://pbs.twimg.com/profile_images/998544130610380800/tzKWwdTB_400x400.jpg",
		verified: "false",
	},
	{
		name: "Tony Samuels",
		handle: "tam411abc",
		image: "https://pbs.twimg.com/profile_images/1155183183958351873/8F8b4GKn_400x400.jpg",
		verified: "false",
	},
	{
		name: "Rick MAGA 2020🇺🇸",
		handle: "RickLovesCars76543",
		image: "https://pbs.twimg.com/profile_images/1188917407584280579/XUNxKMuC_400x400.jpg",
		verified: "false",
	}

]

var magaReplies = [
	"Nice one, libtard!",
	"Boo hoo loser 😢",
	"librals! 😂",
	"BUTTHURT",
	"ya don't say 😹",
	"I bet your a homosexual"
]


var randomTweetIntros = [
	"Lately I've been thinking a lot about",
	"A big topic that's been on my mind lately is",
	"Clearly I'm passionate about",
	"Just finished an interesting book about",
	"Just heard a podcast about",
	"Really thinking deeply about",
	"Can't stop thinking about",
	"Read an interesting article about"
]

var randomTweetTopics = [
	"user centered design",
	"urban policy",
	"homelessness",
	"the housing shortage",
	"planned parenthood funding",
	"gun buybacks",
	"the death penalty",
	"transgender athletes",
	"the first amendment",
	"diversity in the workplace"
]

var randomTweetRealized = [
	"and I realized:",
	"and it occured to me:",
	"and I just realized:",
	"and I'm pretty sure",
	"and I see hope in the fact that",
	"and I'm encouraged that'"
]

var randomTweetNeed = [
	"we need",
	"we should be supporting",
	"we'd be better off with",
	"I'm noticing",
	"we're seeing",
	"there's an upward trend in"
]

var randomTweetMoreOf = [
	"more idea sharing",
	"increased communication between tribes",
	"better-equipped educators",
	"connunication at the state level",
	"concrete policies"
]

var randomTweetLessOf = [
	"and less bickering.",
	"and not burying our heads in the sand.",
	"and it's a little encouraging.",
	"but the whole situation's complex.",
	"and I'm not sure about the solution.",
	"and it raises some questions."
]


var sources = [
	{
		name: "The New York Times",
		side: "left",
		url: "nyti.ms",
		handle: "nytimes",
		verified: "true",
		domain: "newyorktimes.com",
		image: "https://pbs.twimg.com/profile_images/1098244578472280064/gjkVMelR_400x400.png",
	},
	{
		name: "Washington Post",
		side: "left",
		handle: "washingtonpost",
		url: "wapo.st",
		verified: "true",
		domain: "washingtonpost.com",
		image: "https://pbs.twimg.com/profile_images/875440182501277696/n-Ic9nBO_bigger.jpg",
	},
	{
		name: "CNN Breaking News",
		side: "left",
		handle: "cnnbrk",
		url: "cnn.it",
		verified: "true",
		domain: "cnn.com",
		image: "https://pbs.twimg.com/profile_images/925092227667304448/fAY1HUu3_bigger.jpg",
	},
	{
		name: "Fox News",
		side: "right",
		handle: "FoxNews",
		url: "fxn.ws",
		verified: "true",
		domain: "foxnews.com",
		image: "https://pbs.twimg.com/profile_images/918480715158716419/4X8oCbge_bigger.jpg",
	},
	{
		name: "Breitbart News",
		side: "right",
		handle: "BreitbartNews",
		url: "brietbart.com",
		verified: "true",
		domain: "brietbart.com",
		image: "https://pbs.twimg.com/profile_images/949270171755077632/dw3M-58z_400x400.jpg",
	},
];

var nounPrefixes = [
	"Former ",
	"Unnamed ",
	"Top ",
	"Key ",
	"Potential "
];


var nouns = [
	{
		name: "Roger Stone",
		side: "right",
		images: [
				"http://gephardtdaily.com/wp-content/uploads/2017/09/Trump-ally-Roger-Stone-to-House-panel-No-Russian-collusion.jpg",
				"https://cloudfront.mediamatters.org/static/uploader/image/2016/06/03/gcn-20160603-rogerstone.jpg",
				"https://media.salon.com/2017/04/COVER_PHOTO-rogerstone1.jpg",
				"https://ichef.bbci.co.uk/news/660/cpsprodpb/12FFE/production/_98522877_mediaitem98522876.jpg",
				"https://stonecoldtruth.com/wp-content/uploads/2017/09/Get-Me-Roger-Stone.jpg",
				"https://pixel.nymag.com/imgs/daily/intelligencer/2017/03/11/11-roger-stone.w1200.h630.jpg",
				"https://img.huffingtonpost.com/asset/58bba6b01a00001e00f41a41.jpeg?cache=uixhghgj2h&ops=scalefit_720_noupscale"
		]
	},
	{
		name: "Fox News",
		side: "right",
		images: [
				"http://assets.nydailynews.com/polopoly_fs/1.190738.1314065548!/img/httpImage/image.jpg_gen/derivatives/article_750/alg-fox-jpg.jpg",
				"https://i.ytimg.com/vi/K1t1qoz7avI/hqdefault.jpg",
				"http://www.adweek.com/tvnewser/wp-content/uploads/sites/3/2016/11/StudioF_FI-862x578.jpg",
				"https://media.newyorker.com/photos/595426998079c37f88cd4ddb/master/w_727,c_limit/Remy-Fox-News-9-1-1.jpg",
				"https://pixel.nymag.com/imgs/fashion/daily/2017/03/29/29-fox-news.w600.h315.2x.jpg",
				"http://i2.cdn.turner.com/money/dam/assets/170806075531-eric-bolling-fox-news-1024x576.jpg",
				"http://www.adweek.com/tvnewser/wp-content/uploads/sites/3/2016/11/StudioF_FI.jpg",
		]
	},
	{
		name: "CNN",
		side: "left",
		images: [
				"http://cdn.cnn.com/cnnnext/dam/assets/130930181251-sn-1001-00005029-story-top.jpg",
				"https://am12.akamaized.net/med/cnt/uploads/2014/04/Screen-Shot-2014-04-07-at-11.36.02-AM.png",
				"http://www.newscaststudio.com/wp-content/uploads/2008/12/cnn.jpg",
				"https://randomwire.com/wp-content/uploads/cnn-center-newsroom.jpeg",
				"http://thehiresolution.net/wp-content/uploads/2017/06/CNN.jpg",
				"http://ak3.picdn.net/shutterstock/videos/12950903/thumb/1.jpg",
				"http://chictraveler.com/wp-content/uploads/2012/06/CNN-Center.png",
				"http://www.city-data.com/articles/images/img10379722.jpg",
		]
	},
	{
		name: "Vladimir Putin",
		side: "right",
		images: [
				"https://i.cbc.ca/1.4364401.1508520627!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/russia-putin.jpg",
				"http://a.abcnews.com/images/International/GTY-putin-ml-170601_12x5_992.jpg",
				"https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000339964154.jpg?strip=all&w=960",
				"https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2014/07/25/19/Putin-2.jpg",
				"https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2014/07/25/18/Putin.jpg",
				"http://blogs.reuters.com/great-debate/files/2015/12/RTX1Z33F-606x416.jpg",
				"http://assets.nydailynews.com/polopoly_fs/1.2873047.1479161413!/img/httpImage/image.jpg_gen/derivatives/article_750/putin15n-1-web.jpg",
				"https://cdn3.img.sputniknews.com/images/105007/63/1050076334.jpg"
		]
	},
	{
		name: "Russia",
		side: "right",
		images: [
				"http://www.asatours.com.au/app/uploads/2014/11/Feature-Night-at-the-Kremlin.jpg",
				"http://www.hotelturist.com/sites/turist/files/styles/964x518/public/the-kremlin.jpg?itok=PqYJT9Yx&timestamp=1463497193",
				"https://www.askideas.com/media/43/The-Kremlin-Looks-Amazing-With-Night-Lights.jpg"
		]
	},
	{
		name: "Clinton",
		side: "left",
		images: [
				"https://cbsnews2.cbsistatic.com/hub/i/r/2017/09/10/2e5cd302-d93e-4c7b-ad05-8f785a8bce42/thumbnail/1200x630/358b69d1e55ab8e86397ebffad959311/0910-sunmo-hillaryclinton-berniesanders-1393710-640x360.jpg",
				"https://thehill.com/sites/default/files/styles/article_full/public/clintonhillary_091719gn8_lead.jpg",
				"https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/11/13/61822268-05a5-11ea-a68f-66ebddf9f136_image_hires_074313.jpg"
		]
	},
	{
		name: "Giuliani",
		side: "right",
		images: [
				"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191206103741-01-rudy-giuliani-file-2018.jpg",
				"https://media.vanityfair.com/photos/5e0630c67ffbe90009885da5/16:9/w_1983,h_1115,c_limit/giuliani-tabloid-year-2019.png",
				"https://i.insider.com/5d9dc7fa3b33a7721f4198d6?width=1100&format=jpeg&auto=webp",
				"https://www.rawstory.com/wp-content/uploads/2019/10/rudy-bug-eyes-3-2.jpg",
		]
	},
	{
		name: "Facebook",
		side: "left",
		images: [
				"https://cbsnews2.cbsistatic.com/hub/i/r/2014/03/10/719ecd8a-add9-449b-8c3f-431b5e316142/thumbnail/1200x630/23f7b2ef470a591911349263add57155/mark-zuckerberg-facebook-home-1067-1-610x407.jpg",
				"https://tecake.in/wp-content/uploads/2016/06/Facebook-hires-google-ex-executive.jpg",
				"http://cdn.images.express.co.uk/img/dynamic/78/750x445/768524.jpg",
				"http://static3.businessinsider.com/image/587ff399f10a9a1d008b8f39-480/mark-zuckerberg.jpg",
				"http://static.dnaindia.com/sites/default/files/styles/half/public/2016/04/14/449423-mark-zuckerberg-facebook-f8-developers-conference-facebook.jpg?itok=IVet8HeW",
				"https://www.techworm.net/wp-content/uploads/2017/02/facebookmarl.jpg",
				"https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/07/12/14/facebook.jpg",
				"https://i2-prod.mirror.co.uk/incoming/article8027953.ece/ALTERNATES/s615b/A-smartphone-user-shows-the-Facebook-application.jpg",
				"https://tctechcrunch2011.files.wordpress.com/2016/06/shutterstock_186292982a.jpg?w=738",
				"https://cnet2.cbsistatic.com/img/7eERFrn8nnIJsVaS7i48eMGnjOQ=/fit-in/570x0/2016/12/14/7dd9617e-e896-49e1-af90-93ab95bb156e/facebook-f8-zuckerberg-bots-cropped2.jpg",
				"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/11/07/102165565-facebook.530x298.jpg?v=1454607902",
				"http://i.telegraph.co.uk/multimedia/archive/02232/facebook-front_179_2232542b.jpg",
		]
	},
	{
		name: "Twitter",
		side: "left",
		images: [
				"https://ecelebrityfacts.com/images/1882/jack-dorsey-1882-8088-1478845805.png",
				"https://media.vanityfair.com/photos/55e60bb7669d2a14709fc0cd/master/w_768,c_limit/18-disrupters-jack-dorsey-new-establishment.jpg",
				"https://media.wired.com/photos/5941eb09b73524134089218f/master/pass/1WW2jWBfi2phOSiz8lZBm4g-1.jpeg",
				"http://thetechnews.com/wp-content/uploads/2016/02/960-twitter-inc-to-name-jack-dorsey-as-ceo-tomorrow.jpg",
				"https://assets.entrepreneur.com/content/3x2/1300/twitter-jack-dorsey-entrepreneurs.jpg?width=750&crop=16:9",
				"https://tctechcrunch2011.files.wordpress.com/2017/05/gettyimages-471561053.jpg?w=738",
				"https://tctechcrunch2011.files.wordpress.com/2017/05/gettyimages-502130278.jpg?w=738",
				"https://blog.twitter.com/content/dam/blog-twitter/official/Shareassets/Generic_BlogShare.jpg",
				"https://i.ndtvimg.com/i/2016-04/twitter-logo_650x400_41460921607.jpg",
				"https://cdn.geekwire.com/wp-content/uploads/2015/04/twitter-620x369.png",
		]
	},
	{
		name: "Federal Judge",
		side: "left",
		images: [
				"https://www.goodnewsnetwork.org/wp-content/uploads/2016/02/Diane-Humetewa-cc-Activedia-and-PD-US-Govt.jpg",
				"http://www.staradvertiser.com/wp-content/uploads/2017/03/web1_AP17074684460445.jpg",
				"https://cdn2.newsok.biz/cache/w640-ccb9189539a3c3b31b672cd4262d7bd0.jpg",
				"http://media.oregonlive.com/politics_impact/photo/hernandezjpg-7bf818dddd891878.jpg",
				"https://bdn-data.s3.amazonaws.com/uploads/2014/04/10021541_H10514279-600x400.jpg",
				"http://yourdailymagazine.com/wp-content/uploads/2017/03/Federal-Judge.jpg",
				"http://cdn0.thetruthaboutguns.com/wp-content/uploads/2013/12/Judge-William-Skretny-courtesy-buffalonews.com_.jpg",
				"http://www.toledoblade.com/image/2006/07/01/600x600/Perrysburg-court-may-violate-law-federal-judge-says.jpg",
		]
	},
	{
		name: "Robert Mueller",
		side: "left",
		images: [
				"http://a.abcnews.com/images/Politics/AP-Mueller-02-jrl-170517_1_16x9_992.jpg",
				"https://heavyeditorial.files.wordpress.com/2017/05/gettyimages-95894424.jpg?quality=65&strip=all&w=780",
				"http://cdn.cnn.com/cnnnext/dam/assets/170517175257-03-robert-mueller-file-exlarge-169.jpg",
				"https://static.politico.com/dims4/default/e33dc80/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fe3%2F35%2F7691f84c43a681492810d0c26e50%2Flede-170517-robert-mueller-4-ap-1160.jpg",
				"https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2017/05/18/BostonGlobe.com/EditorialOpinion/Images/27f254b8c50e4132a495cd74ff2a07cb-27f254b8c50e4132a495cd74ff2a07cb-0.jpg",
				"https://cdn.images2.rollcall.com/image/27cf5635a9671932facf9eaaf28bb860456d2c0d8fa9d892971ca7752284a2a3f694222a45edf4131ed6bf50844a038a/author/2017/05/mueller-074-031213.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/170803185423-robert-mueller-exlarge-169.jpg",
				"https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/24/BostonGlobe.com/Sports/Images/947204b13a4545b99cf09740fb8830cb-947204b13a4545b99cf09740fb8830cb-0.jpg",
				"https://img.washingtonpost.com/rf/image_480w/2010-2019/WashingtonPost/2017/10/31/National-Politics/Images/Rex_First_charges_have_been_filed_in_9177886A.jpg?uuid=rs6XUr54EeeVnP4rWY2MAA"
		]
	},
	{
		name: "Trump",
		side: "right",
		images: [
				"http://assets.nydailynews.com/polopoly_fs/1.2712678.1468578209!/img/httpImage/image.jpg_gen/derivatives/article_750/gop-2016-trump.jpg",
				"https://media.newyorker.com/photos/59b4527a02eca224c31262f6/4:3/w_960,c_limit/cohan-trump-irrelevant-to-ceos.jpg",
				"https://media.newyorker.com/photos/59961dd8666a6a0ae0221e57/master/w_727,c_limit/Cassidy_Trump-Crisis-of-Legitimacy.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/170510122555-donald-trump-05010-exlarge-169.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/170301141317-donald-trump-0228-super-169.jpg",
				"http://i2.cdn.turner.com/money/dam/assets/170702102706-donald-trump-1024x576.jpg",
				"https://media2.s-nbcnews.com/j/msnbc/components/video/201708/tdy_news_jackson_trump_170816.nbcnews-ux-1080-600.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/170819133504-04-donald-trump-0818-exlarge-169.jpg",
				"https://peopledotcom.files.wordpress.com/2017/08/donald-trump-poll.jpg?crop=2px%2C0px%2C3236px%2C2160.2967032967px&resize=728%2C486",
				"https://cdn.theatlantic.com/assets/media/img/mt/2017/01/RTX2Y6XS/lead_960.jpg?1484111148"
		]
	},
	{
		name: "Steve Bannon",
		side: "right",
		images: [
				"http://assets.nydailynews.com/polopoly_fs/1.2770655.1472517569!/img/httpImage/image.jpg_gen/derivatives/article_750/usa-election-trump.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/170818132636-15-steve-bannon-lead-image-exlarge-169.jpg",
				"https://cbsnews3.cbsistatic.com/hub/i/r/2017/09/07/8c53592d-99c3-4da7-b1a5-e0484ad0987b/resize/770x/e54b163deeb705052d389b1d4caacf48/steve-bannon-60-minutes-charlie-rose-interview.jpg",
				"http://i2.cdn.turner.com/money/dam/assets/160817172050-steve-bannon-1024x576.jpg",
				"https://cbsnews2.cbsistatic.com/hub/i/r/2016/08/18/4aefaa8c-88b6-4389-af73-5cb17f3b713e/thumbnail/1200x630/cbffdb524bb177d3e4e5465f86431e4d/politics-bannontrump2-0817-1108582-640x360.jpg",
				"http://assets.nydailynews.com/polopoly_fs/1.3417960.1502929765!/img/httpImage/image.jpg_gen/derivatives/article_750/usa-gorsuch-supreme-court.jpg",
				"https://images.dailykos.com/images/329010/story_image/steve-bannon.jpg?1479426748",
				"https://cdn1.i-scmp.com/sites/default/files/styles/980x551/public/images/methode/2017/09/13/17f66cbc-982e-11e7-a089-5a7a21c623ca_1280x720_111104.JPG?itok=YVw5f3kU"
		]
	},
	{
		name: "Jeff Sessions",
		side: "right",
		images: [
				"https://pixel.nymag.com/imgs/daily/intelligencer/2017/07/24/24-jeff-sessions.w710.h473.jpg",
				"http://a.abcnews.com/images/Politics/jeff-sessions-intelligence-briefing-ap-jef-170804_12x5_992.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/160506125037-01-jeff-sessions-exlarge-169.jpg",
				"https://cbsnews2.cbsistatic.com/hub/i/r/2017/03/02/52d59a34-1ae5-40df-9609-ea0d1af18312/thumbnail/1200x630/8d8fc45fd709fa2c300341b4ef8b058b/cbsn-jeff-sessions-full-speech-1261827-640x360.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/161107103416-jeff-sessions-1026-super-tease.jpg",
				"http://cdn.cnsnews.com/c_scalefl_progressiveq_80w_800.jpg"
		]
	},
	{
		name: "Jared Kushner",
		side: "right",
		images: [
				"http://cdn.cnn.com/cnnnext/dam/assets/170724134050-jared-kushner-white-house-02-exlarge-169.jpg",
				"http://assets.nydailynews.com/polopoly_fs/1.3016989.1491186077!/img/httpImage/image.jpg_gen/derivatives/article_750/kushner3n-1-web.jpg",
				"http://s.newsweek.com/sites/www.newsweek.com/files/styles/lg/public/2017/05/27/rtx37td7.jpg",
				"http://media.npr.org/assets/img/2017/07/24/gettyimages-821606984-d9796f08770e5a8e220287780462b656711cb75a-s900-c85.jpg",
				"https://pixel.nymag.com/imgs/daily/intelligencer/2017/07/13/14-kushner.w710.h473.jpg",
				"https://ichef.bbci.co.uk/images/ic/720x405/p04y7kw4.jpg",
				"http://static3.businessinsider.com/image/598e182ff1a8501c008b45b3-480/jared-kushner.jpg",
				"https://s3.reutersmedia.net/resources/r/?m=02&d=20170527&t=2&i=1186474451&r=LYNXMPED4Q02O&w=940",
				"https://img.huffingtonpost.com/asset/590cfd4d1400005509f8b84d.jpeg?ops=crop_0_411_2662_1909,scalefit_720_noupscale",
		]
	},
	{
		name: "James Comey",
		side: "left",
		images: [
				"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/06/07/104516194-GettyImages-655642372-james-comey.600x400.jpg?v=1496862663",
				"http://img.wennermedia.com/social/rs-james-comey-09fdba60-06dd-4c82-b94f-077f737b8858.jpg",
				"https://static.politico.com/04/96/0c6017fe412e83a129ebd9be7684/170608-james-comey-1-ap-1160.jpg",	
				"http://assets.nydailynews.com/polopoly_fs/1.3231516.1496941775!/img/httpImage/image.jpg_gen/derivatives/article_750/comey.jpg",
				"https://static.politico.com/22/ea/08c08a78452c99a1b31ddba155f0/james-comey-gty.jpg",
				"http://media.breitbart.com/media/2016/09/james-comey-smug-getty-640x480.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/170512125536-james-comey-super-tease.jpg",
				"http://cdn.cnn.com/cnnnext/dam/assets/170309164007-james-comey-0209-super-tease.jpg"
		]
	},
	{
		name: "Manafort",
		side: "right",
		images: [
				"http://static4.businessinsider.com/image/5817d04fb28a6471188b5552-480/paul-manafort.jpg",
				"https://static01.nyt.com/images/2017/10/31/us/31dc-annotate/31dc-annotate-master768.jpg",
				"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/07/25/104607546-GettyImages-522510556.600x400.jpg?v=1500990852",
				"http://a.abcnews.com/images/Lifestyle/GTY-paul-manafort-01-as-170321_16x9_992.jpg",
				"https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/10/28/13/paulmanfort-indictment.jpg",
				"https://static.politico.com/74/c2/a8323f414344aeda9520df444946/160817-paul-manafort-gty-1160.jpg",
				"https://cdn.theatlantic.com/assets/media/img/mt/2017/10/AP_16228791801194/lead_960.jpg?1509366614",
				"https://www.gannett-cdn.com/-mm-/9f2c77c49ee5c8c5597ec74afecf329ec1d3fc20/r=540/https/media.gannett-cdn.com/29906170001/29906170001_5557605419001_5557604704001-vs.jpg",
		]
	},
	{
		name: "Nancy Pelosi",
		side: "left",
		images: [
				"https://www.theamericanconservative.com/wp-content/uploads/2019/07/ilhan-pelosi.jpg",
				"https://static01.nyt.com/images/2019/12/18/fashion/18PELOSI-PIN/merlin_166147596_ba835a5c-0ff7-4f84-93f9-f685632378bb-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
				"https://compote.slate.com/images/5aae1ee2-0181-4aad-97f4-90cf50e3d0cb.jpeg?width=780&height=520&rect=1560x1040&offset=0x0",
				"https://i.insider.com/5dfb50c9855cc227851e1023?width=1100&format=jpeg&auto=webp",
				"https://twt-thumbs.washtimes.com/media/image/2019/11/14/trump_impeachment_15198_c0-246-4565-2907_s885x516.jpg?202bcbff1a849898aff03323af78e79b76f1c8cf"
		]
	},
	{
		name: "Democrat",
		side: "left",
		images: [
				"https://www.usnews.com/dims4/USNEWS/e2436a5/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F36%2Fe3%2Fef747c9d41af817036ab88c05cd4%2F200122newshearing-editorial.jpg",
				"https://storage.googleapis.com/afs-prod/media/9d453ed24e7345e0993b065f8fbf96e9/800.jpeg",
				"https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2020/1/20/871e3ee3f3264ea69de7463144b82645_18.jpg",
				"https://compote.slate.com/images/465999d2-0ebd-4e24-a9f4-04dd1f645706.jpeg?width=780&height=520&rect=1560x1040&offset=0x0"
		]
	},
	{
		name: "Republican",
		side: "right",
		images: [
				"https://cdn.theatlantic.com/assets/media/img/mt/2020/01/AP_19309037906712/lead_720_405.jpg?mod=1578115883",
				"https://compote.slate.com/images/d21c3148-adb8-4566-b492-7588e3c9d95f.jpeg?width=780&height=520&rect=1560x1040&offset=0x0",
				"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/repubs-1576000792.jpg?resize=480:*"
		]
	},
	{
		name: "Joe Biden",
		side: "left",
		images: [
				"https://s.abcnews.com/images/Politics/190806_vod_biden_bio_hpMain_16x9_992.jpg",
				"https://www.motherjones.com/wp-content/uploads/2020/01/joe-biden-finger-wagging-12420.jpg?w=990",
				"https://www.gannett-cdn.com/presto/2019/12/05/USAT/d2725db9-8d49-4939-af3f-c78893b7ee8b-01_GTY_1189051042.JPG?width=2560",
				"https://ca-times.brightspotcdn.com/dims4/default/df81f4b/2147483647/strip/true/crop/3573x2010+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd3%2Faf%2Fce9c09f7db473406cc36c72dfd2c%2Fe2ac2d10611b4039b0842f4a25821b1c"
		]
	},
	{
		name: "Elizabeth Warren",
		side: "left",
		images: [
				"https://thefederalist.com/wp-content/uploads/2020/01/Elizabeth-Warren-2-998x665.jpg",
				"https://cdn.cnn.com/cnnnext/dam/assets/191015222755-warren-2-opinion-large-169.jpg",
				"https://www.thenation.com/wp-content/uploads/2019/04/elizabeth-warren-we-the-people-ap-img.jpg",
				"https://cdn.theatlantic.com/assets/media/img/mt/2020/01/GettyImages_1193800131/lead_720_405.jpg"
		]
	},
	{
		name: "Bernie Sanders",
		side: "left",
		images: [
				"https://i.insider.com/5d824cdd2e22af6cae047fc3?width=1100&format=jpeg&auto=webp",
				"https://cdn.cnn.com/cnnnext/dam/assets/191230112940-05-bernie-sanders-lead-image-large-169.jpg",
				"https://static01.nyt.com/images/2019/10/04/us/politics/04sandershospital-HFO/merlin_161984808_8232575c-9777-4762-a279-4be5ec27a9b6-articleLarge.jpg"
		]
	}
];


var nounSuffixes = [
	"Aide",
	"Lawyer",
	"Advisor",
	"Witness"
];

var verbs = [
	{
		text: " Indicted",
		score: 10,
		sentiment: "bad"
	},
	{
		text: " Cleared of Wrongdoing",
		score: 10,
		sentiment: "good"
	},
	{
		text: " Feels Vindicated",
		score: 8,
		sentiment: "good"
	},
	{
		text: " Furious",
		score: 5,
		sentiment: "bad"
	},
	{
		text: " Lied",
		score: 8,
		sentiment: "bad"
	},
	{
		text: " Reportedly \"Apopleptic\"",
		score: 3,
		sentiment: "bad"
	},
	{
		text: "'s Twitter Account Suspended",
		score: 5,
		sentiment: "bad"
	},
	{
		text: " Accused of Witness Tampering",
		score: 3,
		sentiment: "bad"
	},
	{
		text: " Denies Any Wrongdoing",
		score: 3,
		sentiment: "bad"
	},
	{
		text: " Raises Doubts",
		score: 2,
		sentiment: "good"
	},
	{
		text: " Obstructed",
		score: 2,
		sentiment: "bad"
	},
	{
		text: " Raises Questions",
		score: 2,
		sentiment: "good"
	},
	{
		text: " Humiliated",
		score: 7,
		sentiment: "bad"
	},
	{
		text: " Moves On",
		score: 6,
		sentiment: "good"
	},
	{
		text: " Apologizes",
		score: 7,
		sentiment: "bad"
	},
	{
		text: " Gives Testimoney",
		score: 2,
		sentiment: "bad"
	},
	{
		text: " Secretly Traveled to Russia",
		score: 8,
		sentiment: "bad"
	},
	{
		text: "'s Email Hacked",
		score: 6,
		sentiment: "bad"
	},
	{
		text: " Destroyed Servers",
		score: 3,
		sentiment: "bad"
	},
	{
		text: " Unleashes Tweetstorm",
		score: 3,
		sentiment: "bad"
	},
	{
		text: " Defiant",
		score: 5,
		sentiment: "bad"
	},
	{
		text: " Hints at Russia Connection",
		score: 4,
		sentiment: "bad"
	},
	{
		text: " Strongly Condemned by Both Parties",
		score: 7,
		sentiment: "bad"
	},
	{
		text: " Buckles",
		score: 5,
		sentiment: "bad"
	},
	{
		text: " Goes on the Defensive",
		score: 2,
		sentiment: "bad"
	},
	{
		text: " Tries a New Strategy",
		score: 2,
		sentiment: "good"
	},
	{
		text: " Hinders Investigators",
		score: 3,
		sentiment: "bad"
	},
	{
		text: " Claims Ignorance",
		score: 3,
		sentiment: "bad"
	},
	{
		text: " Allegedly Withheld Evidence",
		score: 5,
		sentiment: "bad"
	},
	{
		text: " Held Undisclosed Meetings",
		score: 7,
		sentiment: "bad"
	},
	{
		text: " Remained Silent",
		score: 5,
		sentiment: "bad"
	},
	{
		text: " Under Increasing Suspicion",
		score: 6,
		sentiment: "bad"
	},
	{
		text: " Under Scrutiny",
		score: 4,
		sentiment: "bad"
	},
	{
		text: " Undermines Impeachment Effort",
		score: 4,
		sentiment: "bad"
	},
	{
		text: " a \"Threat to Democracy\"",
		score: 4,
		sentiment: "bad"
	},
	{
		text: " Hints at \"Deep State\" Conspiracy",
		score: 4,
		sentiment: "bad"
	}
];

var details = [
	" as _ Audio Recordings Emerge",
	" Following Latest _ Allegations",
	" as New Evidence Emerges in Senate Investigation",
	" on at Least 3 Separate Occasions",
	" After Testifying",
	", Leaked Emails Show",
	" Amidst Growing Scrutiny",
	" in New Documents Leaked to _",
	" While Trying to Leave the Country",
	", Casting Doubt on _",
	", in Major Blow to _",
	" as Evidence Mounts Against _",
	" as Early as 2015",
	", in Shocking New Allegations",
	" Despite Repeated Pleas From _"
];